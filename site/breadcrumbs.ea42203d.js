parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"vn11":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("react")),t=require("react-router-dom"),r=n(require("react-emotion"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function u(e){return i(e)||c(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function l(){var e=f(["\n  margin-bottom: 2rem;\n"]);return l=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=(0,r.default)("div")(l()),p=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},s=function(e,t){return t.slice(0,e)},m=function(r){return r.routeProps.location.pathname.split("/").filter(Boolean).reduce(function(r,n,o,a){return u(r).concat([e.default.createElement(t.Link,{key:s(o+1,a).join("/"),to:"/".concat(s(o+1,a).join("/"))},p(n))])},[]).reduce(function(t,r,n,o){return n===o.length-1?u(t).concat([e.default.createElement(e.Fragment,{key:n}," ",r)]):0===n?u(t).concat([e.default.createElement(e.Fragment,{key:n},r," /")]):u(t).concat([e.default.createElement(e.Fragment,{key:n}," ",r," /")])},[])},y=function(){return e.default.createElement(d,null,e.default.createElement(t.Route,{path:"",render:function(t){return e.default.createElement(m,{routeProps:t})}}))},b=y;exports.default=b;
},{"react":"1n8/","react-router-dom":"obMO","react-emotion":"ES27"}]},{},[], null)
//# sourceMappingURL=/breadcrumbs.ea42203d.map