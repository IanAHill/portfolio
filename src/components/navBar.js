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
                        <li class="nav-item"><a href="#about" class="nav-link" onClick={() => {
                            changeSection("About");
                            const hamburger = document.querySelector(".hamburger");
                            const navMenu = document.querySelector(".nav-menu");
                            hamburger.classList.remove("active");
                            navMenu.classList.remove("active");
                        }}>About Me</a></li>

                        <li class="nav-item"><a href="#projects" class="nav-link" onClick={() => {
                            changeSection("Projects");
                            const hamburger = document.querySelector(".hamburger");
                            const navMenu = document.querySelector(".nav-menu");
                            hamburger.classList.remove("active");
                            navMenu.classList.remove("active");
                        }}>Projects</a></li>

                        <li class="nav-item"><a href="./Resume-IanHill-March2023" download class="nav-link" onClick={() => {
                            
                            const hamburger = document.querySelector(".hamburger");
                            const navMenu = document.querySelector(".nav-menu");
                            hamburger.classList.remove("active");
                            navMenu.classList.remove("active");
                        }}>Resume</a></li>
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