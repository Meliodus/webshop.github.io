import React from "react";
import { NavLink } from "react-router-dom";

import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import Aux from "../../../hoc/_Aux";
import "./../../../assets/scss/style.scss";

class SignUp1 extends React.Component {
  render() {
    return (
      <Aux>
        <Breadcrumb />
        <div className="auth-wrapper">
          <div className="auth-content">
            <div className="auth-bg">
              <span className="r" />
              <span className="r s" />
              <span className="r s" />
              <span className="r" />
            </div>
            <div className="card">
              <div className="card-body text-center">
                <div className="mb-4">
                  <i className="feather icon-unlock auth-icon" />
                </div>
                <h3 className="mb-4">Reset</h3>
                <p>Enter your email address to reset Your Password</p>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <button className="btn btn-primary shadow-2 mb-4">
                  Reset<NavLink to="/auth/signin-1" />
                </button>

                <p className="mb-0 text-muted">
                  Already have an account?{" "}
                  <NavLink to="/auth/signin-1">SignIn</NavLink>
                </p>
                <p className="mb-0 text-muted">
                  Don’t have an account?{" "}
                  <NavLink to="/auth/signup-1">Signup</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SignUp1;
