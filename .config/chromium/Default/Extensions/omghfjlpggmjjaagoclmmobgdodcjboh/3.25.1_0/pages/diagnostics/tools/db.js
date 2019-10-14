define(["exports", "./sendMessage.js"], function (_exports, _sendMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _sendMessage = babelHelpers.interopRequireDefault(_sendMessage);

  // @flow
  var getAll =
  /*#__PURE__*/
  function () {
    var _ref = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var output;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _sendMessage.default)({
                'type': 'db.getAll'
              });

            case 2:
              output = _context.sent;

              if (output) {
                _context.next = 5;
                break;
              }

              throw new Error('Connection with background failed');

            case 5:
              return _context.abrupt("return", output);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAll() {
      return _ref.apply(this, arguments);
    };
  }();

  var _default = {
    getAll: getAll
  };
  _exports.default = _default;
});