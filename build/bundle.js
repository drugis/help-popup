(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@material-ui/core/Box"), require("@material-ui/core/Grid"), require("@material-ui/core/Popover"), require("@material-ui/core/Typography"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@material-ui/core/Box", "@material-ui/core/Grid", "@material-ui/core/Popover", "@material-ui/core/Typography", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@material-ui/core/Box"), require("@material-ui/core/Grid"), require("@material-ui/core/Popover"), require("@material-ui/core/Typography"), require("react")) : factory(root["@material-ui/core/Box"], root["@material-ui/core/Grid"], root["@material-ui/core/Popover"], root["@material-ui/core/Typography"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__material_ui_core_Box__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Grid__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Popover__, __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/HelpContext/HelpContext.tsx":
/*!*****************************************!*\
  !*** ./src/HelpContext/HelpContext.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HelpContextProviderComponent = exports.HelpContext = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
exports.HelpContext = react_1.createContext({});
function HelpContextProviderComponent({ lexicon, children }) {
    function getHelpInfo(id) {
        if (lexicon[id]) {
            return lexicon[id];
        }
        else {
            return { title: 'unknown', link: 'unknown', text: 'unknown' };
        }
    }
    return (react_1.default.createElement(exports.HelpContext.Provider, { value: { getHelpInfo } }, children));
}
exports.HelpContextProviderComponent = HelpContextProviderComponent;


/***/ }),

/***/ "./src/InlineHelp/InlineHelp.tsx":
/*!***************************************!*\
  !*** ./src/InlineHelp/InlineHelp.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Box_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box"));
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid"));
const Popover_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography"));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const HelpContext_1 = __webpack_require__(/*! ../HelpContext/HelpContext */ "./src/HelpContext/HelpContext.tsx");
function InlineHelp({ helpId, children }) {
    const [title, setTitle] = react_1.useState();
    const [text, setText] = react_1.useState();
    const [link, setLink] = react_1.useState();
    const [anchorEl, setAnchorEl] = react_1.useState(null);
    const { getHelpInfo } = react_1.useContext(HelpContext_1.HelpContext);
    react_1.useEffect(() => {
        const { title, text, link } = getHelpInfo(helpId);
        setTitle(title);
        setText(text);
        setLink(link);
    });
    function openPopover(event) {
        setAnchorEl(event.currentTarget);
    }
    function closePopover() {
        setAnchorEl(null);
    }
    const style = {
        textDecoration: 'underline',
        textDecorationStyle: 'dashed',
        cursor: 'help'
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { onClick: openPopover, style: style }, children),
        react_1.default.createElement(Popover_1.default, { open: !!anchorEl, onClose: closePopover, anchorOrigin: { vertical: 'center', horizontal: 'center' }, transformOrigin: {
                vertical: 'top',
                horizontal: 'center'
            }, anchorEl: anchorEl },
            react_1.default.createElement(Grid_1.default, { container: true, component: Box_1.default, p: 2, maxWidth: "300px" },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, style: { marginBottom: '10px' } },
                    react_1.default.createElement(Typography_1.default, { variant: "h5" }, title)),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12 }, text),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                    react_1.default.createElement("a", { href: link, target: "_blank" }, "View in manual"))))));
}
exports.default = InlineHelp;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InlineHelp = exports.HelpContextProviderComponent = void 0;
const HelpContext_1 = __webpack_require__(/*! ./HelpContext/HelpContext */ "./src/HelpContext/HelpContext.tsx");
Object.defineProperty(exports, "HelpContextProviderComponent", ({ enumerable: true, get: function () { return HelpContext_1.HelpContextProviderComponent; } }));
const InlineHelp_1 = __importDefault(__webpack_require__(/*! ./InlineHelp/InlineHelp */ "./src/InlineHelp/InlineHelp.tsx"));
exports.InlineHelp = InlineHelp_1.default;


/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Box__;

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Grid__;

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Popover__;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__material_ui_core_Typography__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxwLXBvcHVwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL0hlbHBDb250ZXh0L0hlbHBDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwLy4vc3JjL0lubGluZUhlbHAvSW5saW5lSGVscC50c3giLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3ZlclwiIiwid2VicGFjazovL2hlbHAtcG9wdXAvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaGVscC1wb3B1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZWxwLXBvcHVwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSx3RUFBMkM7QUFJOUIsbUJBQVcsR0FBRyxxQkFBYSxDQUFlLEVBQWtCLENBQUMsQ0FBQztBQUUzRSxTQUFnQiw0QkFBNEIsQ0FBQyxFQUMzQyxPQUFPLEVBQ1AsUUFBUSxFQUlUO0lBQ0MsU0FBUyxXQUFXLENBQUMsRUFBVTtRQUM3QixJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNmLE9BQU8sT0FBTyxDQUFD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QUksRUFBRSxNQUFNLEVBQUMsUUFBUSxxQkFFMUIsQ0FDQyxDQUNGLENBQ0MsQ0FDVCxDQUNKLENBQUM7QUFDSixDQUFDO0FBbEVELDZCQWtFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUQsZ0hBQXVFO0FBSS9ELDhHQUpBLDBDQUE0QixRQUlBO0FBSHBDLDRIQUFpRDtBQUdYLHFCQUgvQixvQkFBVSxDQUcrQjs7Ozs7Ozs7Ozs7QUNKaEQsbUU7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiLCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIsIFwicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKSwgcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiksIHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIpLCByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKSwgcmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiXSwgcm9vdFtcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIl0sIHJvb3RbXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCJdLCByb290W1wiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiXSwgcm9vdFtcInJlYWN0XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQm94X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfR3JpZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX1BvcG92ZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJSGVscENvbnRleHQgZnJvbSAnLi4vSW50ZXJmYWNlcy9JSGVscENvbnRleHQnO1xuaW1wb3J0IElIZWxwSW5mbyBmcm9tICcuLi9JbnRlcmZhY2VzL0lIZWxwSW5mbyc7XG5cbmV4cG9ydCBjb25zdCBIZWxwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SUhlbHBDb250ZXh0Pih7fSBhcyBJSGVscENvbnRleHQpO1xuXG5leHBvcnQgZnVuY3Rpb24gSGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudCh7XG4gIGxleGljb24sXG4gIGNoaWxkcmVuXG59OiB7XG4gIGxleGljb246IFJlY29yZDxzdHJpbmcsIElIZWxwSW5mbz47XG4gIGNoaWxkcmVuOiBhbnk7XG59KSB7XG4gIGZ1bmN0aW9uIGdldEhlbHBJbmZvKGlkOiBzdHJpbmcpOiBJSGVscEluZm8ge1xuICAgIGlmIChsZXhpY29uW2lkXSkge1xuICAgICAgcmV0dXJuIGxleGljb25baWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge3RpdGxlOiAndW5rbm93bicsIGxpbms6ICd1bmtub3duJywgdGV4dDogJ3Vua25vd24nfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWxwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2dldEhlbHBJbmZvfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9IZWxwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5pbXBvcnQge0NTU1Byb3BlcnRpZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFJlYWN0LCB7TW91c2VFdmVudCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtIZWxwQ29udGV4dH0gZnJvbSAnLi4vSGVscENvbnRleHQvSGVscENvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmxpbmVIZWxwKHtcbiAgaGVscElkLFxuICBjaGlsZHJlblxufToge1xuICBoZWxwSWQ6IHN0cmluZztcbiAgY2hpbGRyZW46IGFueTtcbn0pIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3Qge2dldEhlbHBJbmZvfSA9IHVzZUNvbnRleHQoSGVscENvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qge3RpdGxlLCB0ZXh0LCBsaW5rfSA9IGdldEhlbHBJbmZvKGhlbHBJZCk7XG4gICAgc2V0VGl0bGUodGl0bGUpO1xuICAgIHNldFRleHQodGV4dCk7XG4gICAgc2V0TGluayhsaW5rKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gb3BlblBvcG92ZXIoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZVBvcG92ZXIoKSB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH1cblxuICBjb25zdCBzdHlsZTogQ1NTUHJvcGVydGllcyA9IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG4gICAgdGV4dERlY29yYXRpb25TdHlsZTogJ2Rhc2hlZCcsXG4gICAgY3Vyc29yOiAnaGVscCdcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3BhbiBvbkNsaWNrPXtvcGVuUG9wb3Zlcn0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9zcGFuPlxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgb3Blbj17ISFhbmNob3JFbH1cbiAgICAgICAgb25DbG9zZT17Y2xvc2VQb3BvdmVyfVxuICAgICAgICBhbmNob3JPcmlnaW49e3t2ZXJ0aWNhbDogJ2NlbnRlcicsIGhvcml6b250YWw6ICdjZW50ZXInfX1cbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInXG4gICAgICAgIH19XG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgID5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGNvbXBvbmVudD17Qm94fSBwPXsyfSBtYXhXaWR0aD1cIjMwMHB4XCI+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTBweCd9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnt0aXRsZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgVmlldyBpbiBtYW51YWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCB7SGVscENvbnRleHRQcm92aWRlckNvbXBvbmVudH0gZnJvbSAnLi9IZWxwQ29udGV4dC9IZWxwQ29udGV4dCc7XG5pbXBvcnQgSW5saW5lSGVscCBmcm9tICcuL0lubGluZUhlbHAvSW5saW5lSGVscCc7XG5pbXBvcnQgSUhlbHBJbmZvIGZyb20gJy4vSW50ZXJmYWNlcy9JSGVscEluZm8nO1xuXG5leHBvcnQge0hlbHBDb250ZXh0UHJvdmlkZXJDb21wb25lbnQsIElubGluZUhlbHAsIElIZWxwSW5mb307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfQm94X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19tYXRlcmlhbF91aV9jb3JlX0dyaWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX21hdGVyaWFsX3VpX2NvcmVfUG9wb3Zlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbWF0ZXJpYWxfdWlfY29yZV9UeXBvZ3JhcGh5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=