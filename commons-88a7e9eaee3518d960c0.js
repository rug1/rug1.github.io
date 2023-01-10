/*! For license information please see commons-88a7e9eaee3518d960c0.js.LICENSE.txt */
(self.webpackChunkruth_io=self.webpackChunkruth_io||[]).push([[351],{555:function(t,e,n){"use strict";n.d(e,{Z:function(){return S}});var r=n(7294),o=n(7166),i=n(1082),a=o.default.header.withConfig({displayName:"styles__StyledHeader",componentId:"sc-1ytat6a-0"})(["padding:",";font-size:",";width:100%;z-index:100;display:flex;justify-content:space-between;ul{list-style-type:none;margin:0;padding:0;display:inline-block;}@media only screen and (max-width:950px){padding:",";}"],(function(t){var e=t.theme;return e.spacing.sm+" "+e.spacing.lg}),(function(t){return t.theme.fontSize.font16}),(function(t){var e=t.theme;return e.spacing.md+" "+e.spacing.sm})),c=o.default.li.withConfig({displayName:"styles__NavItem",componentId:"sc-1ytat6a-1"})(["display:inline-block;margin-right:",";cursor:pointer;padding-bottom:2px;border-bottom:",";line-height:26px;text-decoration:none;font-weight:600;a{color:",";text-decoration:none;@media only screen and (max-width:750px){color:",";}&:hover{color:",";@media only screen and (max-width:750px){color:",";}}}&:first-child{background-color:",";border-radius:100%;padding:6px;width:40px;height:40px;text-align:center;}&:last-child{margin-right:0px;}"],(function(t){return t.home?t.theme.spacing.lg:t.theme.spacing.md}),(function(t){var e=t.theme,n=t.active,r=t.home;return n&&!r?"3px solid "+e.colours.light:""}),(function(t){var e=t.theme;return"/"===t.path?e.colours.black:e.textColour}),(function(t){var e=t.theme;return"/"===t.path?e.colours.white:e.textColour}),(function(t){var e=t.theme;return"/"===t.path?e.colours.black:e.textColour}),(function(t){var e=t.theme;return"/"===t.path?e.colours.white:e.textColour}),(function(t){return t.theme.colours.light})),l=o.default.label.withConfig({displayName:"styles__Switch",componentId:"sc-1ytat6a-2"})(["display:flex;height:36px;position:relative;width:70px;cursor:pointer;input{display:none;}input:checked + .slider{background-color:",";}input:checked + .slider:before{transform:translateX(34px);border-color:",";background-color:",";}"],(function(t){return t.theme.bodyColour}),(function(t){return t.theme.textColour}),(function(t){return t.theme.textColour})),u=o.default.div.withConfig({displayName:"styles__Slider",componentId:"sc-1ytat6a-3"})(["background-color:",";border:1px solid ",";bottom:0;left:0;position:absolute;right:0;top:0;transition:.4s;border-radius:34px;&:before{background-color:",";border:1px solid ",';bottom:3px;content:"";height:26px;left:4px;position:absolute;transition:.4s;width:26px;z-index:1;border-radius:50%;}'],(function(t){return t.theme.colours.white}),(function(t){return t.theme.textColour}),(function(t){return t.theme.colours.black}),(function(t){return t.theme.colours.white})),s=o.default.div.withConfig({displayName:"styles__Toggle",componentId:"sc-1ytat6a-4"})(["width:50%;text-align:center;padding:8px;position:relative;"]),p=n(9903),f=function(t){var e=t.pathname,n=t.themeToggler,o=t.theme;return r.createElement(a,null,r.createElement("ul",null,r.createElement(c,{home:!0,path:e,active:"/"===e},r.createElement(i.Link,{to:"/"},"R")),r.createElement(c,{path:e,active:e.includes("/blog")},r.createElement(i.Link,{to:"/blog"},"Blog")),r.createElement(c,{path:e,active:e.includes("/contact")},r.createElement(i.Link,{to:"/contact"},"Contact"))),"/"!==e&&r.createElement(l,{htmlFor:"themeToggle",title:"Change color scheme to dark mode"},r.createElement("input",{type:"checkbox",id:"themeToggle",onChange:n,checked:o!==p.f8}),r.createElement(u,{className:"slider"}),r.createElement(s,null,r.createElement("span",{role:"img","aria-label":"dark mode"},"🌙")),r.createElement(s,null,r.createElement("span",{role:"img","aria-label":"light mode"},"☀️"))))};function h(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void n(u)}c.done?e(l):Promise.resolve(l).then(r,o)}var m=n(4687),d=n.n(m),g=o.default.footer.withConfig({displayName:"styles__SubscribeFooter",componentId:"sc-11ta5tn-0"})(["height:200px;display:flex;justify-content:center;align-items:center;> div{padding:12px;}"]),y=o.default.form.withConfig({displayName:"styles__SubscribeForm",componentId:"sc-11ta5tn-1"})(["max-width:550px;display:flex;align-items:center;justify-content:space-between;gap:12px;@media only screen and (max-width:600px){flex-direction:column;}"]),v=o.default.p.withConfig({displayName:"styles__SubscribeText",componentId:"sc-11ta5tn-2"})(["max-width:550px;font-weight:bold;"]),x=o.default.input.withConfig({displayName:"styles__SubscribeInput",componentId:"sc-11ta5tn-3"})(["padding:6px;border-radius:4px;border:1px solid grey;height:38px;width:220px;font-family:'Inter';"]),b=o.default.button.withConfig({displayName:"styles__SubscribeButton",componentId:"sc-11ta5tn-4"})(["height:38px;border-radius:4px;border:none;width:100px;background-color:",";color:",";font-family:'Inter';font-weight:bold;cursor:pointer;transition:background-color 0.3s;&:hover{background-color:",";}@media only screen and (max-width:600px){width:100%;}"],(function(t){return t.theme.colours.light}),(function(t){return t.theme.colours.black}),(function(t){return t.theme.colours.lightest})),w=function(){var t=(0,r.useState)(""),e=t[0],n=t[1],o=(0,r.useState)(""),i=o[0],a=o[1],c=(0,r.useState)(!1),l=c[0],u=c[1],s=(0,r.useState)(!1),p=s[0],f=s[1],m=function(t){var e=t.target,r=e.name,o=e.value;"name"===r?n(o):"email"===r&&a(o)},w=function(){var t,n=(t=d().mark((function t(n){var r,o;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),u(!0),r="https://api.sendinblue.com/v3/contacts/lists/3/contacts/add",o={Accept:"application/json","Content-Type":"application/json","api-key":""},t.prev=5,t.next=8,fetch("https://api.sendinblue.com/v3/contacts",{method:"POST",headers:o,body:JSON.stringify({email:i,attributes:{FIRSTNAME:e}})});case 8:return t.next=10,fetch(r,{method:"POST",headers:o,body:JSON.stringify({emails:[i]})});case 10:u(!1),f(!0),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),u(!1);case 17:case"end":return t.stop()}}),t,null,[[5,14]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){h(i,r,o,a,c,"next",t)}function c(t){h(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(t){return n.apply(this,arguments)}}();return p?r.createElement(g,null,r.createElement("h3",null,"Thanks for subscribing! ✅")):r.createElement(g,null,r.createElement("div",null,r.createElement(v,null,"Want to hear more?"),r.createElement(y,{onSubmit:w},r.createElement(x,{type:"text",onChange:m,value:e,placeholder:"Name",name:"name"}),r.createElement(x,{type:"text",onChange:m,value:i,placeholder:"Email",name:"email"}),r.createElement(b,{type:"submit",disabled:l||p},"Subscribe"))))},E=n(4153),_={colours:{lightest:"#f8a1d1",light:"#e36bae",dark:"#b34180",darkest:"#822659",white:"#f8f8ff",black:"#222222"},spacing:{xxs:"4px",xs:"8px",sm:"12px",md:"20px",lg:"32px",xl:"52px",xxl:"84px"},fontSize:{font80:"80px",font64:"64px",font48:"48px",font36:"36px",font27:"27px",font24:"24px",font19:"19px",font16:"16px",font14:"14px"}},k=Object.assign({},_,{bodyColour:_.colours.white,textColour:_.colours.black}),C=Object.assign({},_,{bodyColour:_.colours.black,textColour:_.colours.white}),S=function(t){var e=t.children,n=t.pathname;return r.createElement(p.Ni.Consumer,null,(function(t){if(t)return r.createElement(o.ThemeProvider,{theme:t.theme===p.f8?k:C},r.createElement(r.Fragment,null,r.createElement(E.Z,null),r.createElement(f,{pathname:n,themeToggler:t.themeToggler,theme:t.theme}),r.createElement("main",null,e),n.includes("blog")&&r.createElement(w,null)))}))}},594:function(t,e,n){"use strict";var r=n(7294),o=n(1082);e.ZP=function(t){var e=t.title,n=t.description,i=t.image,a=t.canonicalURL,c=(t.url,t.children),l=(0,o.useStaticQuery)("3534565648").site.siteMetadata,u=l.title,s=l.description,p=l.image,f=l.author,h={title:e||u,description:n||s,image:i||p,url:""+l.siteUrl+(pathname||""),author:f};return r.createElement(r.Fragment,null,r.createElement("title",null,h.title),r.createElement("meta",{name:"description",content:h.description}),r.createElement("meta",{name:"image",content:h.image}),r.createElement("meta",{property:"og:title",content:h.title}),r.createElement("meta",{property:"og:image",content:h.image}),r.createElement("meta",{property:"og:description",content:h.description}),r.createElement("meta",{property:"og:url",content:h.url}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:h.title}),r.createElement("meta",{name:"twitter:url",content:h.url}),r.createElement("meta",{name:"twitter:description",content:h.description}),r.createElement("meta",{name:"twitter:image",content:h.image}),r.createElement("link",{id:"favicon-icon",rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),c,a&&r.createElement("link",{rel:"canonical",href:a}),r.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap",rel:"stylesheet"}),r.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-1EKVZ0C83M"}),r.createElement("script",null,"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-1EKVZ0C83M');\n        "),r.createElement("script",null,"\n          window['_fs_debug'] = false;\n          window['_fs_host'] = 'fullstory.com';\n          window['_fs_script'] = 'edge.fullstory.com/s/fs.js';\n          window['_fs_org'] = '12GXXH';\n          window['_fs_namespace'] = 'FS';\n          (function(m,n,e,t,l,o,g,y){\n              if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].');} return;}\n              g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];\n              o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;\n              y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);\n              g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};\n              g.anonymize=function(){g.identify(!!0)};\n              g.shutdown=function(){g(\"rec\",!1)};g.restart=function(){g(\"rec\",!0)};\n              g.log = function(a,b){g(\"log\",[a,b])};\n              g.consent=function(a){g(\"consent\",!arguments.length||a)};\n              g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};\n              g.clearUserCookie=function(){};\n              g.setVars=function(n, p){g('setVars',[n,p]);};\n              g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];\n              if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};\n              g._v=\"1.3.0\";\n          })(window,document,window['_fs_namespace'],'script','user');\n        "))}},4153:function(t,e,n){"use strict";n.d(e,{B:function(){return o}});var r=n(7166),o="calc(100vh - 64px)",i=(0,r.createGlobalStyle)(["*{box-sizing:border-box;}body{margin:0;font-family:'Inter';background-color:",";color:",";transition:all 0.3s linear;}p,li{line-height:21px;}a{color:",";text-decoration:underline;&:hover{color:",";}}"],(function(t){return t.theme.bodyColour}),(function(t){return t.theme.textColour}),(function(t){return t.theme.textColour}),(function(t){return t.theme.colours.light}));e.Z=i},7061:function(t,e,n){var r=n(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function p(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(O){p=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new N(r||[]);return a(i,"_invoke",{value:k(t,n,c)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var m={};function d(){}function g(){}function y(){}var v={};p(v,l,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(j([])));b&&b!==n&&i.call(b,l)&&(v=b);var w=y.prototype=d.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,a,c,l){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==r(p)&&i.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,c,l)}),(function(t){n("throw",t,c,l)})):e.resolve(p).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,l)}))}l(u.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function k(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return I()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=C(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=h(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function C(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:I}}function I(){return{value:void 0,done:!0}}return g.prototype=y,a(w,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:g,configurable:!0}),g.displayName=p(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,p(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},E(_.prototype),p(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new _(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),p(w,s,"Generator"),p(w,l,(function(){return this})),p(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,n){var r=n(7061)();t.exports=r;try{regeneratorRuntime=r}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}}]);
//# sourceMappingURL=commons-88a7e9eaee3518d960c0.js.map