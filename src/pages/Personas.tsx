import React, { useEffect } from "react";


import ".//../App.css";
import "./CaseStudy.css";
import { Link, useLocation } from "react-router-dom";
import * as ri from "react-icons/ri";
import Image from "react-image-enlarger";

function Personas() {

  const [zoomed1, setZoomed1] = React.useState(false);
  const [zoomed2, setZoomed2] = React.useState(false);
  const [zoomed3, setZoomed3] = React.useState(false);
  const [zoomed4, setZoomed4] = React.useState(false);


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="App" style={{paddingBottom: '11vh'}}>
      <div className="header-topbar">
        <div className="name-block">
          <h2>HappyKoala22 </h2>
        </div>
        <div className="button-block">
          <Link to="/" className="home-button">
            <ri.RiHome4Line/>
          </Link>
          <a className="contact-button">Contact</a>
        </div>
      </div>
      <section className="title-text">
        <h2>
          <span>Personas and Storyboarding</span>An introduction to the principles of UX{" "}
          <br></br>
        </h2>
        {/* <img
          className="header-image"
          src="https://i.ibb.co/RvhnBnN/iterative-design-mockup.png"
        ></img> */}
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
          In this assignment, I had to step into a user’s shoes. My job was to observe real users interacting with an interface, interview these individuals about their experiences, create personas based on these users, and illustrate a storyboard for one of my personas.
          <br></br><br></br>
          I chose to observe the soda vending machine in the Underground to build user personas and a storyboard. The purpose of this vending machine is for students to purchase the soda of their choice quickly and with ease. This interface is multifaceted in that it uses buttons to indicate drink choice and a screen for payment operations. The payment screen accepts mobile payments and indicates other acceptable payment types. There are slots for coins and a less obvious button to complete transactions. A more simple component of this interface is the slot where drinks come out. The intended order of operations is for users to first pay, then choose their drink, and then confirm the end of the transaction. I've included a sketch below for reference.
          <br></br><br></br>
          <Image
            style={{ width: "60%", height: "auto", backdropFilter:"blur(5px)" }}
            zoomed={zoomed1}
            src="https://happykoala222.github.io/Personas-Storyboards/sketch.jpg"
            onClick={() => setZoomed1(true)}
            onRequestClose={() => setZoomed1(false)}
          />
          </p>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">02</div>
            <div className="label">RESEARCH</div>
          </div>
          <h1>User Interviews and Observations</h1>
          <p>
            Next, I observed 3 people interact with the vending machine and recorded any struggles or difficulties that they encountered. After observing them, I asked them a list of questions I had prepared.
            <br></br>
            <br></br>
            Interview Questions
            <ul>
              <li>Have you ever used this type of vending machine before?</li>
              <li>Do you know how much you just paid? How confident are you? If not why</li>
              <li>Did you feel any of the following while using the machine: happy, satisfied, frustrated</li>
              <li>Was it obvious to you what you had to do to get your drink?</li>
              <li>If not, how long did it take you to figure out</li>
              <li>What was the biggest challenge?</li>
            </ul>
            </p>
            <p>
            Summary of observations:
            <ul>
              <li>Previous experience did not provide any extra intuition for users</li>
              <li>Users pressed the drink buttons more than once even if they only wanted one drink</li>
              <li>Most users were confused about how much they actually paid. Very few were aware of the confirmation message</li>
              <li>The biggest slowdowns were determing how to get started, and waiting for the drink to be dispensed</li>
              <li>All users agreed that they were unsure if they should press the drink button first or pay first</li>
            </ul>
            </p>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">03</div>
            <div className="label">PERSONAS</div>
          </div>
          <h1>Constructing User Personas</h1>
          <p>
            After conducting interviews, I took the data I collected and used it to create two user personas. The personas consist of a four-quadrant empathy map, describing what users think, feel, say, and do.
          <br></br>
          <br></br>
          Empathy Map #1: Spacey Sarah
          <br></br>
          Spacey Sarah is a happy-go-lucky girl with lots of work she likes to procrastinate. Though she gets easily confused, she is always unbothered and goes with the flow.
          <br></br>
          <br></br>
          <Image
            style={{ width: "40%", height: "auto", backdropFilter:"blur(5px)" }}
            zoomed={zoomed2}
            src="https://happykoala222.github.io/Personas-Storyboards/spaceySarah.jpg"
            onClick={() => setZoomed2(true)}
            onRequestClose={() => setZoomed2(false)}
          />
          <br></br>
          <br></br>
          Empathy Map #2: Temperamental Tim
          <br></br>
          Temperamental Tim has a lot on his plate and no time to waste. Wasting time is his pet peeve and he tends to be a hot head. He knows exactly what he wants when he orders, and is all about the grindset.
          <br></br>
          <br></br>
          <Image
            style={{ width: "40%", height: "auto", backdropFilter:"blur(5px)" }}
            zoomed={zoomed3}
            src="https://happykoala222.github.io/Personas-Storyboards/temperamentalTim.jpg"
            onClick={() => setZoomed3(true)}
            onRequestClose={() => setZoomed3(false)}
          />
          </p>
          </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">05</div>
            <div className="label">STORYBOARD</div>
          </div>
          <h1>Mapping the User Journey</h1>
          <p>
            My next task was to storyboard my persona’s user journey from start to end. I wanted to reflect the goals of your persona and include all necessary steps for using an interface.
            <br></br>
            <br></br>
            
            <Image
            style={{ width: "90%", height: "auto", backdropFilter:"blur(5px)" }}
            zoomed={zoomed4}
            src="https://i.ibb.co/C63p3ZZ/Screen-Shot-2022-12-06-at-3-06-02-PM.png"
            onClick={() => setZoomed4(true)}
            onRequestClose={() => setZoomed4(false)}
          />
            
          </p>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">05</div>
            <div className="label">CONCLUSION</div>
          </div>
          <h1>Key Takeaways</h1>
          <p>
            In this assignment I learned the value of user research and how much you can learn from simply observing. This was a memorable project and the thought process I learned has stayed with me ever since. 
          </p>
        </div>
      </section>
    </div>
  );
}

export default Personas;
