parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({88:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.transform=void 0;var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},e=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),r=require("react"),n=o(r);function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=function(o){var c=o({type:"@@INIT",payload:null})(void 0),f=(0,r.createContext)(c),s=function(r){function s(){var e,r,n;a(this,s);for(var i=arguments.length,f=Array(i),p=0;p<i;p++)f[p]=arguments[p];return r=n=u(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(f))),n.state=t({},c),n.dispatch=function(t){return n.setState(o(t),function(){n.props.onUpdate(n.state)})},u(n,r)}return i(s,n.default.Component),e(s,[{key:"render",value:function(){return n.default.createElement(f.Provider,{value:t({},this.state,{dispatch:this.dispatch})},this.props.children)}}]),s}();return s.defaultProps={onUpdate:function(){}},{Provider:s,Consumer:f.Consumer}};exports.default=c;var f=exports.transform=function(t){return function(e){return function(r){return t(r,e)}}};
},{"react":17}],10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},t=v(["\n  margin: 1rem 0;\n"],["\n  margin: 1rem 0;\n"]),n=v(["\n  font-size: 1.3rem;\n  margin-bottom: 3rem;\n"],["\n  font-size: 1.3rem;\n  margin-bottom: 3rem;\n"]),a=require("react"),r=D(a),l=require("../components/container.js"),o=D(l),u=require("react-state-reducer"),c=D(u),d=require("react-emotion"),i=D(d),s=require("grid-emotion"),m=require("highlight.js"),f=D(m),p=require("../components/code.js"),h=D(p),E=require("@atlaskit/button"),y=D(E),g=require("recycles");function D(e){return e&&e.__esModule?e:{default:e}}function C(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function v(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x=(0,i.default)("p")(t),T=(0,i.default)("main")(n),I={todos:[],text:"",counter:0},w="INC",O="DEC",A="ADD_TODO",_="UPDATE_INPUT",b="UPDATE_TODO",P="SET",j=function(t){var n=t.type,a=t.payload;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;switch(n){case P:return e({},t,a);case w:return e({},t,{counter:t.counter+1});case O:return e({},t,{counter:t.counter-1});case A:return e({},t,{text:"",todos:[].concat(C(t.todos),[{id:t.todos.length,text:t.text,done:!1}])});case _:return e({},t,{text:a});case b:return e({},t,{todos:t.todos.map(function(t){return t.id===a?e({},t,{done:!t.done}):t})});default:return t}}},k=(0,c.default)(j),F=k.Provider,U=k.Consumer,N="MH-RSR",S=function(){return r.default.createElement(U,null,function(e){var t=e.dispatch;return r.default.createElement(g.ComponentDidMount,null,function(){var e=window.localStorage.getItem(N);e&&t({type:P,payload:JSON.parse(e)})})})};exports.default=function(){return r.default.createElement(F,{onUpdate:function(e){window.localStorage.setItem(N,JSON.stringify(e))}},r.default.createElement(o.default,null,r.default.createElement(S,null),r.default.createElement(T,null,r.default.createElement("header",null,r.default.createElement("h2",null,r.default.createElement("code",null,"React-State-Reducer"))),r.default.createElement("section",null,r.default.createElement(x,null,"This is"," ",r.default.createElement("a",{href:"https://github.com/hamlim/react-state-reducer"},"React-State-Reducer"),", a simple React library for state management, built on the same patterns that Redux and other Flux libraries pioneered."),r.default.createElement("div",null,r.default.createElement(U,null,function(e){var t=e.dispatch,n=e.counter;return r.default.createElement(s.Flex,{justifyContent:"center",alignItems:"center",mt:"2rem"},r.default.createElement(s.Flex,{w:1/3,alignItems:"center",justifyContent:"center"},r.default.createElement(y.default,{appearance:"primary",onClick:function(e){return t({type:w})}},"Increment")),r.default.createElement(s.Flex,{w:1/3,alignItems:"center",justifyContent:"center"},n),r.default.createElement(s.Flex,{w:1/3,alignItems:"center",justifyContent:"center"},r.default.createElement(y.default,{appearance:"primary",onClick:function(e){return t({type:O})}},"Decrement")))})),r.default.createElement("div",null,r.default.createElement(x,null,"It allows you to manage how you both update and reconcile state changes by providing"," ",r.default.createElement("code",null,"<Provider>")," and"," ",r.default.createElement("code",null,"<Consumer>")," components. The consumer component provides a"," ",r.default.createElement("code",null,"dispatch")," function, along with all of the state spread down to the argument for the children function.")),r.default.createElement("div",null,r.default.createElement(U,null,function(e){var t=e.dispatch,n=e.todos,l=e.text;return r.default.createElement(a.Fragment,null,r.default.createElement("label",null,"Add a todo:",r.default.createElement("input",{value:l,onChange:function(e){return t({type:_,payload:e.target.value})},onKeyDown:function(e){"Enter"===e.key&&t({type:A})},placeholder:"Do the dishes"})),r.default.createElement("ul",null,n.map(function(e){return r.default.createElement("li",{key:e.id},e.done?r.default.createElement("s",null,e.text):e.text,r.default.createElement(y.default,{appearance:"link",onClick:function(n){return t({type:b,payload:e.id})}},"Mark as"," ",e.done?"incomplete":"complete"))})))}),r.default.createElement(x,null,"In fact this page is using the library to power not only the counter but also the todo application above!"),r.default.createElement(x,null,"And the best part of this is that they are using the same top level Provider, and two different Consumers!"),r.default.createElement(y.default,{appearance:"primary",onClick:function(e){window.localStorage.getItem(N)&&window.localStorage.setItem(N,"")}},"Clear out local storage"),r.default.createElement("details",null,r.default.createElement("summary",null,"Here is the code for this entire webpage:"),r.default.createElement("div",{className:"hljs"},r.default.createElement(h.default,{style:{maxWidth:"100%",overflow:"scroll"}},r.default.createElement("code",{dangerouslySetInnerHTML:{__html:f.default.highlight("jsx","import React, { Fragment } from 'react'\nimport createStore from 'react-state-reducer'\n\nconst INITIAL_STATE = {\n  todos: [],\n  text: '',\n  counter: 0,\n}\n\nconst INC = 'INC'\nconst DEC = 'DEC'\nconst ADD_TODO = 'ADD_TODO'\nconst UPDATE_INPUT = 'UPDATE_INPUT'\nconst UPDATE_TODO = 'UPDATE_TODO'\n\nconst reducer = ({ type, payload }) => (\n  state = INITIAL_STATE,\n) => {\n  switch (type) {\n    case INC: {\n      return {\n        ...state,\n        counter: state.counter + 1,\n      }\n    }\n    case DEC: {\n      return {\n        ...state,\n        counter: state.counter - 1,\n      }\n    }\n    case ADD_TODO: {\n      return {\n        ...state,\n        text: '',\n        todos: [\n          ...state.todos,\n          {\n            id: state.todos.length,\n            text: state.text,\n            done: false,\n          },\n        ],\n      }\n    }\n    case UPDATE_INPUT: {\n      return {\n        ...state,\n        text: payload,\n      }\n    }\n    case UPDATE_TODO: {\n      return {\n        ...state,\n        todos: state.todos.map(t => {\n          if (t.id === payload) {\n            return {\n              ...t,\n              done: !t.done,\n            }\n          } else {\n            return t\n          }\n        }),\n      }\n    }\n    default:\n      return state\n  }\n}\n\nconst { Provider, Consumer } = createStore(reducer)\n\nexport default () => (\n  <Provider>\n    <Container>\n      <Main>\n        <section>\n          <div>\n            <Consumer>\n              {({ dispatch, counter }) => (\n                <Flex\n                  justifyContent=\"center\"\n                  alignItems=\"center\"\n                  mt=\"2rem\"\n                >\n                  <Flex\n                    w={1 / 3}\n                    alignItems=\"center\"\n                    justifyContent=\"center\"\n                  >\n                    <Button\n                      appearance=\"primary\"\n                      onClick={_ => dispatch({ type: INC })}\n                    >\n                      Increment\n                    </Button>\n                  </Flex>\n                  <Flex\n                    w={1 / 3}\n                    alignItems=\"center\"\n                    justifyContent=\"center\"\n                  >\n                    {counter}\n                  </Flex>\n                  <Flex\n                    w={1 / 3}\n                    alignItems=\"center\"\n                    justifyContent=\"center\"\n                  >\n                    <Button\n                      appearance=\"primary\"\n                      onClick={_ => dispatch({ type: DEC })}\n                    >\n                      Decrement\n                    </Button>\n                  </Flex>\n                </Flex>\n              )}\n            </Consumer>\n            <Consumer>\n              {({ dispatch, todos, text }) => (\n                <Fragment>\n                  <label>\n                    Add a todo:\n                    <input\n                      value={text}\n                      onChange={e =>\n                        dispatch({\n                          type: UPDATE_INPUT,\n                          payload: e.target.value,\n                        })\n                      }\n                      onKeyDown={e => {\n                        if (e.key === 'Enter') {\n                          dispatch({ type: ADD_TODO })\n                        }\n                      }}\n                      placeholder=\"Do the dishes\"\n                    />\n                  </label>\n                  <ul>\n                    {todos.map(todo => (\n                      <li key={todo.id}>\n                        {todo.done ? (\n                          <s>{todo.text}</s>\n                        ) : (\n                          todo.text\n                        )}\n                        <Button\n                          appearance=\"link\"\n                          onClick={_ =>\n                            dispatch({\n                              type: UPDATE_TODO,\n                              payload: todo.id,\n                            })\n                          }\n                        >\n                          Mark as{' '}\n                          {todo.done\n                            ? 'incomplete'\n                            : 'complete'}\n                        </Button>\n                      </li>\n                    ))}\n                  </ul>\n                </Fragment>\n              )}\n            </Consumer>\n          </div>\n        </section>\n      </Main>\n    </Container>\n  </Provider>\n)\n").value}}))))),r.default.createElement(x,null,"If you made it this far down, check out the project on"," ",r.default.createElement("a",{href:"https://github.com/hamlim/react-state-reducer"},"Github"),".")))))};
},{"react":17,"../components/container.js":77,"react-state-reducer":88,"react-emotion":43,"grid-emotion":84,"highlight.js":85,"../components/code.js":82,"@atlaskit/button":86,"recycles":87}]},{},[10], null)
//# sourceMappingURL=/react-state-reducer.c96367d7.map