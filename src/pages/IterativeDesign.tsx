import React, { useEffect } from "react";
import ".//../App.css";
import "./CaseStudy.css";
import { Link, useLocation } from "react-router-dom";
import * as ri from "react-icons/ri";
import Image from "react-image-enlarger";

function IterativeDesign() {
  const [zoomed2, setZoomed2] = React.useState(false);
  const [zoomed3, setZoomed3] = React.useState(false);
  const [zoomed4, setZoomed4] = React.useState(false);


  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <div className="App">
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
          <span>Iterative Design</span>Designing an interactive prototype{" "}
          <br></br> for an emerging startup
        </h2>
        <img
          className="header-image"
          src="https://i.ibb.co/RvhnBnN/iterative-design-mockup.png"
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
          In this assignment I worked with in a group of 4 to design an interface for a startup of choice, gather feedback from users and iterate over our design accordingly. We chose to design an interactive interface for Raven, an emerging startup that manages notifications across SMS, Email, Push, Slack, WA & more. We went through the iterative design process to make a mock up of a solution to the Raven's concept.
          <br></br><br></br>
          Raven is a B2B product notification manager allowing businesses to monitor the performance of their notifications across channels (e.g. SMS, Email, WhatsApp, etc.) and streamline the notification sending process. Raven was part of Y Combinator’s S22 batch.
          For a more in-depth description of the startup, you can browse Raven's <a className="link" href="https://www.ycombinator.com/launches/H2f-raven-a-single-api-for-product-notifications-across-sms-email-push-whatsapp-slack-more">Y-Combinator page <ri.RiExternalLinkLine /></a>

          </p>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">02</div>
            <div className="label">RESEARCH</div>
          </div>
          <h1>Initial Sketches</h1>
          <p>
          Each group member made a set of 3 sketch brainstorms for our interface. We each attempted to explore different design alternatives, with variance in layout hierarchies, list formats, charts. We also experimented with which pages should make up the most important part of the solution: for example, one of our sets included an API documentation page. Below is the set of sketches I proposed.
          
          </p>
          <p>
            In my sketches I chose to highlight the dashboard as the "home" page and I did this with the assumption that developers would already be familiar with the API and would prefer seeing analytics first. Had I been given more time, I would have devised some user experiments to test this assumption.
          </p>
          <div className="content-multiple-img">
          <Image
            style={{ width: "80%", height: "auto", backdropFilter:"blur(5px)" }}
            zoomed={zoomed2}
            src="https://browncsaccount.github.io/raven/assets/sam-1.jpg"
            onClick={() => setZoomed2(true)}
            onRequestClose={() => setZoomed2(false)}
          />
          <Image
            style={{ width: "80%", height: "auto", backdropFilter:"blur(5px)" }}
            zoomed={zoomed3}
            src="https://browncsaccount.github.io/raven/assets/sam-2.jpg"
            onClick={() => setZoomed3(true)}
            onRequestClose={() => setZoomed3(false)}
          />
          <Image
            style={{ width: "80%", height: "auto", backdropFilter:"blur(5px)"  }}
            zoomed={zoomed4}
            src="https://browncsaccount.github.io/raven/assets/sam-3.jpg"
            onClick={() => setZoomed4(true)}
            onRequestClose={() => setZoomed4(false)}
          /> </div>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">03</div>
            <div className="label">DESIGN ITERATIONS</div>
          </div>
          <h1>Prototyping</h1>
          <p>
          After we finished sketching, we combined our ideas to make one set of wireframes. When making design decisions we wanted to focus on sending and managing notifcations easily.
          <br></br>
          <br></br>
          Next, we made an interactive high-fidelity prototype based on the wireframes. One of the biggest challenges we faced was staying true to the company's goals. Since Raven is a B2B product, it was difficult to understand our users from our perspective as students. Additionally, we had to research similar products to understand how we could use visual design principles to keep a professional tone.
          <br></br>
          <br></br>
          Attached below is our interactive prototype.
          </p>
          <iframe style={{border:"border: 1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fhlt2jHejastnBFLiCf8cIi%2FRaven-Anonymous-Prototype%3Fnode-id%3D1%253A2617%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2284"></iframe>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">04</div>
            <div className="label">FEEDBACK</div>
          </div>
          <h1>Critique Studio</h1>
          <p>
            After creating our prototype we had a critique session with a group of peers.We wrote this list down in real time, and organized it into the pages it fits under. Some of the most glaring feedback points were directed towards the Send Notifications process, which we found reasonable as sending notifications is the primary task of our interface. We also received other feedback noting that the design of the Manage Templates page was inconsistent with the rest of our design choices, and that the Preferred Channels interface could be improved as well.
            < br></br>
            <br></br>
            Create New Notifications (under Send Notification process):
          </p>
          <ul>
            <li>Fix input field for ‘Recipient’</li>
            <li>Make drop-down menu interactive</li>
            <li>Make ‘Next’ button lead to the next page (or get rid of it and preserve the 2 radio buttons)</li>
            <li>Make date picker functional</li>
          </ul>
          <p>Select Preferred Channels:</p>
          <ul>
            <li>Change ‘Next’ to ‘Send’</li>
            <li>Add a ‘Sent successfully’ popup indicating the task is complete</li>
          </ul>
          <p>Dashboard:</p>
          <ul>
            <li>Label axes</li>
            <li>Increase the readability of the chart: labeling the delivery metrics</li>
          </ul>
          <p>Manage Templates:</p>
          <ul>
            <li>Users in the critique section noted that the design of our interface on this page was inconsistent with the rest of our UI</li>
            <li>Increase the readability of the chart: labeling the delivery metrics</li>
          </ul>
        </div>
        <div className="content-block">
          <div id="Context" className="div"></div>
          <div className="label-div">
            <div className="label">04</div>
            <div className="label">USER TESTING</div>
          </div>
          <h1>User Testing</h1>
          <p>
          Having test users try out an interface is an important part of testing and a valuable source of feedback. We conducted our own usability test through a remote user testing service <a className="link" href="https://www.usertesting.com/">(UserTesting.com)</a> using our interactive hi-fi prototype.  We assigned the task of sending a notification, with the subtasks of navigating to the ‘send notifications’ page, creating a notification and configuring the channels.
          <br></br>
          <br></br>
          Our users encountered the following errors: when creating a notification, our date picker did not collapse when users selected a date, and users were unable to select a year. Additionally, while users could type into our input fields, deletion did not work. Nevertheless, all three of our testers successfully completed our task and subtasks, and expressed enthusiasm about our interface, with one user stating he “would definitely use it if [his] company needed a product like this.” All users indicated the interface was easy to learn and use, and praised the decision to assign a distinct color to the ‘send a notification’ button. We used this feedback to improve our product by fixing the date picker, and recognize the need to resolve the input field bug as well.
          <br></br>
          <br></br>
          <a className="link" href="https://app.usertesting.com/v/177b1788-3a69-415f-9e1f-1c38b5880366?encrypted_video_handle=8085e915-213c-40c8-8331-ae24f7bf4423#!/notes">Video #1 <ri.RiExternalLinkLine /> </a>
          <br></br>
          <a className="link" href="https://app.usertesting.com/v/c58d254a-c18d-44ec-bbd2-5f2aafe63251?encrypted_video_handle=28cd8b2d-34bc-4020-9551-d906b26950a0#!/notes">Video #2 <ri.RiExternalLinkLine /> </a>
          <br></br>
          <a className="link" href="https://app.usertesting.com/v/bf47ca8f-e66a-4b67-8945-956236266678?encrypted_video_handle=df72b9a1-1cd5-49d0-9fb9-c61a18c8ad96#!/notes">Video #3 <ri.RiExternalLinkLine /> </a>
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
          In this assignment we learned the value of iterating over our design and incorporating user feedback into iterations of a product. We particularly benefited from observing screen recordings of users performing critical tasks to inform learnability and usability of our design and identify areas for improvement. We contacted Raven to ask for feedback and insight. We're looking forward to their response!
          </p>
        </div>
      </section>
    </div>
  );
}

export default IterativeDesign;
