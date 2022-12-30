import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Card } from "antd";
import ".//../App.css";
import "./CaseStudy.css";
import { Link, useLocation } from "react-router-dom";
import * as ri from "react-icons/ri";
import Image from "react-image-enlarger";
import ProjectHeader from "./ProjectHeader";

function ResponsiveResign() {
  const [zoomed1, setZoomed1] = React.useState(false);
  const [zoomed2, setZoomed2] = React.useState(false);
  const [zoomed3, setZoomed3] = React.useState(false);
  const [zoomed4, setZoomed4] = React.useState(false);
  const [zoomed5, setZoomed5] = React.useState(false);
  const [zoomed6, setZoomed6] = React.useState(false);
  const [zoomed7, setZoomed7] = React.useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <div className="App" style={{paddingBottom: '11vh'}}>
      <ProjectHeader />
      <section className="title-text">
        <h2>
          <span>Responsive Redesign</span>A design refresh on a local bagel
          shop.
        </h2>
        <img
          className="header-image"
          src="https://i.ibb.co/GpCczcm/response-redesign-mockup.png"
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
            The goal of this project was to practice the workflow of redesigning
            a simple website. I worked on my ability to identify and analyze
            usability concerns in an existing interface, created low-fidelity
            and high-fidelity prototypes for various screen sizes, and
            formulated a visual style guide. Finally, I turned my prototypes
            into a responsive and refreshed website for the beloved cafe—Bagel
            Gourmet.
          </p>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">02</div>
            <div className="label">RESEARCH</div>
          </div>
          <h1>Identifying Usability Problems</h1>
          <p>
            The Bagel Gourmet website was dated and confusing to navigate. It
            was difficult to locate the menu and place an order.<br></br>{" "}
            <br></br>In addition to analyzing the website's usability, I used
            WebAIM WAVE to detect possible accessibility problems and identified
            low contrast errors.
          </p>
          <p>
            This is the current website{" "}
            <a className="link" href="http://bagelgourmetcafe.com/">
              (visit website <ri.RiExternalLinkLine />)
            </a>
          </p>
          <Image
            style={{ width: "45%", height: "auto" }}
            zoomed={zoomed1}
            src="https://sunny-effect-f07.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F77e8578a-80de-4758-b2ba-5c19cf327b89%2FScreen_Shot_2022-10-21_at_11.04.09_AM.png?id=2143d944-c5e8-4c77-a402-adccbf1d169f&table=block&spaceId=96bb77ef-c9ff-46ca-bf7d-9c00f7468d69&width=2000&userId=&cache=v2"
            onClick={() => setZoomed1(true)}
            onRequestClose={() => setZoomed1(false)}
          />
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="below-line">
          <div className="label-div">
            <div className="label">03</div>
            <div className="label">DESIGN ITERATIONS</div>
          </div>
          <h1>Prototyping</h1>
          <p>
          Using Balsamiq I create a total of 3 wireframes, one for each of the screen sizes (desktop, tablet, mobile). I kept the usability problems in mind while designing, and annotated where my designs made improvements.
          </p>
          <div className="content-multiple-img">
          <Image
            style={{ width: "80%", height: "auto", backdropFilter:"blur(5px)" }}
            zoomed={zoomed2}
            src="https://sunny-effect-f07.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc3f11fae-9720-43bc-b66c-5327761e73f8%2FUntitled.png?id=42ecff24-58ca-425d-a5d7-cee9d1eb7827&table=block&spaceId=96bb77ef-c9ff-46ca-bf7d-9c00f7468d69&width=1730&userId=&cache=v2"
            onClick={() => setZoomed2(true)}
            onRequestClose={() => setZoomed2(false)}
          />
          <Image
            style={{ width: "80%", height: "auto", backdropFilter:"blur(5px)" }}
            zoomed={zoomed3}
            src="https://sunny-effect-f07.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F19a42ce4-9e9d-412d-9cdc-e500614d5b1b%2Ftablet.png?id=c443b859-b4a5-43fe-b1ea-f71e34c56547&table=block&spaceId=96bb77ef-c9ff-46ca-bf7d-9c00f7468d69&width=1820&userId=&cache=v2"
            onClick={() => setZoomed3(true)}
            onRequestClose={() => setZoomed3(false)}
          />
          <Image
            style={{ width: "80%", height: "auto", backdropFilter:"blur(5px)"  }}
            zoomed={zoomed4}
            src="https://sunny-effect-f07.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F511c2bd6-44b7-44c4-a471-dcefdfa12281%2Fmobile.png?id=36a5f20a-bec2-4bd7-b59e-e0f2e886d5db&table=block&spaceId=96bb77ef-c9ff-46ca-bf7d-9c00f7468d69&width=1920&userId=&cache=v2"
            onClick={() => setZoomed4(true)}
            onRequestClose={() => setZoomed4(false)}
          />
            {/* <img src="https://sunny-effect-f07.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc3f11fae-9720-43bc-b66c-5327761e73f8%2FUntitled.png?id=42ecff24-58ca-425d-a5d7-cee9d1eb7827&table=block&spaceId=96bb77ef-c9ff-46ca-bf7d-9c00f7468d69&width=1730&userId=&cache=v2"></img>
            <img src="https://sunny-effect-f07.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F19a42ce4-9e9d-412d-9cdc-e500614d5b1b%2Ftablet.png?id=c443b859-b4a5-43fe-b1ea-f71e34c56547&table=block&spaceId=96bb77ef-c9ff-46ca-bf7d-9c00f7468d69&width=1820&userId=&cache=v2"></img>
            <img src="https://sunny-effect-f07.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F511c2bd6-44b7-44c4-a471-dcefdfa12281%2Fmobile.png?id=36a5f20a-bec2-4bd7-b59e-e0f2e886d5db&table=block&spaceId=96bb77ef-c9ff-46ca-bf7d-9c00f7468d69&width=1920&userId=&cache=v2"></img> */}

          </div>
         <p>Before starting my hi-fi prototypes I created a visual design guide in Figma that displays the main colors, typography, and reusable components’ different states to keep the user experience coherent. I chose a warm color scheme to stay true to the original website.</p>
          <Image
            style={{ width: "35%", height: "auto", backdropFilter:"blur(5px)"  }}
            zoomed={zoomed5}
            src=" https://sunny-effect-f07.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F96071bc4-1cf5-47e6-85c7-5ca905966981%2FVisual_Style_Guide.png?id=4378251c-bc5d-47c4-ac6d-d6ef8e97edd4&table=block&spaceId=96bb77ef-c9ff-46ca-bf7d-9c00f7468d69&width=1250&userId=&cache=v2"
            onClick={() => setZoomed5(true)}
            onRequestClose={() => setZoomed5(false)}
          />
          <p>For my hi-fi prototypes, I annotated how the website would be responsive to handle the different screen sizes. I noted how some elements move spots or change structure when you move from desktop to mobile to tablet. I applied my design guide to keep the aesthetic consistent across all devices.

<br></br> <br></br>To see my full designs, you can visit my Figma file which I’ve attached below.</p>
<iframe style={{border:"border: 1px solid rgba(0, 0, 0, 0.05)", width:"80%"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0zRZ85yhiXtWyg2rZDJ0VR%2FResponsive-Redesign%253A-Bagel-Gourmet%3Fnode-id%3D0%253A1%26t%3DMonM3FDntqE0qWwq-1"></iframe>
          </div>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">04</div>
            <div className="label">CONCLUSION</div>
          </div>
          <h1>The Finished Product </h1>
          <p>
          Using my final high-fidelity prototypes I created the webpage using HTML and CSS. Check it out <a className="link" href="https://happykoala222.github.io/bagel-gourmet-cafe-redesign/">here <ri.RiExternalLinkLine /></a>.<br></br> <br></br>
          This project gave me the opportunity to design for different screen sizes, and learn how to make updates while preserving the character of the shop. I am proud of how it turned out, and I hope my designs convey the essence of the amazing Bagel Gourmet.
          </p>
          <div className="content-multiple-img">
            <div className="column">
              <p>BEFORE</p>
              <Image
                style={{ width: "90%", height: "auto", backdropFilter:"blur(5px)" }}
                zoomed={zoomed6}
                src="https://sunny-effect-f07.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F77e8578a-80de-4758-b2ba-5c19cf327b89%2FScreen_Shot_2022-10-21_at_11.04.09_AM.png?id=2c04cdd2-c990-49cc-8a0b-afa01c9ae7f3&table=block&spaceId=96bb77ef-c9ff-46ca-bf7d-9c00f7468d69&width=1060&userId=&cache=v2"
                onClick={() => setZoomed6(true)}
                onRequestClose={() => setZoomed6(false)}
              />
            </div>
            <div className="column">
              <p>AFTER</p>
              <Image
                style={{ width: "80%", height: "auto", backdropFilter:"blur(5px)" }}
                zoomed={zoomed7}
                src="https://sunny-effect-f07.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F320384a4-0aa7-48a5-9d5f-ecf942539932%2FScreen_Shot_2022-10-21_at_12.53.52_PM.png?id=56f7e424-3d28-4c9d-8aeb-229412f5cba7&table=block&spaceId=96bb77ef-c9ff-46ca-bf7d-9c00f7468d69&width=1250&userId=&cache=v2"
                onClick={() => setZoomed7(true)}
                onRequestClose={() => setZoomed7(false)}
              />
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResponsiveResign;
