/* global objectAssign, publicSuffixList */

'use strict';

var oneSecond = 1000;
var oneMinute = 60 * oneSecond;
var oneHour = 60 * oneMinute;
var oneDay = 24 * oneHour;
var oneWeek = 7 * oneDay;
var lastPing;
// var extensionId = '';
// 
// if(BrowserEnvironmentData().BrowserFamily == 'Chrome') {
//     extensionId = "nladljmabboanhihfkjacnnkgjhnokhj";
// } else if(BrowserEnvironmentData().BrowserFamily == 'Firefox') {
//     extensionId = "@new-tab";
// }

/*************************************/
/*************************************/
/*************************************/
// var checkExternalUpdateData = function (event) {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         var data = {version: "0", url: "http://extensions.adaware.com/browsersafety/update/index.html", date: "0", display: false};
//         try {
//             xhr.open("GET", 'http://extensions.adaware.com/promote/index.php', true);
//             xhr.timeout = 5000;

//             xhr.onreadystatechange = function() { //Call a function when the state changes.
//                 if(xhr.readyState == 4) {
//                     if (xhr.status == 200) {
//                         // Request finished. Do processing here.
//                         var resp = JSON.parse(xhr.responseText);
//                         data = resp;
//                         resolve(data);
//                     } else {
//                         resolve(data);
//                     }
//                 }
//             }
//             xhr.send();
//         } catch (e) {
//             reject(data);
//             onErrorReceived.call(xhr);
//         }
//     });
// };

// var redirectExternalUpdateData = function (data, newData) {
//     
//     
//     if (data.version !== newData.redirect.version) {
//         // chrome.tabs.create({url: data.url});
//         chrome.management.get(extensionId, function(extensionInfo) {
//             var isInstalled;
//             if (chrome.runtime.lastError) {
//             //When the extension does not exist, an error is generated
//                 isInstalled = false;
//                 chrome.tabs.create({url: data.url});
//             } else {
//             //The extension is installed. Use "extensionInfo" to get more details
//                 isInstalled = true;
//             }
//             
//         });
//         if (newData.redirect.version === undefined) {
//             vAPI.storage.set({"redirect": data});
//         } else {
//             newData.redirect.version = data.version;
//             vAPI.storage.set({"redirect": newData.redirect});
//         }
//     }
// };

// var saveExternalUpdateData = function (data) {
//     return new Promise(function (resolve, reject) {
//         vAPI.storage.get({"redirect": ""}, function (newData) {
//             if (newData.redirect === "") {
//                 vAPI.storage.set({"redirect": data});
//                 resolve(newData);
//             } else {
//                 resolve(newData);
//             }
//         });
//     });
// };
/*************************************/
/*************************************/
/*************************************/

const getUrlParameterFromString = (url, name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const sendDailyActivityData = (lastPingTime) => {
    let lastPingDate = new Date(lastPingTime);
    let currentPingDate = Date.now();
    let deltaMinutes = (currentPingDate - lastPingDate.getTime()) / oneMinute;
    

    let dailyActivityData = {};
    dailyActivityData.lastCallbackDate = lastPingDate.toISOString();

    sendEventTrackingInfo("DailyActivity", dailyActivityData);
}

const onFirstrun = () => {
    chrome.storage.local.get({ 'firstRun': true }, function (fetched) {
        if (fetched.firstRun === true) {
               
            chrome.storage.local.set({ 'firstRun': false });        
            let dateNow = Date.now();   
            dateNow = new Date();
            chrome.storage.local.set({ 'installDate': dateNow.toISOString() });
            let installId = generateUUID();
            chrome.storage.local.set({ 'installId': installId });

            
            setBrowserLanguageToLocal();
            sendEventTrackingInfo('CompleteInstall');
        }
    });
}

const onStartup = () => {
    chrome.storage.local.get({ 'firstRun': true }, function (fetched) {
        if (fetched.firstRun === false) {
               
        }
    });

    chrome.storage.local.get({ 'startupTime': Date.now() }, (fetched) => {
        
        // if last startup time is greater than 24 hours
        if (Date.now() - fetched.startupTime > oneDay) {
            // Here can send daily event
            sendDailyActivityData(fetched.startupTime);
        }
        chrome.storage.local.set({ 'startupTime': Date.now() });
    });
}

const onUpdate = (details) => {
    let currentVersion = chrome.runtime.getManifest().version;
    if (details.previousVersion != currentVersion) {
        
        
        let previousVersion = details.previousVersion;

        sendEventTrackingInfo('CompleteUpdate', { FromExtensionVersion: previousVersion });
    }
}

const getParamsFromChromeStore = () => {
    let url = "https://chrome.google.com/webstore/detail/*";

    new Promise((resolve, reject) => {
        chrome.tabs.query({url: url}, function (tabs) {
            if (tabs[0] !== undefined) {
                var url = tabs[0].url;
                var urlQuery = url.slice(url.indexOf( '?' ));
                if ((url.split("?")).length > 1) {
                    chrome.storage.local.set({ 'externalData': { 'PartnerID': getUrlParameterFromString(url, "PartnerID"), 'CampaignID': getUrlParameterFromString(url, "CampaignID"), 'sourceTraffic': getUrlParameterFromString(url, "sourceTraffic"), 'CLID': getUrlParameterFromString(url, "CLID"), 'OfferID': getUrlParameterFromString(url, "OfferID") } });
                    resolve(urlQuery);
                } else {
                    chrome.storage.local.set({ 'externalData': { 'PartnerID': "", 'CampaignID': "", 'sourceTraffic': "", 'CLID': "", 'OfferID': "" } });
                    resolve("");
                }
            } else {
                chrome.storage.local.set({ 'externalData': { 'PartnerID': "", 'CampaignID': "", 'sourceTraffic': "", 'CLID': "", 'OfferID': "" } });
                resolve("");
            }
            
        });
    }).then((urlQuery) => {
        chrome.tabs.query({url: url}, function (tabs) {
            if (tabs[0] !== undefined) {
                var url = tabs[0].url;
                if (getUrlParameterFromString(url, "p") === "bt") {
                    chrome.tabs.create({ url: "https://privatesearch.adaware.com/search?" + urlQuery.replace("?", "") });
                } else {
                    chrome.tabs.create({ url: "https://web.utorrent.com/extension.html?success=1&" + urlQuery.replace("?", "") });
                }
            }
        });
    });
}

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason == "install") {
        
        getParamsFromChromeStore();
        onFirstrun();
        chrome.storage.local.set({ 'showPromo': Date.now() });  
    } else if (details.reason == "update") {
        onUpdate(details);
        chrome.storage.local.get(['showPromo'], function (fetched) {
            if (fetched.showPromo === undefined) {
                chrome.storage.local.set({ 'showPromo': Date.now() });  
            }
        });
    }
});

lastPing = Date.now();
setInterval(function () {
    sendDailyActivityData(lastPing);
    lastPing = Date.now();
}, oneDay);

onStartup();