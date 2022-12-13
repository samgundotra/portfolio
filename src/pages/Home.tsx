import React from "react";
import logo from "./logo.svg";
import "./../App.css";
import { Card } from "antd";
import projectData from "./../projects.json";
import ProjectCard from "./../ProjectCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  const { Meta } = Card;

  return (
    <div className="App">
      <div className="header-topbar">
        <div className="name-block">
          <h2>HappyKoala22 </h2>
        </div>
        <div className="button-block">
          <a className="contact-button">Contact</a>
        </div>
      </div>
      <section className="landing-text">
        <h2>Hi, I'm HappyKoala22.</h2>
        <h2>
          I believe that design should be playful, <span>experimental,</span>{" "}
          and collaborative.
        </h2>
        {/* <p>View my work</p> */}
        <svg
          width="22"
          height="40"
          viewBox="0 0 22 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.4286 29.2857V10.7143C20.4286 5.34923 16.0793 1 10.7143 1C5.34923 1 1 5.34924 1 10.7143V29.2857C1 34.6508 5.34923 39 10.7143 39C16.0793 39 20.4286 34.6508 20.4286 29.2857ZM10.7143 0C4.79695 0 0 4.79695 0 10.7143V29.2857C0 35.2031 4.79695 40 10.7143 40C16.6316 40 21.4286 35.203 21.4286 29.2857V10.7143C21.4286 4.79695 16.6316 0 10.7143 0Z"
            fill="#333366"
            fill-opacity="0.6"
          ></path>
          <path
            d="M10 28.5715C10 28.177 10.3198 27.8572 10.7143 27.8572C11.1088 27.8572 11.4286 28.177 11.4286 28.5715V32.8572C11.4286 33.2517 11.1088 33.5715 10.7143 33.5715C10.3198 33.5715 10 33.2517 10 32.8572V28.5715Z"
            fill="#333366"
            fill-opacity="0.6"
          ></path>
        </svg>
      </section>

      <section className="work-section">
        <h2>View my Work</h2>
        <div className="blogcard__grid">
          {projectData &&
            projectData.map((item, index) => <ProjectCard project={item} />)}
        </div>
      </section>
      
    </div>
  );
}

export default Home;
