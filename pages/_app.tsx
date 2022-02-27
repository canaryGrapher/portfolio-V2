import React from "react";
import App from "next/app";
import { AppProps } from "next/dist/shared/lib/router/router";

// importing tailwind files
import "tailwindcss/tailwind.css";
import "styles/globals.css";

// importing components
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
