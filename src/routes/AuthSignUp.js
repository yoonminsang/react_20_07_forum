import React, { useEffect } from "react";
import { Header, Footer, AuSignUp } from "../containers";

const AuthSignUp = () => {
  useEffect(() => {
    document.title = "M's forum 회원가입";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header></Header>
      <AuSignUp></AuSignUp>
      <Footer></Footer>
    </>
  );
};

export default AuthSignUp;
