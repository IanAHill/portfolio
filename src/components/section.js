
import React, { useState } from "react";
import { Welcome } from "./welcome";
import { Contact } from "./contact";
import { Projects } from "./projects";
import { About } from "./about";
import { NavBar } from "./navBar";

export const Section = ({section, changeSection}) => {
    
const renderSection = () => {
    if (section === "About") {
        return <About />;
    }
    if (section === "Projects") {
        return <Projects />;
    }

    if (section === "Contact") {
        return <Contact />;
    }

    if (section === "Welcome") {
        return <Welcome />;
    }
}
console.log(section);
    return (
        
        <section>

            {renderSection()} 
            <br></br><br></br><br></br>

        </section>
    )


}