import React, { useState } from "react";
import "./projects.css"


export const Projects = () => {

  return (
    <div className="fade-in">

      <h1>My Work</h1>
      <h3>Here you can preview a sample of some of my work. Note: projects deployed to Heroku may take a minute to load.</h3><br></br><br></br><br></br>

      <div id="projects-container">
        
        <div class="project">
          <h3 class = "project-title">Slice N' Dice</h3>
          <a href = "https://slice-n-dice-iah.herokuapp.com/"><img src="slicendice.png" alt="nina turtles logo" /></a>
          <p class = "project-description">A mock pizza ordering/delivery app based on the TMNT universe. Front-end created in React.js, with a connected Mongo databse. {<br />}{<br />}Sign up to test user functionality. Currently available on desktop browsers only.</p>
        </div>


        <div class="project">
          <h3 class = "project-title">Star Wars Travel Guide</h3>
          <a href="https://ianahill.github.io/StarWars-Travel-Planner/"><img src="starwars.jpg" alt="star wars planet" /></a>
          <p class = "project-description">My very first group project! The Star Wars Travel Guide uses a Star Wars API to pull planet data from a number of planets in the Star Wars Galaxy. {<br />}{<br />}Planets are paired with real-world locations and provide real-time weather updates using a weather API.</p>
        </div>

        <div class="project">
          <h3 class = "project-title">Family Cookbook</h3>
          <a href="https://family-cookbook-astokes.herokuapp.com/"><img src="familycookbook.jpg" alt="picture of someone cooking" /></a>
          <p class = "project-description">A cloud-based cookbook that stores treasured family recipes for easy sharing and access.{<br />}{<br />} Features MySQL databse, object-relational-mapping with Sequelize, cloudinary, and Boostrap styling {<br />}{<br />} To test recipe database, log in with Email: stokes@email.com and password: password  </p>
        </div>
      </div>
    </div>
  )
}