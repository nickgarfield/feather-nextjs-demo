import React, { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { FeatherProvider } from "feather-client-react";
import { apollo } from "../api/apollo.js";
import { feather } from "../api/feather.js";
import Home from "./home";
import "../styles.css";

function App({ Component, pageProps }) {
  return (
    <FeatherProvider client={feather}>
      <ApolloProvider client={apollo}>
        <Home />
      </ApolloProvider>
    </FeatherProvider>
  );
}

export default App;
