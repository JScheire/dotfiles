define(["../head.js"], function (_head) {
  "use strict";

  function _templateObject_90eaf710e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n      position: absolute;\n      z-index: 3;\n      top:0px;right:0px;left:0px;\n      height: 100%;\n      background: #fff;\n    }\n\n    .Head{\n      background: #28344f;\n      color: #fff;\n      text-align: center;\n      font-size: 17px;\n      line-height: 36px;\n      font-weight: 500;\n      position: relative;\n      padding: 9px 10px 9px;\n    }\n\n    .Close{\n      position: absolute;\n      top: 50%;\n      right: 0;\n      margin-top: -16px;\n      width: 10px;\n      padding-top: 10px;\n      border: 11px solid transparent;\n      height: 0;\n      overflow: hidden;\n      background: url( '/images/popup_close_2_grey.svg' ) 0 0 no-repeat;\n      background-size: 100% 100%;\n      cursor: pointer;\n    }\n    .Close:hover{\n      background-image: url( '/images/popup_close_2_white.svg' );\n    }\n    .Close::after{\n      content: '';\n      display: block;\n      position: absolute;\n      width: 1px;\n      height: 1px;\n      top: 0;\n      left: 0;\n      background: url( '/images/popup_close_2_white.svg' ) 0 -5000px no-repeat;\n    }\n\n    .Text{\n      padding: 20px 25px;\n      color: #28344f;\n      line-height: 1.35;\n    }\n    .Title{\n      font-size: 18px;\n      font-weight: 600;\n      padding-bottom: 15px;\n    }\n    .Description{\n      font-size: 16px;\n    }\n    .Description p{\n      padding-bottom: 1em;\n    }\n    .Description ul{\n      list-style: none;\n    }\n    .Description ul > li{\n      position: relative;\n      padding-left: 20px;\n    }\n    .Description ul > li::after{\n      content: '';\n      background: url( '/images/popup-help/check.svg' ) 0 0 no-repeat;\n      background-size: 100% 100%;\n      width: 12px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top: 9px;\n      position: absolute;\n      top: 50%;\n      margin-top: -5px;\n      left: 0;\n    }\n\n    .Button_Out{\n      /* position: absolute;right:5px;bottom:5px;left:5px; */\n      padding: 0 5px;\n    }\n    .Button{\n      display: table;\n      width: 100%;\n      height: 60px;\n      background: #3d973f;\n      text-align: center;\n      border-radius: 4px;\n    }\n    .Button:link,\n    .Button:visited,\n    .Button:hover,\n    .Button:active{\n      color: #fff;\n      text-decoration: none;\n    }\n    .Button *{\n      cursor: pointer;\n    }\n    .Button>.In{\n      display: table-cell;\n      vertical-align: middle;\n    }\n\n    .Button_Name{\n      display: block;\n      font-size: 16px;\n      font-weight: 600;\n    }\n    .Button_Price{\n      display: block;\n      font-size: 14px;\n    }\n\n    .Guarantee{\n      color: #808080;\n      font-size: 12px;\n      text-align: center;\n      padding-top: 7px;\n    }\n    </style>\n\n    <div class=\"Head\">\n      ", "\n      <div class=\"Close\" @click=\"", "\"></div>\n    </div>\n    <div class=\"Text\">\n      <div class=\"Title\">", "</div>\n      <div class=\"Description\">\n        <p>", "</p>\n        <p>", "</p>\n        <ul>\n          <li>", "</li>\n          <li>", "</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"Button_Out\">\n      <a href=\"", "\" class=\"Button\" @click=\"", "\" target=\"_blank\">\n        <span class=\"In\">\n          <span class=\"Button_Name\">", "</span>\n          <span class=\"Button_Price\">", "</span>\n        </span>\n      </a>\n    </div>\n    <div class=\"Guarantee\">", "</div>\n    "]);

    _templateObject_90eaf710e12811e9872675d52dfcba91 = function _templateObject_90eaf710e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  var price
  /*: string*/
  = '3.33';
  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'browsecPremium': 'browsec_premium',
    'moneyBackGuarantee': '7_days_money_back_guarantee',
    'oneSmartSettingDescription1': 'one_smart_setting_description_1',
    'oneSmartSettingDescription2': 'one_smart_setting_description_2',
    'oneSmartSettingDescriptionList1': 'one_smart_setting_description_list_1',
    'oneSmartSettingDescriptionList2': 'one_smart_setting_description_list_2',
    'upgradeToPremium': 'upgrade_to_premium',
    'youCanHaveOnlyOneSmartSetting': 'you_can_have_only_1_smart_setting'
  });
  translations.onlyPricePerMonth = (0, _head.$internationalizeDefault)('only_X_per_month').replace(/XXX/, price);

  var PopupPremiumOnerule =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(PopupPremiumOnerule, _LitElement);
    babelHelpers.createClass(PopupPremiumOnerule, [{
      key: "render",
      value: function render() {
        return (0, _head.html)(_templateObject_90eaf710e12811e9872675d52dfcba91(), _head.$globalStyleDefault, translations.browsecPremium, this.close, translations.youCanHaveOnlyOneSmartSetting, translations.oneSmartSettingDescription1, translations.oneSmartSettingDescription2, translations.oneSmartSettingDescriptionList1, translations.oneSmartSettingDescriptionList2, this.premiumLink, this.linkClick, translations.upgradeToPremium, translations.onlyPricePerMonth, translations.moneyBackGuarantee);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'premiumLink': {
            'type': String
          }
        };
      }
    }]);

    function PopupPremiumOnerule() {
      var _this;

      babelHelpers.classCallCheck(this, PopupPremiumOnerule);
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PopupPremiumOnerule).call(this));
      var _window = window,
          browsecLink = _window.browsecLink,
          pageLinks = _window.pageLinks;
      _this.premiumLink = browsecLink(pageLinks.premium, function (search) {
        return Object.assign(search, {
          'utm_source': 'Chromium extension',
          'utm_medium': 'premium_div',
          'utm_campaign': 'premium_div_smartlocations',
          'utm_term': 'Upgrade to Premium. Only $3.33 per month'
        });
      });
      return _this;
    } // Methods

    /** @method */


    babelHelpers.createClass(PopupPremiumOnerule, [{
      key: "linkClick",
      value: function () {
        var _linkClick = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  (0, _head.$gaDefault)('premium', 'click'); // For FF and early Chrome

                  _context.next = 3;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 50);
                  });

                case 3:
                  if (window && window.close) window.close();

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function linkClick() {
          return _linkClick.apply(this, arguments);
        }

        return linkClick;
      }()
      /** @method */

    }, {
      key: "close",
      value: function () {
        var _close = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return window.anime({
                    'targets': this,
                    'top': '-100%',
                    'duration': 800,
                    'easing': 'linear'
                  }).finished;

                case 2:
                  this.remove();

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function close() {
          return _close.apply(this, arguments);
        }

        return close;
      }()
    }]);
    return PopupPremiumOnerule;
  }(_head.LitElement);

  ;
  customElements.define('popup-premium-onerule', PopupPremiumOnerule);
});