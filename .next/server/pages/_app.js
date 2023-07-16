/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GoTop = (props)=>{\n    const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        document.addEventListener(\"scroll\", ()=>{\n            if (window.scrollY > 170) {\n                setThePosition(true);\n            } else {\n                setThePosition(false);\n            }\n        });\n    }, []);\n    const onScrollStep = ()=>{\n        if (window.pageYOffset === 0) {\n            clearInterval(timeoutRef.current);\n        }\n        window.scroll(0, window.pageYOffset - props.scrollStepInPx);\n    };\n    const scrollToTop = ()=>{\n        timeoutRef.current = setInterval(onScrollStep, props.delayInMs);\n    };\n    const renderGoTopIcon = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: `go-top ${thePosition ? \"active\" : \"\"}`,\n            onClick: scrollToTop,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: \"bx bx-up-arrow-alt\"\n            }, void 0, false, {\n                fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/components/Shared/GoTop.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/components/Shared/GoTop.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: renderGoTopIcon()\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBRTFCLE1BQU1DLEtBQUssR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFFckIsTUFBTSxDQUFDQyxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHSixxREFBYyxDQUFDLEtBQUssQ0FBQztJQUMzRCxNQUFNTSxVQUFVLEdBQUdOLG1EQUFZLENBQUMsSUFBSSxDQUFDO0lBRXJDQSxzREFBZSxDQUFDLElBQU07UUFDbEJTLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQU07WUFDdEMsSUFBSUMsTUFBTSxDQUFDQyxPQUFPLEdBQUcsR0FBRyxFQUFFO2dCQUN0QlIsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN4QixPQUFPO2dCQUNIQSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU1TLFlBQVksR0FBRyxJQUFNO1FBQ3ZCLElBQUlGLE1BQU0sQ0FBQ0csV0FBVyxLQUFLLENBQUMsRUFBQztZQUN6QkMsYUFBYSxDQUFDVCxVQUFVLENBQUNVLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDREwsTUFBTSxDQUFDTSxNQUFNLENBQUMsQ0FBQyxFQUFFTixNQUFNLENBQUNHLFdBQVcsR0FBR1osS0FBSyxDQUFDZ0IsY0FBYyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELE1BQU1DLFdBQVcsR0FBRyxJQUFNO1FBQ3RCYixVQUFVLENBQUNVLE9BQU8sR0FBR0ksV0FBVyxDQUFDUCxZQUFZLEVBQUVYLEtBQUssQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxNQUFNQyxlQUFlLEdBQUcsSUFBTTtRQUMxQixxQkFDSSw4REFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUVyQixXQUFXLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQUVzQixPQUFPLEVBQUVOLFdBQVc7c0JBQ3pFLDRFQUFDTyxHQUFDO2dCQUFDRixTQUFTLEVBQUMsb0JBQW9COzs7Ozt5QkFBSzs7Ozs7cUJBQ3BDLENBQ1Q7SUFDTCxDQUFDO0lBRUQscUJBQ0k7a0JBQ0tGLGVBQWUsRUFBRTtxQkFDbkIsQ0FDTjtBQUNMLENBQUM7QUFFRCxpRUFBZXJCLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmFuaS8uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wLmpzP2UwNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR29Ub3AgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFt0aGVQb3NpdGlvbiwgc2V0VGhlUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE3MCkge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKHRydWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgW10pXG4gICAgXG4gICAgY29uc3Qgb25TY3JvbGxTdGVwID0gKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5wYWdlWU9mZnNldCAtIHByb3BzLnNjcm9sbFN0ZXBJblB4KTtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwob25TY3JvbGxTdGVwLCBwcm9wcy5kZWxheUluTXMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlckdvVG9wSWNvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZ28tdG9wICR7dGhlUG9zaXRpb24gPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieC11cC1hcnJvdy1hbHRcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7cmVuZGVyR29Ub3BJY29uKCl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29Ub3A7Il0sIm5hbWVzIjpbIlJlYWN0IiwiR29Ub3AiLCJwcm9wcyIsInRoZVBvc2l0aW9uIiwic2V0VGhlUG9zaXRpb24iLCJ1c2VTdGF0ZSIsInRpbWVvdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25TY3JvbGxTdGVwIiwicGFnZVlPZmZzZXQiLCJjbGVhckludGVydmFsIiwiY3VycmVudCIsInNjcm9sbCIsInNjcm9sbFN0ZXBJblB4Iiwic2Nyb2xsVG9Ub3AiLCJzZXRJbnRlcnZhbCIsImRlbGF5SW5NcyIsInJlbmRlckdvVG9wSWNvbiIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Shared/GoTop.js\n");

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Loader = ({ loading  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"preloader\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"preloader\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/components/Shared/Loader.js\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/components/Shared/Loader.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/components/Shared/Loader.js\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/components/Shared/Loader.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUUxQixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxFQUFFQyxPQUFPLEdBQUUsR0FBSztJQUM5QixxQkFDRTtrQkFDR0EsT0FBTyxrQkFDTiw4REFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsV0FBVztzQkFDeEIsNEVBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXOztrQ0FDeEIsOERBQUNDLE1BQUk7Ozs7aUNBQVE7a0NBQ2IsOERBQUNBLE1BQUk7Ozs7aUNBQVE7Ozs7Ozt5QkFDVDs7Ozs7cUJBQ0Y7cUJBRVAsQ0FDSDtBQUNKLENBQUM7QUFFRCxpRUFBZUosTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2YW5pLy4vY29tcG9uZW50cy9TaGFyZWQvTG9hZGVyLmpzPzYzNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTG9hZGVyID0gKHsgbG9hZGluZyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZWxvYWRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByZWxvYWRlcic+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxvYWRlciIsImxvYWRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Shared/Loader.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toast-notifications */ \"react-toast-notifications\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.js\");\n/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/baseUrl */ \"./utils/baseUrl.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_scss_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/scss/bootstrap.min.css */ \"./public/scss/bootstrap.min.css\");\n/* harmony import */ var _public_scss_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_scss_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_scss_animate_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/scss/animate.min.css */ \"./public/scss/animate.min.css\");\n/* harmony import */ var _public_scss_animate_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_scss_animate_min_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _public_scss_boxicons_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/scss/boxicons.min.css */ \"./public/scss/boxicons.min.css\");\n/* harmony import */ var _public_scss_boxicons_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_scss_boxicons_min_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _public_scss_flaticon_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/scss/flaticon.css */ \"./public/scss/flaticon.css\");\n/* harmony import */ var _public_scss_flaticon_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_scss_flaticon_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../node_modules/slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../node_modules/slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _public_scss_styles_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/scss/styles.css */ \"./public/scss/styles.css\");\n/* harmony import */ var _public_scss_styles_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_scss_styles_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _public_scss_nprogress_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/scss/nprogress.css */ \"./public/scss/nprogress.css\");\n/* harmony import */ var _public_scss_nprogress_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_scss_nprogress_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _public_scss_responsive_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../public/scss/responsive.css */ \"./public/scss/responsive.css\");\n/* harmony import */ var _public_scss_responsive_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_scss_responsive_css__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _public_scss_dashboard_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../public/scss/dashboard.css */ \"./public/scss/dashboard.css\");\n/* harmony import */ var _public_scss_dashboard_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_scss_dashboard_css__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Shared/GoTop */ \"./components/Shared/GoTop.js\");\n/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Shared/Loader */ \"./components/Shared/Loader.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_23__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_auth__WEBPACK_IMPORTED_MODULE_6__]);\n_utils_auth__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(next_router__WEBPACK_IMPORTED_MODULE_21___default().onRouteChangeStart) = ()=>nprogress__WEBPACK_IMPORTED_MODULE_22___default().start();\n(next_router__WEBPACK_IMPORTED_MODULE_21___default().onRouteChangeComplete) = ()=>nprogress__WEBPACK_IMPORTED_MODULE_22___default().done();\n(next_router__WEBPACK_IMPORTED_MODULE_21___default().onRouteChangeError) = ()=>nprogress__WEBPACK_IMPORTED_MODULE_22___default().done();\nfunction App({ Component , pageProps  }) {\n    const store = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useStore)(pageProps.initialReduxState);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>setLoading(false), 2000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_23___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Pet's Aahar - The perfect Balance Of Taste & Nutrition\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/pages/_app.js\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/pages/_app.js\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/pages/_app.js\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.ToastProvider, {\n                placement: \"bottom-center\",\n                autoDismissTimeout: 6000,\n                autoDismiss: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n                    store: store,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/pages/_app.js\",\n                            lineNumber: 56,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_20__[\"default\"], {\n                            loading: loading\n                        }, void 0, false, {\n                            fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/pages/_app.js\",\n                            lineNumber: 57,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                            scrollStepInPx: \"100\",\n                            delayInMs: \"10.50\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/pages/_app.js\",\n                            lineNumber: 58,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/pages/_app.js\",\n                    lineNumber: 55,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sagar/Desktop/livani-react-next-ecommerce-template 2/livani-react/pages/_app.js\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\nApp.getInitialProps = async ({ Component , ctx  })=>{\n    const { livani_token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);\n    // console.log(livani_token);\n    let pageProps = {};\n    if (Component.getInitialProps) {\n        pageProps = await Component.getInitialProps(ctx);\n    }\n    if (!livani_token) {\n        // if a user not logged in then user can't access those pages\n        const isProtectedRoute = ctx.pathname === \"/sale-request\" || ctx.pathname === \"/admin/dashboard\" || ctx.pathname === \"/admin/products\" || ctx.pathname === \"/admin/orders\" || ctx.pathname === \"/admin/customers\" || ctx.pathname === \"/admin/users\" || ctx.pathname === \"/admin/store-requests\" || ctx.pathname === \"/stores/dashboard\" || ctx.pathname === \"/stores/products\" || ctx.pathname === \"/profile\";\n        if (isProtectedRoute) {\n            (0,_utils_auth__WEBPACK_IMPORTED_MODULE_6__.redirectUser)(ctx, \"/\");\n        }\n    } else {\n        // if a user logged in then user can't access those pages\n        const ifLoggedIn = ctx.pathname === \"/signup\" || ctx.pathname === \"/login\";\n        if (ifLoggedIn) {\n            (0,_utils_auth__WEBPACK_IMPORTED_MODULE_6__.redirectUser)(ctx, \"/\");\n        }\n        try {\n            const payload = {\n                headers: {\n                    Authorization: livani_token\n                }\n            };\n            //user\n            const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__[\"default\"]}/api/v1/auth/account`;\n            const response = await axios__WEBPACK_IMPORTED_MODULE_8___default().get(url, payload);\n            const { user , store  } = response.data;\n            const isSuperAdmin = user.role === \"super-admin\";\n            const isAdmin = user.role === \"admin\";\n            const isNotSuperAdmin = !(isAdmin || isSuperAdmin) && (ctx.pathname === \"/admin/dashboard\" || ctx.pathname === \"/admin/products\" || ctx.pathname === \"/admin/orders\" || ctx.pathname === \"/admin/customers\" || ctx.pathname === \"/admin/users\" || ctx.pathname === \"/admin/store-requests\");\n            if (isNotSuperAdmin) {\n                (0,_utils_auth__WEBPACK_IMPORTED_MODULE_6__.redirectUser)(ctx, \"/\");\n            }\n            pageProps.user = user;\n            pageProps.store = store;\n        } catch (error) {\n            console.log(\"error\", error);\n        }\n    }\n    return {\n        pageProps\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsS0FBSyx1QkFBdUI7WUFFMUMsSUFBSWEsZUFBZSxFQUFFO2dCQUNwQi9DLHlEQUFZLENBQUMrQixHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQztZQUVEaEIsU0FBUyxDQUFDMkIsSUFBSSxHQUFHQSxJQUFJLENBQUM7WUFDdEIzQixTQUFTLENBQUNDLEtBQUssR0FBR0EsS0FBSyxDQUFDO1FBQ3pCLEVBQUUsT0FBT2dDLEtBQUssRUFBRTtZQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVGLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDRixDQUFDO0lBRUQsT0FBTztRQUNOakMsU0FBUztLQUNULENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZhbmkvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgeyBUb2FzdFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZSB9IGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgeyByZWRpcmVjdFVzZXIgfSBmcm9tIFwiLi4vdXRpbHMvYXV0aFwiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IFwiLi4vcHVibGljL3Njc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9zY3NzL2FuaW1hdGUubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL3Njc3MvYm94aWNvbnMubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL3Njc3MvZmxhdGljb24uY3NzXCI7XG5pbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvc2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvc2Nzcy9ucHJvZ3Jlc3MuY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvc2Nzcy9yZXNwb25zaXZlLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL3Njc3MvZGFzaGJvYXJkLmNzc1wiO1xuXG5pbXBvcnQgR29Ub3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NoYXJlZC9Mb2FkZXJcIjtcblxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cdGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKTtcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHNldExvYWRpbmcoZmFsc2UpLCAyMDAwKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+UGV0J3MgQWFoYXIgLSBUaGUgcGVyZmVjdCBCYWxhbmNlIE9mIFRhc3RlICYgTnV0cml0aW9uPC90aXRsZT5cblx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PFRvYXN0UHJvdmlkZXJcblx0XHRcdFx0cGxhY2VtZW50PVwiYm90dG9tLWNlbnRlclwiXG5cdFx0XHRcdGF1dG9EaXNtaXNzVGltZW91dD17NjAwMH1cblx0XHRcdFx0YXV0b0Rpc21pc3Ncblx0XHRcdD5cblx0XHRcdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0XHRcdDxMb2FkZXIgbG9hZGluZz17bG9hZGluZ30gLz5cblx0XHRcdFx0XHQ8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCIxMDBcIiBkZWxheUluTXM9XCIxMC41MFwiIC8+XG5cdFx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0XHQ8L1RvYXN0UHJvdmlkZXI+XG5cdFx0PC8+XG5cdCk7XG59XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XG5cdGNvbnN0IHsgbGl2YW5pX3Rva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcblx0Ly8gY29uc29sZS5sb2cobGl2YW5pX3Rva2VuKTtcblx0bGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG5cdGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG5cdFx0cGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuXHR9XG5cblx0aWYgKCFsaXZhbmlfdG9rZW4pIHtcblx0XHQvLyBpZiBhIHVzZXIgbm90IGxvZ2dlZCBpbiB0aGVuIHVzZXIgY2FuJ3QgYWNjZXNzIHRob3NlIHBhZ2VzXG5cdFx0Y29uc3QgaXNQcm90ZWN0ZWRSb3V0ZSA9XG5cdFx0XHRjdHgucGF0aG5hbWUgPT09IFwiL3NhbGUtcmVxdWVzdFwiIHx8XG5cdFx0XHRjdHgucGF0aG5hbWUgPT09IFwiL2FkbWluL2Rhc2hib2FyZFwiIHx8XG5cdFx0XHRjdHgucGF0aG5hbWUgPT09IFwiL2FkbWluL3Byb2R1Y3RzXCIgfHxcblx0XHRcdGN0eC5wYXRobmFtZSA9PT0gXCIvYWRtaW4vb3JkZXJzXCIgfHxcblx0XHRcdGN0eC5wYXRobmFtZSA9PT0gXCIvYWRtaW4vY3VzdG9tZXJzXCIgfHxcblx0XHRcdGN0eC5wYXRobmFtZSA9PT0gXCIvYWRtaW4vdXNlcnNcIiB8fFxuXHRcdFx0Y3R4LnBhdGhuYW1lID09PSBcIi9hZG1pbi9zdG9yZS1yZXF1ZXN0c1wiIHx8XG5cdFx0XHRjdHgucGF0aG5hbWUgPT09IFwiL3N0b3Jlcy9kYXNoYm9hcmRcIiB8fFxuXHRcdFx0Y3R4LnBhdGhuYW1lID09PSBcIi9zdG9yZXMvcHJvZHVjdHNcIiB8fFxuXHRcdFx0Y3R4LnBhdGhuYW1lID09PSBcIi9wcm9maWxlXCI7XG5cblx0XHRpZiAoaXNQcm90ZWN0ZWRSb3V0ZSkge1xuXHRcdFx0cmVkaXJlY3RVc2VyKGN0eCwgXCIvXCIpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBpZiBhIHVzZXIgbG9nZ2VkIGluIHRoZW4gdXNlciBjYW4ndCBhY2Nlc3MgdGhvc2UgcGFnZXNcblx0XHRjb25zdCBpZkxvZ2dlZEluID1cblx0XHRcdGN0eC5wYXRobmFtZSA9PT0gXCIvc2lnbnVwXCIgfHwgY3R4LnBhdGhuYW1lID09PSBcIi9sb2dpblwiO1xuXHRcdGlmIChpZkxvZ2dlZEluKSB7XG5cdFx0XHRyZWRpcmVjdFVzZXIoY3R4LCBcIi9cIik7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBheWxvYWQgPSB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogbGl2YW5pX3Rva2VuIH0gfTtcblxuXHRcdFx0Ly91c2VyXG5cdFx0XHRjb25zdCB1cmwgPSBgJHtiYXNlVXJsfS9hcGkvdjEvYXV0aC9hY2NvdW50YDtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwgcGF5bG9hZCk7XG5cdFx0XHRcblx0XHRcdGNvbnN0IHsgdXNlciwgc3RvcmUgfSA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRjb25zdCBpc1N1cGVyQWRtaW4gPSB1c2VyLnJvbGUgPT09IFwic3VwZXItYWRtaW5cIjtcblx0XHRcdGNvbnN0IGlzQWRtaW4gPSB1c2VyLnJvbGUgPT09IFwiYWRtaW5cIjtcblxuXHRcdFx0Y29uc3QgaXNOb3RTdXBlckFkbWluID1cblx0XHRcdFx0IShpc0FkbWluIHx8IGlzU3VwZXJBZG1pbikgJiZcblx0XHRcdFx0KGN0eC5wYXRobmFtZSA9PT0gXCIvYWRtaW4vZGFzaGJvYXJkXCIgfHxcblx0XHRcdFx0XHRjdHgucGF0aG5hbWUgPT09IFwiL2FkbWluL3Byb2R1Y3RzXCIgfHxcblx0XHRcdFx0XHRjdHgucGF0aG5hbWUgPT09IFwiL2FkbWluL29yZGVyc1wiIHx8XG5cdFx0XHRcdFx0Y3R4LnBhdGhuYW1lID09PSBcIi9hZG1pbi9jdXN0b21lcnNcIiB8fFxuXHRcdFx0XHRcdGN0eC5wYXRobmFtZSA9PT0gXCIvYWRtaW4vdXNlcnNcIiB8fFxuXHRcdFx0XHRcdGN0eC5wYXRobmFtZSA9PT0gXCIvYWRtaW4vc3RvcmUtcmVxdWVzdHNcIik7XG5cblx0XHRcdGlmIChpc05vdFN1cGVyQWRtaW4pIHtcblx0XHRcdFx0cmVkaXJlY3RVc2VyKGN0eCwgXCIvXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYWdlUHJvcHMudXNlciA9IHVzZXI7XG5cdFx0XHRwYWdlUHJvcHMuc3RvcmUgPSBzdG9yZTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRwYWdlUHJvcHMsXG5cdH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvdmlkZXIiLCJ1c2VTdG9yZSIsIlRvYXN0UHJvdmlkZXIiLCJwYXJzZUNvb2tpZXMiLCJkZXN0cm95Q29va2llIiwicmVkaXJlY3RVc2VyIiwiYmFzZVVybCIsImF4aW9zIiwiR29Ub3AiLCJMb2FkZXIiLCJSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJIZWFkIiwib25Sb3V0ZUNoYW5nZVN0YXJ0Iiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJpbml0aWFsUmVkdXhTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0VGltZW91dCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicGxhY2VtZW50IiwiYXV0b0Rpc21pc3NUaW1lb3V0IiwiYXV0b0Rpc21pc3MiLCJzY3JvbGxTdGVwSW5QeCIsImRlbGF5SW5NcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImxpdmFuaV90b2tlbiIsImlzUHJvdGVjdGVkUm91dGUiLCJwYXRobmFtZSIsImlmTG9nZ2VkSW4iLCJwYXlsb2FkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ1cmwiLCJyZXNwb25zZSIsImdldCIsInVzZXIiLCJkYXRhIiwiaXNTdXBlckFkbWluIiwicm9sZSIsImlzQWRtaW4iLCJpc05vdFN1cGVyQWRtaW4iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeStore\": () => (/* binding */ initializeStore),\n/* harmony export */   \"useStore\": () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet store;\nconst initialState = {\n    cartItems: [],\n    count: 0\n};\nconst reducer = (state = initialState, action)=>{\n    switch(action.type){\n        case \"ADD_TO_CART\":\n            let existingItem = state.cartItems.find((product)=>action.data.id === product.id);\n            if (existingItem) {\n                existingItem.quantity += 1;\n                return {\n                    ...state\n                };\n            } else {\n                return {\n                    ...state,\n                    cartItems: [\n                        ...state.cartItems,\n                        action.data\n                    ]\n                };\n            }\n        case \"DECREASE_PRODUCT_QUANTITY\":\n            let existItem = state.cartItems.find((product)=>action.data.id === product.id);\n            if (existItem) {\n                existItem.quantity > 1 ? existItem.quantity -= 1 : 1;\n                return {\n                    ...state\n                };\n            } else {\n                return {\n                    ...state,\n                    cartItems: [\n                        ...state.cartItems,\n                        action.data\n                    ]\n                };\n            }\n        case \"CLEAR_CART_ITEMS\":\n            return {\n                ...state,\n                cartItems: []\n            };\n        case \"REMOVE_CART_ITEM\":\n            return {\n                ...state,\n                cartItems: state.cartItems.filter((item)=>item.id !== action.data)\n            };\n        default:\n            return state;\n    }\n};\nfunction initStore(preloadedState = initialState) {\n    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(reducer, preloadedState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)()));\n}\nconst initializeStore = (preloadedState)=>{\n    let _store = store ?? initStore(preloadedState);\n    // After navigating to a page with an initial Redux state, merge that state\n    // with the current state in the store, and create a new store\n    if (preloadedState && store) {\n        _store = initStore({\n            ...store.getState(),\n            ...preloadedState\n        });\n        // Reset the current store\n        store = undefined;\n    }\n    // For SSG and SSR always create a new store\n    if (true) return _store;\n    // Create the store once in the client\n    if (!store) store = _store;\n    return _store;\n};\nfunction useStore(initialState) {\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeStore(initialState), [\n        initialState\n    ]);\n    return store;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUN0QyxJQUFJLENBQUNwQixLQUFLLEVBQUVBLEtBQUssR0FBR29CLE1BQU0sQ0FBQztJQUUzQixPQUFPQSxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUssU0FBU0csUUFBUSxDQUFDdEIsWUFBWSxFQUFFO0lBQ3JDLE1BQU1ELEtBQUssR0FBR0osOENBQU8sQ0FBQyxJQUFNdUIsZUFBZSxDQUFDbEIsWUFBWSxDQUFDLEVBQUU7UUFBQ0EsWUFBWTtLQUFDLENBQUM7SUFDMUUsT0FBT0QsS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmFuaS8uL3N0b3JlLmpzPzQwZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcblxubGV0IHN0b3JlO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNhcnRJdGVtczogW10sXG4gIGNvdW50OiAwLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgJ0FERF9UT19DQVJUJzpcbiAgICAgIGxldCBleGlzdGluZ0l0ZW0gPSBzdGF0ZS5jYXJ0SXRlbXMuZmluZChwcm9kdWN0ID0+IGFjdGlvbi5kYXRhLmlkID09PSBwcm9kdWN0LmlkKVxuICAgICAgXG4gICAgICBpZihleGlzdGluZ0l0ZW0pe1xuICAgICAgICAgIGV4aXN0aW5nSXRlbS5xdWFudGl0eSArPSAxXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGVcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICBjYXJ0SXRlbXM6IFsuLi5zdGF0ZS5jYXJ0SXRlbXMsIGFjdGlvbi5kYXRhXVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICBjYXNlICdERUNSRUFTRV9QUk9EVUNUX1FVQU5USVRZJzpcbiAgICAgIGxldCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0SXRlbXMuZmluZChwcm9kdWN0ID0+IGFjdGlvbi5kYXRhLmlkID09PSBwcm9kdWN0LmlkKVxuICAgICAgXG4gICAgICBpZihleGlzdEl0ZW0pe1xuICAgICAgICBcbiAgICAgICAgZXhpc3RJdGVtLnF1YW50aXR5ID4gMSA/IGV4aXN0SXRlbS5xdWFudGl0eSAtPSAxIDogMTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgIGNhcnRJdGVtczogWy4uLnN0YXRlLmNhcnRJdGVtcywgYWN0aW9uLmRhdGFdXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYXNlICdDTEVBUl9DQVJUX0lURU1TJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBjYXJ0SXRlbXM6W11cbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdSRU1PVkVfQ0FSVF9JVEVNJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBjYXJ0SXRlbXM6IHN0YXRlLmNhcnRJdGVtcy5maWx0ZXIoXG4gICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmRhdGFcbiAgICAgICAgICApLFxuICAgICAgfTsgICAgXG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUgPSBpbml0aWFsU3RhdGUpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXIsXG4gICAgcHJlbG9hZGVkU3RhdGUsXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKTtcblxuICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcbiAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcbiAgICB9KTtcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxuICAgIHN0b3JlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlO1xuICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZTtcblxuICByZXR1cm4gX3N0b3JlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcbiAgcmV0dXJuIHN0b3JlO1xufVxuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJzdG9yZSIsImluaXRpYWxTdGF0ZSIsImNhcnRJdGVtcyIsImNvdW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImV4aXN0aW5nSXRlbSIsImZpbmQiLCJwcm9kdWN0IiwiZGF0YSIsImlkIiwicXVhbnRpdHkiLCJleGlzdEl0ZW0iLCJmaWx0ZXIiLCJpdGVtIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJpbml0aWFsaXplU3RvcmUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleLogin\": () => (/* binding */ handleLogin),\n/* harmony export */   \"handleLogout\": () => (/* binding */ handleLogout),\n/* harmony export */   \"redirectUser\": () => (/* binding */ redirectUser)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst handleLogin = (token)=>{\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"livani_token\", token);\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/profile\");\n};\nconst redirectUser = (ctx, location)=>{\n    if (ctx.req) {\n        ctx.res.writeHead(302, {\n            Location: location\n        });\n        ctx.res.end();\n    } else {\n        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(location);\n    }\n};\nconst handleLogout = ()=>{\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(\"livani_token\");\n    localStorage.removeItem(\"cartItems\");\n    document.location.href = \"/\";\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNFO0FBRTFCLE1BQU1FLFdBQVcsR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFDckNILHFEQUFVLENBQUMsY0FBYyxFQUFFRyxLQUFLLENBQUMsQ0FBQztJQUNsQ0YsdURBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUM7QUFFSyxNQUFNSyxZQUFZLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxRQUFRLEdBQUs7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxHQUFHLEVBQUU7UUFDWkYsR0FBRyxDQUFDRyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFBRUMsUUFBUSxFQUFFSixRQUFRO1NBQUUsQ0FBQyxDQUFDO1FBQy9DRCxHQUFHLENBQUNHLEdBQUcsQ0FBQ0csR0FBRyxFQUFFLENBQUM7SUFDZixPQUFPO1FBQ05aLHVEQUFXLENBQUNPLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7QUFDRixDQUFDLENBQUM7QUFFSyxNQUFNTSxZQUFZLEdBQUcsSUFBTTtJQUNqQ2Qsd0RBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5QmdCLFlBQVksQ0FBQ0MsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDQyxRQUFRLENBQUNWLFFBQVEsQ0FBQ1csSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZhbmkvLi91dGlscy9hdXRoLmpzP2ViNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTG9naW4gPSAodG9rZW4pID0+IHtcblx0Y29va2llLnNldChcImxpdmFuaV90b2tlblwiLCB0b2tlbik7XG5cdFJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIik7XG59O1xuXG5leHBvcnQgY29uc3QgcmVkaXJlY3RVc2VyID0gKGN0eCwgbG9jYXRpb24pID0+IHtcblx0aWYgKGN0eC5yZXEpIHtcblx0XHRjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IGxvY2F0aW9uIH0pO1xuXHRcdGN0eC5yZXMuZW5kKCk7XG5cdH0gZWxzZSB7XG5cdFx0Um91dGVyLnB1c2gobG9jYXRpb24pO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuXHRjb29raWUucmVtb3ZlKFwibGl2YW5pX3Rva2VuXCIpO1xuXHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNhcnRJdGVtc1wiKTtcblx0ZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xufTtcbiJdLCJuYW1lcyI6WyJjb29raWUiLCJSb3V0ZXIiLCJoYW5kbGVMb2dpbiIsInRva2VuIiwic2V0IiwicHVzaCIsInJlZGlyZWN0VXNlciIsImN0eCIsImxvY2F0aW9uIiwicmVxIiwicmVzIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmUiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiZG9jdW1lbnQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst baseUrl =  false ? 0 : \"http://localhost:3000\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9iYXNlVXJsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUdDLE1BQXFDLEdBQ25ELENBQW9DLEdBQ3BDLHVCQUF1QjtBQUV6QixpRUFBZUQsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2YW5pLy4vdXRpbHMvYmFzZVVybC5qcz8wN2FmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgXG4/ICdodHRwczovL2xpdmFuaS1yZWFjdC5lbnZ5dGhlbWUuY29tJyBcbjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7Il0sIm5hbWVzIjpbImJhc2VVcmwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/baseUrl.js\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/scss/animate.min.css":
/*!*************************************!*\
  !*** ./public/scss/animate.min.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./public/scss/bootstrap.min.css":
/*!***************************************!*\
  !*** ./public/scss/bootstrap.min.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./public/scss/boxicons.min.css":
/*!**************************************!*\
  !*** ./public/scss/boxicons.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./public/scss/dashboard.css":
/*!***********************************!*\
  !*** ./public/scss/dashboard.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/scss/flaticon.css":
/*!**********************************!*\
  !*** ./public/scss/flaticon.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./public/scss/nprogress.css":
/*!***********************************!*\
  !*** ./public/scss/nprogress.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/scss/responsive.css":
/*!************************************!*\
  !*** ./public/scss/responsive.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./public/scss/styles.css":
/*!********************************!*\
  !*** ./public/scss/styles.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toast-notifications");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();