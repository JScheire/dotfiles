define(["exports", "./head.js", "../tools/sendMessage.js"], function (_exports, _head, _sendMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$contextMenuTemplateDefault = _render;
  _exports.$contextMenuTemplate = void 0;

  function _templateObject4_8f0c9a20e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"Element\" @click=\"", "\">\n      ", "\n    </div>"]);

    _templateObject4_8f0c9a20e12811e9872675d52dfcba91 = function _templateObject4_8f0c9a20e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject3_8f0c9a20e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"Element\" @click=\"", "\">\n      ", "\n    </div>"]);

    _templateObject3_8f0c9a20e12811e9872675d52dfcba91 = function _templateObject3_8f0c9a20e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject2_8f0c9a20e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"Element\" @click=\"", "\">\n      ", "\n    </div>"]);

    _templateObject2_8f0c9a20e12811e9872675d52dfcba91 = function _templateObject2_8f0c9a20e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  function _templateObject_8f0c9a20e12811e9872675d52dfcba91() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  :host{\n    display: block;\n    position: absolute;\n    bottom: 40px;\n    font-size: 12px;\n    color: #28344f;\n  }\n  :host > .In{\n    position: relative;\n    border-radius: 3px;\n    background: #fff;\n    border: 1px solid #bcbcbc;\n    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.35);\n  }\n\n  .Element{\n    padding: 0 12px;\n    line-height: 34px;\n    white-space: nowrap;\n    cursor: pointer;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .Element:hover{\n    background: #28344f;\n    color: #fff;\n  }\n  .Element ~ .Element{\n    border-top: 1px solid #e6e6e6;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n  }\n  .Element:last-child{\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px;\n  }\n  </style>\n\n  <div class=\"In\">\n  ", "\n\n  ", "\n    <div class=\"Element\" @click=\"", "\">", "</div>\n  </div>"]);

    _templateObject_8f0c9a20e12811e9872675d52dfcba91 = function _templateObject_8f0c9a20e12811e9872675d52dfcba91() {
      return data;
    };

    return data;
  }

  var translations
  /*: { [ string ]: string }*/
  = (0, _head.$createTranslationObjectDefault)({
    'help': 'help',
    'addSettingFor': 'add_smart_setting_for_X',
    'deleteSettingFor': 'delete_smart_setting_for_X',
    'editSmartSettings': 'edit_smart_settings'
  });
  /** @function */

  var domainTextTranslation = function domainTextTranslation(property
  /*: string*/
  , domain
  /*: string*/
  ) {
    return (
      /*: string*/
      translations[property].replace(/XXX/g, domain)
    );
  };
  /** @method */


  function _render() {
    var _this = this;

    return (0, _head.html)(_templateObject_8f0c9a20e12811e9872675d52dfcba91(), _head.$globalStyleDefault, function () {
      if (!_this.domain) return '';

      if (!_this.containsFilter) {
        return (0, _head.html)(_templateObject2_8f0c9a20e12811e9872675d52dfcba91(), _this.addFilter, domainTextTranslation('addSettingFor', _this.unicodeDomain));
      }

      return (0, _head.html)(_templateObject3_8f0c9a20e12811e9872675d52dfcba91(), _this.removeFilter, domainTextTranslation('deleteSettingFor', _this.unicodeDomain));
    }(), function () {
      if (!_this.showEditSmartSettings) return '';
      return (0, _head.html)(_templateObject4_8f0c9a20e12811e9872675d52dfcba91(), _this.editSettings, translations.editSmartSettings);
    }(), this.openHelp, translations.help);
  }

  ;
  var contextMenuTemplate = {
    'default': _render
  };
  _exports.$contextMenuTemplate = contextMenuTemplate;

  var ContextMenu =
  /*#__PURE__*/
  function (_connect) {
    babelHelpers.inherits(ContextMenu, _connect);
    babelHelpers.createClass(ContextMenu, [{
      key: "render",
      value: function render() {
        return _render.call(this);
      }
    }, {
      key: "stateChanged",
      value: function stateChanged(_ref)
      /*: void*/
      {
        var page = _ref.page;

        this.showEditSmartSettings = function () {
          var parts
          /*: Array<string>*/
          = page.split(':');
          return parts[0] !== 'index' || parts[1] !== 'filters';
        }();
      } // Lifecycle

    }], [{
      key: "properties",
      get: function get() {
        return {
          'containsFilter': {
            'type': Boolean
          },
          'domain': {
            'type': String
          },
          'showEditSmartSettings': {
            'type': Boolean
          },
          'unicodeDomain': {
            'type': String
          }
        };
      }
    }]);

    function ContextMenu() {
      var _this2;

      babelHelpers.classCallCheck(this, ContextMenu);
      _this2 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(ContextMenu).call(this));
      _this2.containsFilter = null;
      _this2.domain = '';
      _this2.unicodeDomain = '';
      return _this2;
    }
    /** @method */


    babelHelpers.createClass(ContextMenu, [{
      key: "updated",
      value: function () {
        var _updated = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(changes) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!changes.has('domain')) {
                    _context.next = 6;
                    break;
                  }

                  if (this.domain) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return");

                case 3:
                  _context.next = 5;
                  return _head.$punycodeDefault.toUnicode(this.domain);

                case 5:
                  this.unicodeDomain = _context.sent;

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function updated(_x) {
          return _updated.apply(this, arguments);
        }

        return updated;
      }() // Methods

      /** @method */

    }, {
      key: "addFilter",
      value: function addFilter()
      /*: void*/
      {
        var _store$getState = _head.$storeDefault.getState(),
            filters = _store$getState['pac'].filters,
            premiumUser = _store$getState['user']['premium'];

        if (premiumUser || !filters.length) {
          // Moving to filters page with specific domain
          _head.$storeDefault.dispatch({
            'type': 'Page change',
            'page': 'index:filters:' + this.domain
          });
        } else this.showPremiumPopup();

        this.remove();
      }
      /** @method */

    }, {
      key: "removeFilter",
      value: function removeFilter()
      /*: void*/
      {
        _head.$proxyDefault.siteFilters.remove(this.domain);

        this.remove();
      }
      /** @method */

    }, {
      key: "editSettings",
      value: function editSettings()
      /*: void*/
      {
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'сounters.increase',
          'property': 'popup: smart settings: open list'
        });

        _head.$storeDefault.dispatch({
          'type': 'Page change',
          'page': 'index:filters'
        });

        this.remove();
      }
      /** @method */

    }, {
      key: "openHelp",
      value: function openHelp()
      /*: void*/
      {
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'сounters.increase',
          'property': 'popup: smart settings: open help'
        });
        (0, _sendMessage.$sendMessageDefault)({
          'type': 'create tab',
          'options': '/pages/help/help.html'
        });
        this.remove();
      }
      /** @method */

    }, {
      key: "showPremiumPopup",
      value: function () {
        var _showPremiumPopup = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var popupPremium;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  popupPremium
                  /*: HTMLElement*/
                  = document.createElement('popup-premium-onerule');
                  popupPremium.style.cssText = 'top:-100%;';
                  if (document.body) document.body.append(popupPremium); // Flow crap

                  (0, _head.$gaDefault)('premium', 'show');
                  _context2.next = 6;
                  return window.anime({
                    'targets': popupPremium,
                    'top': 0,
                    'duration': 800,
                    'easing': 'linear'
                  }).finished;

                case 6:
                  popupPremium.style.cssText = '';

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function showPremiumPopup() {
          return _showPremiumPopup.apply(this, arguments);
        }

        return showPremiumPopup;
      }()
    }]);
    return ContextMenu;
  }((0, _head.connect)(_head.$storeDefault)(_head.LitElement));

  ;
  customElements.define('context-menu', ContextMenu);
});