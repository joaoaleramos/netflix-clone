"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API_KEY = "214fc53ed2eb6a24f6ccfb99b6ee48ee";
var requests = {
  fetchTrending: "/trending/all/week?api_key=".concat(API_KEY, "&language=en-US"),
  fetchNetflixOriginals: "/discover/tv?api_key=".concat(API_KEY, "&with_networks=213"),
  fetchTopRated: "/movie/top_rated?api_key=".concat(API_KEY, "&language=en-US"),
  fetchActionMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=28"),
  fetchComedyMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=35"),
  fetchHorrorMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=27"),
  fetchRomanceMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=10749"),
  fetchDocumentaries: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=99")
};
var _default = requests;
exports["default"] = _default;