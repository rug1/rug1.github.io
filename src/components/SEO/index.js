/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription, 
    image, 
    siteUrl, 
  } = useSiteMetadata();

  // const defaultImage = 'https://raw.githubusercontent.com/rug1/rug1.github.io/master-source/src/images/working-profile.jpg'

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image,
    // image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  console.log('seo', seo)

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:url' content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link id="favicon-icon" rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      
      {children}

      {/* {canonicalURL && (<link rel="canonical" href={canonicalURL} />)} */}

      {/* Google fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap" rel="stylesheet" />

      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EKVZ0C83M"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1EKVZ0C83M');
        `}
      </script>

      {/* Fullstory */}
      <script>
        {`
          window['_fs_debug'] = false;
          window['_fs_host'] = 'fullstory.com';
          window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
          window['_fs_org'] = '12GXXH';
          window['_fs_namespace'] = 'FS';
          (function(m,n,e,t,l,o,g,y){
              if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
              g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
              o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
              y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
              g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
              g.anonymize=function(){g.identify(!!0)};
              g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
              g.log = function(a,b){g("log",[a,b])};
              g.consent=function(a){g("consent",!arguments.length||a)};
              g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
              g.clearUserCookie=function(){};
              g.setVars=function(n, p){g('setVars',[n,p]);};
              g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
              if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
              g._v="1.3.0";
          })(window,document,window['_fs_namespace'],'script','user');
        `}
      </script>
    </>
  )
}



// function SEO({ description, lang, meta, title, canonicalURL }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       titleTemplate={`%s | ${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           property: `og:url`,
//           content: window.location.href,
//         },
//         {
//           property: `og:image`,
//           content: `https://raw.githubusercontent.com/rug1/rug1.github.io/master-source/src/images/working-profile.jpg`,
//         },
//         {
//           name: `twitter:image`,
//           content: `https://raw.githubusercontent.com/rug1/rug1.github.io/master-source/src/images/working-profile.jpg`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.author,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//       ].concat(meta)}
//     >
//       {canonicalURL && (<link rel="canonical" href={canonicalURL} />)}

//       {/* Google fonts */}
//       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap" rel="stylesheet" />

//       {/* Global site tag (gtag.js) - Google Analytics */}
//       <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EKVZ0C83M"></script>
//       <script>
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());

//           gtag('config', 'G-1EKVZ0C83M');
//         `}
//       </script>

//       {/* Fullstory */}
//       <script>
//       {`
//         window['_fs_debug'] = false;
//         window['_fs_host'] = 'fullstory.com';
//         window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
//         window['_fs_org'] = '12GXXH';
//         window['_fs_namespace'] = 'FS';
//         (function(m,n,e,t,l,o,g,y){
//             if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
//             g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
//             o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
//             y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
//             g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
//             g.anonymize=function(){g.identify(!!0)};
//             g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
//             g.log = function(a,b){g("log",[a,b])};
//             g.consent=function(a){g("consent",!arguments.length||a)};
//             g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
//             g.clearUserCookie=function(){};
//             g.setVars=function(n, p){g('setVars',[n,p]);};
//             g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
//             if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
//             g._v="1.3.0";
//         })(window,document,window['_fs_namespace'],'script','user');
//       `}
//       </script>
//     </Helmet>
//   )
// }

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Ruth Uwemedimo – Software Engineer`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
