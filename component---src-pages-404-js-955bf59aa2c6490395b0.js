(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(153),r=n(151);t.default=function(e){return i.a.createElement(o.a,{pathname:e.location.pathname},i.a.createElement(r.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},149:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),c=n(55),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,n){var a=n(0);function i(e){return a.createElement("svg",e,[a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z",key:0}),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",key:1})])}i.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=i,i.default=i},151:function(e,t,n){"use strict";var a=n(152),i=n(0),o=n.n(i),r=n(4),c=n.n(r),l=n(155),s=n.n(l);function p(e){var t=e.description,n=e.lang,i=e.meta,r=e.title,c=a.data.site,l=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:r},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:l}].concat(i)})}p.defaultProps={lang:"en",meta:[],description:""},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=p},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Ruth Uwemedimo",description:"Hello. I’m Ruth Uwemedimo, software engineer.",author:"@ruthuwemedimo"}}}}},153:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(4),r=n.n(o),c=n(147),l=(n(74),n(75),n(33)),s=n.n(l);n(148),i.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func;var p=n(150),m=n.n(p),d=c.d.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-1noyoex-0"})(["padding:30px 60px;font-size:",";color:#ffffff;width:100%;position:absolute;@media only screen and (max-width:950px){padding:20px;}ul{list-style-type:none;margin:0;padding:0;}"],function(e){return e.theme.fontSize.font19}),u=Object(c.d)(m.a).withConfig({displayName:"header__HomeIcon",componentId:"sc-1noyoex-1"})(["width:30px;height:30px;vertical-align:bottom;fill:#ffffff;"]),f=c.d.li.withConfig({displayName:"header__NavItem",componentId:"sc-1noyoex-2"})(["display:inline-block;margin-right:",";cursor:pointer;padding-bottom:2px;border-bottom:",";a{color:inherit;text-decoration:none;}&:last-child{margin-right:0px;}"],function(e){return e.home?e.theme.spacing.lg:e.theme.spacing.md},function(e){return e.active?"3px solid "+e.theme.colours.primary:""}),h=function(e){return i.a.createElement(d,null,i.a.createElement("ul",null,i.a.createElement(f,{home:!0,active:"/"===e.pathname},i.a.createElement(s.a,{to:"/"},i.a.createElement(u,null))),i.a.createElement(f,{active:e.pathname.includes("/experience")},i.a.createElement(s.a,{to:"/experience"},"Experience")),i.a.createElement(f,{active:e.pathname.includes("/blog")},"Blog"),i.a.createElement(f,{active:e.pathname.includes("/contact")},i.a.createElement(s.a,{to:"/contact"},"Contact"))))},x=n(154),g=n.n(x);function y(){var e=g()(["\n  @font-face {\n    font-family: 'Nunito Sans';\n    src: url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Nunito Sans', sans-serif;\n  }\n"]);return y=function(){return e},e}var v=Object(c.b)(y()),E={colours:{primary:"#00D646",secondary:"#555b6e",tertiary:"#ccd6e2"},spacing:{xxs:"4px",xs:"8px",sm:"12px",md:"20px",lg:"32px",xl:"52px",xxl:"84px"},fontSize:{font80:"80px",font48:"48px",font36:"36px",font27:"27px",font24:"24px",font19:"19px",font16:"16px",font14:"14px"}},w=function(e){var t=e.children,n=e.pathname;return i.a.createElement(c.a,{theme:E},i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),i.a.createElement(h,{pathname:n}),i.a.createElement("main",null,t)))};w.propTypes={children:r.a.node.isRequired};t.a=w}}]);
//# sourceMappingURL=component---src-pages-404-js-955bf59aa2c6490395b0.js.map