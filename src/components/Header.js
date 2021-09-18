import React, { Component } from "react";
import { Drawer } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_drawer: false,
      nav_open: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("megastore_token")) {
      this.props.set_reload_login(
        JSON.parse(localStorage.getItem("megastore_login"))
      );
    }
  }

  render() {
    const { user, set_user_email, set_user_password, do_login, login, logout } =
      this.props;
    return (
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

          {login.email ? (
            <p style={{ cursor: "pointer" }} onClick={() => logout()}>
              Logout
            </p>
          ) : (
            <p
              style={{ cursor: "pointer" }}
              onClick={() =>
                this.setState({
                  login_drawer: !this.state.login_drawer,
                  nav_open: false,
                })
              }
            >
              Login
            </p>
          )}
        </div>
        <i
          class={this.state.nav_open ? "fas fa-times" : "fas fa-bars"}
          onClick={() => this.setState({ nav_open: !this.state.nav_open })}
        />
        <div
          className={
            this.state.nav_open ? "mobile__nav" : " mobile__nav--close"
          }
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <p onClick={() => this.setState({ nav_open: false })}>Home</p>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <p onClick={() => this.setState({ nav_open: false })}>Cart</p>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <p onClick={() => this.setState({ nav_open: false })}>Whishlist</p>
          </Link>
          {login.email ? (
            <p onClick={() => logout()}>Logout</p>
          ) : (
            <p
              onClick={() =>
                this.setState({
                  login_drawer: !this.state.login_drawer,
                  nav_open: false,
                })
              }
            >
              Login
            </p>
          )}
        </div>

        <Drawer
          anchor="right"
          open={this.state.login_drawer}
          onClose={() => this.setState({ login_drawer: false })}
        >
          {/* {list(anchor)} */}
          <div className="login__drawer">
            <CloseIcon
              onClick={() => this.setState({ login_drawer: false })}
              style={{ position: "absolute", top: "1rem", left: "1rem" }}
            />
            <div className="cont">
              <h3>Login</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  do_login(user);
                  this.setState({ login_drawer: false });
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
                    value={user.email}
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
                    value={user.password}
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
                onClick={() => this.setState({ login_drawer: false })}
              >
                Dont have an account ? <Link to="/signup">Sign Up</Link>
              </small>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}
