import React, { useState } from "react";
import "./projects.css"


export const Projects = () => {

  return (
    <div className="fade-in">

      <h1>My Work</h1>
      <h3>Here you can preview a sample of some of my work. Note: projects deployed to Heroku may take a minute to load.</h3><br></br><br></br><br></br>

      <div id="projects-container">
        
     

        <div class="project">
        <a href="https://ianahill.github.io/Weather-Forecast-App/"><h3 class = "project-title">Weather App</h3></a>
          <a href="https://ianahill.github.io/Weather-Forecast-App/"><img src="clouds.jpg" alt="clouds" /></a>
          <p class = "project-description">A simple weather forecast app that allows users to search by city name. Demonstrates working with JSON data and third-party APIs. {<br />}{<br />}Coded with HTML, CSS, and JavaScript. Weather data is retrieved via OpenWeather's One Call API. </p>
        </div>

        <div class="project">
        <a href="https://family-cookbook-iah.herokuapp.com/"><h3 class = "project-title">Family Cookbook</h3></a>
          <a href="https://family-cookbook-iah.herokuapp.com/"><img src="familycookbook.jpg" alt="picture of someone cooking" /></a>
          <p class = "project-description">A cloud-based cookbook that stores treasured family recipes for easy sharing and access. {<br />}{<br />} Demonstrates CRUD operations with a mySQL database, with database queries in SQL and Object Relational Mapping with Sequelize. Features REST API design. {<br />}{<br />} Front-end designed with HTML, CSS, Bootstrap, Handlebars, and JavaScript.Features MySQL databse, object-relational-mapping with Sequelize, cloudinary, and Boostrap styling {<br />}{<br />} To test recipe database, log in with Email: stokes@email.com and password: password  </p>
        </div>

        <div class="project">
        <a href = "./us-medical-insurance-analysis.html"><h3 class = "project-title">Slice N' Dice</h3></a>
          <a href = "./us-medical-insurance-analysis.html"><img src="slicendice.png" alt="nina turtles logo" /></a>
          <p class = "project-description">A mock pizza ordering/delivery app based on the TMNT universe. Front-end created in React.js, with a connected Mongo databse. {<br />}{<br />}Sign up to test user functionality. Currently available on desktop browsers only.</p>
        </div>

      </div>
    </div>
  )
}