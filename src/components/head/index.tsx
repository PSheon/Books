// ** React Imports
import { Fragment } from "react";

function Head() {
  return (
    <Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Primary Meta Tags */}
      <title>Oriental Books</title>
      <meta name="title" content="Oriental Books" />
      <meta name="apple-mobile-web-app-title" content="Oriental Books" />
      <meta name="application-name" content="Oriental Books" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#000000"></meta>
      <meta
        name="description"
        content="The collection here comprises a variety of fascinating ancient texts, including original content and translations"
      />
      <meta name="keywords" content="ancient texts, books, collection" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content="PSheon" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://oriental-books.vercel.app/" />
      <meta property="og:title" content="Oriental Books" />
      <meta
        property="og:description"
        content="The collection here comprises a variety of fascinating ancient texts, including original content and translations"
      />
      <meta property="og:image" content="/seo/banner.webp" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://oriental-books.vercel.app/"
      />
      <meta property="twitter:title" content="Oriental Books" />
      <meta
        property="twitter:description"
        content="The collection here comprises a variety of fascinating ancient texts, including original content and translations"
      />
      <meta property="twitter:image" content="/seo/banner.webp" />

      {/* Icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/seo/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/seo/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/seo/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="mask-icon" href="/seo/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Fragment>
  );
}

export default Head;
