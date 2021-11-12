import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const [showError, setShowError] = useState(false);
  const { registerUser, isLoading, user, authError } = useAuth();

  const location = useLocation();

  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleRegister = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(
      loginData.email,
      loginData.password,
      loginData.name,
      location,
      history
    );
    e.preventDefault();
  };

  useEffect(() => {
    setShowError(true);
    const timer = setTimeout(() => setShowError(false), 2000);

    return clearTimeout(timer);
  }, [authError]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 5 }}>
          <img
            className="w-75"
            src="https://i.ibb.co/qRhxN3B/5098293.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Sign In
          </Typography>
          {!isLoading && (
            <form onSubmit={handleRegister}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="ReType Your Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <br />

              <Button variant="contained" type="submit">
                Register
              </Button>
              <br />
              <NavLink to="/login">
                <Button variant="text" type="submit">
                  Already Registered ? Please Login
                </Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Register successfully!</Alert>
          )}
          {authError && showError && (
            <Alert variant="outlined" severity="error">
              {authError}
            </Alert>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
