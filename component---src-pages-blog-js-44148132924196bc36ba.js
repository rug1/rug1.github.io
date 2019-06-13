(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(e,t,n){"use strict";n.r(t);n(170);var a=n(0),o=n.n(a),i=n(154),r=n(152),c=n(148),l=c.d.div.withConfig({displayName:"blog__PageContainer",componentId:"sc-1w36l98-0"})(["padding:",";padding-top:120px;background-color:",";text-align:center;min-height:100vh;@media only screen and (max-width:600px){padding:",";padding-top:120px;}"],function(e){return e.theme.spacing.xl},function(e){return e.theme.colours.secondary},function(e){return e.theme.spacing.md}),d=c.d.h2.withConfig({displayName:"blog__H2",componentId:"sc-1w36l98-1"})(["color:#ffffff;margin-top:",";margin-bottom:",";font-size:",";text-align:left;@media only screen and (max-width:600px){font-size:",";}"],function(e){return e.theme.spacing.xxl},function(e){return e.theme.spacing.lg},function(e){return e.theme.fontSize.font48},function(e){return e.theme.fontSize.font36}),p=c.d.div.withConfig({displayName:"blog__GridContainer",componentId:"sc-1w36l98-2"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));grid-gap:30px;"]),m=c.d.div.withConfig({displayName:"blog__Card",componentId:"sc-1w36l98-3"})(["position:relative;border-radius:8px;cursor:pointer;background-color:#ffffff;box-shadow:0px 1px 4px 1px #2d2d30;transition:box-shadow 0.3s;&:hover{box-shadow:0px 3px 5px 3px #2d2d30;}"]),u=c.d.a.attrs(function(e){return{href:"https://medium.com/@ruthuwemedimo/"+e.slug,target:"_blank",rel:"noopener noreferrer"}}).withConfig({displayName:"blog__BlogLink",componentId:"sc-1w36l98-4"})(["text-decoration:none;color:#000000;p{margin:",";font-size:",";}"],function(e){return e.theme.spacing.lg},function(e){return e.theme.fontSize.font19}),s=c.d.div.withConfig({displayName:"blog__BlogImage",componentId:"sc-1w36l98-5"})(["background:",";background-size:cover;border-radius:8px 8px 0 0;height:100%;left:0;max-height:240px;position:absolute;top:0;width:100%;"],function(e){return"url(https://cdn-images-1.medium.com/"+e.image+") center"});n.d(t,"pageQuery",function(){return f});t.default=function(e){var t=e.data.posts.edges,n=e.data.featured;return o.a.createElement(i.a,{pathname:e.location.pathname,headerColour:"#555b6e"},o.a.createElement(r.a,{title:"Blog"}),o.a.createElement(l,null,o.a.createElement(p,null,t.map(function(e){return o.a.createElement(m,{key:e.node.id},o.a.createElement(u,{slug:e.node.uniqueSlug},o.a.createElement(s,{image:e.node.virtuals.previewImage.imageId}),o.a.createElement("div",{style:{height:"240px",width:"100%"}}),o.a.createElement("p",null,e.node.title)))})),o.a.createElement(d,null,"Featured"),o.a.createElement(p,null,o.a.createElement(m,{key:n.id},o.a.createElement(u,{slug:n.uniqueSlug},o.a.createElement(s,{image:n.virtuals.previewImage.imageId}),o.a.createElement("div",{style:{height:"240px",width:"100%"}}),o.a.createElement("p",null,n.title),o.a.createElement("p",{style:{fontSize:"16px",color:"#555b6e"}},n.author.name))))))};var f="2368307107"},149:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},150:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=n(55),l=n(2),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=d},151:function(e,t,n){var a=n(0);function o(e){return a.createElement("svg",e,[a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z",key:0}),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",key:1})])}o.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=o,o.default=o},152:function(e,t,n){"use strict";var a=n(153),o=n(0),i=n.n(o),r=n(4),c=n.n(r),l=n(156),d=n.n(l);function p(e){var t=e.description,n=e.lang,o=e.meta,r=e.title,c=a.data.site,l=t||c.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:r},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:l}].concat(o)})}p.defaultProps={lang:"en",meta:[],description:""},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=p},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Ruth Uwemedimo",description:"Hello. I’m Ruth Uwemedimo, software engineer.",author:"@ruthuwemedimo"}}}}},154:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=n(148),l=(n(74),n(75),n(33)),d=n.n(l);n(149),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func;var p=n(151),m=n.n(p),u=c.d.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-1noyoex-0"})(["padding:20px 60px;font-size:",";color:#ffffff;width:100%;position:fixed;background-color:",";z-index:100;@media only screen and (max-width:950px){padding:20px;}ul{list-style-type:none;margin:0;padding:0;}"],function(e){return e.theme.fontSize.font19},function(e){return e.headerColour}),s=Object(c.d)(m.a).withConfig({displayName:"header__HomeIcon",componentId:"sc-1noyoex-1"})(["width:30px;height:30px;vertical-align:bottom;fill:#ffffff;"]),f=c.d.li.withConfig({displayName:"header__NavItem",componentId:"sc-1noyoex-2"})(["display:inline-block;margin-right:",";cursor:pointer;padding-bottom:2px;border-bottom:",";a{color:inherit;text-decoration:none;}&:last-child{margin-right:0px;}"],function(e){return e.home?e.theme.spacing.lg:e.theme.spacing.md},function(e){return e.active?"3px solid "+e.theme.colours.primary:""}),g=function(e){return o.a.createElement(u,{headerColour:e.headerColour},o.a.createElement("ul",null,o.a.createElement(f,{home:!0,active:"/"===e.pathname},o.a.createElement(d.a,{to:"/"},o.a.createElement(s,null))),o.a.createElement(f,{active:e.pathname.includes("/experience")},o.a.createElement(d.a,{to:"/experience"},"Experience")),o.a.createElement(f,{active:e.pathname.includes("/blog")},o.a.createElement(d.a,{to:"/blog"},"Blog")),o.a.createElement(f,{active:e.pathname.includes("/contact")},o.a.createElement(d.a,{to:"/contact"},"Contact"))))},h=n(155),x=n.n(h);function y(){var e=x()(["\n  @font-face {\n    font-family: 'Nunito Sans';\n    src: url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Nunito Sans', sans-serif;\n  }\n"]);return y=function(){return e},e}var w=Object(c.b)(y()),b={colours:{primary:"#00D646",secondary:"#555b6e",tertiary:"#ccd6e2"},spacing:{xxs:"4px",xs:"8px",sm:"12px",md:"20px",lg:"32px",xl:"52px",xxl:"84px"},fontSize:{font80:"80px",font48:"48px",font36:"36px",font27:"27px",font24:"24px",font19:"19px",font16:"16px",font14:"14px"}},v=function(e){var t=e.children,n=e.pathname,a=e.headerColour;return o.a.createElement(c.a,{theme:b},o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement(g,{pathname:n,headerColour:a}),o.a.createElement("main",null,t)))};v.propTypes={children:r.a.node.isRequired};t.a=v},170:function(e,t,n){var a=n(25).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(18)&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-blog-js-44148132924196bc36ba.js.map