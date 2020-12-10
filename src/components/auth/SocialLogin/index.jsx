import React from "react";

import { GoogleLogin } from "react-google-login";

const SocialLogin = ({ login }) => {
  const responseGoogle = (response) => {
    if (response && response.profileObj) {
      login({ email: response.profileObj.email, password: "123" });
    }
  };

  return (
    <>
      <GoogleLogin
        clientId="920400692009-186vjm53aeupssjqrku12rpaqbi237st.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        scope="email profile"
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default SocialLogin;
