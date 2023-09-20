// ** React Imports
import React from "react";

// ** Nextra Imports
import { DocsThemeConfig } from "nextra-theme-docs";

// ** Components Imports
import Head from "./src/components/head";
import Logo from "./src/components/logo";
import Footer from "./src/components/footer";

const config: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/PSheon/Books",
  useNextSeoProps: () => ({
    titleTemplate: "Oriental Books - %s",
  }),
  head: <Head />,
  logo: <Logo />,
  project: {
    link: "https://github.com/PSheon/Books",
  },
  footer: {
    component: <Footer />,
  },
};

export default config;
