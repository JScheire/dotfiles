'use strict';

(function () {
    var showOnboarding = false;
    var showPromoCount = false;
        
    chrome.storage.local.get(['onboarding'], function (result) {
        if (Object.keys(result).length) {
            
            showOnboarding = result.onboarding;
        } else {
            showOnboarding = true;
            
        }
    });

    chrome.storage.local.get(['showPromo'], function (fetched) {
        if (fetched.showPromo !== undefined) {
            var result = Math.abs(fetched.showPromo - Date.now()) / 1000;
            var days = Math.floor(result / 86400);
            var minutes = Math.floor(result / 60) % 60;
            // 
            
            if (days <= 0) {
                chrome.storage.local.get(['showPromoCount1'], function (data) {
                    
                    if (data.showPromoCount1 !== true) {
                        chrome.storage.local.set({ 'showPromoCount1': true });
                        showPromoCount = true;
                    }
                });
            }

            if (days >= 7 && days <= 14) {
                chrome.storage.local.get(['showPromoCount2'], function (data) {
                    if (data.showPromoCount2 !== true) {
                        chrome.storage.local.set({ 'showPromoCount2': true });
                        showPromoCount = true;
                    }
                });
            }

            if (days >= 15) {
                chrome.storage.local.get(['showPromoCount3'], function (data) {
                    if (data.showPromoCount3 !== true) {
                        chrome.storage.local.set({ 'showPromoCount3': true });
                        showPromoCount = true;
                    }
                });
            }

            
        } else {
            chrome.storage.local.set({ 'showPromo': Date.now() });
        }
        
    });

    

    chrome.runtime.onMessage.addListener(function listener(request, sender, sendResponse) {
        if (request.url) {
            
            
            if (request.openTab) {
                var parentDiv1 = document.querySelectorAll('#bs_popup_container').length;
                
                if (parentDiv1 < 1) {
                    
                    var parentDiv = document.createElement('div');
                    parentDiv.setAttribute('id', 'bs_popup_container');
                    parentDiv.style.cssText = 'position:fixed;top:5px;right:5px;width:auto;height:auto;background-color:transparent;z-index:99999999;border-radius:4px;-webkit-box-sizing:initial;-moz-box-sizing:initial;box-sizing:initial;';
                    
                    var close = document.createElement('div');
                    close.setAttribute('id', 'closeBrowserSafety');
                    close.appendChild(document.createTextNode("✖"));
                    close.style.cssText = 'position:absolute;top:10px;right:14px;width:auto;height:auto;background-color:transparent;z-index:9999999;color:#e86c60;cursor:pointer;font-size:14px;font-weight:bold;font-family: InterUI, sans-serif;';
                    parentDiv.appendChild(close);

                    var smallBrowser = window.matchMedia("(min-height: 770px)");

                    // on first run to show onboarding popup
                    // if (showOnboarding === true) {
                    //     // create overlay
                    //     var overlayDiv = document.createElement('div');
                    //     overlayDiv.setAttribute("id", "onboarding_overlay");
                    //     overlayDiv.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.3);z-index:9999999";
                    //     document.body.appendChild(overlayDiv);

                    //     var onboardingDiv = document.createElement('div');
                    //     onboardingDiv.setAttribute("id", "onboarding_container");
                    //     onboardingDiv.style.cssText = "position:fixed;top:5px;right:344px;z-index:99999999;width:auto;height:auto;background-color:transparent;border-radius:4px;-webkit-box-sizing:initial;-moz-box-sizing:initial;box-sizing:initial;";

                    //     var onboardingFrame = document.createElement('iframe');
                    //     onboardingFrame.setAttribute('frameborder', '0');
                    //     onboardingFrame.setAttribute('class', 'onboarding_iframe');
                    //     onboardingFrame.src = chrome.extension.getURL("onboarding.html");

                    //     var closeOnboarding = document.createElement('div');
                    //     closeOnboarding.setAttribute('id', 'closeOnboarding');
                    //     closeOnboarding.appendChild(document.createTextNode("✖"));
                    //     closeOnboarding.style.cssText = 'position:absolute;top:10px;right:15px;width:auto;height:auto;background-color:transparent;z-index:9999999;color:#e86c60;cursor:pointer;font-size:14px;font-weight:bold;font-family: InterUI, sans-serif;';

                    //     var smallBrowser = window.matchMedia("(min-height: 770px)");
                    //     var resizeOnboarding = function (x) {
                    //         if (x.matches) {
                    //             onboardingFrame.style.cssText = 'position:relative;border:solid 1px #dedcdc;height:632px;min-width:340px;';
                    //         } else {
                    //             onboardingFrame.style.cssText = 'position:relative;border:solid 1px #dedcdc;height:632px;min-width:340px;';
                    //         }
                    //     }
                    //     resizeOnboarding(smallBrowser);
                    //     smallBrowser.addListener(resizeOnboarding);
                        
                    //     onboardingDiv.appendChild(closeOnboarding);
                    //     onboardingDiv.appendChild(onboardingFrame);
                    //     document.body.appendChild(onboardingDiv);

                    //     closeOnboarding.addEventListener('click', function(event) {
                    //         chrome.storage.local.set({ onboarding: false });
                    //         onboardingDiv.parentNode.removeChild(onboardingDiv);
                    //         overlayDiv.parentNode.removeChild(overlayDiv);
                    //     });
                    // }

                    if (showPromoCount) {
                        var promoDiv = document.createElement('div');
                        promoDiv.setAttribute("id", "promo_container");
                        promoDiv.style.cssText = "position:fixed;top:5px;right:344px;z-index:99999999;width:auto;height:auto;background-color:transparent;border-radius:4px;-webkit-box-sizing:initial;-moz-box-sizing:initial;box-sizing:initial;";

                        var promoFrame = document.createElement('iframe');
                        promoFrame.setAttribute('frameborder', '0');
                        promoFrame.setAttribute('class', 'promo_iframe');
                        promoFrame.src = chrome.extension.getURL("promo.html");

                        var closePromo = document.createElement('div');
                        closePromo.setAttribute('id', 'closePromo');
                        closePromo.appendChild(document.createTextNode("✖"));
                        closePromo.style.cssText = 'position:absolute;top:10px;right:15px;width:auto;height:auto;background-color:transparent;z-index:9999999;color:#e86c60;cursor:pointer;font-size:14px;font-weight:bold;font-family: InterUI, sans-serif;';

                        var smallBrowser2 = window.matchMedia("(min-height: 770px)");
                        var resizePromo2 = function (x) {
                            if (x.matches) {
                                promoFrame.style.cssText = 'position:relative;border:solid 1px #dedcdc;height:632px;min-width:340px;';
                            } else {
                                promoFrame.style.cssText = 'position:relative;border:solid 1px #dedcdc;height:632px;min-width:340px;';
                            }
                        }
                        resizePromo2(smallBrowser2);
                        smallBrowser2.addListener(resizePromo2);
                        
                        promoDiv.appendChild(closePromo);
                        promoDiv.appendChild(promoFrame);
                        document.body.appendChild(promoDiv);

                        closePromo.addEventListener('click', function(event) {
                            promoDiv.parentNode.removeChild(promoDiv);
                            // chrome.storage.local.set({ promo: false });
                            // chrome.storage.local.get(['showPromoCount1'], function (fetched) {
                            //     
                            //     if (fetched.showPromoCount1 === true && fetched.showPromoCount1 === undefined) {
                            //         chrome.storage.local.set({ 'showPromoCount1': false });
                            //     }
                            // });
                            // chrome.storage.local.get(['showPromoCount2'], function (fetched) {
                            //     if (fetched.showPromoCount2 === true && fetched.showPromoCount1 === undefined) {
                            //         chrome.storage.local.set({ 'showPromoCount2': false });
                            //     }
                            // });
                            // chrome.storage.local.get(['showPromoCount3'], function (fetched) {
                            //     if (fetched.showPromoCount3 === true && fetched.showPromoCount1 === undefined) {
                            //         chrome.storage.local.set({ 'showPromoCount3': false });
                            //     }
                            // });
                        });
                    }

                    close.addEventListener('click', function(event) {
                        var parentDiv3 = document.querySelector("#bs_popup_container");
                        // var onboardingPopup = document.querySelector('#onboarding_container');
                        // var onboardingOverlay = document.querySelector('#onboarding_overlay');
                        if (parentDiv3) {
                            parentDiv3.parentNode.removeChild(parentDiv3);
                            chrome.storage.local.set({[(request.tabId).toString()]: {'openTab': false}}, function() {});
                        }
                        // if (onboardingPopup) {
                        //     onboardingPopup.parentNode.removeChild(onboardingPopup);
                        // }
                        // if (onboardingOverlay) {
                        //     onboardingOverlay.parentNode.removeChild(onboardingOverlay);
                        // }
                        chrome.runtime.sendMessage({
                            what: 'ActionType',
                            name: 'CloseButton',
                            clicked: 'link'
                        }, function (response) {});
                    });

                    var iframe = document.createElement('iframe');
                    iframe.setAttribute('frameborder', '0');
                    iframe.setAttribute('class', 'popup_iframe');
                    iframe.src = request.url;
                    
                    var resizePopup = function (x) {
                        if (x.matches) {
                            iframe.style.cssText = 'position:relative;border:solid 1px #dedcdc;height:632px;min-width:340px;';
                        } else {
                            iframe.style.cssText = 'position:relative;border:solid 1px #dedcdc;height:632px;min-width:340px;';
                        }
                    }
                    resizePopup(smallBrowser);
                    smallBrowser.addListener(resizePopup);
                    
                    
                    parentDiv.appendChild(iframe);
                    document.body.appendChild(parentDiv);
                }
            } else {
                var parentDiv = document.querySelector("#bs_popup_container");
                parentDiv.parentNode.removeChild(parentDiv);
                // var onboardingFrame = document.querySelector('#onboarding_container');
                // if (onboardingFrame) {
                //     onboardingFrame.parentNode.removeChild(onboardingFrame);
                // }
                // var onboardingOverlay = document.querySelector('#onboarding_overlay');
                // if (onboardingOverlay) {
                //     onboardingOverlay.parentNode.removeChild(onboardingOverlay);
                // }
            }

            document.body.onclick = (function (e) {
                if (e.target.id != "closeOnboarding" && e.target.id != "closeBrowserSafety" && e.target.id != "closePromo") {
                    var parentDiv = document.querySelector("#bs_popup_container");
                    if (parentDiv) {
                        parentDiv.parentNode.removeChild(parentDiv);
                        chrome.storage.local.set({[(request.tabId).toString()]: {'openTab': false}}, function() {});
                    }
                    // var onboardingFrame = document.querySelector('#onboarding_container');
                    // if (onboardingFrame) {
                    //     onboardingFrame.parentNode.removeChild(onboardingFrame);
                    // }
                    // var onboardingOverlay = document.querySelector('#onboarding_overlay');
                    // if (onboardingOverlay) {
                    //     onboardingOverlay.parentNode.removeChild(onboardingOverlay);
                    // }
                    var promoFrame = document.querySelector("#promo_container");
                    if (promoFrame) {
                        promoFrame.parentNode.removeChild(promoFrame);
                    }
                }
            });
        }
        chrome.runtime.onMessage.removeListener(listener);
    });    

})();