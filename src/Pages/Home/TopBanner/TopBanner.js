import Button from "@mui/material/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import "./TopBanner.css";

const TopBanner = () => {
  return (
    <div className="container">
      <div className="topBanner-bg">
        <div className="text-style">
          <h2>1k+ Baby Care Product</h2>

          <NavLink style={{textDecoration: "none"}} to="/explore">
            <Button
              style={{ backgroundColor: "aqua", marginTop: "5px",
              textDecoration: "none"}}
              variant="primary"
            >
              Explore
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
