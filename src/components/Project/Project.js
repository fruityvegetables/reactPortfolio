import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="project">
      <div className="content">

          <div>
            <strong>
                <h3>
                    {props.name}

                </h3>
                </strong> 
            <div className="img-container">
            </div>
            <div className="about-container">
              {props.about}
              <br></br>
              <br></br>
              </div>
              <strong>Tech used:</strong><div className="tech-container"> {props.tech}</div>
          </div>
          <br></br>
          <div className="link-container">
            <strong>Link to deployed version:</strong> {props.link}
          </div>
          <button onClick={props.onClick}>{props.dataId}</button>
      </div>
    </div>
  );
}

export default Project;