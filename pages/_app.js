import { Feather } from "feather-client-react";
import Home from "./home";

function App({ Component, pageProps }) {
  return (
    <Feather apiKey="pk_live_G92B6M6Gxo7QzpVcAM4BXHtcvDs3Sb">
      <Home />
    </Feather>
  );
}

export default App;
