parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({4:[function(require,module,exports) {
const e=e=>o=>{let t;o(0,(o,l)=>{0===o&&(t=l),1===o&&e(l),1!==o&&0!==o||t(1)})};module.exports=e;
},{}],5:[function(require,module,exports) {
const e=e=>(r,s)=>{if(0!==r)return;let u;s(0,e=>{2===e&&u&&(u.unsubscribe?u.unsubscribe():u())}),u=e.subscribe({next:e=>s(1,e),error:e=>s(2,e),complete:()=>s(2)})};module.exports=e;
},{}],6:[function(require,module,exports) {
const o=o=>(e,t)=>{if(0!==e)return;const n="undefined"!=typeof Symbol&&o[Symbol.iterator]?o[Symbol.iterator]():o;let r,l=!1,d=!1;t(0,o=>{1===o&&(d=!0,l||r&&r.done||function(){for(l=!0;d;)d=!1,(r=n.next()).done?t(2):t(1,r.value);l=!1}())})};module.exports=o;
},{}],7:[function(require,module,exports) {
const e=(e,t)=>(n,r)=>{if(0!==n)return;const o=e=>r(1,e);r(0,n=>{2===n&&e.removeEventListener(t,o)}),e.addEventListener(t,o)};module.exports=e;
},{}],8:[function(require,module,exports) {
const e=e=>(t,n)=>{if(0!==t)return;let o=!1;e.then(e=>{o||(n(1,e),n(2))},e=>{o||n(2,e)}),n(0,e=>{2===e&&(o=!0)})};module.exports=e;
},{}],9:[function(require,module,exports) {
const e=e=>(t,r)=>{if(0!==t)return;let l=0;const n=setInterval(()=>{r(1,l++)},e);r(0,e=>{2===e&&clearInterval(n)})};module.exports=e;
},{}],10:[function(require,module,exports) {
const o=o=>e=>(s,t)=>{0===s&&e(0,(e,s)=>{t(e,1===e?o(s):s)})};module.exports=o;
},{}],11:[function(require,module,exports) {
function e(e,t){let n=2===arguments.length;return r=>(l,u)=>{if(0!==l)return;let o=t;r(0,(t,r)=>{1===t?(o=n?e(o,r):(n=!0,r),u(1,o)):u(t,r)})}}module.exports=e;
},{}],12:[function(require,module,exports) {
const o=o=>(e,i)=>{if(0!==e)return;const t=o=>void 0!==o,n=o=>void 0===o,s=()=>{};let c,d,f=!1;function l(o){1===o&&(d||c||s)(1),2===o&&(d&&d(2),c&&c(2))}o(0,(o,e)=>{if(0===o)c=e,i(0,l);else if(1===o){const o=e;d&&d(2),o(0,(o,e)=>{0===o?(d=e)(1):1===o?i(1,e):2===o&&n(e)?f?i(2):(d=void 0,c(1)):2===o&&t(e)&&i(2,e)})}else 2===o&&n(e)?d?f=!0:i(2):2===o&&t(e)&&i(2,e)})};module.exports=o;
},{}],13:[function(require,module,exports) {
const t=t=>e=>(n,o)=>{if(0!==n)return;let r,u=0;function c(e,n){u<t&&r(e,n)}e(0,(e,n)=>{0===e?(r=n,o(0,c)):1===e?u<t&&(u++,o(e,n),u===t&&(o(2),r(2))):o(e,n)})};module.exports=t;
},{}],14:[function(require,module,exports) {
const e=e=>t=>(o,r)=>{if(0!==o)return;let l,n=0;t(0,(t,o)=>{0===t?(l=o,r(t,o)):1===t&&n<e?(n++,l(1)):r(t,o)})};module.exports=e;
},{}],15:[function(require,module,exports) {
const e=e=>t=>(o,r)=>{if(0!==o)return;let l;t(0,(t,o)=>{0===t?(l=o,r(t,o)):1===t?e(o)?r(t,o):l(1):r(t,o)})};module.exports=e;
},{}],16:[function(require,module,exports) {
function t(...t){return(e,r)=>{if(0!==e)return;const n=t.length,o=new Array(n);let f=0,l=0;const i=t=>{if(0!==t)for(let e=0;e<n;e++)o[e]&&o[e](t)};for(let e=0;e<n;e++)t[e](0,(t,u)=>{0===t?(o[e]=u,1==++f&&r(0,i)):2===t?(o[e]=void 0,++l===n&&r(2)):r(t,u)})}}module.exports=t;
},{}],17:[function(require,module,exports) {
const t=(...t)=>(n,o)=>{if(0!==n)return;const e=t.length;if(0===e)return o(0,()=>{}),void o(2);let r,c=0;const i=(t,n)=>{1!==t&&2!==t||r(t,n)};!function n(){c!==e?t[c](0,(t,e)=>{0===t?(r=e,0===c?o(0,i):r(1)):1===t?o(1,e):2===t&&(c++,n())}):o(2)}()};module.exports=t;
},{}],18:[function(require,module,exports) {
const e={},r=(...r)=>(t,n)=>{if(0!==t)return;const o=r.length;if(0===o)return n(0,()=>{}),n(1,[]),void n(2);let f=o,s=o,i=o;const l=new Array(o),c=new Array(o),a=(e,r)=>{if(2===e)for(let e=0;e<o;e++)c[e](2)};r.forEach((r,t)=>{l[t]=e,r(0,(r,u)=>{if(0===r)c[t]=u,0==--f&&n(0,a);else if(1===r){const r=s?l[t]===e?--s:s:0;if(l[t]=u,0===r){const e=new Array(o);for(let r=0;r<o;++r)e[r]=l[r];n(1,e)}}else 2===r?0==--i&&n(2):n(r,u)})})};module.exports=r;
},{}],19:[function(require,module,exports) {
const e=e=>{let l,t=[];return function(n,s){0===n&&(t.push(s),1===t.length&&e(0,(e,n)=>{if(0===e)l=n;else for(let l of t.slice(0))l(e,n);2===e&&(t=[])}),s(0,(e,n)=>{if(0!==e)if(2===e){const e=t.indexOf(s);e>-1&&t.splice(e,1),t.length||l(2)}else l(e,n)}))}};module.exports=e;
},{}],20:[function(require,module,exports) {
function e(...e){let t=e[0];for(let l=1,n=e.length;l<n;l++)t=e[l](t);return t}module.exports=e;
},{}],3:[function(require,module,exports) {
module.exports={forEach:require("callbag-for-each"),fromObs:require("callbag-from-obs"),fromIter:require("callbag-from-iter"),fromEvent:require("callbag-from-event"),fromPromise:require("callbag-from-promise"),interval:require("callbag-interval"),map:require("callbag-map"),scan:require("callbag-scan"),flatten:require("callbag-flatten"),take:require("callbag-take"),skip:require("callbag-skip"),filter:require("callbag-filter"),merge:require("callbag-merge"),concat:require("callbag-concat"),combine:require("callbag-combine"),share:require("callbag-share"),pipe:require("callbag-pipe")};
},{"callbag-for-each":4,"callbag-from-obs":5,"callbag-from-iter":6,"callbag-from-event":7,"callbag-from-promise":8,"callbag-interval":9,"callbag-map":10,"callbag-scan":11,"callbag-flatten":12,"callbag-take":13,"callbag-skip":14,"callbag-filter":15,"callbag-merge":16,"callbag-concat":17,"callbag-combine":18,"callbag-share":19,"callbag-pipe":20}],1:[function(require,module,exports) {
"use strict";var e=require("callbag-basics"),t=function e(){var t=document.querySelector(".post-merge-message button");console.log(t||"no button"),t?t.innerHTML.includes("Delete branch")&&t.click():setTimeout(e,200)};(0,e.pipe)((0,e.fromEvent)(document,"click"),(0,e.filter)(function(e){return e.target.className.includes("js-merge-commit-button")}),(0,e.forEach)(function(e){return console.log(e.target.className,e.target.parentNode.className)}));
},{"callbag-basics":3}]},{},[1], null)
//# sourceMappingURL=/index.map