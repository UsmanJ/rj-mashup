webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(97),o=r(i),s=n(52),a=n(57);a.render(s.createElement(o["default"],null),document.getElementById("react-container"))},53:function(e,t){/*
	 * Copyright 2014-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";e.exports=function(e,t){return t&&(e.skip=function(){return t}),e.wrap=function(t,n){return t(e,n)},e.chain=function(){return"undefined"!=typeof console&&console.log("rest.js: client.chain() is deprecated, use client.wrap() instead"),e.wrap.apply(this,arguments)},e}},54:function(e,t,n){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function r(e){return e}function i(e){return e}function o(e){return e}function s(e){return this instanceof s?void c(this,e):new s(e)}function a(e){var t,n,a,c;return e=e||{},t=e.init||r,n=e.request||i,a=e.success||e.response||o,c=e.error||function(){return Promise.resolve((e.response||o).apply(this,arguments)).then(Promise.reject.bind(Promise))},function(r,i){function o(e){var t,u;return t={},u={arguments:Array.prototype.slice.call(arguments),client:o},e="string"==typeof e?{path:e}:e||{},e.originator=e.originator||o,l(n.call(t,e,i,u),function(e){var n,o,l;return l=r,e instanceof s&&(o=e.abort,l=e.client||l,n=e.response,e=e.request),n=n||Promise.resolve(e).then(function(e){return Promise.resolve(l(e)).then(function(e){return a.call(t,e,i,u)},function(e){return c.call(t,e,i,u)})}),o?Promise.race([n,o]):n},function(t){return Promise.reject({request:e,error:t})})}return"object"==typeof r&&(i=r),"function"!=typeof r&&(r=e.client||u),i=t(i||{}),f(o,r)}}var u,c,l,f;u=n(92),c=n(55),l=n(56),f=n(53),a.ComplexRequest=s,e.exports=a},55:function(e,t){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function n(e){var t,n,i,o;for(e||(e={}),t=1,n=arguments.length;t<n;t+=1){i=arguments[t];for(o in i)o in e&&(e[o]===i[o]||o in r&&r[o]===i[o])||(e[o]=i[o])}return e}var r={};e.exports=n},56:function(e,t,n){/*
	 * Copyright 2014-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function r(e,t){return e.then(function(e){return e&&e[t]},function(e){return Promise.reject(e&&e[t])})}function i(){return r(this,"entity")}function o(){return r(r(this,"status"),"code")}function s(){return r(this,"headers")}function a(e){return e=f(e),r(this.headers(),e)}function u(e){return e=[].concat(e),c(e.reduce(function(e,t){return e.then(function(e){if("string"==typeof t&&(t={rel:t}),"function"!=typeof e.entity.clientFor)throw new Error("Hypermedia response expected");var n=e.entity.clientFor(t.rel);return n({params:t.params})})},this))}function c(e){return e.status=o,e.headers=s,e.header=a,e.entity=i,e.follow=u,e}function l(e,t,n){return c(Promise.resolve(e).then(t,n))}var f=n(96);l.make=c,l.reject=function(e){return c(Promise.reject(e))},l.promise=function(e){return c(new Promise(e))},e.exports=l},92:function(e,t,n){/*
	 * Copyright 2014-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function r(){return o.apply(void 0,arguments)}var i,o,s;i=n(53),"function"!=typeof Promise&&console&&console.log&&console.log("An ES6 Promise implementation is required to use rest.js. See https://github.com/cujojs/when/blob/master/docs/es6-promise-shim.md for using when.js as a Promise polyfill."),r.setDefaultClient=function(e){o=e},r.getDefaultClient=function(){return o},r.resetDefaultClient=function(){o=s},r.setPlatformDefaultClient=function(e){if(s)throw new Error("Unable to redefine platformDefaultClient");o=s=e},e.exports=i(r)},93:function(e,t){/*
	* Copyright 2014-2016 the original author or authors
	* @license MIT, see LICENSE.txt for details
	*
	* @author Scott Andrews
	*/
"use strict";function n(e){var t,n;return t=e.split(";"),n=t[0].trim().split("+"),{raw:e,type:n[0],suffix:n[1]?"+"+n[1]:"",params:t.slice(1).reduce(function(e,t){return t=t.split("="),e[t[0].trim()]=t[1]?t[1].trim():void 0,e},{})}}e.exports={parse:n}},94:function(e,t){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function n(e){return e=encodeURIComponent(e),e.replace(o,"+")}function r(e){return e=e.replace(s," "),decodeURIComponent(e)}function i(e,t,r){return Array.isArray(r)?r.forEach(function(n){e=i(e,t,n)}):(e.length>0&&(e+="&"),e+=n(t),void 0!==r&&null!==r&&(e+="="+n(r))),e}var o,s;o=/%20/g,s=/\+/g,e.exports={read:function(e){var t={};return e.split("&").forEach(function(e){var n,i,o;n=e.split("="),i=r(n[0]),o=2===n.length?r(n[1]):null,i in t?(Array.isArray(t[i])||(t[i]=[t[i]]),t[i].push(o)):t[i]=o}),t},write:function(e){var t="";return Object.keys(e).forEach(function(n){t=i(t,n,e[n])}),t}}},95:function(e,t){/*
	 * Copyright 2015-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function n(e){try{return Promise.resolve(e())}catch(t){return Promise.reject(t)}}e.exports=n},96:function(e,t){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function n(e){return e.toLowerCase().split("-").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("-")}e.exports=n},97:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(52),c=r(u),l=n(98),f=r(l),p=n(173),h=r(p),d=n(175),m=r(d),v=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=function(e){n.setState({value:e.target.value}),console.log(n.state.value)},n.handleButtonClick=function(e){var t=h["default"].wrap(m["default"]);t({path:"http://localhost:8080/date-time"}).then(n.handleAjax),n.setState({count:n.state.count+1})},n.handleRandomClick=function(e){var t=h["default"].wrap(m["default"]);t({path:"http://localhost:8080/tube-service"}).then(function(e){console.log(e.entity[0].serviceType)})},n.handleAjax=function(e){var t=void 0;t=e.entity.time.toString(),n.setState({date:t})},n.state=f["default"].get(),n}return s(t,e),a(t,[{key:"componentDidMount",value:function(){f["default"].addListener("change",this.changeEventHandler)}},{key:"changeEventHandler",value:function(){this.state=f["default"].get()}},{key:"_renderDiv",value:function(){return 1===this.state.count&&this.state.date?c["default"].createElement("div",null,c["default"].createElement("div",null,"'i am 1!'"),c["default"].createElement("span",null,this.state.date)):2===this.state.count?c["default"].createElement("div",null,c["default"].createElement("div",null,"'i am 2!'"),c["default"].createElement("span",null,this.state.date)):3===this.state.count?c["default"].createElement("div",null,c["default"].createElement("div",null,"'i am 3!'"),c["default"].createElement("span",null,this.state.date)):4===this.state.count?c["default"].createElement("div",null,c["default"].createElement("div",null,"'i am 4!'"),c["default"].createElement("span",null,this.state.date)):c["default"].createElement("div",null,c["default"].createElement("div",null,"I am not 1, 2, 3 or 4!"),c["default"].createElement("span",null,this.state.date))}},{key:"render",value:function(){return c["default"].createElement("div",null,"Hello ",c["default"].createElement("input",{onChange:this.handleChange,defaultValue:this.state.value,type:"text"}),c["default"].createElement("button",{onClick:this.handleButtonClick},"+1"),c["default"].createElement("hr",null),c["default"].createElement("span",null,this.state.count,": ",this.state.value),this._renderDiv(),c["default"].createElement("button",{onClick:this.handleRandomClick},"Random button"))}}]),t}(c["default"].Component);t["default"]=v},98:function(e,t,n){"use strict";var r=n(100),i=n(99).EventEmitter,o="react",s=0,a=r({},i.prototype,{get:function(){return{value:o,count:s}}});t=e.exports=a},99:function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function i(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,i,a,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(n=this._events[e],s(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(o(n))for(a=Array.prototype.slice.call(arguments,1),c=n.slice(),i=c.length,u=0;u<i;u++)c[u].apply(this,a);return!0},n.prototype.addListener=function(e,t){var i;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(i=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var i=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,i,s,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,i=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){i=a;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},100:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(o){return!1}}var i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,s,a=n(e),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var c in r)i.call(r,c)&&(a[c]=r[c]);if(Object.getOwnPropertySymbols){s=Object.getOwnPropertySymbols(r);for(var l=0;l<s.length;l++)o.call(r,s[l])&&(a[s[l]]=r[s[l]])}}return a}},172:function(e,t,n){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function r(e,t){var n,r,i,o,s;if(n=e,i={},t){for(r in t)s=new RegExp("\\{"+r+"\\}"),s.test(n)?n=n.replace(s,encodeURIComponent(t[r]),"g"):i[r]=t[r];o=a.write(i),o&&(n+=n.indexOf("?")===-1?"?":"&",n+=o)}return n}function i(e,t){return 0===e.indexOf(t)}function o(e,t){return this instanceof o?void(e instanceof o?(this._template=e.template,this._params=s({},this._params,t)):(this._template=(e||"").toString(),this._params=t||{})):new o(e,t)}var s,a,u,c,l,f;s=n(55),a=n(94),c=/([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?(\/[^?#]*)?(\?[^#]*)?(#\S*)?/i,l=/^([a-z][a-z0-9\-\+\.]*:\/\/|\/)/i,f=/([a-z][a-z0-9\+\-\.]*:)\/\/([^@]+@)?(([^:\/]+)(:([0-9]+))?)?\//i,o.prototype={append:function(e,t){return new o(this._template+e,s({},this._params,t))},fullyQualify:function(){if("undefined"==typeof location)return this;if(this.isFullyQualified())return this;var e=this._template;return i(e,"//")?e=u.protocol+e:i(e,"/")?e=u.origin+e:this.isAbsolute()||(e=u.origin+u.pathname.substring(0,u.pathname.lastIndexOf("/")+1)),e.indexOf("/",8)===-1&&(e+="/"),new o(e,this._params)},isAbsolute:function(){return l.test(this.build())},isFullyQualified:function(){return f.test(this.build())},isCrossOrigin:function(){if(!u)return!0;var e=this.parts();return e.protocol!==u.protocol||e.hostname!==u.hostname||e.port!==u.port},parts:function(){var e,t;return e=this.fullyQualify().build().match(c),t={href:e[0],protocol:e[1],host:e[3]||"",hostname:e[4]||"",port:e[6],pathname:e[7]||"",search:e[8]||"",hash:e[9]||""},t.origin=t.protocol+"//"+t.host,t.port=t.port||("https:"===t.protocol?"443":"http:"===t.protocol?"80":""),t},build:function(e){return r(this._template,s({},this._params,e))},toString:function(){return this.build()}},u="undefined"!=typeof location?new o(location.href).parts():void 0,e.exports=o},173:function(e,t,n){/*
	 * Copyright 2014-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";var r=n(92),i=n(174);r.setPlatformDefaultClient(i),e.exports=r},174:function(e,t,n){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function r(e){var t={};return e?(e.trim().split(u).forEach(function(e){var n,r,i;n=e.indexOf(":"),r=o(e.substring(0,n).trim()),i=e.substring(n+1).trim(),t[r]?Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]:t[r]=i}),t):t}function i(e,t){return Object.keys(t||{}).forEach(function(n){if(t.hasOwnProperty(n)&&n in e)try{e[n]=t[n]}catch(r){}}),e}var o,s,a,u;o=n(96),s=n(56),a=n(53),u=/[\r|\n]+/,e.exports=a(function(e){return s.promise(function(t,n){var o,s,a,u,c,l,f,p;if(e="string"==typeof e?{path:e}:e||{},f={request:e},e.canceled)return f.error="precanceled",void n(f);if(p=e.engine||XMLHttpRequest,!p)return void n({request:e,error:"xhr-not-available"});c=e.entity,e.method=e.method||(c?"POST":"GET"),s=e.method,a=f.url=e.path||"";try{o=f.raw=new p,i(o,e.mixin),o.open(s,a,!0),i(o,e.mixin),u=e.headers;for(l in u)"Content-Type"===l&&"multipart/form-data"===u[l]||o.setRequestHeader(l,u[l]);e.canceled=!1,e.cancel=function(){e.canceled=!0,o.abort(),n(f)},o.onreadystatechange=function(){e.canceled||o.readyState===(p.DONE||4)&&(f.status={code:o.status,text:o.statusText},f.headers=r(o.getAllResponseHeaders()),f.entity=o.responseText,1223===f.status.code&&(f.status.code=204),f.status.code>0?t(f):setTimeout(function(){t(f)},0))};try{o.onerror=function(){f.error="loaderror",n(f)}}catch(h){}o.send(c)}catch(h){f.error="loaderror",n(f)}})})},175:function(e,t,n){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";var r,i,o,s,a,u;r=n(54),i=n(93),o=n(178),u=n(95),s={read:function(e){return e},write:function(e){return e}},a={read:function(){throw"No read method found on converter"},write:function(){throw"No write method found on converter"}},e.exports=r({init:function(e){return e.registry=e.registry||o,e},request:function(e,t){var n,r;return r=e.headers||(e.headers={}),n=i.parse(r["Content-Type"]||t.mime||"text/plain"),r.Accept=r.Accept||t.accept||n.raw+", application/json;q=0.8, text/plain;q=0.5, */*;q=0.2","entity"in e?(r["Content-Type"]=n.raw,t.registry.lookup(n)["catch"](function(){if(t.permissive)return s;throw"mime-unknown"}).then(function(r){var i=t.client||e.originator,o=r.write||a.write;return u(o.bind(void 0,e.entity,{client:i,request:e,mime:n,registry:t.registry}))["catch"](function(){throw"mime-serialization"}).then(function(t){return e.entity=t,e})})):e},response:function(e,t){if(!(e.headers&&e.headers["Content-Type"]&&e.entity))return e;var n=i.parse(e.headers["Content-Type"]);return t.registry.lookup(n)["catch"](function(){return s}).then(function(r){var i=t.client||e.request&&e.request.originator,o=r.read||a.read;return u(o.bind(void 0,e.entity,{client:i,response:e,mime:n,registry:t.registry}))["catch"](function(t){throw e.error="mime-deserialization",e.cause=t,e}).then(function(t){return e.entity=t,e})})}})},176:function(e,t,n){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function r(e,t){return 0===e.indexOf(t)}function i(e,t){return e.lastIndexOf(t)+t.length===e.length}var o,s;o=n(54),s=n(172),e.exports=o({request:function(e,t){var n;return t.prefix&&!new s(e.path).isFullyQualified()&&(n=t.prefix,e.path&&(i(n,"/")||r(e.path,"/")||(n+="/"),n+=e.path),e.path=n),e}})},177:function(e,t,n){/*
	 * Copyright 2015-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";var r,i,o;r=n(54),i=n(186),o=n(55),e.exports=r({init:function(e){return e.params=e.params||{},e.template=e.template||"",e},request:function(e,t){var n,r;return n=e.path||t.template,r=o({},e.params,t.params),e.path=i.expand(n,r),delete e.params,e}})},178:function(e,t,n){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function r(e){this.lookup=function(t){var n;return n="string"==typeof t?i.parse(t):t,e[n.raw]?e[n.raw]:e[n.type+n.suffix]?e[n.type+n.suffix]:e[n.type]?e[n.type]:e[n.suffix]?e[n.suffix]:Promise.reject(new Error('Unable to locate converter for mime "'+n.raw+'"'))},this.delegate=function(e){return{read:function(){var t=arguments;return this.lookup(e).then(function(e){return e.read.apply(this,t)}.bind(this))}.bind(this),write:function(){var t=arguments;return this.lookup(e).then(function(e){return e.write.apply(this,t)}.bind(this))}.bind(this)}},this.register=function(t,n){return e[t]=Promise.resolve(n),e[t]},this.child=function(){return new r(Object.create(e))}}var i,o;i=n(93),o=new r({}),o.register("application/hal",n(179)),o.register("application/json",n(180)),o.register("application/x-www-form-urlencoded",n(94)),o.register("multipart/form-data",n(181)),o.register("text/plain",n(182)),o.register("+json",o.delegate("application/json")),e.exports=o},179:function(e,t,n){/*
	 * Copyright 2013-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function r(e,t,n){Object.defineProperty(e,t,{value:n,configurable:!0,enumerable:!1,writeable:!0})}var i,o,s,a,u;i=n(176),o=n(177),s=n(183),a=n(184),u=n(56),e.exports={read:function(e,t){function n(e,t){(t&&l&&l.warn||l.log)&&(l.warn||l.log).call(l,"Relationship '"+e+"' is deprecated, see "+t)}var c,l;return t=t||{},c=t.client,l=t.console||l,t.registry.lookup(t.mime.suffix).then(function(n){return n.read(e,t)}).then(function(e){return s.findProperties(e,"_embedded",function(e,t,n){Object.keys(e).forEach(function(n){if(!(n in t)){var i=u({entity:e[n]});r(t,n,i)}}),r(t,n,e)}),s.findProperties(e,"_links",function(e,t,s){Object.keys(e).forEach(function(i){var s=e[i];i in t||r(t,i,u.make(a(function(){return s.deprecation&&n(i,s.deprecation),s.templated===!0?o(c)({path:s.href}):c({path:s.href})})))}),r(t,s,e),r(t,"clientFor",function(t,r){var s=e[t];if(!s)throw new Error("Unknown relationship: "+t);return s.deprecation&&n(t,s.deprecation),s.templated===!0?o(r||c,{template:s.href}):i(r||c,{prefix:s.href})}),r(t,"requestFor",function(e,t,n){var r=this.clientFor(e,n);return r(t)})}),e})},write:function(e,t){return t.registry.lookup(t.mime.suffix).then(function(n){return n.write(e,t)})}}},180:function(e,t){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function n(e,t){return{read:function(t){return JSON.parse(t,e)},write:function(e){return JSON.stringify(e,t)},extend:n}}e.exports=n()},181:function(e,t){/*
	 * Copyright 2014-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Michael Jackson
	 */
"use strict";function n(e){return e&&1===e.nodeType&&"FORM"===e.tagName}function r(e){var t,n=new FormData;for(var r in e)e.hasOwnProperty(r)&&(t=e[r],t instanceof File?n.append(r,t,t.name):t instanceof Blob?n.append(r,t):n.append(r,String(t)));return n}e.exports={write:function(e){if("undefined"==typeof FormData)throw new Error("The multipart/form-data mime serializer requires FormData support");if(e instanceof FormData)return e;if(n(e))return new FormData(e);if("object"==typeof e&&null!==e)return r(e);throw new Error("Unable to create FormData from object "+e)}}},182:function(e,t){/*
	 * Copyright 2012-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";e.exports={read:function(e){return e},write:function(e){return e.toString()}}},183:function(e,t){/*
	 * Copyright 2013-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";e.exports={findProperties:function n(e,t,r){"object"==typeof e&&null!==e&&(t in e&&r(e[t],e,t),Object.keys(e).forEach(function(i){n(e[i],t,r)}))}}},184:function(e,t,n){/*
	 * Copyright 2013-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function r(e){var t,n,r,o;return t=!1,r=new Promise(function(e,t){n={resolve:e,reject:t}}),o=r.then,r.then=function(){return t||(t=!0,i(e).then(n.resolve,n.reject)),o.apply(r,arguments)},r}var i=n(95);e.exports=r},185:function(e,t){/*
	 * Copyright 2015-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function n(e,t){if("string"!=typeof e)throw new Error("String required for URL encoding");return e.split("").map(function(e){if(t.hasOwnProperty(e))return e;var n=e.charCodeAt(0);if(n<=127){var r=n.toString(16).toUpperCase();return"%"+(r.length%2===1?"0":"")+r}return encodeURIComponent(e).toUpperCase()}).join("")}function r(e){return e=e||o.unreserved,function(t){return n(t,e)}}function i(e){return decodeURIComponent(e)}var o;o=function(){var e={alpha:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",digit:"0123456789"};return e.genDelims=":/?#[]@",e.subDelims="!$&'()*+,;=",e.reserved=e.genDelims+e.subDelims,e.unreserved=e.alpha+e.digit+"-._~",e.url=e.reserved+e.unreserved,e.scheme=e.alpha+e.digit+"+-.",e.userinfo=e.unreserved+e.subDelims+":",e.host=e.unreserved+e.subDelims,e.port=e.digit,e.pchar=e.unreserved+e.subDelims+":@",e.segment=e.pchar,e.path=e.segment+"/",e.query=e.pchar+"/?",e.fragment=e.pchar+"/?",Object.keys(e).reduce(function(t,n){return t[n]=e[n].split("").reduce(function(e,t){return e[t]=!0,e},{}),t},{})}(),e.exports={decode:i,encode:r(),encodeURL:r(o.url),encodeScheme:r(o.scheme),encodeUserInfo:r(o.userinfo),encodeHost:r(o.host),encodePort:r(o.port),encodePathSegment:r(o.segment),encodePath:r(o.path),encodeQuery:r(o.query),encodeFragment:r(o.fragment)}},186:function(e,t,n){/*
	 * Copyright 2015-2016 the original author or authors
	 * @license MIT, see LICENSE.txt for details
	 *
	 * @author Scott Andrews
	 */
"use strict";function r(e,t,n){return t.split(",").reduce(function(t,r){var i,o;if(i={},"*"===r.slice(-1)&&(r=r.slice(0,-1),i.explode=!0),u.test(r)){var a=u.exec(r);r=a[1],i.maxLength=parseInt(a[2])}return r=s.decode(r),o=n[r],void 0===o||null===o?t:(Array.isArray(o)?t=o.reduce(function(t,n){return t.length?(t+=i.explode?e.separator:",",e.named&&i.explode&&(t+=e.encoder(r),t+=n.length?"=":e.empty)):(t+=e.first,e.named&&(t+=e.encoder(r),t+=n.length?"=":e.empty)),t+=e.encoder(n)},t):"object"==typeof o?t=Object.keys(o).reduce(function(t,n){return t.length?t+=i.explode?e.separator:",":(t+=e.first,e.named&&!i.explode&&(t+=e.encoder(r),t+=o[n].length?"=":e.empty)),t+=e.encoder(n),t+=i.explode?"=":",",t+=e.encoder(o[n])},t):(o=String(o),i.maxLength&&(o=o.slice(0,i.maxLength)),t+=t.length?e.separator:e.first,e.named&&(t+=e.encoder(r),t+=o.length?"=":e.empty),t+=e.encoder(o)),t)},"")}function i(e,t){var n;if(n=a[e.slice(0,1)],n?e=e.slice(1):n=a[""],n.reserved)throw new Error("Reserved expression operations are not supported");return r(n,e,t)}function o(e,t){var n,r,o;for(o="",r=0;;){if(n=e.indexOf("{",r),n===-1){o+=e.slice(r);break}o+=e.slice(r,n),r=e.indexOf("}",n)+1,o+=i(e.slice(n+1,r-1),t)}return o}var s,a,u;s=n(185),u=/^([^:]*):([0-9]+)$/,a={"":{first:"",separator:",",named:!1,empty:"",encoder:s.encode},"+":{first:"",separator:",",named:!1,empty:"",encoder:s.encodeURL},"#":{first:"#",separator:",",named:!1,empty:"",encoder:s.encodeURL},".":{first:".",separator:".",named:!1,empty:"",encoder:s.encode},"/":{first:"/",separator:"/",named:!1,empty:"",encoder:s.encode},";":{first:";",separator:";",named:!0,empty:"",encoder:s.encode},"?":{first:"?",separator:"&",named:!0,empty:"=",encoder:s.encode},"&":{first:"&",separator:"&",named:!0,empty:"=",encoder:s.encode},"=":{reserved:!0},",":{reserved:!0},"!":{reserved:!0},"@":{reserved:!0},"|":{reserved:!0}},e.exports={expand:o}}});
//# sourceMappingURL=main.js.map