/*	Cold Turkey Chrome Extension v3.6
	Copyright (c) 2018 Cold Turkey Software Inc.
*/

var port = chrome.extension.connectNative("com.coldturkey.coldturkey");
var version = 1;
var diffBlockList = [];
var diffExceptList = [];
var currentBlockList = [];
var currentExceptionList = [];
var fbexcept = false;
var statsTimer;
var doubleCheckTimer;
var statsEnabled = false;
var statsEnabledIncognito = false;
var statsActive = true;
var isPro = false;
var ignoreIncognito = false;
var firstMessage = true;
var counter = 0; /* Number of distractions blocked */

chrome.runtime.setUninstallURL("https://getcoldturkey.com/support/extensions/chrome/?reason=uninstall");

statsTimer = window.setInterval(statsCheck, 1000);
doubleCheckTimer = window.setInterval(doubleCheck, 5000);

chrome.browserAction.onClicked.addListener(function(tab) {
   return false;
});

/* Message from main app (60s/update Windows, 5s Mac) */
port.onMessage.addListener(function(list) {

	if (list.blockList.localeCompare("") == 0){
		/* Clear all settings when no block is currently active */
		diffBlockList = [];
		currentBlockList = [];
	} else {
		/* Block list isn't empty, fill variables with new settings */
		diffBlockList = list.blockList.split("@").diff(currentBlockList);
		currentBlockList = list.blockList.split("@");
	}
	if (list.exceptionList.localeCompare("") == 0){
		/* No exceptions, clear the array */
		diffExceptList = [];
		currentExceptionList = [];
	} else {
		diffExceptList = list.exceptionList.split("@").diff(currentExceptionList);
		currentExceptionList = list.exceptionList.split("@");
	}
	try {
		if (list.version) {
			version = list.version;
		}
	} catch (e) {
		version = 1;
	}
	if (version == 2) {
		if (list.statsEnabled === "true"){
			/* Collect stats data */
			statsEnabled = true;
		} else {
			/* Anything else, and turn it off */
			statsEnabled = false;
		}
		if (list.statsEnabledIncognito === "true"){
			/* Collect stats data */
			statsEnabledIncognito = true;
		} else {
			/* Anything else, and turn it off */
			statsEnabledIncognito = false;
		}
		if (typeof list.isPro != undefined && list.isPro == "true") {
			isPro = true;
		}
		if (typeof list.ignoreIncognito != undefined && list.ignoreIncognito == "true") {
			ignoreIncognito = true;
		}
	} else if (version == 1) {
		/* Provide blocked site stats and browser name to main Cold Turkey app */
		port.postMessage('counter@' + counter + '@@Chrome');
		/* Number of blocked sites was sent, clear counter */
		counter = 0;
	}
	/* If block list was changed, this will reload tabs that are currently supposed to be blocked */
	if (diffBlockList.length > 0 || diffExceptList.length > 0) {
		diffBlockList = [];
		diffExceptList = [];
		checkOpenTabs();
	}
	/* On first message (when extension is enabled), check if incognito is enabled */
	if (firstMessage) {
		firstMessage = false;
		allowIncognito();
	}

});

/* Message from content script (Version 1-2, Check if site blocked) */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.site) {
		sendResponse({block: checkBlock(request.site, true), pro: isPro});
	}
});

/* Message from content script (Version 2, Facebook exception) */
chrome.runtime.onMessage.addListener(function(request, sender) {
	if (request.fbexcept) {
		fbexcept = true;
	}
});

/* Start collecting stats on sonnection success */
chrome.runtime.onConnect.addListener(function(request, sender, sendResponse) {	
	statsTimer = window.setInterval(statsCheck, 1000);
});

/* Blocker main app closed the connection (native host not installed?). Fail open. */
port.onDisconnect.addListener(function() {
	currentBlockList = [];
	currentExceptionList = [];
	window.clearInterval(statsCheck);
});

chrome.tabs.onActivated.addListener(function() {
	checkOpenTabs();
});

chrome.webNavigation.onCommitted.addListener(function(details) {
	if (details.url != undefined && details.url.startsWith("chrome://")) {
		checkOpenTabs();		
	}	
});

/* Check to ensure Cold Turkey is running in incognito mode. */
function allowIncognito() {
	chrome.extension.isAllowedIncognitoAccess(function(isAllowedAccess) {
		if (!isAllowedAccess && !ignoreIncognito) {
			var detailsURL = "chrome://extensions/?id=" + chrome.i18n.getMessage("@@extension_id");
			window.setTimeout(incognitoRequired, 10000);
			chrome.tabs.create({ url: detailsURL });
			alert('Please turn on "Allow in incognito" for the Cold Turkey extension within 10 seconds.\n\nOtherwise, Chrome will be closed.');
		}
	});
}

/* Ensure Cold Turkey is running in incognito mode. Cold Turkey is designed to be difficult to get around */
var incognitoRequired = function() {
	chrome.extension.isAllowedIncognitoAccess(function(isAllowedAccess) {
		if (!isAllowedAccess && !ignoreIncognito) {
			var detailsURL = "chrome://extensions/?id=" + chrome.i18n.getMessage("@@extension_id");
			chrome.tabs.create({ url: detailsURL });
			alert('Please turn on "Allow in incognito" for the Cold Turkey extension. Then, re-enable the extension. \n\nOtherwise, Chrome will be closed momentarily.');
			chrome.management.setEnabled(chrome.i18n.getMessage("@@extension_id"), false);
		}
	});
};

/* For current tab, check to see if the new block list affects it. If so, reload the tab if it's supposed to be blocked */
function checkOpenTabs() {
	chrome.tabs.query({active: true}, function(allActiveTabs) {
		for (k = 0; k < allActiveTabs.length; k++) {			
			if (checkBlock(allActiveTabs[k].url, false)) {
				if (allActiveTabs[k].url.startsWith("chrome://")) {					
					chrome.tabs.remove(allActiveTabs[k].id);	
					counter++;
				} else if (allActiveTabs[k].title != "Blocked by Cold Turkey") {
					chrome.tabs.reload(allActiveTabs[k].id);
					counter++;
				}
			}
		}
	});
}

/* Main function to determine if a site is supposed to be blocked. fbexcept is a flag to allow users to share CT on Facebook */
function checkBlock(site, count) {
	
	var domain = '';
	var domains = '';
	var initUrl = '';
	var input = decodeURI(site);
	
	if (input.startsWith("file://")) {
		return false;
	}
	
	if (input.startsWith("chrome://")) {
		initUrl = input;
	} else {
		var arrInitUrl = input.match(/^((http|https|ftp):\/\/)?(www\.)?(.+)\/?/);
		initUrl = arrInitUrl[arrInitUrl.length-1].replace(/\/$/, "").toLowerCase();
		domains = initUrl.split("/")[0];
		var domainsList = domains.split(".");
		if (!domains.startsWith('localhost')) {
			if (domainsList[domainsList.length-2] == null) {
				return false;
			}
			domain = domainsList[domainsList.length-2] + '.' + domainsList[domainsList.length-1];
		} else {
			domain = domains;
		}
		if (initUrl.startsWith("getcoldturkey.com/blocked")) {
			return false;
		}
	}
	
	for (i = 0; i < currentBlockList.length; i++) {
		var regexBlock = new RegExp("^" + escapeRegExp(currentBlockList[i].replace(/\/$/, "").toLowerCase()));
		if (domain.match(regexBlock) || domains.match(regexBlock) || initUrl.match(regexBlock)) {
			for (j = 0; j < currentExceptionList.length; j++) {
				var regexAllow = new RegExp("^" + escapeRegExp(currentExceptionList[j].replace(/\/$/, "").toLowerCase()));
				if (domain.match(regexAllow) || domains.match(regexAllow) || initUrl.match(regexAllow)) {
					return false;
				}
			}
			if (fbexcept || input.startsWith('https://www.facebook.com/dialog/feed?app_id=135689646498663') || input.startsWith('https://www.facebook.com/login.php')) {				
				fbexcept = false;
			} else {
				if (count && version == 1) {
					counter++;
				} else {
					if (statsEnabled) {
						port.postMessage('blocked@' + domain);
					} else {
						port.postMessage('blocked@Private');					
					}
				}
				return true;
			}
    	}
	}
	return false;
}

function escapeRegExp(str) {
	var initStr = str.replace(/[\-\[\]\/\{\}\(\)\+\?\^\$\|]/g, "\\$&");
	var regexStr = initStr.replace(/\.\*/g, "*").split(".");
	var fixed = regexStr.join("\\.").replace(/\*/g, ".*");
	return fixed;
}

/* Stats Timer Functions */
function statsCheck() {
	if (statsEnabled) {
		chrome.tabs.query({lastFocusedWindow: true, active: true}, function(tabs){
			if (tabs[0] != undefined && !tabs[0].url.startsWith("chrome://") && !tabs[0].url.startsWith("file://") && tabs[0].title != "Blocked by Cold Turkey") {	
				try {
					chrome.windows.get(tabs[0].windowId, function(activeWindow){
						if (activeWindow.focused && (!activeWindow.incognito || activeWindow.incognito && statsEnabledIncognito) && (statsActive || activeWindow.state === 'fullscreen')) {
							var domainInit = tabs[0].url.match(/^((ftp|http|https):\/\/)?(www\.)?(.+)\/?/);
							var domains = domainInit[domainInit.length-1].replace(/\/$/, "").split("/")[0];
							port.postMessage('stats@' + domains);
						}
					});
				} catch (e) {
				}
			}
		});		
	}
}

/* Double check to make sure open tab is allowed to be open every 5 seconds (prevents ajax/js loaded pages from working like YouTube) */
function doubleCheck() {
	checkOpenTabs();
}

chrome.idle.setDetectionInterval(300);
chrome.idle.onStateChanged.addListener(function stateChanged(state) {
	if (state === "active") {
		statsActive = true;
	} else {
		statsActive = false;
	}
});

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
