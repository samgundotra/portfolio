
import ".//../App.css";
import "./CaseStudy.css";
import { Link } from "react-router-dom";
import * as ri from "react-icons/ri";

function ProjectHeader() {
  return (
      <div className="header-topbar">
        <div className="name-block">
          <h2><Link to="/" style={{textDecoration: 'none', color:'inherit'}}>Sam Gundotra </Link></h2>
        </div>
        <div className="button-block">
          <Link to="/" className="home-button">
            <ri.RiHome4Line/>
          </Link>
          <a className="contact-button" href="mailto: samantha_gundotra@brown.edu">Contact</a>
        </div>
      </div>
  );
}

export default ProjectHeader;
