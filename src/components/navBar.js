import React, { useState } from "react";
import { Section } from "./section";
import "./navBar.css"
export const NavBar = () => {

    
    const [section, setSection] = useState("Welcome");

    const changeSection = (section) => {
        setSection(section);
    }

    

    
    
    return (
        <div>

            <header>

                <nav class="navbar">
                    <a href="#welcome" class="nav-branding" onClick={() => changeSection("Welcome")}>Ian Hill</a>
                    <ul class="nav-menu">
                        <li class="nav-item"><a href="#about" class="nav-link" onClick={() => changeSection("About")}>About Me</a></li>
                        <li class="nav-item"><a href="#projects" class="nav-link" onClick={() => changeSection("Projects")}>Projects</a></li>
                        <li class="nav-item"><a href="#contact" class="nav-link" onClick={() => changeSection("Contact")}>Contact</a></li>
                    </ul>
                    <div class="hamburger" onClick={() => {
                      const hamburger = document.querySelector(".hamburger");
                      const navMenu = document.querySelector(".nav-menu");
                        hamburger.classList.toggle("active");
                        navMenu.classList.toggle("active");
                    }}>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </nav>
            </header>

            <div>
                <Section section={section} changeSection={changeSection} />
            </div>
        </div>
    )
}