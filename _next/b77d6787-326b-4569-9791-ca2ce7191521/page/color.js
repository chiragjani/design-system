module.exports=__NEXT_REGISTER_PAGE("/color",function(){return{page:webpackJsonp([3],{530:function(e,t,n){e.exports=n(531)},531:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n.n(r),a=n(2),i=n(28),l=(n.n(i),n(532)),c=n.n(l),u=n(81);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var m=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))).handleClick=function(t){c()(e.ghost),document.execCommand("copy")},e}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=o.a.Children.only(this.props.children);return[o.a.cloneElement(t,{onClick:this.handleClick}),o.a.createElement("div",{ref:function(t){return e.ghost=t},children:this.props.text,style:{position:"absolute",zIndex:-1,opacity:0}})]}}])&&f(n.prototype,r),a&&f(n,a),t}(),y=Object.keys(i.theme.colors).filter(function(e){return!/[0-9]$/.test(e)}).map(function(e){return{name:e,value:i.theme.colors[e]}}).filter(function(e){return!Array.isArray(e.value)}),b=y.filter(function(e){return!/^(lightGray|gray|borderGray|darkGray)$/.test(e.name)}),h=y.filter(function(e){return/^(lightGray|gray|borderGray|darkGray)$/.test(e.name)}),g=Object(a.default)(i.Box).withConfig({displayName:"color__ColorChip",componentId:"sc-3upe1x-0"})(["height:100px;width:100%;border-radius:2px 2px 0 0;transition:all 0.1s ease;"]),x=a.default.button.withConfig({displayName:"color__HexButton",componentId:"sc-3upe1x-1"})(["width:100%;display:inline-block;position:relative;font-family:inherit;font-size:12px;margin:0;padding:0;color:inherit;text-align:left;background-color:transparent;border:0;border-radius:0;appearance:none;transition:all 0.125s ease;box-shadow:0 4px 4px 0 rgba(0,0,0,0.08);&:hover{box-shadow:0 8px 8px 0 rgba(0,0,0,0.08),0 16px 16px 0 rgba(0,0,0,0.08);}&:active{transform:scale(0.9);}& > span{top:0;left:0;position:absolute;font-size:12px;padding:8px 0;width:100%;color:#fff;border-radius:2px 2px 0 0;background-color:#001833;text-align:center;opacity:0;transition-property:opacity;transition-duration:0.125s;transition-timing-function:ease-out;}&:hover > span{opacity:1;}"]),v=function(e){var t=e.name,n=e.value;return o.a.createElement(i.Card,{borderWidth:0,m:0},o.a.createElement(m,{text:n},o.a.createElement(x,null,o.a.createElement(g,{bg:n}),o.a.createElement("span",null,"Press to copy"),o.a.createElement(i.Box,{p:2},o.a.createElement(i.Text,{fontSize:1,mb:1,align:"left"},t),o.a.createElement(u.b,{fontSize:1,align:"left",color:"gray"},n)))))},E=function(e){return o.a.createElement(i.Box,s({},e,{width:[.5,null,1/3,.25,1/6],mb:4,px:2}))},w=function(e){return e.colors.map(function(e){return o.a.createElement(E,{key:e.key},o.a.createElement(v,e))})};t.default=function(e){return o.a.createElement(i.Box,null,o.a.createElement(u.d,null,"Color"),o.a.createElement(u.c,null,"The design system includes a color palette of several primary colors, along with light and dark variations."),o.a.createElement(i.Flex,{wrap:!0,mx:-2,pt:4},o.a.createElement(w,{colors:b}),o.a.createElement(w,{colors:h})))}},532:function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}}},[530]).default}});