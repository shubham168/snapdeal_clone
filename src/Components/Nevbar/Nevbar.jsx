import style from "./Navbar.module.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SignUpBtn from "./SignUpBtn";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Nevbar() {
  const [margin, setMargin] = useState("27px");

  window.addEventListener("scroll", () => {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 10) {
      setMargin("0px");
    } else if (scrollTop < 100) {
      setMargin("27px");
    }
  });

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        style={{
          backgroundColor: "#E40046",
          color: "black",
          height: "",
          cursor: "pointer",
          marginTop: margin,
        }}
      >
        <div className={style.container}>
          <div>
            <img
              src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
              alt="Logo"
            />
          </div>
          <div style={{width:"50%"}}>
            <div className="input-group mb-3 border-0">
              <input
                type="text"
                className="form-control"
                placeholder="Search products & brands"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text text-light bg-dark border-0"
                id="basic-addon2"
              >
                <SearchIcon />
                Search
              </span>
            </div>
          </div>
          <div>
            Cart
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon style={{ color: "white" }} />
            </StyledBadge>
          </div>
          <SignUpBtn/>
        </div>
      </AppBar>
    </React.Fragment>
  );
}
