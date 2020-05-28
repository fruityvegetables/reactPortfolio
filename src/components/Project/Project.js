import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="project">
      <div className="content">

          <p>
            <strong>Name:</strong> {props.name}
            <div className="img-container">
          For gif image later
            </div>
          </p>
          <p>
            <strong>Link:</strong> {props.link}
          </p>

      </div>
    </div>
  );
}

export default Project;