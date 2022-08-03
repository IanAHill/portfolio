import React, { useState } from "react";
import {Section} from "./section";
import "./navBar.css"
export const NavBar = () => {
    const [section, setSection] = useState("Welcome");
    
    const changeSection = (section) => {
        setSection(section);
    }
    return (
        <div>
    
        <header>
        <a href="#welcome" onClick={() => changeSection("Welcome")}>Ian Hill</a>
        <nav>
            <a href="#about" onClick={() => changeSection("About")}>About Me</a>
            <a href="#projects" onClick={() => changeSection("Projects")}>Projects</a>
            <a href="#contact" onClick={() => changeSection("Contact")}>Contact</a>
        </nav>
        </header> 
        <div>
            <Section section={section} changeSection={changeSection}/>
        </div>
        </div>
    )
}