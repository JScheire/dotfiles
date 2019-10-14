/*	Cold Turkey Chrome Extension v3.6
	Copyright (c) 2018 Cold Turkey Software Inc.
*/

chrome.runtime.sendMessage({site: window.location.href}, function(response) {
	if (response.block == true) {
		if (typeof response.pro != undefined && response.pro == true) {
			blockPagePro();
		} else {
			blockPage();
		}
	}
});

function blockPage() {
	
	blocked = true;
	window.stop();
	
	var iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('ctFrame.html');
    iframe.style.cssText = 'position:fixed !important;top:0 !important;left:0 !important;display:block !important;width:100% !important;height:100% !important;z-index:1000 !important;border:0 !important;margin:0 !important;';
	
	var tmp = document.createElement("div");
	tmp.appendChild(iframe);

	document.documentElement.innerHTML = '<html><head><title>Blocked by Cold Turkey</title></head><body style="margin:0 !important;">' + tmp.innerHTML + '</body></html>';
}

function blockPagePro() {
	
	blocked = true;
	window.stop();
	
	var iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('ctFramePro.html');
    iframe.style.cssText = 'position:fixed !important;top:0 !important;left:0 !important;display:block !important;width:100% !important;height:100% !important;z-index:1000 !important;border:0 !important;margin:0 !important;';
	
	var tmp = document.createElement("div");
	tmp.appendChild(iframe);

	document.documentElement.innerHTML = '<html><head><title>Blocked by Cold Turkey</title></head><body style="margin:0 !important;">' + tmp.innerHTML + '</body></html>';
}

function facebookException() {
	chrome.runtime.sendMessage({fbexcept: true});
}

window.addEventListener('load', function () {
	try { document.getElementById("CTFacebookShare").addEventListener("click", facebookException); } catch(e) {} 
});