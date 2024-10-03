var socialDevelop_utils=function(e){function t(t){for(var n,i,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={0:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonpsocialDevelop_utils=window.webpackJsonpsocialDevelop_utils||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;return a.push([23,1]),r()}({0:function(e,t){e.exports=wp.i18n},23:function(e,t,r){"use strict";r.r(t),r.d(t,"BaseOptions",(function(){return u})),r.d(t,"untrailingslashit",(function(){return c})),r.d(t,"trailingslashit",(function(){return s})),r.d(t,"createContextFactory",(function(){return f})),r.d(t,"WP_REST_API_USE_GLOBAL_METHOD",(function(){return b})),r.d(t,"commonUrlBuilder",(function(){return m})),r.d(t,"Url",(function(){return v.a})),r.d(t,"commonRequest",(function(){return A})),r.d(t,"createRequestFactory",(function(){return N})),r.d(t,"RouteHttpVerb",(function(){return p})),r.d(t,"parseResult",(function(){return _})),r.d(t,"handleCorrupRestApi",(function(){return D})),r.d(t,"createLocalizationFactory",(function(){return M})),r.d(t,"locationRestPluginGet",(function(){return Q}));r(13);var n=r(9),o=r.n(n),a=r(10),i=r.n(a),u=function(){function e(){o()(this,e),this.slug=void 0,this.textDomain=void 0,this.version=void 0,this.restUrl=void 0,this.restNamespace=void 0,this.restRoot=void 0,this.restQuery=void 0,this.restNonce=void 0,this.publicUrl=void 0}return i()(e,null,[{key:"slugCamelCase",value:function(e){return e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))}},{key:"getPureSlug",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r?e.slugCamelCase(t.slug):t.slug}}]),e}(),c=function e(t){return t.endsWith("/")||t.endsWith("\\")?e(t.slice(0,-1)):t},s=function(e){return"".concat(c(e),"/")},l=r(4);function f(e){var t=Object(l.createContext)(e);return{StoreContext:t,StoreProvider:function(r){var n=r.children;return(React.createElement(t.Provider,{value:e},n))},useStores:function(){return Object(l.useContext)(t)}}}var p,d=r(2),v=r.n(d);!function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE",e.PATCH="PATCH"}(p||(p={}));var y=r(5),h=r.n(y),b=!0;function m(e){for(var t=e.location,r=e.params,n=void 0===r?{}:r,o=e.nonce,a=void 0===o||o,i=e.options,u=new v.a(i.restRoot,!0),l=u.query,f=l.rest_route||u.pathname,d=[],y=t.path.replace(/:([A-Za-z0-9-_]+)/g,(function(e,t){return d.push(t),n[t]})),m={},w=0,g=Object.keys(n);w<g.length;w++){var O=g[w];-1===d.indexOf(O)&&(m[O]=n[O])}var x=s(f)+c(t.namespace||i.restNamespace)+y,S=new v.a(window.location.href).protocol.slice(0,-1);return u.set("protocol",S),l.rest_route?l.rest_route=x:u.set("pathname",x),a&&i.restNonce&&(l._wpnonce=i.restNonce),b&&t.method&&t.method!==p.GET&&(l._method=t.method),u.set("query",h.a.all([i.restQuery,m,l])).toString()}var w=r(1),g=r.n(w),O=r(3),x=r.n(O);r(18);function S(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t){return P.apply(this,arguments)}function P(){return(P=x()(g.a.mark((function e(t,r){var n,o,a,i,u,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.clone(),e.prev=1,e.next=4,r.json();case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n.text();case 11:o=e.sent,console.warn("The response of ".concat(t," contains unexpected JSON, try to resolve the JSON line by line..."),{body:o}),i=S(o.split("\n")),e.prev=14,i.s();case 16:if((u=i.n()).done){e.next=28;break}if(!(c=u.value).startsWith("[")&&!c.startsWith("{")){e.next=26;break}return e.prev=19,e.abrupt("return",JSON.parse(c));case 23:e.prev=23,e.t1=e.catch(19),a=e.t1;case 26:e.next=16;break;case 28:e.next=33;break;case 30:e.prev=30,e.t2=e.catch(14),i.e(e.t2);case 33:return e.prev=33,i.f(),e.finish(33);case 36:throw a;case 37:case"end":return e.stop()}}),e,null,[[1,7],[14,30,33,36],[19,23]])})))).apply(this,arguments)}function A(e){return T.apply(this,arguments)}function T(){return(T=x()(g.a.mark((function e(t){var r,n,o,a,i,u,c,s,l,f,d,y,w;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.location,n=t.options,o=t.request,a=t.params,i=t.settings,u=void 0===i?{}:i,c=m({location:r,params:a,nonce:!1,options:n}),b&&r.method&&r.method!==p.GET?u.method=p.POST:u.method=p.GET,s=new v.a(c,!0),!(l=-1===["HEAD","GET"].indexOf(u.method))&&o&&s.set("query",h()(s.query,o)),f=s.toString(),e.next=9,window.fetch(f,h.a.all([u,{headers:{"Content-Type":"application/json;charset=utf-8","X-WP-Nonce":n.restNonce},body:l?JSON.stringify(o):void 0}]));case 9:if((d=e.sent).ok){e.next=24;break}return y=void 0,e.prev=12,e.next=15,_(f,d);case 15:y=e.sent,e.next=20;break;case 18:e.prev=18,e.t0=e.catch(12);case 20:throw u.method===p.GET&&(window.detectCorrupRestApiFailed=(window.detectCorrupRestApiFailed||0)+1),(w=d).responseJSON=y,w;case 24:return e.abrupt("return",_(f,d));case 25:case"end":return e.stop()}}),e,null,[[12,18]])})))).apply(this,arguments)}var E=r(11),k=r.n(E);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){k()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e){return{urlBuilder:function(t){return m(R(R({},t),{},{options:{restNamespace:e.restNamespace,restNonce:e.restNonce,restQuery:e.restQuery,restRoot:e.restRoot}}))},request:function(t){return A(R(R({},t),{},{options:{restNamespace:e.restNamespace,restNonce:e.restNonce,restQuery:e.restQuery,restRoot:e.restRoot}}))}}}function D(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];window.detectCorrupRestApiFailed=window.detectCorrupRestApiFailed||0,setTimeout(x()(g.a.mark((function r(){var n,o,a;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!document.getElementById("notice-corrupt-rest-api")||!(window.detectCorrupRestApiFailed>0||t)){r.next=16;break}n=0,o=Object.keys(e);case 3:if(!(n<o.length)){r.next=16;break}return a=o[n],r.prev=5,r.next=8,e[a]();case 8:r.next=13;break;case 10:r.prev=10,r.t0=r.catch(5),console.error("Corrupt REST API detected: ".concat(a));case 13:n++,r.next=3;break;case 16:case"end":return r.stop()}}),r,null,[[5,10]])}))),1e4)}var G=r(12),U=r.n(G),I=r(0),q=r(6),F=r.n(q);function J(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e){var t=window.wpi18nLazy;if(t&&t[e]&&F.a&&F.a.i18n){var r,n=J(t[e]);try{for(n.s();!(r=n.n()).done;){var o=r.value;F.a.i18n.setLocaleData(o,e)}}catch(e){n.e(e)}finally{n.f()}}return{_n:function(t,r,n){for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];return I.sprintf.apply(I,[I._n(t,r,n,e)].concat(a))},_nx:function(t,r,n,o){for(var a=arguments.length,i=new Array(a>4?a-4:0),u=4;u<a;u++)i[u-4]=arguments[u];return I.sprintf.apply(I,[I._nx(t,r,n,o,e)].concat(i))},_x:function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];return I.sprintf.apply(I,[I._x(t,r,e)].concat(o))},__:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return I.sprintf.apply(I,[I.__(t,e)].concat(n))},_i:function(e,t){return U()({mixedString:e,components:t})}}}var Q={path:"/plugin",method:p.GET}},4:function(e,t){e.exports=React},6:function(e,t){e.exports=wp}});
//# sourceMappingURL=index.js.map