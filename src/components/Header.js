import React, { useState, useEffect } from "react";
import {
  Drawer,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Logout from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";
import LoginImg from "../img/login.svg";

function Header({
  user,
  cart,
  wishlist,
  set_user_email,
  set_user_password,
  set_reload_login,
  do_login,
  login,
  logout,
  get_user_cart,
  get_user_wishlist,
}) {
  const [login_drawer, setLoginDrawer] = useState(false);
  const [nav_open, setNavOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("megastore_token")) {
      const token = localStorage.getItem("megastore_token");
      const loginData = JSON.parse(localStorage?.getItem("megastore_login"));
      set_reload_login({ token, ...loginData });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStorage.getItem("megastore_token")) {
      get_user_cart(JSON.parse(localStorage.getItem("megastore_login")));
      console.log("header");
      get_user_wishlist(JSON.parse(localStorage.getItem("megastore_login")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="header ">
        <Link to="/">
          <img src={logoImg} alt="logo" />
        </Link>

        <div className="header__right">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Home</p>
          </Link>

          {login?.email ? (
            <>
              {/* <Link to="/wishlist" style={{ textDecoration: "none" }}>
                <Badge
                  badgeContent={wishlist?.wishlist?.items?.length}
                  color="primary"
                >
                  <FavoriteIcon style={{ color: "#343a40" }} />
                </Badge>
              </Link> */}
              {/* <button
                className="btn btn-dark"
                // style={{ cursor: "pointer" }}
                onClick={() => logout()}
              >
                <i className="fas fa-sign-out-alt" />
                &nbsp; Logout
              </button> */}
              <p
                style={{ cursor: "pointer" }}
                className="dropdown-toggle"
                onClick={(e) => {
                  setAnchorEl(e.currentTarget);
                  setMenu(true);
                }}
              >
                {login?.name?.split(" ")[0]}
              </p>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <Badge badgeContent={cart?.cart?.items?.length} color="primary">
                  <ShoppingCartIcon style={{ color: "#343a40" }} />
                </Badge>
              </Link>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={menu}
                onClose={() => setMenu(false)}
                onClick={() => setMenu(false)}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "#000000de" }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                </Link>
                <Link
                  to="/wishlist"
                  style={{ textDecoration: "none", color: "#000000de" }}
                >
                  <MenuItem>
                    <ListItemIcon>
                      <FavoriteIcon fontSize="small" />
                    </ListItemIcon>
                    Wishlist
                  </MenuItem>
                </Link>
                <MenuItem>
                  <ListItemIcon>
                    <LocalMallIcon fontSize="small" />
                  </ListItemIcon>
                  Orders
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <NotificationsIcon fontSize="small" />
                  </ListItemIcon>
                  Notifications
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => logout()}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <button
              className="btn btn-light "
              onClick={() => {
                setLoginDrawer(!login_drawer);
                setNavOpen(false);
              }}
            >
              Login
            </button>
          )}
        </div>
        <i
          className={nav_open ? "fas fa-times" : "fas fa-bars"}
          onClick={() => setNavOpen(!nav_open)}
        />
        <div className={nav_open ? "mobile__nav" : " mobile__nav--close"}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p onClick={() => setNavOpen(false)}>Home</p>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <p onClick={() => setNavOpen(false)}>Cart</p>
          </Link>
          <Link to="/whishlist" style={{ textDecoration: "none" }}>
            <p onClick={() => setNavOpen(false)}>Whishlist</p>
          </Link>
          {login?.email ? (
            <button className="btn btn-dark" onClick={() => logout()}>
              <i class="fas fa-sign-out-alt" />
              Logout
            </button>
          ) : (
            <button
              className="btn btn-light"
              onClick={() => {
                setLoginDrawer(!login_drawer);
                setNavOpen(false);
              }}
            >
              Login
            </button>
          )}
        </div>

        <Drawer
          anchor="right"
          open={login_drawer}
          onClose={() => setLoginDrawer(false)}
        >
          <div className="login__drawer">
            <CloseIcon
              onClick={() => setLoginDrawer(false)}
              style={{ position: "absolute", top: "1rem", left: "1rem" }}
            />
            <div className="cont">
              <h3>Login</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoginDrawer(false);
                  do_login(user);
                }}
              >
                <div class="form-group">
                  <label for="exampleInputEmail1" class="form-label mt-4">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={user?.email}
                    onChange={(e) => set_user_email(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" class="form-label mt-4">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={user?.password}
                    onChange={(e) => set_user_password(e.target.value)}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <small
                style={{ marginTop: "0.5rem " }}
                onClick={() => setLoginDrawer(false)}
              >
                Dont have an account ? <Link to="/signup">Sign Up</Link>
              </small>
            </div>
            <img src={LoginImg} alt="" />
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Header;
