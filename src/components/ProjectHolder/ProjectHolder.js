import React from "react";
import Project from "../Project/Project.js";
class ProjectHolder extends React.Component {
    constructor(){
        super()
        this.state = {
            projects: [
                {
                    name: "React Employee Directory", 
                    link: "https://"
                },
                {
                    name: "Note Taker", 
                    link: "https://"
                },
                {
                    name: "Note Taker", 
                    link: "https://"
                }
            ]

        }
    }

    render() {
        return (
            <div>
            {this.state.projects.map(projects => (
        <Project 
        name = {projects.name}
        link = {projects.link}/>

        
      ))}
            </div>
        )
    }
}

export default ProjectHolder;