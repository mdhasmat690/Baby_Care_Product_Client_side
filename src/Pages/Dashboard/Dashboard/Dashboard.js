import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import useAuth from "../../../Hooks/UseAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../Admin/AddProduct/AddProduct";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import ManageAllOrder from "../Admin/ManageAllOrder/ManageAllOrder";
import ManageProduct from "../Admin/ManageProduct/ManageProduct";
import MyOrder from "../SimpleUser/MyOrder/MyOrder";
import Pay from "../SimpleUser/Pay/Pay";
import Review from "../SimpleUser/Review/Review";
import "./Dashboard.css";
import WelCome from "./Welcome/WelCome";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 ">
          <div className="dashboard">
            <h5>Dashboard</h5>

            {admin ? (
              <div>
                <Link className="text-decoration" to={`${url}/manageAllOrder`}>
                  <li className="dashboard-style mt-3">Manage All Order</li>
                </Link>

                <Link className="text-decoration" to={`${url}/addProduct`}>
                  <li className="dashboard-style mt-3">Add Product</li>
                </Link>
                <Link className="text-decoration" to={`${url}/makeAdmin`}>
                  <li className="dashboard-style mt-3">Make add Admin</li>
                </Link>
                <Link className="text-decoration" to={`${url}/manageProduct`}>
                  <li className="dashboard-style mt-3">Manage Product</li>
                </Link>
                <li onClick={logout} className="dashboard-style mt-3">
                  Log Out
                </li>
              </div>
            ) : (
              <div>
                <Link className="text-decoration" to={`${url}/myOrder`}>
                  <li className="dashboard-style mt-3">My Order</li>
                </Link>

                <Link className="text-decoration" to={`${url}/pay`}>
                  <li className="dashboard-style mt-3">Pay</li>
                </Link>

                <Link className="text-decoration" to={`${url}/review`}>
                  <li className="dashboard-style mt-3">Review</li>
                </Link>

                <li onClick={logout} className="dashboard-style mt-3">
                  Log Out
                </li>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-9">
          <Switch>
            <Route exact path={path}>
              <WelCome></WelCome>
            </Route>
            <AdminRoute exact path={`${path}/manageAllOrder`}>
              <ManageAllOrder></ManageAllOrder>
            </AdminRoute>
            <AdminRoute exact path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute exact path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute exact path={`${path}/manageProduct`}>
              <ManageProduct></ManageProduct>
            </AdminRoute>
            <Route exact path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route exact path={`${path}/myOrder`}>
              <MyOrder></MyOrder>
            </Route>
            <Route exact path={`${path}/review`}>
              <Review></Review>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
