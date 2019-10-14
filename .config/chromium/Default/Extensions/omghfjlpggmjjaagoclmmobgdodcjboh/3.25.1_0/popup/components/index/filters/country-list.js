define(["exports", "../../head.js"], function (_exports, _head) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$countryListTemplateDefault = _render;
  _exports.$countryListTemplate = void 0;

  function _templateObject2_91024fa0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div\n      class=\"E", "\"\n      @click=\"", "\"\n      @mousemove=\"", "\">\n      <div class=\"In\">\n        <div class=\"Name\">", "</div>\n        <div class=\"Flag\">\n          <img src=\"", "\" width=\"30\" height=\"20\" alt=\"\"/>\n        </div>\n      </div>\n    </div>"]);

    _templateObject2_91024fa0e12811e9872675d52dfcba91 = function _templateObject2_91024fa0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject_91024fa0e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  :host{\n    display: block;\n    overflow: auto;\n    position: absolute;\n    background: #fff;\n    border: 1px solid #bcbcbc;\n    padding: 4px 0;\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n    box-sizing: border-box;\n  }\n\n  .E{\n    padding: 4px 10px;\n    cursor: pointer;\n    user-select: none;\n  }\n  .E.highlighted{\n    background: #f5f5f5;\n  }\n  .E > .In{\n    display: table;\n    width: 100%;\n  }\n\n  .Name{\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .Flag{\n    display: table-cell;\n    vertical-align: middle;\n    padding-left: 10px;\n    width: 1px;\n  }\n  .Flag img{\n    display: block;\n    border-radius: 4px;\n    filter: saturate(135%);\n    opacity:0.7;\n    border: 1px solid rgba(0, 0, 0, 0.22);\n  }\n  .Flag_Off{\n    width: 30px;\n    line-height: 20px;\n    font-size: 14px;\n    color: #994136;\n    text-align: center;\n  }\n\n  .Off{\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    border-bottom: 1px solid #cccccc;\n  }\n  </style>\n\n  <div class=\"Off\">\n    <div\n      class=\"E", "\"\n      @click=\"", "\"\n      @mousemove=\"", "\">\n      <div class=\"In\">\n        <div class=\"Name\">", "</div>\n        <div class=\"Flag\"><div class=\"Flag_Off\">", "</div></div>\n      </div>\n    </div>\n  </div>\n  ", ""]);

    _templateObject_91024fa0e12811e9872675d52dfcba91 = function _templateObject_91024fa0e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'browsecOff': 'browsec_off',
    'off': 'off'
  });
  /** @function */

  var flagUrl = function flagUrl(flag
  /*: string | void*/
  )
  /*: string*/
  {
    if (flag === 'usw') flag = 'us';
    if (flag === 'uk') flag = 'gb';
    return flag ? "/images/flags/".concat(flag, ".svg") : '/images/empty.png';
  };
  /** @method */


  function _render() {
    var _this = this;

    return (0, _head.html)(_templateObject_91024fa0e12811e9872675d52dfcba91(), _head.$globalStyleDefault, this.country === null ? ' highlighted' : '', this.offClick, this.elementHighlight(null), translations.browsecOff, translations.off, this.countries.map(function (item) {
      return (0, _head.html)(_templateObject2_91024fa0e12811e9872675d52dfcba91(), _this.country === item.code ? ' highlighted' : '', _this.elementClick(item.code), _this.elementHighlight(item.code), item.name, flagUrl(item.code));
    }));
  }

  ;
  var countryListTemplate = {
    'default': _render
  };
  _exports.$countryListTemplate = countryListTemplate;

  var FiltersCountryList =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(FiltersCountryList, _LitElement);
    babelHelpers.createClass(FiltersCountryList, [{
      key: "render",
      value: function render() {
        return _render.call(this);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'countries': {
            'type': Array
            /** @type {Array<Object>} */

          },
          'country': {
            'type': String
          }
        };
      } // Lifecycle

    }]);

    function FiltersCountryList() {
      var _this2;

      babelHelpers.classCallCheck(this, FiltersCountryList);
      _this2
      /*: any*/
      = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(FiltersCountryList).call(this));
      _this2.keydownListener = _this2.keydownListener.bind(babelHelpers.assertThisInitialized(_this2));
      _this2.countries = [];
      _this2.country = null;
      return _this2;
    }
    /** @method */


    babelHelpers.createClass(FiltersCountryList, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(FiltersCountryList.prototype), "connectedCallback", this).call(this);
        this.charsBuffer = new _head.$CharsBufferDefault();
        document.addEventListener('keydown', this.keydownListener);
      }
      /** @method */

    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        var _this3 = this;

        var namesData
        /*: Array<CountryObject>*/
        = this.countries.map(function (_ref) {
          var code = _ref.code,
              name = _ref.name;
          return {
            code: code,
            'name': name.toLowerCase()
          };
        });
        this.namesList = Array.from(this.shadowRoot.children).filter(function (element) {
          return element.tagName.toLowerCase() === 'div';
        }) // Exclude 'style'
        .slice(1).map(function (element, index) {
          var _namesData$index = namesData[index],
              code = _namesData$index.code,
              name = _namesData$index.name;
          return {
            element: element,
            code: code,
            name: name
          };
        })
        /*: Array<NameListItem>*/
        ; // Add OFF element

        this.namesList.unshift({
          'code': null,
          'element': this.shadowRoot.querySelector('div.Off > div.E'),
          'name': 'OFF'
        });
        this.charsBuffer.addListener(function (word) {
          var match
          /*: NameListItem | void*/
          = _this3.namesList.find(function (_ref2) {
            var code = _ref2.code,
                name = _ref2.name;
            return code && name.startsWith(word);
          });

          if (!match) return;
          var element = match.element,
              code = match.code;
          _this3.country = code; // Scroll to this element

          _this3.scrollTop = element.offsetTop - 2;
        });
      }
      /** @method */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(FiltersCountryList.prototype), "disconnectedCallback", this).call(this);
        document.removeEventListener('keydown', this.keydownListener);
      } // Methods

      /** @method */

    }, {
      key: "elementClick",
      value: function elementClick(country
      /*: string*/
      )
      /*: Function*/
      {
        var _this4 = this;

        return function () {
          _this4.dispatchEvent(new CustomEvent('select', {
            'detail': country
          }));

          _this4.remove();
        };
      }
      /** @method */

    }, {
      key: "elementHighlight",
      value: function elementHighlight(country
      /*: string | null*/
      )
      /*: Function*/
      {
        var _this5 = this;

        return function (event
        /*: MouseEvent & { 'webkitMovementX': number, 'webkitMovementY': number }*/
        ) {
          var mouseReallyMoved = Boolean('movementX' in event ? event.movementX || event.movementY : event.webkitMovementX || event.webkitMovementY);
          if (mouseReallyMoved) _this5.country = country;
        };
      }
      /** @method */

    }, {
      key: "keydownListener",
      value: function keydownListener(event
      /*: KeyboardEvent*/
      )
      /*: void*/
      {
        var _this6 = this;

        var key = event.key;

        if (key === 'ArrowDown' || key === 'ArrowUp') {
          event.preventDefault();

          var newHighlightedIndex
          /*: integer*/
          = function () {
            var length
            /*: integer*/
            = _this6.namesList.length;

            var index
            /*: integer*/
            = _this6.namesList.findIndex(function (_ref3) {
              var code = _ref3.code;
              return code === _this6.country;
            });

            index = index + (key === 'ArrowDown' ? 1 : -1);
            return (index + length) % length;
          }();

          var data
          /*: NameListItem*/
          = this.namesList[newHighlightedIndex];
          this.country = data.code; // Scroll whole list if new item is partially or not visible

          var topEdge
          /*: number*/
          = this.scrollTop;
          var screenHeight
          /*: number*/
          = this.offsetHeight;
          var bottomEdge
          /*: number*/
          = topEdge + screenHeight;
          var newElementHeight
          /*: number*/
          = data.element.offsetHeight;
          var newElementTopEdge
          /*: number*/
          = data.element.offsetTop;
          var newElementBottomEdge
          /*: number*/
          = newElementTopEdge + newElementHeight;
          var visible
          /*: boolean*/
          = newElementTopEdge >= topEdge && newElementBottomEdge <= bottomEdge;
          if (visible) return;

          var scrollTop
          /*: number*/
          = function () {
            // Hidden item at bottom
            if (newElementTopEdge >= topEdge) {
              return newElementBottomEdge - screenHeight + 2;
            } // Hidden item at top


            return newElementTopEdge - 2;
          }();

          this.scrollTop = scrollTop;
          return;
        }

        if (key === 'Enter') {
          if (this.country) {
            this.dispatchEvent(new CustomEvent('select', {
              'detail': this.country
            }));
          } else this.dispatchEvent(new CustomEvent('disable'));

          this.remove();
          return;
        }

        this.charsBuffer.keydownListener(event);
      }
      /** @method */

    }, {
      key: "offClick",
      value: function offClick()
      /*: void*/
      {
        this.dispatchEvent(new CustomEvent('disable'));
        this.remove();
      }
    }]);
    return FiltersCountryList;
  }(_head.LitElement);

  ;
  customElements.define('filters-country-list', FiltersCountryList);
});