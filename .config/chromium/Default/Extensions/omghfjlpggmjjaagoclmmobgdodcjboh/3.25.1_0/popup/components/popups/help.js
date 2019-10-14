define(["../head.js"], function (_head) {
  "use strict";

  function _templateObject_90e13310e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n      font-size: 14px;\n      line-height: 1.3;\n      color: #28344f;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 2;\n    }\n    :host > .Overlay{\n      position: absolute;\n      top:0px;right:0px;bottom:0px;left:0px;\n      overflow: hidden;\n      text-indent: -9999px;\n      font-size: 0;\n    }\n    :host > .In{\n      position: absolute;\n      top:56px;\n      right:0px;\n      bottom:40px;\n      left:0px;\n      border: 1px solid transparent;\n      border-width: 6px 5px 5px;\n    }\n    :host > .In > .Bg{\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background: #fff;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);\n      border-radius: 4px;\n      font-size: 0;\n      overflow: hidden;\n    }\n    :host > .In > .In{\n      position: relative;\n      padding: 27px 20px;\n    }\n\n    .Title{\n      font-size: 18px;\n      padding-bottom: 15px;\n      font-weight: 600;\n    }\n    .Description{\n      padding-bottom: 20px;\n    }\n    ul{\n      list-style: none;\n    }\n    ul > li{\n      padding-left: 20px;\n      position: relative;\n    }\n    ul > li::after{\n      content: '';\n      display: block;\n      background: url('/images/popup-help/check.svg') 0 0 no-repeat;\n      background-size: 100% 100%;\n      width: 14px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:10px;\n      position: absolute;\n      top: 5px;\n      left: 0;\n    }\n    ul > li + li{\n      border-top: 7px solid transparent;\n    }\n    .Button{\n      text-align: center;\n      padding-top: 15px;\n\n    }\n    .Button input{\n      display:inline-block;\n      vertical-align:top;\n      box-sizing: content-box;\n      height: 45px;\n      line-height: 45px;\n      border: 0;\n      cursor: pointer;\n      min-width: 200px;\n      padding: 0 15px;\n      background: #3b9946;\n      text-align: center;\n      border-radius: 5px;\n      color: #fff;\n      font-size: 16px;\n      font-weight: 600;\n    }\n\n    .Close{\n      position: absolute;\n      top: 16px;\n      right: 16px;\n      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;\n      background-size: 100% 100%;\n      width: 12px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:12px;\n      cursor: pointer;\n    }\n    .Close:hover{\n      background-image: url( '/images/popup_close_black.svg' );\n    }\n    .Close::after{\n      content: '';\n      display: block;\n      width: 1px;\n      height: 1px;\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;\n    }\n    </style>\n\n    <div class=\"Overlay\">&nbsp;</div>\n    <div class=\"In\">\n      <div class=\"Bg\"></div>\n      <div class=\"In\">\n        <div class=\"Title\">", "</div>\n        <div class=\"Description\">", "</div>\n        <div class=\"Features\">\n          <ul>\n            <li>", "</li>\n            <li>", "</li>\n            <li>", "</li>\n          </ul>\n        </div>\n        <div class=\"Button\"><input type=\"button\" value=\"", "\" @click=\"", "\"/></div>\n        <div class=\"Close\" @click=\"", "\">X</div>\n      </div>\n    </div>\n    "]);

    _templateObject_90e13310e12811e9872675d52dfcba91 = function _templateObject_90e13310e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'okIGotIt': 'ok_i_got_it',
    'smartSettingsControl': 'smart_settings_allow_you_to_control',
    'smartSettingsFeatures1': 'smart_settings_features_1',
    'smartSettingsFeatures2': 'smart_settings_features_2',
    'smartSettingsFeatures3': 'smart_settings_features_3',
    'withSmartSettingsYouCan': 'with_smart_settings_you_can'
  });

  var PopupHelp =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(PopupHelp, _LitElement);

    function PopupHelp() {
      babelHelpers.classCallCheck(this, PopupHelp);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PopupHelp).apply(this, arguments));
    }

    babelHelpers.createClass(PopupHelp, [{
      key: "render",
      value: function render() {
        return (0, _head.html)(_templateObject_90e13310e12811e9872675d52dfcba91(), _head.$globalStyleDefault, translations.smartSettingsControl, translations.withSmartSettingsYouCan, translations.smartSettingsFeatures1, translations.smartSettingsFeatures2, translations.smartSettingsFeatures3, translations.okIGotIt, this.close, this.close);
      } // Methods

      /** @method */

    }, {
      key: "close",
      value: function () {
        var _close = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return window.anime({
                    'targets': this,
                    'opacity': 0,
                    'duration': 400,
                    'easing': 'linear'
                  }).finished;

                case 2:
                  this.style.cssText = 'display:none'; // this.remove();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function close() {
          return _close.apply(this, arguments);
        }

        return close;
      }()
    }]);
    return PopupHelp;
  }(_head.LitElement);

  ;
  customElements.define('popup-help', PopupHelp);
});