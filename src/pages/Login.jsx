import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="content">
        <div className="content-wrapper">
          <div className="form-wrapper">
            <div className="section-login">
              <div className="title">Welcome!</div>
              <div className="subtitle">
                Enter your mobile number and password to login
              </div>
              <form action="">
                <input
                  className="input-login"
                  type="text"
                  name="phoneNumber"
                  placeholder="+62868011245468"
                />
                <input
                  className="input-login"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div className="btn-login">Login</div>
                <div className="forgot-password">forgot password?</div>
              </form>
            </div>
            <div className="section-register">
                <div className="not-member">Not A Member Yet?</div>
                <div className="desc">
                    <div className="subdesc">Register to get reward points and exclusive promotions.</div>
                    <div className="btn-register">Register</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
