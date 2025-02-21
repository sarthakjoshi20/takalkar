import React from "react";
import "./Aboutstyle.css"
import Banner from "./ABOUTUS/Abanner";
import Founder from "./ABOUTUS/AFounder"
import Aboutservices from "./ABOUTUS/WhyChoose";
import Teachingmethod from "./ABOUTUS/Teachingmethod";
export default function AboutUs()
{
    return(
        <>
            <Banner></Banner>
            <Founder></Founder>
            <Aboutservices></Aboutservices>
            <Teachingmethod></Teachingmethod>
        </>
    )
}