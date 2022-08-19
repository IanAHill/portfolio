import React, { useState } from "react";
import "./footer.css"
export const Footer = () => {

    return (
        <div id = "footer">
    
            <p>Made from scratch with React (and love) in 2022</p><br />
            <p><a href="mailto:ian@ianahill.com" id="contact-link">Contact me at ian@ianahill.com!</a></p>
            <a href="https://github.com/IanAHill"><img src = "github.png" height="5%" width="5%"/></a>
            <a href="https://www.linkedin.com/in/ian-hill-9019911a0/"><img src = "linkedin.png" height="5%" width="5%"/></a>

            
        </div>
    )
}