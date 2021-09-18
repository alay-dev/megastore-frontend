import React, { useState, useEffect } from "react";
import { Drawer } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";

function Header({
  user,
  set_user_email,
  set_user_password,
  set_reload_login,
  do_login,
  login,
  logout,
}) {
  const [login_drawer, setLoginDrawer] = useState(false);
  const [nav_open, setNavOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("megastore_token")) {
      const loginData = JSON.parse(localStorage?.getItem("megastore_login"));
      set_reload_login(loginData);
    }
  }, []);

  return (
    <>
      <div className="header ">
        <Link to="/">
          <img src={logoImg} />
        </Link>

        <div className="header__right">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Home</p>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <p>Cart</p>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Whishlist</p>
          </Link>

          {login?.email ? (
            <p style={{ cursor: "pointer" }} onClick={() => logout()}>
              Logout
            </p>
          ) : (
            <p
              style={{ cursor: "pointer" }}
              onClick={() => {
                setLoginDrawer(!login_drawer);
                setNavOpen(false);
              }}
            >
              Login
            </p>
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
            <p onClick={() => logout()}>Logout</p>
          ) : (
            <p
              onClick={() => {
                setLoginDrawer(!login_drawer);
                setNavOpen(false);
              }}
            >
              Login
            </p>
          )}
        </div>

        <Drawer
          anchor="right"
          open={login_drawer}
          onClose={() => setLoginDrawer(false)}
        >
          {/* {list(anchor)} */}
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
                  do_login(user);
                  setLoginDrawer(false);
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
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Header;
