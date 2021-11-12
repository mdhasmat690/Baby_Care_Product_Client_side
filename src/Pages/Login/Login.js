import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Alert, CircularProgress, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink,useLocation,useHistory } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";


const Login = () => {
  const [login, setLogin] = useState({});
  
  const { loginUser, isLoading, user} = useAuth();
    const location = useLocation();
  const history = useHistory();
 
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...login };
    newLoginData[field] = value;
    setLogin(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(login.email, login.password, location,history);
    e.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <img className="w-50" src="https://i.ibb.co/hchMPM7/4826435.jpg" alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{mt:5}}  variant="body1" gutterBottom>
            Login
          </Typography>
         {!isLoading && 
         <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="outlined"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="outlined"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
          </form>}
          {isLoading &&  <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Register successfully!</Alert>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
