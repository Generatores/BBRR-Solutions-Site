import React, { FC } from "react";
import type { AppProps } from "next/app";

import "../styles/normalize.css";
import "../styles/Body.css";

import Layout from "../components/blocks/Layout";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
