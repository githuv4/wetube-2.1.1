/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./assets/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload */ \"./assets/js/upload.js\");\n/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_upload__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoPlayer */ \"./assets/js/videoPlayer.js\");\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_videoPlayer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/upload.js":
/*!*****************************!*\
  !*** ./assets/js/upload.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var formContainer = document.querySelector(\".form-container\");\nvar videoFileBtn = document.getElementById(\"jsFileBtn\");\nvar videoLinkBtn = document.getElementById(\"jsLinkBtn\");\nvar youtubeLinkBtn = document.getElementById(\"jsYoutubeBtn\");\nvar fileUrlInput = document.getElementById(\"jsFileUrlInput\"); // export const inputType = document.getElementById(\"jsInputType\");\n\nvar handleVideoLinkBtn = function handleVideoLinkBtn() {\n  fileUrlInput.innerHTML = \"<input type=\\\"text\\\", name=\\\"link\\\", placeholder=\\\"http://\\\">\";\n};\n\nvar handleVideoFileBtn = function handleVideoFileBtn() {\n  fileUrlInput.innerHTML = \"<input type=\\\"file\\\", name=\\\"videoFile\\\", accept=\\\"video/*\\\">\";\n};\n\nvar handleYoutubeLinkBtn = function handleYoutubeLinkBtn() {\n  fileUrlInput.innerHTML = \"<input type=\\\"text\\\", name=\\\"youtubeId\\\", placeholder=\\\"Youtube Video ID\\\">\";\n};\n\nvar init = function init() {\n  videoFileBtn.addEventListener(\"click\", handleVideoFileBtn);\n  videoLinkBtn.addEventListener(\"click\", handleVideoLinkBtn);\n  youtubeLinkBtn.addEventListener(\"click\", handleYoutubeLinkBtn);\n};\n\nif (videoFileBtn) {\n  init();\n}\n\n//# sourceURL=webpack:///./assets/js/upload.js?");

/***/ }),

/***/ "./assets/js/videoPlayer.js":
/*!**********************************!*\
  !*** ./assets/js/videoPlayer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var videoContainer = document.querySelector(\"#jsVideoContainer\");\nvar video = document.querySelector(\"video\");\nvar videoTitle = document.querySelector(\"#jsVideoTitle\");\nvar controlsBox = document.getElementById(\"jsControls\");\nvar playPauseBtn = document.getElementById(\"jsPlayPauseBtn\");\nvar bigPlayPauseBtn = document.querySelector(\"#jsBigPlayPauseBtn\");\nvar volumeBtn = document.getElementById(\"jsVolumeBtn\");\nvar volumeRange = document.getElementById(\"jsVolumeRange\");\nvar fullScrnBtn = document.getElementById(\"jsFullScreenBtn\");\nvar timer = document.querySelector(\".timer\");\nvar progress = document.getElementById(\"jsPlayProgress\");\n\nvar handleTimeUpdate = function handleTimeUpdate() {\n  // console.dir(video);\n  // console.log(currentTime, duration);\n  var currentTime = video.currentTime,\n      duration = video.duration;\n  var formatCurrentTime = Math.floor(video.currentTime);\n  var hours = Math.floor(formatCurrentTime / 3600);\n  var minutes = Math.floor((formatCurrentTime - hours * 3600) / 60);\n  var seconds = formatCurrentTime - hours * 3600 - minutes * 60;\n  var formatDuration = Math.floor(video.duration);\n  var durationHours = Math.floor(formatDuration / 3600);\n  var durationMinutes = Math.floor((formatDuration - durationHours * 3600) / 60);\n  var durationSeconds = formatDuration - durationHours * 3600 - durationMinutes * 60;\n  progress.value = currentTime;\n  progress.max = duration;\n  console.log(progress.value);\n\n  if (hours < 10) {\n    hours = \"0\".concat(hours);\n  }\n\n  if (minutes < 10) {\n    minutes = \"0\".concat(minutes);\n  }\n\n  if (seconds < 10) {\n    seconds = \"0\".concat(seconds);\n  }\n\n  if (durationHours < 10) {\n    durationHours = \"0\".concat(durationHours);\n  }\n\n  if (durationMinutes < 10) {\n    durationMinutes = \"0\".concat(durationMinutes);\n  }\n\n  if (durationSeconds < 10) {\n    durationSeconds = \"0\".concat(durationSeconds);\n  }\n\n  if (durationHours > 0) {\n    timer.innerHTML = \"\".concat(hours, \":\").concat(minutes, \":\").concat(seconds, \" / \").concat(durationHours, \":\").concat(durationMinutes, \":\").concat(durationSeconds);\n  }\n\n  timer.innerHTML = \"\".concat(minutes, \":\").concat(seconds, \" / \").concat(durationMinutes, \":\").concat(durationSeconds);\n};\n\nvar handleKeydown = function handleKeydown(event) {\n  var key = event.code; // console.log(event);\n\n  console.log(key);\n\n  if (key === \"Space\" || key === \"Enter\") {\n    handlePlayPauseBtn();\n    handleHide();\n    document.removeEventListener(\"keydown\", exitFullScreen);\n    document.removeEventListener(\"keydown\", goFullScreen);\n  } else if (key === \"KeyF\") {\n    goFullScreen();\n  } else {\n    document.removeEventListener(\"keydown\", exitFullScreen);\n    document.removeEventListener(\"keydown\", goFullScreen);\n  }\n};\n\nvar timeOut = null;\n\nvar handleload = function handleload() {\n  video.style.cursor = \"default\";\n  controlsBox.classList.add(\"showing-controls\");\n  videoTitle.classList.add(\"showing-controls\");\n  bigPlayPauseBtn.classList.add(\"showing-controls\");\n};\n\nvar handleShow = function handleShow() {\n  console.log(\"moving\");\n\n  if (timeOut) {\n    // console.log(`yes:${timeOut}`);\n    clearTimeout(timeOut);\n  } // console.log(`no:${timeOut}`);\n\n\n  video.style.cursor = \"default\";\n  controlsBox.classList.add(\"showing-controls\");\n  videoTitle.classList.add(\"showing-controls\");\n  bigPlayPauseBtn.classList.add(\"showing-controls\");\n  timeOut = setTimeout(handleHide, 3000);\n};\n\nvar handleHide = function handleHide() {\n  console.log(\"out\");\n  video.style.cursor = \"none\";\n  controlsBox.classList.remove(\"showing-controls\");\n  videoTitle.classList.remove(\"showing-controls\");\n  bigPlayPauseBtn.classList.remove(\"showing-controls\");\n\n  if (video.paused) {\n    controlsBox.classList.add(\"showing-controls\");\n    videoTitle.classList.add(\"showing-controls\");\n    bigPlayPauseBtn.classList.add(\"showing-controls\");\n  }\n};\n\nvar exitFullScreen = function exitFullScreen() {\n  if (document.exitFullscreen) {\n    document.exitFullscreen();\n  } else if (document.mozExitFullscreen) {\n    /* Firefox */\n    document.mozExitFullscreen();\n  } else if (document.webkitExitFullscreen) {\n    /* Chrome, Safari and Opera */\n    document.webkitExitFullscreen();\n  } else if (document.msExitFullscreen) {\n    /* IE/Edge */\n    document.msExitFullscreen();\n  }\n\n  fullScrnBtn.innerHTML = '<i class=\"fas fa-expand\"></i>';\n  fullScrnBtn.addEventListener(\"click\", goFullScreen);\n  document.removeEventListener(\"keydown\", exitFullScreen);\n  document.addEventListener(\"keydown\", goFullScreen);\n};\n\nvar goFullScreen = function goFullScreen() {\n  if (videoContainer.requestFullscreen) {\n    videoContainer.requestFullscreen();\n  } else if (videoContainer.mozRequestFullScreen) {\n    /* Firefox */\n    videoContainer.mozRequestFullScreen();\n  } else if (videoContainer.webkitRequestFullscreen) {\n    /* Chrome, Safari and Opera */\n    videoContainer.webkitRequestFullscreen();\n  } else if (videoContainer.msRequestFullscreen) {\n    /* IE/Edge */\n    videoContainer.msRequestFullscreen();\n  }\n\n  fullScrnBtn.innerHTML = '<i class=\"fas fa-compress\"></i>';\n  fullScrnBtn.removeEventListener(\"click\", goFullScreen);\n  fullScrnBtn.addEventListener(\"click\", exitFullScreen);\n  document.removeEventListener(\"keydown\", goFullScreen);\n  document.addEventListener(\"keydown\", exitFullScreen);\n};\n\nvar handleVolumeBtn = function handleVolumeBtn() {\n  // console.dir(video);\n  if (!video.muted) {\n    video.muted = true;\n    volumeBtn.innerHTML = \"<i class=\\\"fas fa-volume-mute\\\">\";\n    volumeRange.value = 0;\n  } else {\n    video.muted = false;\n    volumeBtn.innerHTML = \"<i class=\\\"fas fa-volume-up\\\">\";\n    volumeRange.value = 1;\n  }\n};\n\nvar handlePlayPauseBtn = function handlePlayPauseBtn() {\n  // console.dir(video);\n  if (video.paused) {\n    video.play();\n    playPauseBtn.innerHTML = \"<i class=\\\"fas fa-pause\\\"></i>\";\n    bigPlayPauseBtn.innerHTML = \"<i class=\\\"far fa-pause-circle\\\"></i>\";\n  } else {\n    video.pause();\n    playPauseBtn.innerHTML = \"<i class=\\\"fas fa-play\\\"></i>\";\n    bigPlayPauseBtn.innerHTML = \"<i class=\\\"far fa-play-circle\\\"></i>\";\n  }\n};\n\nvar handleEnded = function handleEnded() {\n  video.currentTime = 0;\n  playPauseBtn.innerHTML = \"<i class=\\\"fas fa-play\\\"></i>\";\n  bigPlayPauseBtn.innerHTML = \"<i class=\\\"far fa-play-circle\\\"></i>\";\n  handleShow();\n};\n\nvar handleDragPlay = function handleDragPlay() {\n  var _event = event,\n      value = _event.target.value;\n  video.currentTime = value;\n};\n\nvar handleDrag = function handleDrag(event) {\n  var value = event.target.value; // console.dir(video);\n\n  video.volume = value;\n\n  if (value >= 0.6) {\n    volumeBtn.innerHTML = \"<i class=\\\"fas fa-volume-up\\\"></i>\";\n  } else if (value >= 0.2) {\n    volumeBtn.innerHTML = \"<i class=\\\"fas fa-volume-down\\\"></i>\";\n  } else if (value == 0) {\n    volumeBtn.innerHTML = \"<i class=\\\"fas fa-volume-mute\\\"></i>\";\n  } else {\n    volumeBtn.innerHTML = \"<i class=\\\"fas fa-volume-off\\\"></i>\";\n  }\n};\n\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\nvideo.addEventListener(\"ended\", handleEnded); // video.addEventListener(\"click\", handlePlayPauseBtn);\n\nplayPauseBtn.addEventListener(\"click\", handlePlayPauseBtn);\nbigPlayPauseBtn.addEventListener(\"click\", handlePlayPauseBtn);\nvolumeBtn.addEventListener(\"click\", handleVolumeBtn);\nfullScrnBtn.addEventListener(\"click\", goFullScreen);\ndocument.addEventListener(\"keydown\", handleKeydown);\nvideoContainer.addEventListener(\"mousemove\", handleShow);\nvideoContainer.addEventListener(\"mouseout\", handleHide);\nwindow.addEventListener(\"load\", handleload);\nvolumeRange.addEventListener(\"input\", handleDrag);\nprogress.addEventListener(\"input\", handleDragPlay);\n\n//# sourceURL=webpack:///./assets/js/videoPlayer.js?");

/***/ }),

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./assets/scss/styles.scss?");

/***/ })

/******/ });