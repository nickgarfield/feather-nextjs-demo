import React from "react";
import { AuthenticationForm, withCurrentUser } from "feather-client-react";

function Home(props) {
  if (props.isLoadingCurrentUser) return <div />;
  if (!props.currentUser) return <AuthenticationForm />;
  return <div>Current user: {props.currentUser.email}</div>;
}

export default withCurrentUser(Home);
