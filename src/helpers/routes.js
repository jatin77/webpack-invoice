import React from "react";
import { Route, Redirect } from "react-router-dom";

export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
  const { email } = user;

  return (
    <Route
      {...rest}
      render={() => {
        if (!email) {
          return children;
        }
        if (email) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
};

export const ProtectedRoute = ({ user, children, ...rest }) => {
  const { email } = user;

  return (
    <Route
      {...rest}
      render={(location) => {
        if (email) {
          return children;
        }
        if (!email) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }
      }}
    />
  );
};
