import React from "react";
import Head from "next/head";
import { AppProps } from "next/dist/shared/lib/router/router";

// importing tailwind files
import "tailwindcss/tailwind.css";
import "styles/globals.css";

// importing components
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

//importing images
import { Logo } from "../assets/common";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href={Logo} />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
