// ** React Imports
import { Fragment } from "react";

function Head() {
  return (
    <Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Primary Meta Tags */}
      <title>Oriental Books</title>
      <meta name="title" content="Oriental Books" />
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

      {/* Favicon */}
      <link rel="manifest" href="/manifest.webmanifest" />
    </Fragment>
  );
}

export default Head;
