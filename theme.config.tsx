// ** React Imports
import React from "react";

// ** Nextra Imports
import { DocsThemeConfig } from "nextra-theme-docs";

// ** Components Imports
import Head from "./src/components/head";
import Logo from "./src/components/logo";
import Book from "./src/components/nav/book";
import Volume from "./src/components/nav/volume";
import Chapter from "./src/components/nav/chapter";
import Simple from "./src/components/nav/simple";
import Footer from "./src/components/footer";

const config: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/PSheon/Books",
  useNextSeoProps: () => ({
    titleTemplate: "Oriental Books - %s",
  }),
  head: <Head />,
  logo: <Logo />,
  sidebar: {
    titleComponent({ title, type }) {
      const bookChecker = new RegExp(/『.*』/, "g");
      const volumeChecker = new RegExp(/「.*」/, "g");
      const documentChecker = new RegExp(/《.*》/, "g");
      if (type === "doc" && bookChecker.test(title)) {
        return <Book title={title} />;
      } else if (type === "doc" && volumeChecker.test(title)) {
        return <Volume title={title} />;
      } else if (type === "doc" && documentChecker.test(title)) {
        return <Chapter title={title} />;
      } else {
        return <Simple title={title} />;
      }
    },
  },
  project: {
    link: "https://github.com/PSheon/Books",
  },
  footer: {
    component: <Footer />,
  },
};

export default config;
