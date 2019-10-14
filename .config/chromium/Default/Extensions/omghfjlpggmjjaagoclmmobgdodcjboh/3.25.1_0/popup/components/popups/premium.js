define(["exports", "../head.js"], function (_exports, _head) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$premiumTemplateDefault = _render;
  _exports.$premiumTemplate = void 0;

  function _templateObject3_90f3f7c0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["<div class=\"Guarantee\">", "</div>"]);

    _templateObject3_90f3f7c0e12811e9872675d52dfcba91 = function _templateObject3_90f3f7c0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject2_90f3f7c0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <span class=\"Button_Price\">", "</span>"]);

    _templateObject2_90f3f7c0e12811e9872675d52dfcba91 = function _templateObject2_90f3f7c0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject_90f3f7c0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  :host{\n    display: block;\n    position: absolute;\n    z-index: 3;\n    top:0px;\n    right:0px;\n    left:0px;\n    height: 100%;\n    background: #fff;\n  }\n\n  .Head{\n    background: #28344f;\n    color: #fff;\n    text-align: center;\n    font-size: 17px;\n    line-height: 36px;\n    font-weight: 500;\n    position: relative;\n    padding: 9px 10px 9px;\n    height: auto;\n    overflow: visible;\n  }\n\n  .Close{\n    position: absolute;\n    top: 50%;\n    right: 0;\n    margin-top: -16px;\n    width: 10px;\n    padding-top: 10px;\n    border: 11px solid transparent;\n    height: 0;\n    overflow: hidden;\n    background: url( '/images/popup_close_2_grey.svg' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    cursor: pointer;\n  }\n  .Close:hover{\n    background-image: url( '/images/popup_close_2_white.svg' );\n  }\n  .Close::after{\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    top: 0;\n    left: 0;\n    background: url( '/images/popup_close_2_white.svg' ) 0 -5000px no-repeat;\n  }\n\n  .Features{\n    padding: 10px 35px 15px 10px;\n    color: #7a7c7f;\n  }\n  .Features > .E{\n    min-height: 95px;\n    box-sizing: border-box;\n    padding: 4px 0 0px 90px;\n    position: relative;\n  }\n  :host(.withPrice) .Features > .E{\n    min-height: 82px;\n  }\n  .Features > .E::before{\n    content: \"\";\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    width: 67px;\n    padding-top:67px;\n    position: absolute;\n    left: 4px;\n    top: 10px;\n    background-position: 0 0;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n  }\n  .Features > .E.countries::before{\n    background-image: url( '/images/promos/countries.svg' );\n  }\n  .Features > .E.speed::before{\n    background-image: url( '/images/promos/speed.svg' );\n  }\n  .Features > .E.servers::before{\n    background-image: url( '/images/promos/servers.svg' );\n  }\n\n  .Feature_Name{\n    color: #28334e;\n    font-size: 17px;\n    margin: 9px 0 2px;\n    line-height: 1.29;\n  }\n  .Feature_Text{\n    font-size: 15px;\n    line-height: 1.25;\n  }\n\n  .Button_Out{\n    padding: 0 5px;\n  }\n  .Button{\n    display: table;\n    width: 100%;\n    height: 45px;\n    background: #3d973f;\n    text-align: center;\n    border-radius: 4px;\n  }\n  :host(.withPrice) .Button{\n    height: 60px;\n  }\n  .Button:link,\n  .Button:visited,\n  .Button:hover,\n  .Button:active{\n    color: #fff;\n    text-decoration: none;\n  }\n  .Button *{\n    cursor: pointer;\n  }\n  .Button>.In{\n    display: table-cell;\n    vertical-align: middle;\n  }\n\n  .Button_Name{\n    display: block;\n    font-size: 17px;\n  }\n  :host(.withPrice) .Button_Name{\n    font-weight: 600;\n    font-size: 18px;\n  }\n  .Button_Price{\n    display: block;\n    font-size: 14px;\n  }\n\n  .Guarantee{\n    color: #808080;\n    font-size: 12px;\n    text-align: center;\n    padding-top: 7px;\n  }\n  </style>\n\n  <div class=\"Head\">\n    ", "\n    <div class=\"Close\" @click=\"", "\"></div>\n  </div>\n  <div class=\"Features\">\n    <div class=\"E countries\">\n      <div class=\"Feature_Name\">", "</div>\n      <div class=\"Feature_Text\">", "</div>\n    </div>\n    <div class=\"E speed\">\n      <div class=\"Feature_Name\">", "</div>\n      <div class=\"Feature_Text\">", "</div>\n    </div>\n    <div class=\"E servers\">\n      <div class=\"Feature_Name\">", "</div>\n      <div class=\"Feature_Text\">", "</div>\n    </div>\n  </div>\n  <div class=\"Button_Out\">\n    <a href=\"", "\" class=\"Button\" @click=\"", "\" target=\"_blank\">\n      <span class=\"In\">\n        <span class=\"Button_Name\">", "</span>\n  ", "\n      </span>\n    </a>\n  </div>\n  ", ""]);

    _templateObject_90f3f7c0e12811e9872675d52dfcba91 = function _templateObject_90f3f7c0e12811e9872675d52dfcba91() {
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
    'accessInternet': 'access_internet_via_premium_locations',
    'browsecPremium': 'browsec_premium',
    'dedicatedLanes': 'dedicated_traffic_lanes',
    'getPremiumNow': 'get_premium_now',
    'moneyBackGuarantee': '7_days_money_back_guarantee',
    'premiumLocations': 'premium_locations',
    'premiumServers': 'premium_servers',
    'performanceGuaranteed': 'top_performance_guaranteed',
    'turboSpeed': 'turbo_speed'
  });
  translations.onlyPricePerMonth = (0, _head.$internationalizeDefault)('only_X_per_month').replace(/XXX/g, price);
  /** @method */

  function _render() {
    var _this = this;

    return (0, _head.html)(_templateObject_90f3f7c0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, translations.browsecPremium, this.close, translations.premiumLocations, translations.accessInternet, translations.turboSpeed, translations.dedicatedLanes, translations.premiumServers, translations.performanceGuaranteed, this.premiumLink, this.linkClick, translations.getPremiumNow, function () {
      if (!_this.withPrice) return '';
      return (0, _head.html)(_templateObject2_90f3f7c0e12811e9872675d52dfcba91(), translations.onlyPricePerMonth);
    }(), function () {
      if (!_this.withPrice) return '';
      return (0, _head.html)(_templateObject3_90f3f7c0e12811e9872675d52dfcba91(), translations.moneyBackGuarantee);
    }());
  }

  ;
  var premiumTemplate = {
    'default': _render
  };
  _exports.$premiumTemplate = premiumTemplate;

  var PopupPremium =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(PopupPremium, _LitElement);
    babelHelpers.createClass(PopupPremium, [{
      key: "render",
      value: function render() {
        return _render.call(this);
      }
    }, {
      key: "premiumLink",
      // Properties
      get: function get() {
        var _this3 = this;

        var _window = window,
            browsecLink = _window.browsecLink,
            pageLinks = _window.pageLinks;
        return browsecLink(pageLinks.premium, function (search) {
          return Object.assign(search, {
            'utm_source': 'Chromium extension',
            'utm_medium': 'premium_div',
            'utm_campaign': 'premium_div-' + _this3.country,
            'utm_term': _this3.withPrice ? 'Get Premium now! only $3.33 per month' : 'Get Premium now!'
          });
        });
      } // Lifecycle

    }], [{
      key: "properties",
      get: function get() {
        return {
          'country': {
            'type': String
          },
          'premiumLink': {
            'type': String
          },
          'withPrice': {
            'type': Boolean
          }
        };
      }
    }]);

    function PopupPremium() {
      var _this2;

      babelHelpers.classCallCheck(this, PopupPremium);
      _this2 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PopupPremium).call(this));
      _this2.country = '';
      _this2.withPrice = Math.floor(Math.random() * 2) === 1; // Random true/false

      return _this2;
    }
    /** @method */


    babelHelpers.createClass(PopupPremium, [{
      key: "updated",
      value: function updated(changes) {
        if (changes.has('withPrice')) {
          if (this.withPrice) this.classList.add('withPrice');else this.classList.remove('withPrice');
        }
      } // Methods

      /** @method */

    }, {
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
    return PopupPremium;
  }(_head.LitElement);

  ;
  customElements.define('popup-premium', PopupPremium);
});