import React from "react";
import logo from "./logo.svg";
import { Card } from "antd";
import ".//../App.css";
import "./CaseStudy.css";
import { Link } from "react-router-dom";
import * as ri from "react-icons/ri";
import Image from "react-image-enlarger";

function Zazz() {
  const { Meta } = Card;
  const [zoomed1, setZoomed1] = React.useState(false);
  const [zoomed2, setZoomed2] = React.useState(false);
  const [zoomed3, setZoomed3] = React.useState(false);
  const [zoomed4, setZoomed4] = React.useState(false);
  const [zoomed5, setZoomed5] = React.useState(false);
  const [zoomed6, setZoomed6] = React.useState(false);
  const [zoomed7, setZoomed7] = React.useState(false);

  return (
    <div className="App">
      <div className="header-topbar">
        <div className="name-block">
          <h2>Samantha Gundotra </h2>
        </div>
        <div className="button-block">
          <Link to="/" className="contact-button">
            Work
          </Link>
          <a className="contact-button">Contact</a>
        </div>
      </div>
      <section className="title-text">
        <h2>
          <span>Zazz</span>An IOS App.{" "}
          <br></br>
        </h2>
        <img
          className="header-image"
          src="https://i.ibb.co/0VKCNCn/zazz-cover.png"
        ></img>
      </section>
      <section className="content">
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">01</div>
            <div className="label">CONTEXT</div>
          </div>
          <h1>Project Overview</h1>
          <p>
            Zazz is a personal project I wanted to design the interface for. The goal of the app is to tell you how flattering a color is for your complexion given a photo of your skin and your clothing fabric.
          <br></br><br></br>
          Given that the app revolves around color, I wanted the interface to reflect this and convey a playful tone. Since the app is meant to be used while getting ready in the morning or shopping in person, I knew I had to limit the number of screens users went through before getting their results. Therefore, the challenge was to design a sleek, easy to use interface that incorporates playful elements wherever possible.
          
          </p>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">02</div>
            <div className="label">RESEARCH</div>
          </div>
          <h1>Inspiration</h1>
          <p>
            Since I wasn't sure how to begin, I turned to Pinterest for inspiration. I gathered images and other interfaces that conveyed the tone I was looking for. You can visit the pinterest board <a className="link" href="https://www.pinterest.com/samgundotra/zazzspo/">here.</a> 
            <br></br>
            <br></br>
          </p>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">03</div>
            <div className="label">PROTOTYPING</div>
          </div>
          <h1>Designing Mockups</h1>
          <p>
            An unexpected challenge I encountered was designing the onboarding screens. I had a vision for the main screens, but I hadn't given much thought to how I would present a tutorial without compromising on design. In the Figma file I've attached below, you will see two iterations of onboarding screens I went through. 
            <br></br>
          <br></br>
          Additionally, after the first release, I received feedback that users wanted a preview of their colors before moving on to the results screen. Using this data, I added a color preview component with a revised retake button.
          </p>
          <iframe style={{border:"border: 1px solid rgba(0, 0, 0, 0.1);"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCetk5KqGAHU8wSAp7m74WP%2FZazz-mockups%3Fnode-id%3D0%253A1%26t%3Dx0gUWJXsIpRkwkau-1"></iframe>
          </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">05</div>
            <div className="label">CONCLUSION</div>
          </div>
          <h1>The Finished Product</h1>
          <p>
            You can see the finished product by downloading or viewing Zazz on the <a className="link" href="https://apps.apple.com/us/app/zazz/id1644040267">App Store</a> or checking out some of the screenshots below. Ultimately, I am happy with how it turned out, but I believe that some of my design choices were limited by my knowledge SwiftUI. Design is never done and I look forward to building on this foundation.
            <br></br>
            <br></br>
            
            <Image
            style={{ width: "90%", height: "auto", backdropFilter:"blur(5px)" }}
            zoomed={zoomed4}
            src="https://i.ibb.co/Z17W9Bz/Screen-Shot-2022-12-06-at-3-36-35-PM.png"
            onClick={() => setZoomed4(true)}
            onRequestClose={() => setZoomed4(false)}
          />
            
          </p>
        </div>
      </section>
    </div>
  );
}

export default Zazz;
