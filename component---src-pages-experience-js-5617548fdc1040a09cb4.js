(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[622],{9584:function(e,t,n){var i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=c||u||Function("return this")(),p=Object.prototype.toString,h=Math.max,d=Math.min,m=function(){return f.Date.now()};function g(e,t,n){var o,r,a,l,s,c,u=0,f=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,u=t,l=e.apply(i,n)}function w(e){return u=e,s=setTimeout(E,t),f?b(e):l}function S(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-u>=a}function E(){var e=m();if(S(e))return x(e);s=setTimeout(E,function(e){var n=t-(e-c);return p?d(n,a-(e-u)):n}(e))}function x(e){return s=void 0,g&&o?b(e):(o=r=void 0,l)}function k(){var e=m(),n=S(e);if(o=arguments,r=this,c=e,n){if(void 0===s)return w(c);if(p)return s=setTimeout(E,t),b(c)}return void 0===s&&(s=setTimeout(E,t)),l}return t=v(t)||0,y(n)&&(f=!!n.leading,a=(p="maxWait"in n)?h(v(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),k.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=c=r=s=void 0},k.flush=function(){return void 0===s?l:x(m())},k}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})}},7815:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var r=n(7294),a=o(r),l=o(n(9584)),s=o(n(7965)),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var i=!0;i;){var o=e,r=t,a=n;i=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,r);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=r,n=a,i=!0,l=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,l.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout((function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return a.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(r.Component);t.default=c,c.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},c.propTypes={animateIn:s.default.string,animateOut:s.default.string,offset:s.default.number,duration:s.default.number,delay:s.default.number,initiallyVisible:s.default.bool,animateOnce:s.default.bool,style:s.default.object,scrollableParentSelector:s.default.string,className:s.default.string,animatePreScroll:s.default.bool},e.exports=t.default},9102:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var i=n(5750),o=n(7294),r=n(3908),a=n(188),l=n(6726),s=n(7815),c=n.n(s),u=n(7295),f=n.n(u),p=l.default.div.withConfig({displayName:"experience__SectionContainer",componentId:"sc-w8i7x1-0"})(["height:100vh;background-color:",";display:flex;justify-content:center;align-items:center;flex-direction:column;"],(function(e){return e.colour})),h=(0,l.default)(c()).attrs({animateIn:"fadeIn",offset:500}).withConfig({displayName:"experience__ScrollAnimationWrapper",componentId:"sc-w8i7x1-1"})(["margin-bottom:",";"],(function(e){return e.theme.spacing.xxl})),d=l.default.h1.withConfig({displayName:"experience__SectionHeading",componentId:"sc-w8i7x1-2"})(["font-size:",";color:",";margin-right:",";margin-left:",";@media only screen and (max-width:600px){font-size:",";}"],(function(e){return e.theme.fontSize.font80}),(function(e){return e.colour}),(function(e){return e.theme.spacing.lg}),(function(e){return e.theme.spacing.lg}),(function(e){return e.theme.fontSize.font48})),m=l.default.h2.withConfig({displayName:"experience__SectionSubHeading",componentId:"sc-w8i7x1-3"})(["font-size:",";color:",";margin-right:",";margin-left:",";@media only screen and (max-width:600px){font-size:",";}"],(function(e){return e.theme.fontSize.font27}),(function(e){return e.colour}),(function(e){return e.theme.spacing.lg}),(function(e){return e.theme.spacing.lg}),(function(e){return e.theme.fontSize.font24})),g=l.default.p.withConfig({displayName:"experience__SectionText",componentId:"sc-w8i7x1-4"})(["font-size:",";line-height:1.5em;color:",";max-width:1000px;margin:0 ",";@media only screen and (max-width:600px){font-size:",";}"],(function(e){return e.theme.fontSize.font24}),(function(e){return e.colour}),(function(e){return e.theme.spacing.lg}),(function(e){return e.theme.fontSize.font16})),y=(0,l.keyframes)(["0%,50%,75%{opacity:0;}100%{opacity:1;}"]),v=l.default.div.withConfig({displayName:"experience__ScrollIcon",componentId:"sc-w8i7x1-5"})(["position:absolute;bottom:20px;animation:"," 4s;p{margin:0;color:#ffffff;width:50px;text-align:center;}"],y),b=(0,l.keyframes)(["0%,20%,50%,80%,100%{transform:translateY(0);}40%{transform:translateY(-30px);}60%{transform:translateY(-15px);}"]),w=(0,l.default)(f()).withConfig({displayName:"experience__ChevronDown",componentId:"sc-w8i7x1-6"})(["width:50px;height:50px;stroke:#ffffff;animation:"," 2s infinite;animation-delay:5s;"],b),S=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={height:0,headerColour:"#555b6e",headerTextColour:"#ffffff"},t.updateWindowDimensions=function(){t.setState({height:window.innerHeight})},t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions()},n.render=function(){return o.createElement(r.Z,{headerColour:this.state.headerColour,headerTextColour:this.state.headerTextColour,pathname:this.props.location.pathname},o.createElement(a.Z,{title:"Experience"}),o.createElement(p,{colour:"#555b6e"},o.createElement(h,{animateOnce:!0,offset:150},o.createElement(d,{colour:"#ffffff"},"Experience"),o.createElement(g,{colour:"#ccd6e2"},"Software engineer who’s always learning new technologies and keeping up to date with the recent tech trends and best practices. Experience with React and GraphQL, I focus on ways to improve consistency and reusability on the frontend. Passionate about accessibility.")),o.createElement(v,null,o.createElement(w,null),o.createElement("p",null,"scroll"))),o.createElement(p,{colour:"#ECDBFF"},o.createElement(h,null,o.createElement(d,{colour:"#7948B2"},"Personably"),o.createElement(m,{colour:"#7948B2"},"Software Engineer, Feb 2017–present"),o.createElement(g,{colour:"#4d4d4d"},"Joining Personably as the first employee, I have been able to experience all the stages of an early stage startup from the beginning. Working closely with the CTO, I contributed across the whole codebase which included React, GraphQL and Node.js. I worked with the design team to create a component library that I summarised in a"," ",o.createElement("a",{href:"https://www.personably.co/blog/the-story-of-building-macaw-ui",target:"_blank",rel:"noopener noreferrer"},"blog post"),". Also writing Personably’s most visited"," ",o.createElement("a",{href:"https://www.personably.co/blog/cypress-tests-continuous-integration",target:"_blank",rel:"noopener noreferrer"},"blog post")," ","on how we achieved running Cypress tests in Continuous Integration."))),o.createElement(p,{colour:"#AC29B5"},o.createElement(h,null,o.createElement(d,{colour:"#ffffff"},"JustGiving"),o.createElement(m,{colour:"#ffffff"},"Junior Frontend Developer, April 2016–Feb 2017"),o.createElement(g,{colour:"#ffffff"},"Solely focused on frontend development, working in an agile software environment with product managers, designers and senior frontend developers to build projects in React, Redux and TypeScript."))),o.createElement(p,{colour:"#ccd6e2"},o.createElement(h,null,o.createElement(d,{colour:"#000000"},"Freelance"),o.createElement(m,{colour:"#000000"},"Full Stack Developer, Aug 2016–March 2017"),o.createElement(g,{colour:"#555b6e"},"As an independent freelancer I worked on larger and more challenging projects including a 3 month contract for Indigo (now Juno) and a 2 month contract for WCRS which required me to work at the client’s offices in California for 2 weeks. As well as many other smaller contracts."))),o.createElement(p,{colour:"#121212"},o.createElement(h,null,o.createElement(d,{colour:"#ffffff"},"Founders and Coders"),o.createElement(m,{colour:"#ffffff"},"Full Stack JavaScript Developer, Aug 2015–Aug 2016"),o.createElement(g,{colour:"#ffffff"},"Joining the 6th cohort of Founders and Coders, I completed a three month intensive full stack JavaScript course. By the end of the programme, I built up more than 1000 hours of developer time and had a solid foundation in full stack. I then went on to join the Founders and Coders freelance cooperative working on MVP projects using a range of technologies."))),o.createElement(p,{colour:"#ffffff"},o.createElement(h,null,o.createElement(d,{colour:"#005DAB"},"Univeristy of Exeter"),o.createElement(m,{colour:"#005DAB"},"Student, 2011–2014"),o.createElement(g,{colour:"#000000"},"Achieved 2:1 in Mathematics and Philosophy"))))},t}(o.Component),E=S},6142:function(e,t,n){"use strict";var i=n(493);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},7965:function(e,t,n){e.exports=n(6142)()},493:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7295:function(e,t,n){var i=n(7294);function o(e){return i.createElement("svg",e,i.createElement("polyline",{points:"6 9 12 15 18 9"}))}o.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-down"},e.exports=o,o.default=o}}]);
//# sourceMappingURL=component---src-pages-experience-js-5617548fdc1040a09cb4.js.map