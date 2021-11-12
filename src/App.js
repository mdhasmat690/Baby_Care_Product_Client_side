import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Sheard/Header/Header";
import Footer from "./Pages/Sheard/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Explore from "./Pages/Services/Explore/Explore";
import Purches from "./Pages/Services/Purches/Purches";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Contex/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PrivetRoute from "./Pages/Login/PrivetRoute/PrivetRoute";
import About from "./Pages/About/About";
import Error from "./Error/Error";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/purches/:id">
              <Purches></Purches>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute path="*">
              <Error></Error>
            </PrivetRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
