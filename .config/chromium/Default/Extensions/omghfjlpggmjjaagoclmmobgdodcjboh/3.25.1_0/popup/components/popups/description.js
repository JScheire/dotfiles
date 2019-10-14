define(["../head.js"], function (_head) {
  "use strict";

  function _templateObject3_90de73f0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n          <div class=\"Title\">", "</div>\n          <p>", "</p>\n          <p>", "</p>\n          <p>", "</p>"]);

    _templateObject3_90de73f0e12811e9872675d52dfcba91 = function _templateObject3_90de73f0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject2_90de73f0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n          <p>", "</p>\n          <p>", "</p>\n          <p>", "</p>"]);

    _templateObject2_90de73f0e12811e9872675d52dfcba91 = function _templateObject2_90de73f0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject_90de73f0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n      font-size: 14px;\n      line-height: 1.3;\n      color: #28344f;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 2;\n    }\n    :host > .Overlay{\n      position: absolute;\n      top:0px;right:0px;bottom:0px;left:0px;\n      overflow: hidden;\n      text-indent: -9999px;\n      font-size: 0;\n      background: rgba(255, 255, 255, 0.5);\n    }\n    :host > .In{\n      position: absolute;\n      top:56px;\n      right:0px;\n      bottom:40px;\n      left:0px;\n      border: 1px solid transparent;\n      border-width: 6px 5px 5px;\n    }\n    :host > .In > .Bg{\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background: #fff;\n      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);\n      border-radius: 4px;\n      font-size: 0;\n      overflow: hidden;\n    }\n\n    :host > .In > .In{\n      position: relative;\n      width: 100%;\n      height: 100%;\n    }\n    :host > .In > .In > .In{\n      position: absolute;\n      left: 20px;\n      right: 20px;\n      top: 25px;\n      bottom: 20px;\n      overflow: auto;\n    }\n    :host > .In > .In > .In::-webkit-scrollbar{\n      width: 6px;\n    }\n    :host > .In > .In > .In::-webkit-scrollbar-track{\n      border-radius: 3px;\n      background: rgba(255,255,255,0);\n    }\n    :host > .In > .In > .In::-webkit-scrollbar-thumb{\n      border-radius: 3px;\n      background: #aaa;\n    }\n\n    .Text{\n      color: #28344f;\n      font-size: 14px;\n      line-height: 1.375;\n    }\n    .Title{\n      font-size: 18px;\n      font-weight: 600;\n      padding-bottom: 15px;\n    }\n    .Text p + p{\n      padding-top: 1em;\n    }\n\n    .Close{\n      background: url( '/images/popup_close_grey.svg' ) 0 0 no-repeat;\n      background-size: 100% 100%;\n      width: 12px;\n      overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n      padding-top:12px;\n      position: absolute;\n      right: 11px;\n      top: 11px;\n      border: 5px solid transparent;\n      cursor: pointer;\n    }\n    .Close:hover{\n      background-image: url( '/images/popup_close_black.svg' );\n    }\n    .Close::after{\n      content: '';\n      display: block;\n      width: 1px;\n      height: 1px;\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: url( '/images/popup_close_black.svg' ) 0 -5000px no-repeat;\n    }\n    </style>\n\n    <div class=\"Overlay\" @click=\"", "\">&nbsp;</div>\n    <div class=\"In\">\n      <div class=\"Bg\"></div>\n      <div class=\"In\">\n        <div class=\"In Text\">\n  ", "\n        </div>\n        <div class=\"Close\" @click=\"", "\">X</div>\n      </div>\n    </div>\n    "]);

    _templateObject_90de73f0e12811e9872675d52dfcba91 = function _templateObject_90de73f0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  var translations
  /*: { [ string ]: { [ string ]: string } }*/
  = (0, _head.$createTranslationObjectDefault)({
    'changeTimezone': {
      'p1': 'change_timezone_text_1',
      'p2': 'change_timezone_text_2',
      'p3': 'change_timezone_text_3'
    },
    'whatIsWebrtc': {
      'title': 'what_is_webrtc_title',
      'p1': 'what_is_webrtc_text_1',
      'p2': 'what_is_webrtc_text_2',
      'p3': 'what_is_webrtc_text_3'
    }
  });

  var PopupDescription =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(PopupDescription, _LitElement);
    babelHelpers.createClass(PopupDescription, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return (0, _head.html)(_templateObject_90de73f0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.close, function () {
          if (_this2.theme === 'date') {
            return (0, _head.html)(_templateObject2_90de73f0e12811e9872675d52dfcba91(), translations.changeTimezone.p1, translations.changeTimezone.p2, translations.changeTimezone.p3);
          }

          if (_this2.theme === 'webrtc') {
            return (0, _head.html)(_templateObject3_90de73f0e12811e9872675d52dfcba91(), translations.whatIsWebrtc.title, translations.whatIsWebrtc.p1, translations.whatIsWebrtc.p2, translations.whatIsWebrtc.p3);
          }

          return '';
        }(), this.close);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'theme': {
            'type': String
          }
        };
      }
    }]);

    function PopupDescription() {
      var _this;

      babelHelpers.classCallCheck(this, PopupDescription);
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PopupDescription).call(this));
      _this.theme = '';
      return _this;
    } // Methods


    babelHelpers.createClass(PopupDescription, [{
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
                  this.remove();

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
    return PopupDescription;
  }(_head.LitElement);

  ;
  customElements.define('popup-description', PopupDescription);
});