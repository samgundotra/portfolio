import React from "react";
import logo from "./logo.svg";
import "./ProjectCard.css";
import { Card } from "antd";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { profile } from "console";

function ProjectCard(props: { project: any }) {
  const { project } = props;

  return (
    <div className="blog__each">
      <Link to={project.page_address}>
        {/* <a href="https://blog.hatch.ai/an-uncharitable-event-that-popped-more-than-the-popcorn-photos/"> */}
        <div className="blog__thumb">
          <img src={project.image} alt="" decoding="async"></img>
        </div>
        <div className="blog__title">
          <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <p>
            <span className="blog__author">{project.project_type}</span>
            {/* <span className="blog__date">{project.project_type}</span> */}
          </p>
        </div>
        {/* </a> */}
      </Link>
    </div>
  );
}

export default ProjectCard;
