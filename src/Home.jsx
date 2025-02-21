import React from "react";
import Carousal from "./HOME/Carousal";
import About from "./AboutUs";
import "./style.css"
import Course from "./HOME/Cources";
import Branch from "./HOME/Branch";
import Artical from "./HOME/Article";
import HAbout from "./HOME/About";
function Home(){
    return(
        <>
          <Carousal></Carousal>
          <HAbout></HAbout>
          <Course></Course>
          <Artical></Artical>
          <Branch></Branch>
        </>
    )
}
export default Home;