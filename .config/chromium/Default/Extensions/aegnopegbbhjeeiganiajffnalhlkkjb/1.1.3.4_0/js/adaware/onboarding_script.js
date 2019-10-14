'use strict';

(function () {

    var slideIndex = 1;

    var plusDivs = function (n) {
        showDivs(slideIndex += n);
    }

    var currentDiv = function (n) {
        showDivs(slideIndex = n);
    }

    var showDivs = function (n) {
        var i;
        var x = document.getElementsByClassName("slider");
        var dots = document.getElementsByClassName("badge");
        if (n > x.length) {slideIndex = 1}    
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" blue", "");
        }
        x[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " blue";
    }

    showDivs(slideIndex);

    var badge1 = document.getElementById("badge1");
    var badge2 = document.getElementById("badge2");
    var badge3 = document.getElementById("badge3");

    badge1.addEventListener("click", function (e) {
        currentDiv(1);
    });

    badge2.addEventListener("click", function (e) {
        currentDiv(2);
    });

    badge3.addEventListener("click", function (e) {
        currentDiv(3);
    });

    document.getElementById("arrow-left").addEventListener("click", function (e) {
        plusDivs(-1);
    });

    document.getElementById("arrow-right").addEventListener("click", function (e) {
        plusDivs(1);
    });

    /*document.body.addEventListener("click", function (e) {
        plusDivs(1);
    });*/

    chrome.storage.local.get({ 'lang' : 'en' }, function(data) {
        i18n.init({
            lng: data.lang,
            fallbackLng : 'en',
            resGetPath: '_locales/__lng__/messages.json'
        }, function(err, t) {
            $(".getranslate").i18n();
        });
    });

    chrome.runtime.onMessage.addListener(function listener(request, sender, sendResponse) {
        switch (request.what) {
            case 'SetLanguage':
                
                i18n.setLng(request.language, { fixLng: true }, function(err, t) { $(".getranslate").i18n(); });
            break;
        }
    });

})();