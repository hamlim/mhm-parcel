parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),t=k(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"],["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"]),n=k(["\n  margin: 1rem 0;\n"],["\n  margin: 1rem 0;\n"]),l=k(["\n  font-size: 1.3rem;\n  margin-bottom: 3rem;\n"],["\n  font-size: 1.3rem;\n  margin-bottom: 3rem;\n"]),o=require("react"),r=E(o),a=require("../components/container.js"),u=E(a),c=require("react-emotion"),i=E(c),f=require("grid-emotion"),m=require("highlight.js"),d=E(m),s=require("../components/code.js"),h=E(s),p=require("@atlaskit/button"),y=E(p),g=require("recycles");function E(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function k(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var C=(0,c.keyframes)(t),j=(0,i.default)("p")(n),O=(0,i.default)("main")(l),_=function(t){function n(){var e,t,l;b(this,n);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=l=w(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(r))),l.state={on:!1},l.toggle=function(){return l.setState(function(e){return{on:!e.on}})},w(l,t)}return v(n,r.default.Component),e(n,[{key:"render",value:function(){return r.default.createElement(o.Fragment,null,r.default.createElement(y.default,{appearance:"primary",onClick:this.toggle},this.state.on?"Unmount":"Mount"),this.state.on?this.props.children:null)}}]),n}();exports.default=function(){return r.default.createElement(u.default,null,r.default.createElement(O,null,r.default.createElement("header",null,r.default.createElement("h2",null,r.default.createElement("code",null,"Recycles"))),r.default.createElement("section",null,r.default.createElement(j,null,"Recycles is a collection of render-prop components that expose hooks into the component lifecycle methods of a React Component."),r.default.createElement(j,null,"The following components are exported:"),r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("code",null,"ComponentDidMount")),r.default.createElement("li",null,r.default.createElement("code",null,"ComponentDidUpdate")),r.default.createElement("li",null,r.default.createElement("code",null,"ComponentDidCatch"),r.default.createElement("sup",null,"*")),r.default.createElement("li",null,r.default.createElement("code",null,"ComponentWillUnmount"))),r.default.createElement(j,null,"Below is a simple toggle component which will toggle mounting/unmounting a component. The first example is using a"," ",r.default.createElement("code",null,"<ComponentDidMount>")," component. Check the console in your browser to see logging that happens during mount."),r.default.createElement(_,null,r.default.createElement(g.ComponentDidMount,{callback:function(){console.log("Mounted!")}},function(){return r.default.createElement("marquee",null,"I have mounted!")})),r.default.createElement(j,null,"The next example is using the"," ",r.default.createElement("code",null,"<ComponentWillUnmount>")," component."),r.default.createElement(_,null,r.default.createElement(g.ComponentWillUnmount,{callback:function(){console.log("I have unmounted!")}},function(){return r.default.createElement("div",null,"I will log a message when I unmount!")}))),r.default.createElement("section",null,r.default.createElement(j,null,"By default these components only expose two props, the first of which is ",r.default.createElement("code",null,"children"),", which is a function called during the lifecycle. If you only provide ",r.default.createElement("code",null,"children")," then the compoennt will return null."),r.default.createElement(j,null,"If you do want to have the component render something and also use the lifecycle, then you can provide a ",r.default.createElement("code",null,"callback")," prop. When this is provided only the callback will be called during the lifecycle method, and then in render the component will return the result of evaluating children."),r.default.createElement(j,null,r.default.createElement("code",null,"<ComponentDidCatch>")," is a special case component because of its behavior with catching errors. If you are looking for a generic error boundary component that can handle the logging inside the callback for you, check out"," ",r.default.createElement("a",{href:"https://github.com/hamlim/react-error-boundary"},"React-Error-Boundary"),". If you would just like to use the component from recycles, then you should always provide a callback and a children prop. This is because the"," ",r.default.createElement("code",null,"componentDidCatch")," lifecycle will only be invoked when the components children throw and error, not the components siblings."),r.default.createElement(j,null,"Check out the rest of the library on github"," ",r.default.createElement("a",{href:"https://github.com/hamlim/recycles"},"here")))))};
},{"react":15,"../components/container.js":79,"react-emotion":43,"grid-emotion":84,"highlight.js":85,"../components/code.js":80,"@atlaskit/button":86,"recycles":87}]},{},[11], null)
//# sourceMappingURL=/recycles.cc502549.map