define(["../head.js", "../../tools/sendMessage.js"], function (_head, _sendMessage) {
  "use strict";

  function _templateObject_90f7ef60e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n      font-size: 14px;\n      line-height: 1.3;\n      color: #28344f;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 2;\n    }\n    :host > .Overlay{\n      position: absolute;\n      top:0px;right:0px;bottom:0px;left:0px;\n      overflow: hidden;\n      text-indent: -9999px;\n      font-size: 0;\n      background: rgba(255, 255, 255, 0.5);\n    }\n    :host > .In{\n      position: absolute;\n      top:56px;\n      right:0px;\n      bottom:40px;\n      left:0px;\n      border: 1px solid transparent;\n      border-width: 6px 5px 5px;\n    }\n    :host > .In > .Bg{\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background: #fff;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);\n      border-radius: 4px;\n      font-size: 0;\n      overflow: hidden;\n    }\n\n    :host > .In > .In{\n      position: relative;\n      display: table;\n      width: 100%;\n      height: 100%;\n    }\n    :host > .In > .In > .In{\n      display: table-cell;\n      vertical-align: middle;\n    }\n\n    .Description{\n      color: #28344f;\n      font-size: 16px;\n      line-height: 1.375;\n      padding: 0 25px;\n      text-align: center;\n    }\n    .Button{\n      text-align: center;\n      padding-top: 25px;\n    }\n    .Button input{\n      display:inline-block;\n      vertical-align:top;\n      box-sizing: content-box;\n      height: 45px;\n      line-height: 45px;\n      border: 0;\n      cursor: pointer;\n      min-width: 200px;\n      padding: 0 15px;\n      background: #3b9946;\n      text-align: center;\n      border-radius: 5px;\n      color: #fff;\n      font-size: 16px;\n      font-weight: 600;\n    }\n    </style>\n\n    <div class=\"Overlay\">&nbsp;</div>\n    <div class=\"In\">\n      <div class=\"Bg\"></div>\n      <div class=\"In\"><div class=\"In\">\n        <div class=\"Description\">\n          ", "\n        </div>\n        <div class=\"Button\"><!--\n       --><input type=\"button\" value=\"", "\" @click=\"", "\"/><!--\n     --></div>\n      </div></div>\n    </div>\n    "]);

    _templateObject_90f7ef60e12811e9872675d52dfcba91 = function _templateObject_90f7ef60e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'cantStartBecauseYourProxySettingsBlocked': 'cant_start_because_your_proxy_settings_blocked',
    'fixIt': 'fix_it'
  });

  var PopupProxyBlocked =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(PopupProxyBlocked, _LitElement);

    function PopupProxyBlocked() {
      babelHelpers.classCallCheck(this, PopupProxyBlocked);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PopupProxyBlocked).apply(this, arguments));
    }

    babelHelpers.createClass(PopupProxyBlocked, [{
      key: "render",
      value: function render() {
        return (0, _head.html)(_templateObject_90f7ef60e12811e9872675d52dfcba91(), _head.$globalStyleDefault, translations.cantStartBecauseYourProxySettingsBlocked, translations.fixIt, this.fixIt);
      } // Methods

      /** @method */

    }, {
      key: "fixIt",
      value: function () {
        var _fixIt = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _sendMessage.$sendMessageDefault)({
                    'type': 'create tab',
                    'options': '/pages/unblock_proxy/unblock_proxy.html'
                  });

                case 2:
                  window.close();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function fixIt() {
          return _fixIt.apply(this, arguments);
        }

        return fixIt;
      }()
    }]);
    return PopupProxyBlocked;
  }(_head.LitElement);

  ;
  customElements.define('popup-proxy-blocked', PopupProxyBlocked);
});