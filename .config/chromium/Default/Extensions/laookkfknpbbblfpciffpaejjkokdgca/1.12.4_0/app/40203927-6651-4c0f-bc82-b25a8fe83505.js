var fn_addin = (function (m, $, dependencies) { var addin = addin || {}; addin.styles=addin.styles||{};addin.commands = addin.commands||{};addin.dependencies=dependencies||addin.dependencies||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.info={
	"widget": true,
	"placeholderType": "dashIcon",
	"id": "app_launcher",
	"label": "Apps",
	"requiredFeature": "app_launcher",
	"addin": "40203927-6651-4c0f-bc82-b25a8fe83505",
	"region": "top-left",
	"order": "append",
	"openState": "showApps",
	"toggleEvent": "globalEvent:key:A",
	"keepOpenSetting": "keepAppsState",
	"dependencies": ["vue"],
	"flex-order": 2,
	"icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><g fill-rule=\"nonzero\"><path d=\"M3.825 3.191a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5A3.126 3.126 0 0 1 .7 11.316v-7.5C.7 2.091 2.1.691 3.825.691z\"/><path d=\"M1.95 6.941a1.25 1.25 0 1 1 0-2.5H13.2a1.25 1.25 0 0 1 0 2.5H1.95zM20.7 3.191a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5a3.126 3.126 0 0 1-3.125-3.125v-7.5c0-1.725 1.4-3.125 3.125-3.125z\"/><path d=\"M18.825 6.941a1.25 1.25 0 0 1 0-2.5h11.25a1.25 1.25 0 0 1 0 2.5h-11.25zM3.825 20.066a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5A3.126 3.126 0 0 1 .7 28.191v-7.5c0-1.725 1.4-3.125 3.125-3.125z\"/><path d=\"M1.95 23.816a1.25 1.25 0 0 1 0-2.5H13.2a1.25 1.25 0 0 1 0 2.5H1.95zM20.7 20.066a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5a3.126 3.126 0 0 1-3.125-3.125v-7.5c0-1.725 1.4-3.125 3.125-3.125z\"/><path d=\"M18.825 23.816a1.25 1.25 0 0 1 0-2.5h11.25a1.25 1.25 0 0 1 0 2.5h-11.25z\"/></g></svg>"
}
; m.console.log(m.elapsed()+ ': '+addin.info.id+' started'); !function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=6)}([function(t,e){t.exports=Vue},function(t,e,a){"use strict";function n(t,e,a,n,i,s,r,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):i&&(l=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var p=c.render;c.render=function(t,e){return l.call(e),p(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}a.d(e,"a",function(){return n})},function(t,e,a){var n=a(8);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(5).default)("74e8bd7e",n,!1,{})},,function(t,e,a){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var a=function(t,e){var a=t[1]||"",n=t[3];if(!n)return a;if(e&&"function"==typeof btoa){var i=(r=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[a].concat(s).concat([i]).join("\n")}var r;return[a].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a}).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var s=this[i][0];null!=s&&(n[s]=!0)}for(i=0;i<t.length;i++){var r=t[i];null!=r[0]&&n[r[0]]||(a&&!r[2]?r[2]=a:a&&(r[2]="("+r[2]+") and ("+a+")"),e.push(r))}},e}},function(t,e,a){"use strict";function n(t,e){for(var a=[],n={},i=0;i<e.length;i++){var s=e[i],r=s[0],o={id:t+":"+i,css:s[1],media:s[2],sourceMap:s[3]};n[r]?n[r].parts.push(o):a.push(n[r]={id:r,parts:[o]})}return a}a.r(e),a.d(e,"default",function(){return u});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},r=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,p=function(){},d=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function u(t,e,a,i){c=a,d=i||{};var r=n(t,e);return g(r),function(e){for(var a=[],i=0;i<r.length;i++){var o=r[i];(l=s[o.id]).refs--,a.push(l)}e?g(r=n(t,e)):r=[];for(i=0;i<a.length;i++){var l;if(0===(l=a[i]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete s[l.id]}}}}function g(t){for(var e=0;e<t.length;e++){var a=t[e],n=s[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(m(a.parts[i]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{var r=[];for(i=0;i<a.parts.length;i++)r.push(m(a.parts[i]));s[a.id]={id:a.id,refs:1,parts:r}}}}function v(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function m(t){var e,a,n=document.querySelector("style["+h+'~="'+t.id+'"]');if(n){if(c)return p;n.parentNode.removeChild(n)}if(f){var i=l++;n=o||(o=v()),e=w.bind(null,n,i,!1),a=w.bind(null,n,i,!0)}else n=v(),e=function(t,e){var a=e.css,n=e.media,i=e.sourceMap;n&&t.setAttribute("media",n);d.ssrId&&t.setAttribute(h,e.id);i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,n),a=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else a()}}var b,y=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function w(t,e,a,n){var i=a?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var s=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}},function(t,e,a){t.exports=a(12)},function(t,e,a){"use strict";var n=a(2);a.n(n).a},function(t,e,a){(t.exports=a(4)(!1)).push([t.i,"\n.launcher[data-v-f68aa1c4] { --half-nipple-width: 3.5px; --launcher-item-bg: rgba(255,255,255,0.09); order: 2;\n}\n.light .launcher[data-v-f68aa1c4] { --launcher-item-bg: rgba(0,0,0,0.06);\n}\n.app[data-v-f68aa1c4] { --left-position: 100px; width: var(--launcher-width); min-width: 598px; padding: 0; position: absolute; left: calc(50% - var(--left-position)); top: var(--region-height); z-index: 5;\n}\n.top-center .app[data-v-f68aa1c4] { position: fixed; left: 50%; transform: translateX(-50%);\n}\n.app[data-v-f68aa1c4]:after { left: var(--left-position); transform: translateX(-50%);\n}\n.top-center .app[data-v-f68aa1c4]:after { left: 50%; transform: translateX(calc(-50% + var(--launcher-nipple-x-shift)));\n}\n.header[data-v-f68aa1c4] { --header-font-size: 0.875rem; height: auto; padding: 0; position: relative; display: flex; justify-content: flex-start; align-items: stretch;\n}\n.header[data-v-f68aa1c4]:after { height: 1px; position: absolute; right: 0; bottom: -1px; left: 0; background-color: var(--border-color); content: '';\n}\n.header nav[data-v-f68aa1c4] { position: relative; display: flex; justify-content: flex-start; align-items: center;\n}\n.tab[data-v-f68aa1c4] { padding: calc(var(--app-padding) - 5px) var(--launcher-tab-side-padding) calc(var(--app-padding) - 6px); color: rgba(255,255,255,0.6); cursor: pointer; font-size: var(--header-font-size); font-weight: 600; outline: none; transition: color 0.1s ease; white-space: nowrap;\n}\n.tab[data-v-f68aa1c4]:first-child { padding-left: var(--app-padding);\n}\n.tab[data-v-f68aa1c4]:hover, .tab[data-v-f68aa1c4]:focus { color: rgba(255,255,255,0.8);\n}\n.tab[data-v-f68aa1c4]:active { color: rgba(255,255,255,0.7); transition-duration: 0s;\n}\n.tab.active[data-v-f68aa1c4] { color: #fff;\n}\n.light .tab[data-v-f68aa1c4] { color: rgba(34,34,34,0.5);\n}\n.light .tab[data-v-f68aa1c4]:hover, .light .tab[data-v-f68aa1c4]:focus { color: rgba(34,34,34,0.7);\n}\n.light .tab[data-v-f68aa1c4]:active { color: rgba(34,34,34,0.6); transition-duration: 0s;\n}\n.light .tab.active[data-v-f68aa1c4] { color: rgba(34,34,34,0.9);\n}\n.header nav .underline[data-v-f68aa1c4] { height: 2px; position: absolute; bottom: -1px; z-index: 1; background-color: #fff; transition: left 0.2s ease, width 0.2s ease; content: '';\n}\n.light nav .underline[data-v-f68aa1c4] { background-color: var(--light-text-color);\n}\n.search-wrapper[data-v-f68aa1c4] { min-width: 0; margin-right: 12px; flex: 1 1 auto; display: flex; justify-content: flex-end; align-items: center;\n}\n.search-wrapper > span[data-v-f68aa1c4] { position: relative;\n}\n.search-wrapper .icon-search[data-v-f68aa1c4]:before { position: absolute; left: 11px; top: 50%; z-index: -1; opacity: 0.4; font-size: 0.875rem; transform: translateY(-50%);\n}\n.search-wrapper .clear-wrapper[data-v-f68aa1c4] { position: absolute; top: 0; bottom: 0; right: 0; z-index: 1; display: flex; align-items: center; cursor: pointer;\n}\n.search-wrapper .clear[data-v-f68aa1c4] { height: 9px; padding: 0 12px; opacity: 0.4;\n}\n.search-wrapper .clear-wrapper:hover .clear[data-v-f68aa1c4] { opacity: 0.6;\n}\n.search-wrapper .apps-search[data-v-f68aa1c4] { max-width: 170px; min-width: 100px; padding: 8px 25px 8px 33px; border: none; border-radius: 50px; background-color: rgba(255,255,255,0.05); font-size: var(--header-font-size); transition: background 0.1s ease;\n}\n.search-wrapper .apps-search[data-v-f68aa1c4]:focus { background-color: rgba(255,255,255,0.12);\n}\n.search-wrapper .apps-search[data-v-f68aa1c4]::placeholder { opacity: 0.5;\n}\n.light .apps-search[data-v-f68aa1c4] { background-color: rgba(0,0,0,0.08) !important;\n}\n.light .apps-search[data-v-f68aa1c4]::placeholder { opacity: 0.5;\n}\n.body[data-v-f68aa1c4] { height: calc(var(--launcher-item-height) * var(--launcher-max-rows) + (var(--app-padding) * 2 ) + var(--launcher-item-margin)); overflow-x: hidden; overflow-y: auto;\n}\n.app-list[data-v-f68aa1c4] { padding: var(--app-padding); position: relative; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: var(--launcher-item-margin); box-sizing: border-box;\n}\n.app-list.no-matches-found[data-v-f68aa1c4]:before { position: absolute; right: 0; bottom: 50%; left: 0; text-align: center; opacity: 0.45; content: 'No matches found.';\n}\n.app-list.active-tab-empty[data-v-f68aa1c4]:before { content: \"This category is empty.\"\n}\n.app-list .item[data-v-f68aa1c4] { height: var(--launcher-item-height); width: var(--launcher-item-width); border-radius: var(--border-radius);\n}\n.app-list .item.bottom-row[data-v-f68aa1c4] { margin-bottom: 0;\n}\n.app-list .item a[data-v-f68aa1c4] { height: 100%; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 3px; cursor: pointer; transition: background-color 0.1s ease;\n}\n.app-list .item a[data-v-f68aa1c4]:hover, .app-list .item a[data-v-f68aa1c4]:focus { outline: none; background-color: var(--launcher-item-bg);\n}\n.app-list .item .logo[data-v-f68aa1c4] { padding-top: 0; display: flex; justify-content: center; align-items: center; font-size: 1.25rem; font-weight: 600;\n}\n.app-list .item .logo img[data-v-f68aa1c4] { height: 48px; padding-top: 5px; opacity: 0.8; filter: invert(1);\n}\n.light .app-list .item .logo img[data-v-f68aa1c4] { filter: none;\n}\n.app-list .item .name[data-v-f68aa1c4] { padding-top: 10px; opacity: 0.7; font-size: 0.875rem; text-align: center;\n}\n.app.app-pane-slide-fade-enter-active[data-v-f68aa1c4], .app.app-pane-slide-fade-leave-active[data-v-f68aa1c4] { transition: opacity var(--a-fast), transform var(--a-fast);\n}\n.app.app-pane-slide-fade-enter[data-v-f68aa1c4], .app.app-pane-slide-fade-leave-to[data-v-f68aa1c4]  { opacity: 0; transform: translateY(-5px);\n}\n.top-center .app.app-pane-slide-fade-enter[data-v-f68aa1c4], .top-center .app.app-pane-slide-fade-leave-to[data-v-f68aa1c4]  { transform: translateY(-5px) translateX(-50%);\n}\n\n\t/* LOADING STATE */\n.launcher-loading[data-v-f68aa1c4] { --gradient-background: linear-gradient(90deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%); --gradient-background-size: calc(var(--launcher-width) * 2);\n}\n.launcher-loading .app-list-loading[data-v-f68aa1c4], .launcher-loading .tabs-loading[data-v-f68aa1c4] { background: var(--gradient-background); background-color: var(--launcher-item-bg); background-position: calc(var(--launcher-width) / 4) 0; background-size: var(--gradient-background-size); animation: glisten-data-v-f68aa1c4 var(--loading-animation-duration) linear infinite;\n}\n.launcher-loading .app-list-loading[data-v-f68aa1c4] { height: 100%; overflow: hidden; clip-path: url(#apps-clip-path); animation-delay: var(--loading-animation-delay);\n}\n.launcher-loading .tabs-loading[data-v-f68aa1c4] { animation-delay: var(--loading-animation-delay); clip-path: url(#tabs-clip-path);\n}\n.tabs-loading[data-v-f68aa1c4] svg, .apps-list-loading[data-v-f68aa1c4] svg { position: absolute;\n}\n.launcher-loading .tab .tab-text-placeholder[data-v-f68aa1c4] { width: 120px; position: relative; display: inline-block; color: transparent;\n}\n.tab .tab-text-placeholder > span[data-v-f68aa1c4] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border-radius: var(--border-radius);\n}\n@keyframes glisten-data-v-f68aa1c4 {\n0% { background-position: calc((var(--launcher-width) * -1) - (var(--launcher-width) / 4)) 0;\n}\n20% { background-position: calc(var(--launcher-width) / 4) 0;\n}\n100% { background-position: calc(var(--launcher-width) / 4) 0;\n}\n}\n\n\t/* EMPTY STATE */\n.launcher-empty .tab[data-v-f68aa1c4], .launcher-empty .body[data-v-f68aa1c4], .launcher-empty .search-wrapper[data-v-f68aa1c4], .launcher-empty .header[data-v-f68aa1c4]:after, .launcher-empty .no-matches-found[data-v-f68aa1c4] { visibility: hidden;\n}\n.no-matches-found[data-v-f68aa1c4] { height: 100%;\n}\n.empty-state[data-v-f68aa1c4] { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; justify-content: center; align-items: center;\n}\n.empty-message[data-v-f68aa1c4] { opacity: 0.8;\n}\n",""])},,,,function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"app-launcher",staticClass:"launcher app-container",class:{"launcher-loading":t.isLoading,active:t.containerOpen,"launcher-empty":t.isEmpty},style:{"--launcher-width":t.launcherWidth+"px","--launcher-item-height":t.$options.dimensions.itemHeight+"px","--launcher-item-width":t.$options.dimensions.itemWidth+"px","--launcher-item-margin":t.$options.dimensions.itemMargin+"px","--launcher-tab-side-padding":t.$options.dimensions.tabSidePadding+"px","--launcher-nipple-x-shift":t.shiftNipple+"px","--launcher-max-rows":2,"--region-height":t.regionHeight+"px","--loading-animation-delay":t.$options.loadingAnimationDelay+"ms","--loading-animation-duration":t.$options.loadingAnimationDuration+"ms"}},[a("div",{ref:"app-dash",staticClass:"app-dash app-dash-icon add-shadow toggle apps-toggle",on:{click:t.toggleApp}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[a("g",{attrs:{"fill-rule":"nonzero"}},[a("path",{attrs:{d:"M3.825 3.191a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5A3.126 3.126 0 0 1 .7 11.316v-7.5C.7 2.091 2.1.691 3.825.691z"}}),a("path",{attrs:{d:"M1.95 6.941a1.25 1.25 0 1 1 0-2.5H13.2a1.25 1.25 0 0 1 0 2.5H1.95zM20.7 3.191a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5a3.126 3.126 0 0 1-3.125-3.125v-7.5c0-1.725 1.4-3.125 3.125-3.125z"}}),a("path",{attrs:{d:"M18.825 6.941a1.25 1.25 0 0 1 0-2.5h11.25a1.25 1.25 0 0 1 0 2.5h-11.25zM3.825 20.066a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5A3.126 3.126 0 0 1 .7 28.191v-7.5c0-1.725 1.4-3.125 3.125-3.125z"}}),a("path",{attrs:{d:"M1.95 23.816a1.25 1.25 0 0 1 0-2.5H13.2a1.25 1.25 0 0 1 0 2.5H1.95zM20.7 20.066a.626.626 0 0 0-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625v-7.5a.626.626 0 0 0-.625-.625h-7.5zm0-2.5h7.5c1.725 0 3.125 1.4 3.125 3.125v7.5c0 1.726-1.4 3.125-3.125 3.125h-7.5a3.126 3.126 0 0 1-3.125-3.125v-7.5c0-1.725 1.4-3.125 3.125-3.125z"}}),a("path",{attrs:{d:"M18.825 23.816a1.25 1.25 0 0 1 0-2.5h11.25a1.25 1.25 0 0 1 0 2.5h-11.25z"}})])]),t._v(" "),a("span",{staticClass:"app-dash-icon-label"},[t._v("Apps")])]),t._v(" "),a("transition",{attrs:{name:"app-pane-slide-fade"}},[t.containerOpen?a("div",{staticClass:"app nipple-top-left",attrs:{tabs:t.$options.tabs,activeTab:t.activeTab}},[a("header",{staticClass:"header"},[t.isLoading||t.isEmpty?a("nav",{ref:"tabs-loading",staticClass:"tabs-loading"},t._l(t.$options.dimensions.loadingStateTabCount,function(e,n){return a("span",{key:e,staticClass:"tab"},[a("span",{staticClass:"tab-text-placeholder"},[t._v("setsHeight"),a("span")]),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.tabListSvg)}})])}),0):a("nav",[t._l(t.appData,function(e,n){return a("span",{key:n,ref:"tabs",refInFor:!0,staticClass:"tab",class:{active:n===t.activeTab},attrs:{tabindex:"0"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchToTab(n)},click:function(e){return t.switchToTab(n)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t")])}),t._v(" "),a("span",{staticClass:"underline",class:{"u--no-transition":t.blockUnderlineTransition},style:{left:t.underlineLeft,width:t.underlineWidth}})],2),t._v(" "),a("span",{staticClass:"search-wrapper"},[a("span",[a("i",{staticClass:"icon-search"}),t._v(" "),t.searchInput?a("span",{staticClass:"clear-wrapper",on:{click:function(e){return e.stopPropagation(),t.clearSearch(!0)}}},[a("svg",{staticClass:"icon icon-clear clear",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 212.982 212.982"}},[a("path",{attrs:{d:"M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"}})])]):t._e(),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],ref:"search",staticClass:"apps-search",attrs:{placeholder:"Search"},domProps:{value:t.searchInput},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.onSearchEnter(e))},input:function(e){e.target.composing||(t.searchInput=e.target.value)}}})])])]),t._v(" "),a("section",{staticClass:"body"},[a("transition",{attrs:{name:"fade",mode:"out-in",duration:t.listTransitionDuration}},[t.isLoading?a("ul",{key:"empty",ref:"apps-loading",staticClass:"app-list app-list-loading"},[a("div",{domProps:{innerHTML:t._s(t.appListSvg)}})]):a("ul",{key:t.activeTab,ref:"app-list",staticClass:"app-list",class:{"no-matches-found":0===t.filteredItems.length,"active-tab-empty":t.activeTabEmpty}},t._l(t.filteredItems,function(e,n){return a("li",{key:n,staticClass:"item",class:{"bottom-row":t.isInBottomRow(n)}},[a("a",{ref:"items",refInFor:!0,attrs:{href:e.url,target:"_blank",tabindex:"0"},on:{click:t.onLinkClick}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:e.iconUrl}})]),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(e.title))])])])}),0)])],1),t._v(" "),t.isEmpty?a("section",{staticClass:"empty-state"},[a("span",{staticClass:"empty-message"},[t._v("Your team hasn't connected any apps yet.")])]):t._e()]):t._e()])],1)};s._withStripped=!0;var r=new(i.a.extend({name:"appDataManager",data:()=>({rawData:{},appData:[],loaded:!1}),localStorageKey:"app_data",created(){this.rawData=localStorage.getObject("apps"),this.rawData&&(this.$set(this,"appData",this.buildHierarchy(this.rawData)),this.loaded=!0),this.getData().then(t=>{this.rawData=t,localStorage.setObject("apps",this.rawData),this.$set(this,"appData",this.buildHierarchy(this.rawData)),this.loaded=!0})},methods:{getData:()=>new Promise((t,e)=>{$.ajax({beforeSend:setMomentumAuthHeader,url:m.globals.urlRootApi+"team/apps",success:e=>{t(e)},error:t=>{e(t)}})}),sort:(t,e)=>t.order-e.order,buildHierarchy(t){let e=[];return t&&t.categories&&t.categories.forEach(t=>{t.apps=[],e.push(t)}),t&&t.apps&&t.apps.forEach(t=>{e.filter(e=>e.id===t.categoryId).forEach(e=>{e.apps.push(t)})}),e.sort(this.sort).forEach(t=>t.apps.sort(this.sort)),e}}})),o={name:"AppLauncher",dimensions:{rowLength:4,maxRows:2,itemMargin:10,itemHeight:114,itemWidth:144,appPadding:21,tabSidePadding:11,loadingStateItemCount:8,loadingStateTabCount:2},loadingAnimationDuration:1500,loadingAnimationDelay:200,data:()=>({containerOpen:!1,activeTab:0,searchInput:"",underlineLeft:0,underlineWidth:0,blockUnderlineTransition:!0,blockListTransition:!0,regionHeight:null,shiftNipple:0,appListSvg:"",tabListSvg:""}),computed:{isLoading:()=>!r.loaded,isEmpty(){return!(this.isLoading||this.appData&&this.appData.length)},activeTabEmpty(){return!this.isLoading&&!this.isEmpty&&0===this.appData[this.activeTab].apps.length},appData:()=>r.appData,launcherWidth(){let t=this.$options.dimensions;return(t.itemWidth+t.itemMargin)*t.rowLength-t.itemMargin+2*t.appPadding},bottomRowItemCount(){let t=this.filteredItems.length,e=this.$options.dimensions.rowLength,a=t%e;return 0===a&&0!==t&&(a=e),a},listTransitionDuration(){return this.blockListTransition?0:100},searchCharacters(){return this.searchInput.toUpperCase().split("")},searchCharacterCounts(){let t={};return this.searchCharacters.map(e=>{" "!==e&&(t.hasOwnProperty(e)?t[e]++:t[e]=1)}),t},searchKeywords(){return this.searchInput.toUpperCase().split(" ")},filteredItems(){if(!this.appData.length)return[];if(!this.searchInput)return this.appData[this.activeTab].apps;const t=t=>((t,e)=>e.every(e=>t.toUpperCase().includes(e)))(t,this.searchKeywords)?t.toUpperCase().startsWith(this.searchKeywords[0])?2:1:0;return this.appData[this.activeTab].apps.filter(t=>((t,e)=>Object.keys(e).every(a=>t.toUpperCase().split(a).length-1>=e[a]))(t.title,this.searchCharacterCounts)).sort((e,a)=>t(a.title)-t(e.title))}},created(){this.eventBus=_.extend(this,Backbone.Events),this.eventBus.listenTo(m,"globalEvent:key:A",this.toggleApp)},mounted(){this.toggleApp(),setTimeout(()=>{this.blockListTransition=!1},300)},destroyed(){this.eventBus.stopListening(m,"globalEvent:key:A",this.toggleApp)},methods:{switchToTab(t){this.activeTab=t,this.$nextTick(()=>{this.setUnderlinePosition()})},toggleApp(){if(this.containerOpen=!this.containerOpen,this.containerOpen){if(this.updatePositioning(!0),this.addListeners(),this.isLoading){this.tabListSvg&&this.appListSvg||this.$nextTick(()=>this.getLoadingStateSVG());let t=this.$watch("isLoading",e=>{!1===e&&(this.blockUnderlineTransition=!0,this.$nextTick(()=>{this.setUnderlinePosition(!0),t()}))})}else this.setUnderlinePosition();this.$nextTick(()=>{this.$refs.search&&this.$refs.search.focus()})}else this.removeListeners()},setUnderlinePosition(t){let e=this.$refs.tabs&&this.$refs.tabs.length&&this.$refs.tabs[this.activeTab];e&&0===this.activeTab?(this.underlineLeft=`${e.offsetLeft+this.$options.dimensions.appPadding-1}px`,this.underlineWidth=`${e.clientWidth-(this.$options.dimensions.tabSidePadding+this.$options.dimensions.appPadding)+2}px`):e&&(this.underlineLeft=`${e.offsetLeft+this.$options.dimensions.tabSidePadding-1}px`,this.underlineWidth=`${e.clientWidth-2*this.$options.dimensions.tabSidePadding+2}px`),t&&setTimeout(()=>{this.blockUnderlineTransition=!1},50)},updatePositioning(){let t=this.$refs["app-dash"].getBoundingClientRect(),e=Math.round(t.width),a=Math.round(t.left);this.shiftNipple=Math.round(a+e/2-window.innerWidth/2),this.regionHeight=this.$el.closest(".region").clientHeight},isInBottomRow(t){return this.filteredItems.length-(t+1)<this.bottomRowItemCount},getLoadingStateSVG(){let t,e,a=this.$refs["apps-loading"],n=this.$refs["tabs-loading"],i=localStorage.getObject("app-launcher-cached-loading-svg"),s=this.$options.dimensions,r=`${this.launcherWidth}-${s.itemWidth}-${s.itemHeight}-${s.itemMargin}`;i&&i.params===r?(this.appListSvg=i.appsSVG,this.tabListSvg=i.tabsSVG):(t=this.createSVG(a,"apps-clip-path","apps"),e=this.createSVG(n,"tabs-clip-path","tabs"),setTimeout(()=>{localStorage.setObject("app-launcher-cached-loading-svg",{params:r,tabsSVG:e.outerHTML,appsSVG:t.outerHTML})},1e3),this.appListSvg=t.outerHTML,this.tabListSvg=e.outerHTML)},createSVG(t,e,a){function n(t,e,a,n,i){let s=document.createElementNS(i,"rect");return s.setAttribute("width",e),s.setAttribute("height",t),s.setAttribute("rx",3),s.setAttribute("ry",3),s.setAttribute("x",a),s.setAttribute("y",n),s.setAttribute("fill","#000"),s}if(t){let i=t.clientHeight,s=t.clientWidth,r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),l=document.createElementNS(r,"defs"),c=document.createElementNS(r,"clipPath");if(o.setAttribute("height",i),o.setAttribute("width",s),o.setAttribute("viewbox",`0 0 ${i} ${s}`),c.setAttribute("id",e),o.appendChild(l),l.appendChild(c),"apps"===a){let t=this.$options.dimensions,e=t.itemWidth,a=t.itemHeight,i=t.itemMargin,s=t.appPadding,o=t.rowLength;for(let l=0;l<t.loadingStateItemCount;l++){let t,p;if(l<o)t=s+l*(e+i),p=s;else{t=s+(l-o)*(e+i),p=s+a+i}c.appendChild(n(a,e,t,p,r))}}else if("tabs"===a)for(let e of t.children){let t=e.children[0],a=t.offsetLeft,i=t.offsetTop,s=t.clientHeight,o=t.clientWidth;c.appendChild(n(s,o,a,i,r))}return o}},onSearchEnter(){this.filteredItems.length&&this.filteredItems[0]&&this.filteredItems[0].url&&window.open(this.filteredItems[0].url)},onGlobalEsc(t){document.activeElement===this.$refs.search?(t.preventDefault(),t.stopPropagation(),this.$refs.search.blur(),this.clearSearch()):this.toggleApp()},onGlobalClick(t){this.$refs["app-launcher"]&&!this.$refs["app-launcher"].contains(t.target)&&this.toggleApp()},onKeyDown(t){37===t.keyCode?"INPUT"==t.target.tagName&&t.target.value||this.onArrowLeft(t):38===t.keyCode?this.onArrowUp(t):39===t.keyCode?"INPUT"==t.target.tagName&&t.target.value||this.onArrowRight(t):40===t.keyCode&&this.onArrowDown(t)},onLinkClick(){this.toggleApp()},onArrowLeft(t){let e;if(this.targetIsTab(t.target)){if(t.preventDefault(),0===(e=this.$refs.tabs.indexOf(t.target)))return;this.$refs.tabs[e-1].focus(),this.switchToTab(e-1)}else if(this.targetIsSearch(t.target)){t.preventDefault();let e=this.$refs.tabs.length-1;this.$refs.tabs[e].focus(),this.switchToTab(e)}else if(this.targetIsItem(t.target)){if(t.preventDefault(),0===(e=this.$refs.items.indexOf(t.target))||!(e%this.$options.dimensions.rowLength))return;this.$refs.items[e-1].focus()}},onArrowUp(t){if(this.targetIsItem(t.target)){t.preventDefault();let e=this.$refs.items.indexOf(t.target);if(e<this.$options.dimensions.rowLength)this.$refs.search.focus();else{let t=e-this.$options.dimensions.rowLength;this.scrollToElement(this.$refs.items[t]),this.$refs.items[t].focus({preventScroll:!0})}}},onArrowRight(t){let e;if(this.targetIsTab(t.target))t.preventDefault(),(e=this.$refs.tabs.indexOf(t.target))===this.$refs.tabs.length-1?this.$refs.search.focus():(this.$refs.tabs[e+1].focus(),this.switchToTab(e+1));else if(this.targetIsItem(t.target)){if(t.preventDefault(),!(((e=this.$refs.items.indexOf(t.target))+1)%this.$options.dimensions.rowLength))return;if(e===this.filteredItems.length-1)return;this.$refs.items[e+1].focus()}},onArrowDown(t){if((this.targetIsTab(t.target)||this.targetIsSearch(t.target))&&this.filteredItems.length)t.preventDefault(),this.scrollToElement(this.$refs.items[0]),this.$refs.items[0].focus({preventScroll:!0});else if(this.targetIsItem(t.target)){t.preventDefault();let e=this.$refs.items.indexOf(t.target)+this.$options.dimensions.rowLength;if(e>this.$refs.items.length-1)return;this.scrollToElement(this.$refs.items[e]),this.$refs.items[e].focus({preventScroll:!0})}},scrollToElement(t){this.$refs["app-list"].scrollTo({top:t.offsetTop-this.$options.dimensions.appPadding,behavior:"smooth"})},targetIsTab(t){return-1!==this.$refs.tabs.indexOf(t)},targetIsSearch(t){return this.$refs.search===t},targetIsItem(t){return-1!==this.$refs.items.indexOf(t)},addListeners(){this.eventBus.listenTo(m,"globalEvent:esc",this.onGlobalEsc),this.eventBus.listenTo(m,"globalEvent:click",this.onGlobalClick),window.addEventListener("keydown",this.onKeyDown)},removeListeners(){this.eventBus.stopListening(m,"globalEvent:esc",this.onGlobalEsc),this.eventBus.stopListening(m,"globalEvent:click",this.onGlobalClick),window.removeEventListener("keydown",this.onKeyDown)},clearSearch(t){this.searchInput="",t&&this.$refs.search.focus()}}},l=(a(7),a(1)),c=Object(l.a)(o,s,[],!1,null,"f68aa1c4",null);c.options.__file="source/addins-vue/app_launcher/Launcher.vue";var p=c.exports;m.widgetManager.handover("app_launcher",null,{region:"top-center",order:"append",bootstrap:function(t){new i.a({render:t=>t(p)}).$mount(t)}})}]);
//# sourceMappingURL=main.js.map
; return addin; }); if(m.addinManager) {m.addinManager.registerAddinFn("40203927-6651-4c0f-bc82-b25a8fe83505", fn_addin);}