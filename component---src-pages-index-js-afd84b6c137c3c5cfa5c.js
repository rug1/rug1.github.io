(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(150),r=n(147),c=n(7),l=n.n(c),s=n(154),p=(n(172),n(146)),u=n(174),m=n.n(u),d=p.d.div.withConfig({displayName:"hero__HeroContainer",componentId:"cdva5k-0"})(["display:flex;position:absolute;top:0;bottom:0;width:100%;justify-content:flex-end;flex-direction:column;padding:60px;background-image:url(",");background-size:cover;background-position:35% 40%;z-index:-1;@media only screen and (max-width:950px){padding:20px;}"],m.a),f=p.d.h1.withConfig({displayName:"hero__HeroH1",componentId:"cdva5k-1"})(["font-size:130px;margin:0;color:#ffffff;display:inline-block;@media only screen and (max-width:600px){font-size:90px;}"]),h=p.d.h2.withConfig({displayName:"hero__HeroH2",componentId:"cdva5k-2"})(["font-size:50px;font-weight:400;margin:0;color:#ffffff;display:inline-block;@media only screen and (max-width:600px){font-size:30px;}"]),g=Object(p.e)(["from,to{color:transparent;}50%{color:#ffffff;}"]),x=p.d.span.withConfig({displayName:"hero__Cursor",componentId:"cdva5k-3"})(["font-weight:100;font-size:",";color:#ffffff;vertical-align:super;animation:"," 1s step-end infinite;@media only screen and (max-width:600px){font-size:",";}"],function(t){return t.big?"150px":"50px"},g,function(t){return t.big?"90px":"30px"}),y=function(t){var e,n;void 0!==document.hidden?(e="hidden",n="visibilitychange"):void 0!==document.msHidden?(e="msHidden",n="msvisibilitychange"):void 0!==document.webkitHidden&&(e="webkitHidden",n="webkitvisibilitychange");void 0===document.addEventListener||void 0===e?console.log("Requires a browser that supports the Page Visibility API."):document.addEventListener(n,function(){t&&!document[e]&&t()},!1)},b=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).state={typeAnimationText:"",typeAnimationLineCount:0},e.typeAnimationLines=["Hello.","I’m Ruth Uwemedimo,","software engineer."],e.typeAnimation=function(t){var n=e.state,i=n.typeAnimationText,o=n.typeAnimationLineCount;i.length!==t.length?setTimeout(function(){e.setState({typeAnimationText:t.substring(0,i.length+1)}),e.typeAnimation(t,i.length+1)},75):setTimeout(function(){e.setState({typeAnimationText:"",typeAnimationLineCount:o+1})},1e3)},e.renderText=function(t){var n=e.state,i=n.typeAnimationLineCount,o=n.typeAnimationText;return i===t?o:e.typeAnimationLines[t]},e}l()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this.typeAnimation(this.typeAnimationLines[0]);y(t)},n.componentDidUpdate=function(t,e){e.typeAnimationLineCount!==this.state.typeAnimationLineCount&&this.typeAnimationLines.length!==this.state.typeAnimationLineCount&&this.typeAnimation(this.typeAnimationLines[this.state.typeAnimationLineCount])},n.render=function(){var t=this.state.typeAnimationLineCount;return o.a.createElement(o.a.Fragment,null,this.typeAnimationLines.length===t&&o.a.createElement(s.a,null),o.a.createElement(d,null,o.a.createElement("div",null,o.a.createElement(f,null,this.renderText(0)),0===t&&o.a.createElement(x,{big:!0},"|")),t>=1&&o.a.createElement("div",null,o.a.createElement(h,null,this.renderText(1)),1===t&&o.a.createElement(x,null,"|")),t>=2&&o.a.createElement("div",null,o.a.createElement(h,null,this.renderText(2)),2===t&&o.a.createElement(x,null,"|"))))},e}(o.a.Component);e.default=function(){return o.a.createElement(a.a,null,o.a.createElement(r.a,{title:"Home"}),o.a.createElement(b,null))}},147:function(t,e,n){"use strict";var i=n(148),o=n(0),a=n.n(o),r=n(4),c=n.n(r),l=n(152),s=n.n(l);function p(t){var e=t.description,n=t.lang,o=t.meta,r=t.title,c=i.data.site,l=e||c.siteMetadata.description;return a.a.createElement(s.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:r},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:l}].concat(o)})}p.defaultProps={lang:"en",meta:[],description:""},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=p},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Ruth Uwemedimo",description:"Hello. I’m Ruth Uwemedimo, software engineer.",author:"@ruthuwemedimo"}}}}},149:function(t,e,n){var i;t.exports=(i=n(153))&&i.default||i},150:function(t,e,n){"use strict";var i=n(0),o=n.n(i),a=n(4),r=n.n(a),c=n(146),l=n(151),s=n.n(l);function p(){var t=s()(["\n  @font-face {\n    font-family: 'Nunito Sans';\n    src: url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Nunito Sans', sans-serif;\n  }\n"]);return p=function(){return t},t}var u=Object(c.b)(p()),m={colours:{primary:"#00D646",secondary:"#555b6e",tertiary:"#ccd6e2"},spacing:{xxs:"4px",xs:"8px",sm:"12px",md:"20px",lg:"32px",xl:"52px",xxl:"84px"},fontSize:{font80:"80px",font48:"48px",font36:"36px",font27:"27px",font24:"24px",font19:"19px",font16:"16px",font14:"14px"}},d=function(t){var e=t.children;return o.a.createElement(c.a,{theme:m},o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement("main",null,e)))};d.propTypes={children:r.a.node.isRequired};e.a=d},153:function(t,e,n){"use strict";n.r(e);n(34);var i=n(0),o=n.n(i),a=n(4),r=n.n(a),c=n(56),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return n?o.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=s},154:function(t,e,n){"use strict";var i=n(0),o=n.n(i),a=n(4),r=n.n(a),c=n(33),l=n.n(c);n(149),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func;var s=n(146),p=Object(s.e)(["from{opacity:0;}to{opacity:1;}"]),u=s.d.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-1noyoex-0"})(["background-color:",";padding:20px;font-size:",";box-shadow:",";height:72px;color:",";width:100%;position:absolute;animation:",";ul{list-style-type:none;margin:0;padding:0;text-align:right;}"],function(t){return t.transparent?"rgba(255, 255, 255, 0)":"rgba(255, 255, 255, 0.5)"},function(t){return t.theme.fontSize.font19},function(t){return t.transparent?"":"0px 0px 4px 2px #3a3a3a"},function(t){return t.home?"#000000":"#ffffff"},function(t){return t.home?Object(s.c)([""," 0.5s ease-in"],p):""}),m=s.d.li.withConfig({displayName:"header__Home",componentId:"sc-1noyoex-1"})(["position:absolute;left:20px;top:0px;cursor:pointer;transition:color 0.3s;font-size:",";font-weight:300;&:hover{color:",";}a{color:inherit;text-decoration:none;}"],function(t){return t.theme.fontSize.font27},function(t){return t.theme.colours.primary}),d=s.d.li.withConfig({displayName:"header__NavItem",componentId:"sc-1noyoex-2"})(["display:inline-block;margin-left:",";cursor:pointer;padding-bottom:2px;&:hover{border-bottom:3px solid ",";}a{color:inherit;text-decoration:none;}&:first-child{margin-left:0px;}"],function(t){return t.theme.spacing.md},function(t){return t.theme.colours.primary});e.a=function(t){return o.a.createElement(u,null,o.a.createElement("ul",null,!t.home&&o.a.createElement(m,null,o.a.createElement(l.a,{to:"/"},o.a.createElement("strong",{style:{fontSize:"42px"}},"R"),"uth")),o.a.createElement(d,{active:"/experience"===t.location},o.a.createElement(l.a,{to:"/experience"},"Experience")),o.a.createElement(d,{active:"/blog"===t.location},"Blog"),o.a.createElement(d,{active:"/contact"===t.location},o.a.createElement(l.a,{to:"/contact"},"Contact"))))}},172:function(t,e,n){"use strict";n(173)("big",function(t){return function(){return t(this,"big","","")}})},173:function(t,e,n){var i=n(11),o=n(18),a=n(19),r=/"/g,c=function(t,e,n,i){var o=String(a(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(i).replace(r,"&quot;")+'"'),c+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),i(i.P+i.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},174:function(t,e,n){t.exports=n.p+"static/profile-b75bd5b135ce7f6da20c0b8e87e543e6.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-afd84b6c137c3c5cfa5c.js.map