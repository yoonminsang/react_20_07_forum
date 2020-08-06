import React, { useEffect } from "react";
import "./stylesheets/Home.css";
import { Header, Footer } from "../containers";
import { Menu } from "../components";
const Home = () => {
  useEffect(() => {
    document.title = "M's forum";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div>홈</div>
      <Footer></Footer>
    </>
  );
};

export default Home;
