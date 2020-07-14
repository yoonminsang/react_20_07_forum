import React, { useEffect } from "react";
import "./stylesheets/Home.css";
import { Header, Footer } from "../components";
const Home = () => {
  useEffect(() => {
    document.title = "M's forum";
  }, []);
  return (
    <>
      <Header></Header>
      <div>홈</div>
      <Footer></Footer>
    </>
  );
};

export default Home;
