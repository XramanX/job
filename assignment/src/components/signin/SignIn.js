import React from "react";
import LoginComp from "./loginComponent/SinginComp";

function SignIn() {
  return (
    <div>
      <section>
        <div className="curve"></div>
        <div className="curvetwo"></div>
      </section>
      <div className="login-list">
        <LoginComp />
      </div>
    </div>
  );
}

export default SignIn;
