import React, { useEffect } from "react";
import SnackBar from "../components/Snackbar";
import SignupImg from "../img/signup.svg";

function Signup({
  user,
  signup,
  set_user_email,
  set_user_password,
  set_user_confirm_password,
  ...rest
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="signup">
      <img src={SignupImg} alt="" />
      <div className="cont card border-success">
        <div className="card-header">
          <h3>Sign Up</h3>
          <p>Please fill in this form to create an account</p>
        </div>
        <div className="card-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signup(user);
            }}
          >
            <div class="form-group">
              <label class="form-label ">Email </label>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-text">
                    <i className="fas fa-user-alt" />
                  </span>
                  <input
                    required
                    type="email"
                    class="form-control"
                    value={user.email}
                    onChange={(e) => set_user_email(e.target.value)}
                  />
                </div>
              </div>
              <label class="form-label mt-3">Password</label>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                  <input
                    required
                    type="password"
                    class="form-control"
                    value={user.password}
                    onChange={(e) => set_user_password(e.target.value)}
                  />
                </div>
              </div>

              <label class="form-label mt-3">Confirm Password</label>
              <div class="form-group">
                <div class="input-group mb-3">
                  <span class="addon input-group-text">
                    <i class="fa fa-lock"></i>
                    <i class="fa fa-check"></i>
                  </span>
                  <input
                    required
                    type="password"
                    class="form-control"
                    value={user.confirm_password}
                    onChange={(e) => set_user_confirm_password(e.target.value)}
                  />
                </div>
              </div>
              <div class="form-check">
                <input
                  required
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label " for="flexCheckDefault">
                  {" "}
                  <small>I accept the Terms of use & privacy policy</small>
                </label>
              </div>

              <div class="input-group mb-3 mt-2">
                <button
                  class="btn btn-primary"
                  type="submit"
                  id="button-addon2"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <SnackBar {...rest} />
    </div>
  );
}
export default Signup;
