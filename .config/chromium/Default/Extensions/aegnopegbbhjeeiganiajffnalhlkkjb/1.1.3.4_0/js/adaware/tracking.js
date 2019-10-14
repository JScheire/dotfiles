'use strict';

const postUrl = "https://flow.lavasoft.com/v1/event-stat?";
const uninstallUrl = "https://adaware.com/bs/uninstall.php";
let productId = "bs";
let installDate = 0;
let installId = "";
const extensionId = chrome.runtime.id;
const currentVersion = chrome.runtime.getManifest().version;
let getUILanguage = chrome.i18n.getUILanguage;

/* -------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------ GET BROWSER ENVIRONNEMENT INFORMATION ----------------------------------- */
/* -------------------------------------------------------------------------------------------------------------- */
const getBrowserNameAndVersion = () => {
    let ua = navigator.userAgent, tem,
        M = ua.match(/(vivaldi|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([0-9|\.]+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+([0-9|\.]+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Firefox') {
        tem = ua.match(/\b(PaleMoon)\/([0-9|\.]+)/);
        if (tem != null) return tem.slice(1).join(' ');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/([0-9|\.]+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/([0-9|\.]+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
}

const getOSName = () => {
    let OSName = "other";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "windows";
    else if (navigator.appVersion.indexOf("Mac") != -1) OSName = "mac";
    else if (navigator.appVersion.indexOf("Linux") != -1) OSName = "linux";
    return OSName;
}

const getBrowserInfo = () => {
    let browserNameAndVersion = getBrowserNameAndVersion().split(" ");
    return {
        name: browserNameAndVersion[0],
        version: browserNameAndVersion[1],
        lang: navigator.language || navigator.userLanguage
    };
}

const BrowserEnvironmentData = () => {
    let browserInfo = getBrowserInfo();
    return {
        'BrowserFamily': browserInfo.name,
        'BrowserVersion': browserInfo.version,
        'BrowserLocale': browserInfo.lang,
        'Platform': getOSName()
    }
}
/* ------------------------------------------------------------------------------------------------------------- */

const generateUUID = () => {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return uuid;
}

const setBrowserLanguageToLocal = () => {
    chrome.storage.local.get({ 'lang': '' }, function (fetched) {
        if (fetched.lang === '' || fetched.lang === undefined) {
            chrome.storage.local.set({ 'lang': getUILanguage().replace("-", "_").replace("_PT", "") });
        }
    });
}

const httpRequestAsync = (method, url, data, onLoad, onError, onAbort, contentType) => {
    if (contentType === undefined) {
        contentType = 'application/x-www-form-urlencoded';
    }
    if (typeof onAbort !== 'function') {
        onAbort = onError;
    }

    var onResponseReceived = function () {
        this.onload = this.onerror = this.ontimeout = null;
        // xhr for local files gives status 0, but actually succeeds
        var status = this.status || 200;
        if (status < 200 || status >= 300) {
            return onError.call(this, status);
        }
        // never download anything else than plain text: discard if response
        // appears to be a HTML document: could happen when server serves
        // some kind of error page
        var text = this.responseText.trim();
        if (text.startsWith('<') && text.endsWith('>')) {
            return onError.call(this, status);
        }
        return onLoad.call(this, this.responseText, status);
    };

    var onErrorReceived = function () {
        this.onload = this.onerror = this.ontimeout = null;
        onError.call(this, status);
    };

    var onAbortReceived = function () {
        this.onload = this.onerror = this.ontimeout = null;
        onAbort.call(this, status);
    };

    var xhr = new XMLHttpRequest();
    try {
        xhr.open(method, url, true); // true for asynchronous 
        if (method === "POST") { xhr.setRequestHeader('Content-type', contentType); }
        xhr.timeout = 30000; // 30 seconds
        xhr.onload = onResponseReceived;
        xhr.onerror = onErrorReceived;
        xhr.ontimeout = onErrorReceived;
        xhr.onabort = onAbortReceived;
        xhr.send(data);
    } catch (e) {
        
        onErrorReceived.call(xhr);
    }
    return xhr;
}

const httpPostAsync = (postUrl, postdata, onLoad, onError, onAbort, contentType) => {
    return httpRequestAsync("POST", postUrl, postdata, onLoad, onError, onAbort, contentType);
};

const httpGetAsync = (url, onLoad, onError) => {
    return httpRequestAsync("GET", url, null, onLoad, onError);
};

const trackingData = (browserEnvironmentData, appData, evenData, extensionVersionData, externalData) => {
    // 
    // 
    // 
    // 
    let obj = Object.assign(browserEnvironmentData, appData, evenData, extensionVersionData, externalData);
    return obj;
}

const sendReport = (trackingData, postUrl) => {
    
    httpPostAsync(postUrl, JSON.stringify(trackingData),
        function onSuccess(response) {
            var parsedResponse = JSON.parse(response);
            
        },
        function onFail(response) {
            try {
                var parsedResponse = JSON.parse(response);
                
            } catch (e) {
                
            }
        },
        function onAbort() { },
        'application/json'
    );
}

const dictToStringParams = (obj) => {
    let result = "";
    let properties = Object.getOwnPropertyNames(obj);
    for (let k in properties) {
        let key = properties[k];
        result = result + key + "=" + obj[key] + "&";
    }
    return result.substring(0, result.length - 1);
}

const onUninstall = (url, trackingData) => {
    let uninstallUrl = url + "?";
    uninstallUrl += dictToStringParams(trackingData);
    
    try {
        chrome.runtime.setUninstallURL(uninstallUrl);
    } catch (e) {
        
    }
}

const sendEventTrackingInfo = (eventType, evenData) => {
    if (evenData === undefined) {
        evenData = {};
    }
    
    

    new Promise((resolve, reject) => {
        chrome.storage.local.get({ 'installDate': Date.now() }, (fetched) => {
            
            resolve(fetched.installDate);
        });
    }).then((installDate) => {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get({ 'installId': generateUUID() }, (fetched) => {
                
                resolve({ 'InstallDate': installDate, 'InstallId': fetched.installId, 'extensionId': extensionId });
            });  
        });
    }).then((appData) => {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get({ 'externalData': "" }, (fetched) => {
                
                resolve([appData, fetched.externalData]);
            });  
        });
    }).then(([appData, externalData]) => {
        
        let extensionVersion = { ExtensionVersion: currentVersion, ExtensionLocale: getUILanguage() };
        let BrowserEnvironment = BrowserEnvironmentData();
        let details = trackingData(BrowserEnvironment, appData, evenData, extensionVersion, externalData);
        

        let postUrlDest = postUrl + "productid=" + productId + "&type=" + eventType;
        sendReport({ data: details }, postUrlDest);

        if (eventType == "CompleteInstall" || eventType == "CompleteUpdate") {
            let newExternalData = {};
            newExternalData.pid = externalData.PartnerID;
            newExternalData.srt = externalData.sourceTraffic;
            newExternalData.cid = externalData.CampaignID;
            delete extensionVersion.ExtensionLocale;
            extensionVersion.ver = extensionVersion.ExtensionVersion;
            delete extensionVersion.ExtensionVersion;
            let uninstalltrackingData = trackingData(BrowserEnvironment = {}, appData, evenData, extensionVersion, newExternalData);
            onUninstall(uninstallUrl, uninstalltrackingData);
        }
    });
}

const sendErrorEventTrackingInfo = (eventType, evenData) => {
    if (evenData === undefined) {
        evenData = {};
    }

    

    new Promise((resolve, reject) => {
        chrome.storage.local.get({ 'installDate': Date.now() }, (fetched) => {
            
            resolve(fetched.installDate);
        });
    }).then((installDate) => {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get({ 'installId': generateUUID() }, (fetched) => {
                
                resolve({ 'InstallDate': installDate, 'InstallId': fetched.installId, 'extensionId': extensionId });
            });  
        });
    }).then((appData) => {
        let extensionVersion = { ExtensionVersion: currentVersion, ExtensionLocale: getUILanguage() };
        let BrowserEnvironment = BrowserEnvironmentData();
        let details = trackingData(BrowserEnvironment, appData, evenData, extensionVersion);
        

        let postUrlDest = postUrl + "productid=" + productId + "&type=" + eventType;
        sendReport({ data: details }, postUrlDest);
    });
}