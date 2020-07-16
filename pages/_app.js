import { Feather } from "feather-client-react";
import Home from "./home";
import "../styles.css";

function App({ Component, pageProps }) {
  return (
    <Feather apiKey="pk_live_Uyku8bQZZqQn8VngNYHK0IQS4AfdOJbe">
      <Home />
    </Feather>
  );
}

export default App;
