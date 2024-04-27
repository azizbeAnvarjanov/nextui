import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Block from "../components/Block";
import { auth } from "../../firebaseConfig";

const Home = () => {

  

  return (
    <div>
      <Hero />
      <Block />
      <Block />
    </div>
  );
};

export default Home;
