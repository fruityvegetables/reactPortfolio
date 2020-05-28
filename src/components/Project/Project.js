import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="project">
      <div className="content">

          <p>
            <strong>
                <h3>
                    {props.name}
                </h3>
                </strong> 
            <div className="img-container">
          For gif image later
            </div>
          </p>
          <p>
            <strong>Link to deployed version:</strong> {props.link}
          </p>

      </div>
    </div>
  );
}

export default Project;