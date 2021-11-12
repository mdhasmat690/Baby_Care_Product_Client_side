import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/UseAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user,admin, adminLoading } = useAuth();
  if (adminLoading) {
    return <CircularProgress />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
