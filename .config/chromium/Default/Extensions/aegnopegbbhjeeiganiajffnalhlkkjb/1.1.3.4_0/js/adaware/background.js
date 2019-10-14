

(function () {

    // var webtorrentHealth = window.webtorrentHealth;
    var parseTorrent = window.parseTorrent;

    var extensionURL = BrowserEnvironmentData().BrowserFamily == "Firefox" ? "moz-extension://" + (chrome.runtime.id).replace(/[{()}]/g, '') : "chrome-extension://" + chrome.runtime.id;

    var fromSearchEngine = "";
    var searchList = {};
    var filterList = [];
    var countMagnets = 0;
    var openPopup = false;
    var fromPopUI = false;
    var currentUrl = "";
    var currentTabHostName = "";
    var resultorNoResult = false;
    var fromSearchEngine = false;
    var blacklists = ["td", "chase", "jpmorgan", "bankofamerica", "wellsfargo", "citigroup", "goldmansachs", "morganstanley", "rbc", "cibc", "desjardins"];
    var iconPaths = [
        {
            '19': 'img/browsericons/icon19-off.png',
            '38': 'img/browsericons/icon38-off.png'
        },
        {
            '19': 'img/browsericons/icon19.png',
            '38': 'img/browsericons/icon38.png'
        }
    ];

    var firstrun = false;
    chrome.storage.local.get({ 'firstRun': true }, function (fetched) {
        if (fetched.firstRun === true) {
            firstrun = true;
        } else {
            firstrun = false;
        }
    });

    var getHostName = function (url) {
        var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
            return match[2];
        }
        else {
            return null;
        }
    }

    var getMagnetParamHash = function (url) {
        var magnetxt = getParameterByName("xt", url);
        magnetxt = magnetxt.split(":");
        magnetxt = magnetxt[magnetxt.length - 1];

        return magnetxt;
    }

    var getParamByNameFromMagnetLink = function (name, queryString) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(queryString);
        return results === null ? queryString : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    var domainFromUrl = function (url) {
        var result;
        var match;
        if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
            result = match[1];
            if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
                result = match[1];
            }
        }
        return result.split('.')[0];
    }

    var mergeMagnetToUrl = function (magnets, tagNames, urls, infoHashList,infoHashTrackers) {
        var r = {};
        r = urls.map(function (x, i) {
            return {"url": x, "magnets": magnets[i], "names": tagNames[i], "infoHashStatus": infoHashList[i], "infoHashTrackers": infoHashTrackers[i]};
        });
        return r;
    }

    var validURL = function (str) {
        var pattern = new RegExp(/^https?:\/\//i);
        if(!pattern.test(str)) {
            return false;
        } else {
            return true;
        }
    }

    var getDomainName = function (url) {
        var m = url.toString().match(/^https?:\/\/[^/]+/);
        return m ? m[0] : null;
    }

    var getParameterByName = function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var checkUrlState = function (url) {
        var urlState = null;
        if (blacklists.indexOf(domainFromUrl((url).toString())) < 0) {
            var xhr = new XMLHttpRequest();
            try {
                xhr.open("GET", url, true);
                xhr.timeout = 5000;
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        urlState = xhr.status;
                    } else {
                        urlState = null;
                    }
                }
                xhr.ontimeout = function () {
                    
                }
                xhr.send();
            } catch (e) {
                
                onErrorReceived.call(xhr);
            }
        }
        return urlState;
    }

    var getTorrentInfoHash = function (torrentUrl) {
        return new Promise(function (resolve, reject) {
            parseTorrent.remote(torrentUrl, function (err, parsedTorrent) {
                if (err) {
                    reject("");
                } else {
                    resolve({infoHash: parsedTorrent.infoHash, url: torrentUrl, name: parsedTorrent.name, files: parsedTorrent.files, announce: parsedTorrent.announce});
                }
            });
        });
    }

    var getMagnetInfoHash = function (magnetUrl) {
        return new Promise(function (resolve, reject) {
            resolve(parseTorrent(magnetUrl));
        });
    }

    var findInfoHashFromUrl = function (url) {
        var arrayMagnets = [];
        var arrayTagNames = [];
        var torrentLists = [];
        var infoHashTrackers = [];
        if (blacklists.indexOf(domainFromUrl((url).toString())) < 0) {
            var xhr = new XMLHttpRequest();
            try {
                xhr.open("GET", url, true);
                xhr.timeout = 10000;
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status === 200) {
                            var countMagnets = 0;
                            var countTorrents = 0;
                            var resp = xhr.responseText;
                            var parser = new DOMParser();
                            var xmlDoc = parser.parseFromString(resp, "text/html");
                            var links = xmlDoc.getElementsByTagName("a");
                            var torrentFileLink = "";
                            for (var i = 0; i < links.length; i++) {
                                if (links[i].href.match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i) !== null) {
                                    if (countMagnets === 10) { break; }
                                    arrayMagnets.push(links[i].href);
                                    arrayTagNames.push(links[i].href);

                                    getMagnetInfoHash(links[i].href).then(function (result) {
                                        // 
                                        torrentLists.push({ "magnetHash" : result.infoHash });
                                        infoHashTrackers.push({"infoHash": result.infoHash, "trackers": result.announce});
                                    });

                                    countMagnets++;
                                }
                                if (links[i].href.match(/\.(torrent)$/) !== null) {
                                    var torrentName = (links[i].innerHTML).replace(/<[^>]*>/g, '').trim();
                                    if (torrentName == "") {
                                        torrentName = links[i].href;
                                    }
                                    if (countTorrents === 10) { break; }
                                    if (validURL(links[i]) === true) {
                                        torrentFileLink = links[i].href;
                                    } else {
                                        torrentFileLink = getDomainName(url) + (links[i].href).replace(extensionURL, "");
                                    }

                                    arrayMagnets.push(torrentFileLink);
                                    
                                    getTorrentInfoHash(torrentFileLink).then(function (result) {
                                        // 
                                        torrentLists.push({ "magnetHash" : result.infoHash });
                                        infoHashTrackers.push({"infoHash": result.infoHash, "trackers": result.announce});
                                        arrayTagNames.push(result.name);
                                    });
                                    countTorrents++;
                                }
                            }

                        } 
                    }
                }
                xhr.ontimeout = function () {
                    
                }
                xhr.send();
            } catch (e) {
                
                onErrorReceived.call(xhr);
            }
        }

        return { arrayMagnets, arrayTagNames, torrentLists, infoHashTrackers };
    }

    // Filter in urls
    var filterUrls = function (urls, filterList, hostnames) {
        var newList = [];
        var magnetList = [];
        var tagList = [];
        var urlResult = "";
        var infoHashList = [];
        var infoHashTrackers = [];
        for (var i = 0; i < urls.length; i++) {
            urlResult = findInfoHashFromUrl(urls[i]);
            newList.push(hostnames[i]);
            magnetList.push(urlResult.arrayMagnets);
            tagList.push(urlResult.arrayTagNames);
            infoHashList.push(urlResult.torrentLists);
            infoHashTrackers.push(urlResult.infoHashTrackers);
        }
        return mergeMagnetToUrl(magnetList, tagList, newList, infoHashList, infoHashTrackers);
    }

    var filterUrl = function (url, hostnames) {
        var newList = [];
        var magnetList = [];
        var tagList = [];
        var infoHashList = [];
        var infoHashTrackers = [];
        var urlResult = findInfoHashFromUrl(url);
        magnetList.push(urlResult.arrayMagnets);
        tagList.push(urlResult.arrayTagNames);
        newList.push(hostnames);
        infoHashList.push(urlResult.torrentLists);
        infoHashTrackers.push(urlResult.infoHashTrackers);
        return mergeMagnetToUrl(magnetList, tagList, newList, infoHashList, infoHashTrackers);
    }

    var getSearchList = function (urls, filterList, currentTabHostName, hostnames) {
        if (currentTabHostName === "google") {
            return filterUrls(urls, filterList, hostnames);
        } else if (currentTabHostName === "bing") {
            return filterUrls(urls, filterList, hostnames);
        } else if (currentTabHostName === "yandex") {
            return filterUrls(urls, filterList, hostnames);
        } else if (currentTabHostName === "privatesearch") {
            return filterUrls(urls, filterList, hostnames);
        } else if (currentTabHostName === "yahoo") {
            return filterUrls(urls, filterList, hostnames);
        } else {
            return filterUrl(urls, hostnames);
        }
    }

    // Count magnets and torrents
    var getCountMagnets = function (result) {
        var count = 0;
        for (var key in result) {
            count += (result[key].magnets).length;
        }
        return count;
    }

    var callbackError = function () {
        if (chrome.runtime.lastError) {
            
        }
    }

    // Set icon badge based on magnets count
    var setBadge = function (tabId, searchList) {
        setTimeout(function() {
            countMagnets = getCountMagnets(searchList);
            if (countMagnets === 0 || countMagnets === undefined || countMagnets === null) {
                chrome.browserAction.setIcon({path: iconPaths[0], tabId: tabId}, callbackError);
                chrome.browserAction.setBadgeText({text: "", tabId: tabId}, callbackError);
            } else {
                chrome.browserAction.setIcon({path: iconPaths[1], tabId: tabId}, callbackError);
                chrome.browserAction.setBadgeBackgroundColor({color: "#666", tabId: tabId}, callbackError);
                chrome.browserAction.setBadgeText({text: (countMagnets).toString(), tabId: tabId}, callbackError);
            }
        }, 2500);
    }

    var setDetectedUrlsToLocal = function (tabId, url) {
        var validUrls = [];
        validUrls.push(url);

        chrome.storage.local.set({["tab_" + (tabId).toString()]: { 'urls': validUrls }}, function() {
            chrome.storage.local.get("tab_" + (tabId).toString(), function(results) {
                
            });
        });
    }

    var validateInfoHashTrackers = function (data) {
        var arr = [];
        for (var i = 0; i < data.length; i++) {
            if ((data[i].infoHashTrackers).length > 0) {
                arr.push(data[i].infoHashTrackers);
            }
        }
        return arr;
    }

    var mergeArray = function (data) {
        var newArray = [].concat(...data);
        return newArray;
    }

    var checkValidTracker = function (tracker) {
        var words = ["udp://", "http://", "https://", "wss://"];
        return words.some(word => tracker.toLowerCase().includes(word.toLowerCase()));
    }

    var removeDuplicatedInfohashInArray = function (arr) {
        var seen = {};
        for (var i = 0; i < arr.length; i++) {
            var current = arr[i];
            if (current.infoHash in seen) {
                var seen_current = seen[current.infoHash];
                if ((seen_current.trackers).length < (current.trackers).length) {
                    seen_current.trackers = (current.trackers).filter(Boolean);
                }
                // 
                var new_seen_current_trackers = [];
                for (var j = 0; j < (seen_current.trackers).length; j++) {
                    // 
                    if (checkValidTracker(seen_current.trackers[j]) === true) {
                        new_seen_current_trackers.push(seen_current.trackers[j]);
                    }
                }
                seen_current.trackers = new_seen_current_trackers;
                // 
            } else {
                var new_current_trackers = [];
                for (var j = 0; j < (current.trackers).length; j++) {
                    // 
                    if (checkValidTracker(current.trackers[j]) === true) {
                        new_current_trackers.push(current.trackers[j]);
                    }
                }
                // 
                // 
                // 
                current.trackers = new_current_trackers;
                // 
                seen[current.infoHash] = current;
            }
        }

        var newArr = [];
        for (var k in seen) {
            newArr.push(seen[k]);
        }
        return newArr;
    }

    var mergeTorrentHealth = function (arr, torrentHealth) {
        var currentArr = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < torrentHealth.length; j++) {
                if (torrentHealth[j].infoHash === arr[i].infoHash) {
                    currentArr.push(torrentHealth[j]);
                }
            }
        }
        return currentArr;
    }

    // Socket IO 
    var socketIORequestResponse = function (data) {
        
        
        return new Promise(function (resolve, reject) {
            var newData = removeDuplicatedInfohashInArray(mergeArray(data));
            var socket = io('ws://bsa.adaware.com', {transports: ['websocket']});
            var torrentData = [];

            
            socket.emit("torrentInfoRequest", JSON.stringify(newData));
            // 

            socket.on("torrentInfoResponse", function(newData){
                let res = JSON.parse(newData);
                //
                torrentData.push(res);
            });

            socket.on("torrentInfoError", function(errorData){
                // let resError = JSON.parse(errorData);
                // 
                // sendErrorEventTrackingInfo("Errors", { type: "socketIO_torrentInfoError", logs: errorData });
                reject(errorData);
            });

            socket.on('connect_error', (error) => {
                // let resError = JSON.parse(error);
                
                // sendErrorEventTrackingInfo("Errors", { type: "socketIO_connect_error", logs: error });
                reject(error);
            });

            socket.on('error', (error) => {
                // let resError = JSON.parse(error);
                
                // sendErrorEventTrackingInfo("Errors", { type: "socketIO_error", logs: error });
                reject(error);
            });

            // socket.on('reconnect_error', (error) => {
            //     // let resError = JSON.parse(error);
            //     
            //     sendErrorEventTrackingInfo("Errors", { type: "socketIO", logs: error });
            //     reject(error);
            // });

            socket.on("disconnect", function(newData){
                resolve(torrentData);
                
            });
            
        });
    }
    
    chrome.runtime.onMessage.addListener(function listener(request, sender, sendResponse) {
        switch (request.what) {
            case 'privatesearch':
                if (request.currentTabHostName === "privatesearch") {
                    searchList = getSearchList(request.urls, filterList, request.currentTabHostName, request.hostnames);
                    sendResponse({ request: request.urls, tabId: sender.tab.id });
                    setBadge(sender.tab.id, searchList);
                }
                return true;
            case 'fromPopUI':
                
                fromPopUI = request.fromPopUI;
                if (countMagnets > 0) {
                    // adawareTelemetry.sendEventTrackingInfo("ListDownload", { SearchEngine: request.searchEngine, QueryInput: "UI", NumberRelevantSites: countMagnets, NumberFlaggedTorrents: countFlagged, HttpStatus: checkUrlState(currentUrl) });
                    // 
                }
                
            break;
            case 'getSearchListResult':
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                    
                    var tabId = tabs[0].id;
                    
                    var infoHashTrackers = validateInfoHashTrackers(searchList);
                    socketIORequestResponse(infoHashTrackers).then(function (data) {
                        // 
                        // 
                        for (var i = 0; searchList.length > i; i++) {
                            if ((searchList[i].infoHashTrackers).length > 0) {
                                var newArr = mergeTorrentHealth(searchList[i].infoHashTrackers, data);
                                // 
                                searchList[i].torrentHealth = newArr;
                                // 
                                
                            }
                        }
                        sendResponse({ result: searchList, tabId: tabId, currentUrl: currentUrl });
                    });
                })
                /*if (fromSearchEngine === true) {
                    setDetectedUrlsToLocal(request.tabId, searchList);
                }*/
                // 
                return true;
            case 'LinkType':
                // 
                chrome.tabs.create({'url': request.url}, function (tab) {
                    
                    if (request.clicked === true) {
                        setDetectedUrlsToLocal(tab.id, request.url);
                    }
                });
            break;
            case 'sendTorrentDetailsForTracking':
                //
                sendEventTrackingInfo("ListDownload", { SearchEngine: fromSearchEngine, QueryInput: "Browser", NumberRelevantSites: request.totalNumber, NumberFlaggedTorrents: request.flaggedNumber, HttpStatus: checkUrlState(request.url) });
            break;
            case 'searchQuery':
                fromSearchEngine = request.searchEngine;
                // 
                var popupUrl = chrome.extension.getURL("popup.html") + '?tabId=' + sender.tab.id;
                
                currentUrl = request.currentUrl;

                setTimeout(function() {
                    if (fromSearchEngine === false) {
                        chrome.storage.local.get("tab_" + (sender.tab.id).toString(), function(results) {
                            
                            if (Object.keys(results).length !== 0) {
                                if ((results["tab_" + (sender.tab.id).toString()].urls).indexOf(request.currentUrl) !== -1) {
                                    openPopup = true;
                                } else {
                                    openPopup = false;
                                }
                            } else {
                                openPopup = false;
                            }
                        });
                    } else {
                        if (request.hasWordTorrent === true) {
                            openPopup = true;
                        } else {
                            openPopup = false;
                        }
                    }
                }, 300);

                setTimeout(function() {
                    countMagnets = getCountMagnets(searchList);
                    if (fromPopUI === true) {
                        fromPopUI = false;
                    } else {
                        if (request.searchEngine != "") {
                            if (countMagnets > 0) {
                                
                            }
                        }
                    }
                    if (countMagnets > 0) {
                        if (openPopup) {
                            setTimeout(function() {
                                sendEventTrackingInfo("UIOpen", { AutoorUser: "Auto", domainName: request.currentTabHostName, ResultorNoResult: (countMagnets <= 0) ? false : true });
    
                                chrome.tabs.executeScript(sender.tab.id, {
                                    file: "js/adaware/popup_script.js"
                                }, function () {
                                    chrome.storage.local.set({[(sender.tab.id).toString()]: {'openTab': true}}, function() {
                                        
                                        chrome.tabs.sendMessage(sender.tab.id, { url: popupUrl, openTab: true, tabId: sender.tab.id, searchList: searchList, firstrun: firstrun });
                                    });
                                });
                            }, 400);
                        } else {
                            chrome.storage.local.set({[(sender.tab.id).toString()]: {'openTab': false}}, function() {
                                
                                chrome.tabs.sendMessage(sender.tab.id, { url: popupUrl, openTab: false, tabId: sender.tab.id, searchList: searchList, firstrun: firstrun });
                            });
                        }
                    }

                    currentUrl = request.currentUrl;
                    currentTabHostName = request.currentTabHostName;
                    resultorNoResult = (countMagnets <= 0) ? false : true;

                }, 700);
            break;
            case 'ActionType':
                sendEventTrackingInfo("UIAction", { ActionType: request.name });
            break;
            case 'PopupType':
                sendEventTrackingInfo("PopupAction", { PopupType: request.name });
            break;
            case 'SetLanguage':
                chrome.storage.local.set({ 'lang' : (request.language).replace("-", "_") });
            break;
            case 'badgeCounter':
                
                chrome.browserAction.setBadgeText({text: (countMagnets).toString(), tabId: sender.tab.id}, callbackError);
            break;
            default:
                
            break;
        }
    });

    
    // Listener on tab activated
    // chrome.tabs.onActivated.addListener(function(activeInfo) {
    //     
    //     
    //     if (activeInfo.tabId) {
    //         chrome.tabs.sendMessage(activeInfo.tabId, {text:"searchEngineList"}, function(response) {
    //             if (typeof response !== 'undefined') {
    //                 searchList = getSearchList(response.urls, filterList, response.currentTabHostName, response.hostnames);
    //                 setBadge(activeInfo.tabId, searchList);
    //                 if (response.fromSearchEngine === true) {
    //                     fromSearchEngine = true;
    //                 } else {
    //                     fromSearchEngine = false;
    //                 }
    //             }
    //         });
    //     }
    // });

    // Listener on tab updated
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        
        
        if (changeInfo.status ==  "complete" && tab.id) {
            chrome.tabs.sendMessage(tab.id, {text:"searchEngineList"}, function(response) {
                if (typeof response !== 'undefined') {
                    searchList = getSearchList(response.urls, filterList, response.currentTabHostName, response.hostnames);
                    setBadge(tabId, searchList);
                    if (response.fromSearchEngine === true) {
                        fromSearchEngine = true;
                    } else {
                        fromSearchEngine = false;
                    }
                }
            });
        }
    });

    chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
        
        
        chrome.storage.local.get((tabId).toString(), function(results) {
            if (results[tabId] !== undefined) {
                chrome.storage.local.remove((tabId).toString());
            }
        });
    });

    // Browser badge clicked
    chrome.browserAction.onClicked.addListener(function (tabs) {
        
        

        // Send tracking when badge clicked on popup opened
        sendEventTrackingInfo("UIOpen", { AutoorUser: "User", domainName: currentTabHostName, ResultorNoResult: resultorNoResult });
        sendEventTrackingInfo("UIAction", { ActionType: "IconClick" });

        var popupUrl = chrome.extension.getURL("popup.html") + '?tabId=' + tabs.id;

        chrome.tabs.executeScript(tabs.id, {
            file: "js/adaware/popup_script.js"
        }, function () {
            if(chrome.runtime.lastError) {
                
                throw Error("Unable to inject script into tab " + tabs.id);
            } else {
                chrome.storage.local.get((tabs.id).toString(), function(results) {
                    if (results[tabs.id] === undefined) {
                        chrome.storage.local.set({[(tabs.id).toString()]: {'openTab': true}}, function() {
                            
                            chrome.tabs.sendMessage(tabs.id, { url: popupUrl, openTab: true, tabId: tabs.id, searchList: searchList, firstrun: firstrun });
                        });
                    } else {
                        if (results[tabs.id].openTab === true) {
                            chrome.storage.local.set({[(tabs.id).toString()]: {'openTab': false}}, function() {
                                
                                chrome.tabs.sendMessage(tabs.id, { url: popupUrl, openTab: false, tabId: tabs.id, searchList: searchList, firstrun: firstrun });
                            });
                        } else {
                            chrome.storage.local.set({[(tabs.id).toString()]: {'openTab': true}}, function() {
                                
                                chrome.tabs.sendMessage(tabs.id, { url: popupUrl, openTab: true, tabId: tabs.id, searchList: searchList, firstrun: firstrun });
                            });
                        }
                    }
                });
                return;
            }
        });
    });
    
})();