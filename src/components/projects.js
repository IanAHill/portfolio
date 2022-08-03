import React, { useState } from "react";
import "./projects.css"


export const Projects = () => {

  return (
    <div className="fade-in">

      <h1>My Work</h1>
      <h3>Here you can preview a sample of some of my work. Note: projects deployed to Heroku may take a minute to load.</h3><br></br><br></br><br></br>

      <div id="projects-container">
        
        <div class="project">
          <h3>Slice N' Dice</h3>
          <a href = "https://slice-n-dice-iah.herokuapp.com/"><img src="slicendice.png" alt="nina turtles logo" /></a>
        </div>

        <div class="project">
          <h3>Star Wars Travel Guide</h3>
          <a href="https://ianahill.github.io/StarWars-Travel-Planner/"><img src="starwars.jpg" alt="star wars planet" /></a>
        </div>

        <div class="project">
          <h3>Family Cookbook</h3>
          <a href="https://family-cookbook-astokes.herokuapp.com/"><img src="familycookbook.jpg" alt="picture of someone cooking" /></a>
        </div>
      </div>
    </div>
  )
}