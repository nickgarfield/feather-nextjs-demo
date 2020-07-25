import React from "react";
import Todos from "../components/Todos.js";
import { AuthenticationForm, useCurrentUser } from "feather-client-react";

function Home(props) {
  const { loading, currentUser } = useCurrentUser();
  if (loading) return <div />;
  if (!currentUser) return <AuthenticationForm />;
  return <Todos />;
}

export default Home;
