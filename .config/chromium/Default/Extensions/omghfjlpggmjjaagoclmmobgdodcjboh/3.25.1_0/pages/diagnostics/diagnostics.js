// @flow
var _browser = typeof browser !== 'undefined' ? browser : chrome;

var parent
/*: HTMLElement | null*/
= document.querySelector('div.main'); // Polymer redux problems resolve

window.addEventListener('unload', function () {
  if (!parent) return;
  var elements
  /*: Array<HTMLElement>*/
  = Array.from(parent.children);
  elements.forEach(function (element) {
    if (element.tagName.toLowerCase() === 'script') return;
    parent.removeChild(element);
  });
});

var pageUrl = _browser.runtime.getURL('/pages/diagnostics/diagnostics.html');

var diagnosticsTabs = _browser.extension.getViews({
  'type': 'tab'
}).filter(function (_ref) {
  var location = _ref.location;
  return location.href === pageUrl;
});

if (diagnosticsTabs.length >= 2) window.close();