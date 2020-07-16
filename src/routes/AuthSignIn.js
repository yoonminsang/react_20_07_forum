import React, { useEffect } from "react";
import { Header, Footer, AuSignIn } from "../containers";

const AuthSignIn = () => {
  useEffect(() => {
    document.title = "M's forum 로그인";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header></Header>
      <AuSignIn></AuSignIn>
      <Footer></Footer>
    </>
  );
};

export default AuthSignIn;
