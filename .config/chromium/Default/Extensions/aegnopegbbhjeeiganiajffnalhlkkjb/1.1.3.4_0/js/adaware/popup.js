'use strict';

// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Add your Analytics tracking ID here.
 */
var _AnalyticsCode = 'UA-2689090-54';
/**
 * Below is a modified version of the Google Analytics asynchronous tracking
 * code snippet.  It has been modified to pull the HTTPS version of ga.js
 * instead of the default HTTP version.  It is recommended that you use this
 * snippet instead of the standard tracking snippet provided when setting up
 * a Google Analytics account.
 */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

(function () {
 
    // Render Search Engine list urls
    var list = document.getElementById('torrent-urls');
    var badList = document.getElementById('flagged-urls');

    /* STATUS 3 for malicious torrent */
    var status = 3;

    var searchListResult = [];
    var magnetArray = [];
    var counter = 0;
    var flaggedCounter = 0;
    var flaggedList = [];
    var newFlaggedList = [];
    var languages = {
        de: "Deutsch",
        en: "English",
        en_US: "English",
        es: "Español",
        fr: "Français",
        it: "Italiano",
        ja: "日本語 - にほんご",
        ko: "한국어",
        nl: "Nederlands, Vlaams",
        pl: "język polski, polszczyzna",
        pt: "Português",
        pt_BR: "Português do Brasil",
        ru: "Русский",
        tr: "Türkçe",
        zh_CN: "汉语",
        zh_TW: "漢語"
    };
    var language = "en";

    chrome.storage.local.get({ 'lang' : 'en' }, function(data) {
        language = data.lang;
    });

    if (!("path" in Event.prototype)) {
        Object.defineProperty(Event.prototype, "path", {
            get: function() {
                var path = [];
                var currentElem = this.target;
                while (currentElem) {
                path.push(currentElem);
                currentElem = currentElem.parentElement;
                }
                if (path.indexOf(window) === -1 && path.indexOf(document) === -1)
                path.push(document);
                if (path.indexOf(window) === -1)
                path.push(window);
                return path;
            }
        });
    }

    var getParamByNameFromMagnetLink = function (name, queryString) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(queryString);
        return results === null ? queryString : decodeURIComponent(results[1].replace(/\+/g, ' '));
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

    var add3Dots = function (string, limit) {
        var dots = "...";
        // 
        if (string === undefined) {
            string = "Unknown";
        }
        if (string.length > limit) {
            // you can also use substr instead of substring
            string = string.substring(0, limit) + dots;
        }
        
        return string;
    }

    var displayMainUrl = function (list) {
        var countFlagged = 0;
        var countMagnets = 0;

        if ((list.torrentHealth).length > 0) {
            for (var i = 0; i < (list.torrentHealth).length; i++) {
                var flagsArray = list.torrentHealth[i];
                if (flagsArray !== null) {
                    if (flagsArray.status === status) {
                        countFlagged++;
                    }
                }
            }
        }

        for (var i = 0; i < (list.magnets).length; i++) {
            countMagnets++;
        }
        if (countMagnets > countFlagged) {
            return true;
        } else {
            return false;
        }
    }

    // var checkInfoHashStatus = function (data) {
    //     return new Promise(function (resolve, reject) {
    //         var xhr = new XMLHttpRequest();
    //         var infoHashInfo = data;
    //         try {
    //             xhr.open("POST", 'https://bsa.adaware.com/v1/browsersafety/magnet_status/', true);
    //             xhr.timeout = 5000;
    //             xhr.setRequestHeader("apiKey", "svc128");
    //             xhr.setRequestHeader("Content-type", "application/json");
            
    //             xhr.onreadystatechange = function() { //Call a function when the state changes.
    //                 if(xhr.readyState == 4 && xhr.status == 200) {
    //                     // Request finished. Do processing here.
    //                     var resp = JSON.parse(xhr.responseText);
    //                     infoHashInfo.status = resp;
    //                     resolve(infoHashInfo);
    //                 }
    //             }
    //             xhr.send(JSON.stringify(data.infoHashStatus));
    //         } catch (e) {
    //             onErrorReceived.call(xhr);
    //         }

    //     });
    // };

    var countNumberTorrents = function (data, url) {
        var flaggedCounter = 0;
        var totalCounter = 0;
        for (var i = 0; data.length > i; i++) {
            if (data[i].status === status) {
                flaggedCounter++;
            }
            totalCounter++;
        }
        if (totalCounter > 0) {
            chrome.runtime.sendMessage({
                what: 'sendTorrentDetailsForTracking',
                flaggedNumber: flaggedCounter,
                totalNumber: totalCounter,
                url: url
            });
        }
    }

    var validateAudioLanguage = function (str) {
        var title = str;
        if (title === undefined) {
            title = "";
        } else {
            title.toLowerCase();
        }
        
        var regExp = /[^[\]]+(?=])/g;
        var lang = ["en", "english", "eng", "fr", "french", "it", "italian", "es", "spanish", "esp"];

        if (title.match(regExp) !== null && title.match(regExp) !== undefined) {
            
            var t = title.match(regExp);
            for (var i = 0; t.length > i; i++) {
                if (lang.indexOf(t[i]) > -1) {
                    return t[i];
                } else {
                    return "";
                }
            }
        } else {
            return "";
        }
    }

    var validatePixelTitle = function (str) {
        var title = str;
        if (title === undefined) {
            title = "";
        } else {
            title.toLowerCase();
        }
        var pixels = ["240p", "360p", "480p", "720p", "1080p", "2160p"];

        for (var i = 0; i < pixels.length; i++) {
            if (title.indexOf(pixels[i]) !== -1) {
                if (pixels[i] !== undefined) {
                    return pixels[i];
                }
            }
        }
    }

    var calculateRadio = function (seeders, leeches) {
        var seeders = parseInt(seeders);
        var leeches = parseInt(leeches);
        var ratio = leeches != 0 ? seeders/leeches : 0;

        if (isNaN(ratio)) {
            ratio = 0;
        }

        

        return ratio;
    }

    var validateTitle = function (title) {
        var regex = /240p|\[240p\]|(240p)|.240p|360p|\[360p\]|(360p)|.360p|480p|\[480p\]|(480p)|.480p|720p|\[720p\]|(720p)|.720p|1080p|\[1080p\]|(1080p)|.1080p|2160p|\[2160p\]|(2160p)|.2160p/;

        return  title !== undefined ? title.replace(regex, "") : title;
    }

    chrome.runtime.sendMessage({
        what: 'getSearchListResult'
    }, function (response) {
        setTimeout(function() {
            if (response) {
                // load "play" button translation
                i18n.init(function(err, t) { 
                    $(".tplay").i18n();
                });
                
                
                searchListResult = response.result;

                // Send event when popup is open
                _gaq.push(['_trackEvent', 'UI is Open', 'User Action', 'ui-open']);

                for (var i = 0; i < searchListResult.length; i++) {
                    
                    var torrentHealth = searchListResult[i].torrentHealth;

                    if (torrentHealth !== undefined) {
                        

                        var flagsArray = torrentHealth;
                        countNumberTorrents(flagsArray, searchListResult[i].url);

                        if (flagsArray.length > 0 && displayMainUrl(searchListResult[i]) === false) {
                            var flagged_block = document.createElement("div");
                            flagged_block.setAttribute("class", "block");

                            var flagged_main_url = document.createElement("div");
                            flagged_main_url.setAttribute("class", "main-url");
                            flagged_block.appendChild(flagged_main_url);

                            var flagged_main_url_icon = document.createElement("img");
                            flagged_main_url_icon.setAttribute("class", "global-icon");
                            flagged_main_url_icon.setAttribute("src", "img/popup/flagged-global-icon.svg");
                            flagged_main_url_icon.setAttribute("width", "22px");
                            flagged_main_url_icon.setAttribute("height", "21px");
                            flagged_main_url.appendChild(flagged_main_url_icon);

                            var flagged_main_url_href = document.createElement("a");
                            var flagged_relevantSite = searchListResult[i]["url"];
                            flagged_main_url_href.setAttribute("id", "main-url");
                            flagged_main_url_href.setAttribute("href", "#" + flagged_relevantSite);
                            flagged_main_url_href.setAttribute('title', flagged_relevantSite);
                            flagged_main_url_href.appendChild(document.createTextNode((flagged_relevantSite).toString().replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")));
                            flagged_main_url.appendChild(flagged_main_url_href); 
                            flagged_main_url_href.addEventListener('click', function(event) {
                                
                                _gaq.push(['_trackEvent', 'Links', 'Website URL Click', 'main-url']);
                                chrome.runtime.sendMessage({
                                    what: 'ActionType',
                                    name: 'ClickDomain',
                                    clicked: 'link'
                                }, function (response) {});
                                chrome.runtime.sendMessage({
                                    what: 'LinkType',
                                    name: 'MainUrl',
                                    clicked: true,
                                    url: event.target["title"]
                                }, function (response) {});
                            });

                            for (var j = 0; j < flagsArray.length; j++) {
                                
                                var flagArray = flagsArray[j];
                                var torrentOrMagnet = "";
                                if (flagArray !== null) {
                                    if (flagArray.status === status) {
                                        flaggedCounter++;
                                        flaggedList.push(searchListResult[i].magnets[j]);

                                        var flagged_detected_magnet = document.createElement("div");
                                        flagged_detected_magnet.setAttribute("class", "detected-magnet row");
                                        var flagged_magnet_link_block = document.createElement("div");

                                        if (language === "ru") {
                                            flagged_magnet_link_block.setAttribute("class", "magnet-link-block column left-50");
                                        } else if (language === "es" || language === "nl" || language === "pt") {
                                            flagged_magnet_link_block.setAttribute("class", "magnet-link-block column left-60");
                                        } else {
                                            flagged_magnet_link_block.setAttribute("class", "magnet-link-block column left-75");
                                        }

                                        var flagged_magnet_href = document.createElement("a");
                                        if ((searchListResult[i].magnets[j]).match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i) !== null) {
                                            flagged_magnet_href.setAttribute("id", "magnet-link");
                                            flagged_magnet_href.setAttribute("class", "magnet-link");
                                            torrentOrMagnet = "Magnet";
                                        } else {
                                            flagged_magnet_href.setAttribute("id", "torrent-link");
                                            flagged_magnet_href.setAttribute("class", "torrent-link");
                                            torrentOrMagnet = "Torrent";
                                        }

                                        flagged_magnet_href.setAttribute("href", searchListResult[i].magnets[j]);
                                        flagged_magnet_href.setAttribute("title", getParamByNameFromMagnetLink("dn", searchListResult[i].magnets[j]));
                                        flagged_magnet_href.setAttribute('target', '_blank');
                                        flagged_magnet_href.appendChild(document.createTextNode(add3Dots(getParamByNameFromMagnetLink("dn", searchListResult[i].names[j]), 50)));
                                        flagged_magnet_link_block.appendChild(flagged_magnet_href);

                                        var flagged_magnet_button_block = document.createElement("div");

                                        if (language === "ru") {
                                            flagged_magnet_button_block.setAttribute("class", "magnet-button-block column right-50");
                                        }  else if (language === "es" || language === "nl" || language === "pt") {
                                            flagged_magnet_button_block.setAttribute("class", "magnet-button-block column right-40");
                                        } else {
                                            flagged_magnet_button_block.setAttribute("class", "magnet-button-block column right-25");
                                        }

                                        var flagged_magnet_button = document.createElement("a");
                                        if (searchListResult[i].magnets[j].match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i) !== null) {
                                            flagged_magnet_button.setAttribute("id", "add-magnet-link");
                                        } else {
                                            flagged_magnet_button.setAttribute("id", "add-torrent-link");
                                        }
                                        flagged_magnet_button.setAttribute("class", "add-button");
                                        flagged_magnet_button.setAttribute("href", searchListResult[i].magnets[j]);
                                        flagged_magnet_button.setAttribute('target', '_blank');
                                        flagged_magnet_button.innerHTML = "<span class='tplay getranslate' data-i18n='play.message'></span>";
                                        flagged_magnet_button_block.appendChild(flagged_magnet_button);

                                        flagged_magnet_href.addEventListener('click', function(event) {
                                            _gaq.push(['_trackEvent', 'Links', torrentOrMagnet + ' URL Click', torrentOrMagnet.toLowerCase() + '-link']);
                                            chrome.runtime.sendMessage({
                                                what: 'ActionType',
                                                name: 'AddPlus',
                                                clicked: 'link',
                                                type: ((event.target.href).match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i) !== null) ? "magnet" : "torrent"
                                            }, function (response) {});
                                        });

                                        flagged_magnet_button.addEventListener('click', function(event) {
                                            _gaq.push(['_trackEvent', 'Add ' + torrentOrMagnet.toLowerCase(), 'Add ' + torrentOrMagnet + ' Click', 'add-' + torrentOrMagnet.toLowerCase() + '-link']);
                                            chrome.runtime.sendMessage({
                                                what: 'ActionType',
                                                name: 'AddPlus',
                                                clicked: 'button',
                                                type: ((event.path[1].href).match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i) !== null) ? "magnet" : "torrent"
                                            }, function (response) {});
                                        });
                                        
                                        var flagged_play_button_icon = document.createElement("i");
                                        flagged_play_button_icon.setAttribute("class", "play-icon fa fa-play");
                                        flagged_magnet_button.appendChild(flagged_play_button_icon);

                                        flagged_detected_magnet.appendChild(flagged_magnet_link_block);
                                        flagged_detected_magnet.appendChild(flagged_magnet_button_block);
                                        flagged_block.appendChild(flagged_detected_magnet);
                                    }
                                }
                            }

                            badList.appendChild(flagged_block);
                        }

                        if (flaggedCounter > 0) {
                            document.getElementById("numberFlagged").textContent = flaggedCounter;
                        }

                        if (Object.keys(searchListResult[i].magnets).length > 0) {
                            var block = document.createElement("div");
                            block.setAttribute("class", "block");
                            if (displayMainUrl(searchListResult[i]) === true) {
                                var main_url = document.createElement("div");
                                main_url.setAttribute("class", "main-url");
                                block.appendChild(main_url);

                                var main_url_icon = document.createElement("img");
                                main_url_icon.setAttribute("class", "global-icon");
                                main_url_icon.setAttribute("src", "img/popup/global-icon-2.png");
                                main_url_icon.setAttribute("width", "20px");
                                main_url.appendChild(main_url_icon);

                                var main_url_href = document.createElement("a");
                                var relevantSite =  searchListResult[i].url;
                                main_url_href.setAttribute("id", "main-url");
                                main_url_href.setAttribute("href", "#" + relevantSite);
                                main_url_href.setAttribute('title', relevantSite);
                                main_url_href.appendChild(document.createTextNode((relevantSite).toString().replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")));

                                var main_url_arrow = document.createElement("a");
                                main_url_arrow.setAttribute("id", "main_url_arrow");
                                main_url_arrow.setAttribute("class", "main_url_arrow arrow_down");
                                main_url_arrow.setAttribute("href", "#toggle");
                                // var main_url_arrow_image = document.createElement("img");
                                // main_url_arrow_image.setAttribute("src", "img/popup/arrow-up.png");
                                // main_url_arrow_image.setAttribute("width", "21.9px");
                                // main_url_arrow_image.setAttribute("height", "12px");

                                // main_url_arrow.appendChild(main_url_arrow_image);
                                
                                main_url_href.addEventListener('click', function(event) {
                                    
                                    _gaq.push(['_trackEvent', 'Links', 'Website URL Click', 'main-url']);
                                    chrome.runtime.sendMessage({
                                        what: 'ActionType',
                                        name: 'ClickDomain',
                                        clicked: 'link'
                                    });
                                    chrome.runtime.sendMessage({
                                        what: 'LinkType',
                                        name: 'MainUrl',
                                        clicked: true,
                                        url: event.target["title"]
                                    });
                                });
                                
                                main_url_arrow.addEventListener("click", function (event) {
                                    
                                    for (var i = 0; i < event.path[2].childNodes.length; i++) {
                                        if (event.path[2].childNodes[i].className.indexOf("detected-magnet row") != -1) {
                                            
                                            event.path[2].childNodes[i].classList.toggle("hidden");
                                        }
                                    }
                                    
                                    if (this.classList[1] == "arrow_down") {
                                        
                                        this.className = this.className.replace("arrow_down", "arrow_up");
                                    } else {
                                        this.className = this.className.replace("arrow_up", "arrow_down");
                                    }
                                    // if (this.childNodes[0].classList.toggle("toggle") === true) {
                                    //     //
                                    //     this.childNodes[0].src = this.childNodes[0].src.replace("arrow-up", "arrow-down");
                                    // } else {
                                    //     this.childNodes[0].src = this.childNodes[0].src.replace("arrow-down", "arrow-up");
                                    // }

                                });

                                main_url.appendChild(main_url_href);   
                                main_url.appendChild(main_url_arrow);

                                if (Object.keys(searchListResult[i].magnets).length) {
                                    for (var j = 0, len = Object.keys(searchListResult[i].magnets).length; j < len; j++) {

                                        if (torrentHealth[j]) {
                                            var ratio = calculateRadio(torrentHealth[j].seeders, torrentHealth[j].leeches);
                                        } else {
                                            var ratio = calculateRadio(0, 0);
                                        }

                                        var torrentOrMagnet = "";
                                        counter++;
                                        if (counter === 1) {
                                            document.getElementById("loading").remove();
                                        }
    
                                        var detected_magnet = document.createElement("div");
                                        detected_magnet.setAttribute("class", "detected-magnet row");
                                        magnetArray = searchListResult[i].magnets;
    
                                        if (flaggedList.indexOf(magnetArray[j]) < 0) {
                                            var audio = validateAudioLanguage(getParamByNameFromMagnetLink("dn", searchListResult[i].names[j]));
                                            var pixel = validatePixelTitle(getParamByNameFromMagnetLink("dn", searchListResult[i].names[j]));
    
                                            var magnet_link_block = document.createElement("div");
    
                                            if (language === "ru") {
                                                magnet_link_block.setAttribute("class", "magnet-link-block column left-50");
                                            } else if (language === "es" || language === "nl" || language === "pt") {
                                                magnet_link_block.setAttribute("class", "magnet-link-block column left-60");
                                            } else {
                                                magnet_link_block.setAttribute("class", "magnet-link-block column left-75");
                                            }
    
                                            var magnet_href = document.createElement("a");
                                            if (magnetArray[j].match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i) !== null) {
                                                magnet_href.setAttribute("id", "magnet-link");
                                                magnet_href.setAttribute("class", "magnet-link");
                                                torrentOrMagnet = "Magnet";
                                            } else {
                                                magnet_href.setAttribute("id", "torrent-link");
                                                magnet_href.setAttribute("class", "torrent-link");
                                                torrentOrMagnet = "Torrent";
                                            }
                                            magnet_href.setAttribute("href", magnetArray[j]);
                                            magnet_href.setAttribute("title", validateTitle(getParamByNameFromMagnetLink("dn", searchListResult[i].names[j])));
                                            magnet_href.setAttribute('target', '_blank');
                                            magnet_href.appendChild(document.createTextNode(add3Dots(validateTitle(getParamByNameFromMagnetLink("dn", searchListResult[i].names[j]), 50))));
                                            magnet_link_block.appendChild(magnet_href);
    
                                            var magnet_button_block = document.createElement("div");
    
                                            if (language === "ru") {
                                                magnet_button_block.setAttribute("class", "magnet-button-block column right-50");
                                            }  else if (language === "es" || language === "nl" || language === "pt") {
                                                magnet_button_block.setAttribute("class", "magnet-button-block column right-40");
                                            } else {
                                                magnet_button_block.setAttribute("class", "magnet-button-block column right-25");
                                            }
    
                                            var magnet_button = document.createElement("a");
                                            if (magnetArray[j].match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i) !== null) {
                                                magnet_button.setAttribute("id", "add-magnet-link");
                                            } else {
                                                magnet_button.setAttribute("id", "add-torrent-link");
                                            }
                                            magnet_button.setAttribute("class", "add-button");
                                            magnet_button.setAttribute("href", magnetArray[j]);
                                            magnet_button.setAttribute('target', '_blank');
                                            magnet_button.innerHTML = "<span class='tplay getranslate' data-i18n='play.message'></span>";
                                            magnet_button_block.appendChild(magnet_button);
    
                                            magnet_href.addEventListener('click', function(event) {
                                                _gaq.push(['_trackEvent', 'Links', torrentOrMagnet + ' URL Click', torrentOrMagnet.toLowerCase() + '-link']);
                                                chrome.runtime.sendMessage({
                                                    what: 'ActionType',
                                                    name: 'AddPlus',
                                                    clicked: 'link',
                                                    type: ((event.target.href).match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i) !== null) ? "magnet" : "torrent"
                                                }, function (response) {});
                                            });
    
                                            magnet_button.addEventListener('click', function(event) {
                                                _gaq.push(['_trackEvent', 'Add ' + torrentOrMagnet.toLowerCase(), 'Add ' + torrentOrMagnet + ' Click', 'add-' + torrentOrMagnet.toLowerCase() + '-link']);
                                                chrome.runtime.sendMessage({
                                                    what: 'ActionType',
                                                    name: 'AddPlus',
                                                    clicked: 'button',
                                                    type: ((event.path[1].href).match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i) !== null) ? "magnet" : "torrent"
                                                }, function (response) {});
                                            });
                                            
                                            var play_button_icon = document.createElement("img");
                                            play_button_icon.setAttribute("src", "img/popup/arrow.png");
                                            play_button_icon.setAttribute("width", "6px");
                                            play_button_icon.setAttribute("class", "play-icon");
                                            magnet_button.appendChild(play_button_icon);
    
                                            detected_magnet.appendChild(magnet_link_block);
                                            detected_magnet.appendChild(magnet_button_block);
    
                                            var detailSection = document.createElement("div");
                                            detailSection.setAttribute("class", "detailSection");

                                            if (ratio !== undefined) {
                                                var ratioContent = document.createElement("div");
                                                if (ratio < 0.5) {
                                                    ratioContent.setAttribute("class", "ratioRed");
                                                }
                                                if (ratio <= 0.9 && ratio >= 0.5) {
                                                    ratioContent.setAttribute("class", "ratioYellow");
                                                }
                                                if (ratio > 0.9) {
                                                    ratioContent.setAttribute("class", "ratioGreen");
                                                }
                                                detailSection.appendChild(ratioContent);
                                            }
    
                                            if (pixel !== undefined) {
                                                var pixelContent = document.createElement("div");
                                                pixelContent.setAttribute("class", "pixelContent");
                                                pixelContent.innerHTML = pixel;
                                                detailSection.appendChild(pixelContent);
                                            }
    
                                            if (audio !== "") {
                                                var audioContent = document.createElement("div");
                                                audioContent.setAttribute("class", "audioContent");
                                                audioContent.innerHTML = audio;
                                                detailSection.appendChild(audioContent);
                                            }

                                            // var seeDetailsLink = document.createElement("a");
                                            // seeDetailsLink.setAttribute("class", "seeDetailsLink");
                                            // seeDetailsLink.setAttribute("href", "#seeDetails");
                                            // seeDetailsLink.innerHTML = "See details";
                                            // detailSection.appendChild(seeDetailsLink);

                                            var seeDetailsContent = document.createElement("div");
                                            seeDetailsContent.setAttribute("class", "seeDetailsContent");
                                            detailSection.appendChild(seeDetailsContent);
    
                                            detected_magnet.appendChild(detailSection);
    
                                            block.appendChild(detected_magnet);
                                        }
                                    }
                                }
                            }

                            if (counter > 0) {
                                document.getElementById("numberScanned").textContent = counter;
                                chrome.runtime.sendMessage({
                                    what: 'badgeCounter',
                                    found: counter
                                });
                                document.getElementById("scannedResults").setAttribute("style", "display:block;");
                                if (language === "ru") {
                                    var scannedResults = document.getElementById("scannedResults");
                                    scannedResults.style.fontSize = "12px";
                                }

                                document.getElementById("numberValid").textContent = counter;
                            }
                            list.appendChild(block);
                        }

                        var search = document.getElementById('search');
                        search.value = getParameterByName('q', response.currentUrl);

                        $(".tplay").i18n();
                    }
                    
                }

                if (document.getElementById("loading") !== null) {
                    document.getElementById("loading").remove();
                    document.getElementById("emptyTorrent").style.display = "block";
                }

            }
        }, 100);
    });

    /*********** FOR POP UI SEARCH */
    var search = document.getElementById('search');
    var addTorrentWord = " torrent";
    search.addEventListener('keypress', (event) => {
        const keyName = event.key;
        if (search.value.indexOf(addTorrentWord) !== -1) {
            addTorrentWord = "";
        }
        if (event.key === "Enter") {
            _gaq.push(['_trackEvent', 'User Action', 'Top Bar Search', 'search']);
            
            
            window.open('https://www.google.com/search?q=' + search.value + addTorrentWord, '_top');
            chrome.runtime.sendMessage({
                what: 'fromPopUI',
                fromPopUI: true,
                searchEngine: "google",
                searchQuery: search.value
            }, function (response) {});
        }
    });
    /*******************************/

    /*******************************/
    var showSettings = document.getElementById('showSettings');
    var backToResults = document.getElementById('backToResults');
    var settingSlider = document.getElementById('settingsWrapper');
    var onTriggerSettings = function () {
        settingSlider.className = settingSlider.className === 'go-left' ? 'go-right' : 'go-left';
    }
    showSettings.addEventListener('click', (event) => {
        onTriggerSettings();
    });
    backToResults.addEventListener('click', (event) => {
        onTriggerSettings();
    });
    /*******************************/

    /*******************************/
    var showFlagged = document.getElementById('flaggedLink');
    var showValid = document.getElementById('validLink');
    var flaggedSlider = document.getElementById('flaggedWrapper');
    var onTriggerFlagged = function () {
        flaggedSlider.className = flaggedSlider.className === 'go-left'? 'go-right': 'go-left';
    }

    showFlagged.addEventListener('click', (event) => {
        if (flaggedCounter > 0) {
            onTriggerFlagged();
        }
    });

    showValid.addEventListener('click', (event) => {
        flaggedSlider.className = 'go-right';
    });
    /*******************************/

    /*******************************/
    var toggleDropdown = function () {
        document.getElementById('languagesBoxOptions').firstElementChild.classList.toggle('closed');
    };

    var selectedOptionClicked = function () {
        
        toggleDropdown();
    };

    var selectedLanguageOptionClicked = function (event) {
        var eventTargetId = event.target.id;
        if (event.target.className === "languageIcon languageOption") {
            
            document.querySelector('.selectedOption').setAttribute("id", eventTargetId);
            document.querySelector('.selectedOption').innerHTML = event.target.innerHTML;
            chrome.runtime.sendMessage({
                what: 'SetLanguage',
                language: eventTargetId
            });
            toggleDropdown();
            i18n.setLng(eventTargetId, { fixLng: true }, function(err, t) { 
                $(".getranslate").i18n(); 
                if (eventTargetId === "ru") {
                    var leftLink = document.getElementsByClassName("magnet-link-block");
                    var rightButton = document.getElementsByClassName("magnet-button-block");
                    for (var i = 0; i < leftLink.length; i++) {
                        leftLink[i].style.width = "50%";
                        rightButton[i].style.width = "50%";
                    }
                    var scannedResults = document.getElementById("scannedResults");
                    scannedResults.style.fontSize = "12px";
                } else if (eventTargetId === "es" || eventTargetId === "pt" || eventTargetId === "nl") {
                    var leftLink = document.getElementsByClassName("magnet-link-block");
                    var rightButton = document.getElementsByClassName("magnet-button-block");
                    for (var i = 0; i < leftLink.length; i++) {
                        leftLink[i].style.width = "60%";
                        rightButton[i].style.width = "40%"; 
                    }
                } else {
                    var leftLink = document.getElementsByClassName("magnet-link-block");
                    var rightButton = document.getElementsByClassName("magnet-button-block");
                    for (var i = 0; i < leftLink.length; i++) {
                        leftLink[i].style.width = "75%";
                        rightButton[i].style.width = "25%";
                    }
                }
            });
            
        } else if (event.target.className.indexOf("selectedOption") === -1) {
            
            document.getElementById('languagesBoxOptions').firstElementChild.classList.add('closed');
        }
    };

    // setup dropdown
    document.addEventListener('click', selectedLanguageOptionClicked);
    document.querySelector('.selectedOption').addEventListener('click', selectedOptionClicked);

    // setup language
    document.addEventListener("DOMContentLoaded", function(event) {
        chrome.storage.local.get({ 'lang' : 'en' }, function(data) {
            var language = "en";
            if (languages[data.lang]) {
                language = languages[data.lang];
            } else {
                language = languages[language];
            }
            document.querySelector('.selectedOption').setAttribute("id", data.lang);
            var flagIcon = document.createElement("i");
            flagIcon.setAttribute("class", "flag-icon flag-icon-" + data.lang);
            document.querySelector('.selectedOption').appendChild(flagIcon);
            document.querySelector('.selectedOption').appendChild(document.createTextNode(" " + language));

            i18n.init({
                lng: data.lang,
                fallbackLng : 'en',
                resGetPath: '_locales/__lng__/messages.json'
            }, function(err, t) {
                $(".getranslate").i18n();
            });
        });
    });
    /*******************************/

    var smallBrowser = window.matchMedia("(min-height: 580px)");
    var resizePopup = function (x) {
        if (x.matches) {
            document.getElementById('torrent-urls').style.height = "439px";
        } else {
            document.getElementById('torrent-urls').style.height = "439px";
        }
    }
    resizePopup(smallBrowser);
    smallBrowser.addListener(resizePopup);

    /*******************************/

    var resetInput = document.getElementById("input-close");
    resetInput.addEventListener("click", function (event) {
        search.value = "";
        search.focus();
    });
})();