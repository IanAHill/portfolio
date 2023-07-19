import React, { useState } from "react";
import "./projects.css"


export const Projects = () => {

  return (
    <div className="fade-in">

      <h1>My Work</h1><br></br>
      <h3>Here you can preview a sample of some of my work.<br></br><em>Note: projects deployed to Heroku may take a minute to load.</em></h3><br></br><br></br><br></br>

      <div id="projects-container">
        
     
    

      <div class="project">
        <a href="https://public.tableau.com/views/TreeCensusDataSetStarter_16640503303930/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"><h3 class = "project-title">Trees and Money in NYC Analysis</h3></a>
          <a href="https://public.tableau.com/views/TreeCensusDataSetStarter_16640503303930/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"><img src="TreeData.png" alt="clouds" /></a>
          <p class = "project-description">A tree census data dashboard developed in BI software Tableau{<br />}{<br />}Investigates tree density, health, and income in New York City's five boroughs.{<br />}{<br />} Demonstrates working with large datasets and producing interactive dashboards using BI software.  </p>
        </div>
        
        
        
        <div class="project">
        <a href="https://public.tableau.com/views/SalesDashboard_16641502146150/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"><h3 class = "project-title">BI Software Dashboard</h3></a>
          <a href="https://public.tableau.com/views/SalesDashboard_16641502146150/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"><img src="BISales.png" alt="clouds" /></a>
          <p class = "project-description">A company profits dashboard created in BI softward Tableau.{<br />}{<br />}Investigates profits by region, category, and sub-category.{<br />}{<br />} Demonstrates working with large datasets and producing interactive dashboards using BI software.</p>
        </div>
        
        <div class="project">
        <a href="https://ianahill.github.io/Weather-Forecast-App/"><h3 class = "project-title">Weather App</h3></a>
          <a href="https://ianahill.github.io/Weather-Forecast-App/"><img src="clouds.jpg" alt="clouds" /></a>
          <p class = "project-description">A simple weather forecast app that allows users to search by city name. Demonstrates working with JSON data and third-party APIs. {<br />}{<br />}Coded with HTML, CSS, and JavaScript. Weather data is retrieved via OpenWeather's One Call API. </p>
        </div>

        <div class="project">
        <a href = "./us-medical-insurance-analysis.html"><h3 class = "project-title">Insurance Analysis</h3></a>
          <a href = "./us-medical-insurance-analysis.html"><img src="insurance.jpg" alt="insurance image" /></a>
          <p class = "project-description">This project demonstrates Python fundamentals by providing a report on data imported in a CSV file of medical insurance costs. {<br />}{<br />}The goal of the project is to analyze the data to learn more about patient information, provide insights into medical insurance cost variables, and make recommendations on potential future use of the dataset.</p>
        </div>

        

      </div>
    </div>
  )
}