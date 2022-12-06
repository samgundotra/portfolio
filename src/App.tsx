import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "antd";
import projectData from "./projects.json";
import ProjectCard from "./ProjectCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ResponsiveRedesign from "./pages/ResponsiveRedesign";
import IterativeDesign from "./pages/IterativeDesign";
import Zazz from "./pages/Zazz";
import Personas from "./pages/Personas";

function App() {
  const { Meta } = Card;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="responsive-redesign" element={<ResponsiveRedesign />} />
          <Route path="iterative-design" element={<IterativeDesign />} />
          <Route path="zazz" element={<Zazz />} />
          <Route path="personas" element={<Personas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
