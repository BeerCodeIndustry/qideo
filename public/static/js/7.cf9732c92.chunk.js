(this.csbJsonP=this.csbJsonP||[]).push([[7],{"../../node_modules/@svgr/core/lib sync recursive":function(e,r){function n(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="../../node_modules/@svgr/core/lib sync recursive"},"../../standalone-packages/codesandbox-browserfs/dist/shims/buffer.js":function(e,r){e.exports=BrowserFS.BFSRequire("buffer")},"./src/sandbox/eval/transpilers/svgr/transpiler.ts":function(e,r,n){"use strict";n.r(r),n.d(r,"svgrTransform",(function(){return v}));var t=n("../../node_modules/@babel/runtime/regenerator/index.js"),o=n.n(t),s=n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),i=n.n(s),u=n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),a=n.n(u),l=n("./node_modules/@svgr/plugin-jsx/lib/index.js"),c=n.n(l),f=n("../../node_modules/@svgr/core/lib/state.js"),p=n("../../node_modules/@svgr/core/lib/plugins.js");function d(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,r){if(!e)return;if("string"===typeof e)return b(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,r)}(e))){var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t,o,s=!0,i=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(i)throw o}}}}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function m(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?m(Object(n),!0).forEach((function(r){i()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var g={dimensions:!0,expandProps:"end",icon:!1,native:!1,typescript:!1,memo:!1,ref:!1,replaceAttrValues:null,svgProps:null,template:null,titleProp:!1,runtimeConfig:!0,plugins:null,namedExport:"ReactComponent"};function v(e,r){return h.apply(this,arguments)}function h(){return(h=a()(o.a.mark((function e(r,n){var t,s,i,u,a,l,b,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=y({},g),s={caller:{name:"@codesandbox/svgr-loader",defaultPlugins:[c.a]},filePath:r},i=Object(f.expandState)(s),u=Object(p.getPlugins)(t,s).map(p.resolvePlugin),a=String(n).replace("\0",""),l=d(u);try{for(l.s();!(b=l.n()).done;)m=b.value,a=m(a,t,i)}catch(o){l.e(o)}finally{l.f()}return e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);