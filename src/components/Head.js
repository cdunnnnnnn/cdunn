import React from "react"
import { Helmet } from "react-helmet"

import Icon57x57 from "../img/touch/touch-icon-57x57.png"
import Icon196x196 from "../img/touch/touch-icon-196x196.png"
import IconApple57x57 from "../img/touch/apple-touch-icon-57x57-precomposed.png"
import IconApple72x72 from "../img/touch/apple-touch-icon-72x72-precomposed.png"
import IconApple114x114 from "../img/touch/apple-touch-icon-114x114-precomposed.png"
import IconApple144x144 from "../img/touch/apple-touch-icon-144x144-precomposed.png"
import IconMS144x144 from "../img/touch/ms-touch-icon-144x144-precomposed.png"

function Head() {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>cdunn | jamstack engineer &amp; ui/ux designer</title>
      <meta
        name="description"
        content="Jamstack, JavaScript, JS, ES5, ES6, React, React.js, ReactJS, Vue, Vue.js, VueJS, Node.js, Express, MongoDB, TypeScript, Babel, Webpack, PHP, WordPress"
      />
      <meta name="author" content="@cdunnnnnnn" />
      <link rel="canonical" href="https://cdunn.io" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@cdunnnnnnn" />
      <meta name="twitter:creator" content="@cdunnnnnnn" />
      <meta
        name="twitter:title"
        content="jamstack engineer &amp; ui/ux designer"
      />
      <meta
        name="twitter:description"
        content="Jamstack, JavaScript, JS, ES5, ES6, React, React.js, ReactJS, Vue, Vue.js, VueJS, Node.js, Express, MongoDB, TypeScript, Babel, Webpack, PHP, WordPress"
      />
      <meta name="twitter:image" content="" />
      <meta name="twitter:domain" content="https://cdunn.io" />
      {/* Facebook / Open Graph */}
      <meta
        property="og:title"
        content="jamstack engineer &amp; ui/ux designer"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cdunn.io" />
      <meta property="og:image" content="" />
      <meta
        property="og:description"
        content="Jamstack, JavaScript, JS, ES5, ES6, React, React.js, ReactJS, Vue, Vue.js, VueJS, Node.js, Express, MongoDB, TypeScript, Babel, Webpack, PHP, WordPress"
      />
      <meta property="og:site_name" content="cdunn.io" />
      {/* Icons */}
      {/* Add to homescreen for Chrome on Android */}
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="icon" sizes="196x196" href={Icon196x196} />
      {/* Add to homescreen for Safari on iOS */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#2c2e31" />
      <meta name="apple-mobile-web-app-title" content="cdunn.io" />
      {/* Tile icon for Win8 (144x144 + tile color) */}
      <meta name="msapplication-TileImage" content={IconMS144x144} />
      <meta name="msapplication-TileColor" content="#2c2e31" />
      {/* iOS icons */}
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href={IconApple144x144}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href={IconApple114x114}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href={IconApple72x72}
      />
      <link rel="apple-touch-icon-precomposed" href={IconApple57x57} />
      {/* Generic Icon */}
      <link rel="shortcut icon" href={Icon57x57} />
      {/* Chrome Add to Homescreen */}
      <link rel="shortcut icon" sizes="196x196" href={Icon196x196} />
    </Helmet>
  )
}

export default Head
