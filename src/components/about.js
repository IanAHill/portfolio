import React, { useState } from "react";

import "./about.css"


export const About = () => {

    return (
        <div id="about-container">
            <img src = "aboutMe.jpeg" id="headshot"/>
            <h4 id="brand-statement">{<br />}{<br />}Hi, I'm Ian! I'm a full-stack web developer and former Lutheran pastor with nearly ten years of experience using web technologies to help an organization realize its mission. {<br />}{<br />}I recently earned a certificate in full stack development from Rutgers University, with skills in HTML, CSS, JavaScript, databases, Express, Node, React, and so many more skills. I am known as a team player with strengths in server-side development, databases, and oral and written communication. {<br />}{<br />}In my past work, I successfully rebranded an organization, which increased exposure and social media following. I recently worked on a team of five to develop a cloud-based family cookbook app that helps families preserve favorite recipes. I’m looking forward to applying my lifelong passion for coding to work on a team in a new organization.</h4>
        </div>
    )
}