"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**base url to make requests to the the movie database */
var instance = _axios["default"].create({
  baseURL: "https://api.themoviedb.org/3"
});

var _default = instance;
exports["default"] = _default;