import React, { useState } from "react";
import PortfolioSection from "../PortfolioSection";


function Portfolio(props) {

    const portfolio = [
        {
          id: "#idpsms",
          name: "https://github.com/borucltd/psms",
          label: "Creating fully customizable Spotify playlist",
          src: "./assets/images/psms.png"
         },
        {
         id: "#idtrackero",
         name: "https://github.com/borucltd/trackero",
         label: "Employee tracker using node.js + express + mysql",
         src: "./assets/images/trackero.png"
        },
        {
          id: "#idnasa",
          name: "https://github.com/borucltd/patient0",
          label: "Cool project which uses NASA and SLACK API",
          src: "./assets/images/quiz.png"
         },
         {
          id: "#idquiz",
          name: "https://github.com/borucltd/hw4_quiz",
          label: "Quiz page using Java Script",
          src: "./assets/images/quiz.png"
         },
         {
          id: "#idscheduler",
          name: "https://github.com/borucltd/hw5_planner",
          label: "Day scheduler using Java Script and local storage",
          src: "./assets/images/scheduler.png"
         },
         {
          id: "#idweather",
          name: "https://github.com/borucltd/hw6_weather",
          label: "Weather dashboard that uses openWeather API",
          src: "./assets/images/weather.png"
         }
      ]

      console.log(portfolio);
      return (
        <main className="container mt-3 sticky-footer">
          <section className="gallery row">
          {portfolio.map((item,index) => 
            <PortfolioSection key={index} kid={index} nonce={item.name} label={item.label} src={item.src}  />     
          )}
          </section>  
        </main>
      )
    }
    
    export default Portfolio;
