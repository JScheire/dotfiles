define(["./head.js"], function (_head) {
  "use strict";

  function _templateObject_8f0ff580e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <style>\n    ", "\n    :host{\n      display: block;\n      position: absolute;\n    }\n    :host > .Bg{\n      position: absolute;\n      top: 0px;\n      right: 0px;\n      bottom: 0px;\n      left: 0px;\n    }\n    :host > .Bg::after{\n      content: '';\n      display: block;\n      position: absolute;\n      top:0px;left:0px;\n      width: 100%;\n      height: 100%;\n      background: #28344f;\n      border-radius: 4px;\n      overflow: hidden;\n      text-indent: -9999px;\n    }\n    :host > .Bg > .Corner{\n      position: absolute;\n      left: 16px;\n      bottom: 100%;\n      width: 10px;\n      height: 5px;\n      overflow: hidden;\n    }\n    :host > .Bg > .Corner::after{\n      content: '';\n      display: block;\n      border: 5px solid transparent;\n      border-bottom-color: #28344f;\n      width: 0;\n      height: 0;\n      overflow: hidden;\n      margin-top: -5px;\n    }\n    :host > .In{\n      position: relative;\n      padding: 5px 14px;\n      color: #fff;\n      font-size: 12px;\n    }\n    </style>\n\n    <div class=\"Bg\"><div class=\"Corner\"></div></div>\n    <div class=\"In\">", "</div>\n    "]);

    _templateObject_8f0ff580e12811e9872675d52dfcba91 = function _templateObject_8f0ff580e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  var GeneralTooltip =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(GeneralTooltip, _LitElement);
    babelHelpers.createClass(GeneralTooltip, [{
      key: "render",
      value: function render() {
        return (0, _head.html)(_templateObject_8f0ff580e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.text);
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

    function GeneralTooltip() {
      var _this;

      babelHelpers.classCallCheck(this, GeneralTooltip);
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(GeneralTooltip).call(this));
      _this.text = '';
      return _this;
    }

    return GeneralTooltip;
  }(_head.LitElement);

  ;
  customElements.define('general-tooltip', GeneralTooltip);
});