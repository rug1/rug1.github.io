(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),a=n("Bl7J"),r=n("vrFN"),d=n("dI71"),l=function(e){var t,n;void 0!==document.hidden?(t="hidden",n="visibilitychange"):void 0!==document.msHidden?(t="msHidden",n="msvisibilitychange"):void 0!==document.webkitHidden&&(t="webkitHidden",n="webkitvisibilitychange");void 0===document.addEventListener||void 0===t?console.log("Requires a browser that supports the Page Visibility API."):document.addEventListener(n,(function(){e&&!document[t]&&e()}),!1)},p=n("vOnD"),s=n("fCgX"),m=n.n(s),c=p.d.div.withConfig({displayName:"home__PageContainer",componentId:"nadhtz-0"})(["display:flex;position:absolute;top:0;bottom:0;width:100%;justify-content:flex-end;flex-direction:column;padding:60px;background-image:url(",");background-size:cover;background-position:35% 40%;z-index:-1;@media only screen and (max-width:950px){padding:20px;}"],m.a),u=p.d.h1.withConfig({displayName:"home__HeroH1",componentId:"nadhtz-1"})(["font-size:130px;margin:0;color:#ffffff;display:inline-block;@media only screen and (max-width:600px){font-size:90px;}"]),f=p.d.h2.withConfig({displayName:"home__HeroH2",componentId:"nadhtz-2"})(["font-size:50px;font-weight:400;margin:0;color:#ffffff;display:inline-block;@media only screen and (max-width:600px){font-size:30px;}"]),h=Object(p.e)(["from,to{color:transparent;}50%{color:#ffffff;}"]),x=p.d.span.withConfig({displayName:"home__Cursor",componentId:"nadhtz-3"})(["font-weight:100;font-size:",";color:#ffffff;vertical-align:super;animation:"," 1s step-end infinite;@media only screen and (max-width:600px){font-size:",";}"],(function(e){return e.big?"150px":"50px"}),h,(function(e){return e.big?"90px":"30px"})),y=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this).state={typeAnimationText:"",typeAnimationLineCount:0},t.typeAnimation=function(e){var n=t.state,i=n.typeAnimationText,o=n.typeAnimationLineCount;i.length!==e.length?setTimeout((function(){t.setState({typeAnimationText:e.substring(0,i.length+1)}),t.typeAnimation(e,i.length+1)}),75):setTimeout((function(){t.setState({typeAnimationText:"",typeAnimationLineCount:o+1})}),1e3)},t.renderText=function(e){var n=t.state,i=n.typeAnimationLineCount,o=n.typeAnimationText;return i===e?o:t.props.text[e]},t}Object(d.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.typeAnimation(this.props.text[0]);l(e)},n.componentDidUpdate=function(e,t){t.typeAnimationLineCount!==this.state.typeAnimationLineCount&&this.props.text.length!==this.state.typeAnimationLineCount&&this.typeAnimation(this.props.text[this.state.typeAnimationLineCount])},n.render=function(){var e=this.state.typeAnimationLineCount;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(u,null,this.renderText(0)),0===e&&o.a.createElement(x,{big:!0},"|")),e>=1&&o.a.createElement("div",null,o.a.createElement(f,null,this.renderText(1)),1===e&&o.a.createElement(x,null,"|")),e>=2&&o.a.createElement("div",null,o.a.createElement(f,null,this.renderText(2)),2===e&&o.a.createElement(x,null,"|")))},t}(o.a.Component);t.default=function(e){return o.a.createElement(a.a,{pathname:e.location.pathname},o.a.createElement(r.a,{title:"Home"}),o.a.createElement(c,null,o.a.createElement(y,{text:["Hello.","I’m Ruth Uwemedimo,","software engineer."]})))}},fCgX:function(e,t,n){e.exports=n.p+"static/profile-b75bd5b135ce7f6da20c0b8e87e543e6.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-dd21e0bc7c84716fabe4.js.map