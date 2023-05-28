import React from "react";
import LoginComp from "./loginComponent/SinginComp";

function SignIn() {
  return (
    <div className="login-component">
      <section></section>
      {/* <section>
        <div className="curve"></div>
        <div className="curvetwo"></div>
        <div className="curve-bottom"></div>
        <div className="curvetwo-bottom"></div>
      </section> */}

      <div className="login-list">
        <LoginComp />
      </div>
    </div>
  );
}

export default SignIn;
