import React from "react";
import "./Skills.css";

function Skills() {
  return (<div>
    <header className="Skills">
    <div>
    <img src={require('./html5.png')} alt="html5" />
    <img src={require('./css3.png')} alt="css3" />
    <img src={require('./JS.png')} alt="JavaScript" />
    <img src={require('./jQuery.png')} alt="jQuery" />
    <img src={require('./bootstrap.png')} alt="Bootstrap" />
    <img src={require('./nodeJS.png')} alt="node.JS" />
    <img src={require('./express.png')} alt="express.JS" />
    <img src={require('./MySQL.jpg')} alt="MySQL" />
    <img src={require('./mongodb.png')} alt="MongoDB" />
    <img src={require('./React.png')} alt="React" />
    <img src={require('./npm_logo.png')} alt="npmLogo" />
    <img src={require('./github_logo.png')} alt="GitHub" />
    <img src={require('./php.jpg')} alt="PHP" />
    <img src={require('./C++.jpg')} alt="C++" />
    <img src={require('./java.jpg')} alt="Java" />

      </div>
    </header>
    </div>
  );
}

export default Skills;