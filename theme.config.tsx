// ** React Imports
import React from "react";

// ** Nextra Imports
import { DocsThemeConfig } from "nextra-theme-docs";

// ** Components Imports
import Head from "./src/components/head";
import Logo from "./src/components/logo";
import Volume from "./src/components/nav/volume";
import Chapter from "./src/components/nav/chapter";
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
      const checker = new RegExp(/《.*》/, "g");
      if (type === "doc" && checker.test(title)) {
        return <Chapter title={title} />;
      }
      return <Volume title={title} />;
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
