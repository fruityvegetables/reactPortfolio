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
          </div>
          <p>
            <strong>Link to deployed version:</strong> {props.link}
          </p>
          <button onClick={props.onClick}>{props.dataId}</button>
      </div>
    </div>
  );
}

export default Project;