import React from "react";
import "./stylesheets/Home.css";
import { Header, Footer } from "../components";
import useTitle from "@nooks/use-title";
const Home = () => {
  useTitle("React Board");
  return (
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  );
};

export default Home;
