define(["./head.js"], function (_head) {
  "use strict";

  function _templateObject_90d720f0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n      position: absolute;\n    }\n    :host > .Bg{\n      position: absolute;\n      top:0px;\n      right:0px;\n      bottom:0px;\n      left:0px;\n      background: #faf5f5;\n      border-radius: 4px;\n      border: 1px solid #8e3c33;\n      font-size: 0;\n      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);\n    }\n    :host > .Bg::before,\n    :host > .Bg::after{\n      content: '';\n      display: block;\n      position: absolute;\n      left: 16px;\n      width: 0;\n      height: 0;\n      overflow: hidden;\n      border: 5px solid transparent;\n    }\n    :host > .Bg:before{\n      top: -10px;\n      border-bottom-color: #8e3c33;\n    }\n    :host > .Bg:after{\n      top: -9px;\n      border-bottom-color: #faf5f5;\n    }\n    :host > .In{\n      position: relative;\n      color: #994136;\n      font-size: 12px;\n      padding: 4px 11px;\n      line-height: 19px;\n      min-height: 19px; /* NOTE border in .Bg */\n      min-width: 12px;\n    }\n    </style>\n\n    <div class=\"Bg\"></div>\n    <div class=\"In\">", "</div>\n    "]);

    _templateObject_90d720f0e12811e9872675d52dfcba91 = function _templateObject_90d720f0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  var TooltipError =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(TooltipError, _LitElement);
    babelHelpers.createClass(TooltipError, [{
      key: "render",
      value: function render() {
        return (0, _head.html)(_templateObject_90d720f0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.text);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'text': {
            'type': String
          }
        };
      }
    }]);

    function TooltipError() {
      var _this;

      babelHelpers.classCallCheck(this, TooltipError);
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(TooltipError).call(this));
      _this.text = '';
      return _this;
    }

    return TooltipError;
  }(_head.LitElement);

  customElements.define('tooltip-error', TooltipError);
});