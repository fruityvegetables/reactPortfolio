import React from "react";
import Project from "../Project/Project.js";
import "./ProjectHolder.css";
class ProjectHolder extends React.Component {
    constructor(){
        super()
        this.state = {
            projects: [
                {
                    name: "React Employee Directory", 
                    link: <a href="https://fruityvegetables.github.io/reactEmployeeDirectory/" target="blank">Click me!</a>
                },
                {
                    name: "React Google Book Search", 
                    link: <a href="https://gtroyer-react-book-search.herokuapp.com/" target="blank">Click me!</a>
                },
                {
                    name: "Career Resource Wiki", 
                    link: <a href="https://secure-shelf-77308.herokuapp.com/" target="blank">Click me!</a>
                },
                {
                    name: "Employee CMS - Node Application", 
                    link: <a href="https://github.com/fruityvegetables/employeeTracker" target="blank">It is a GitHub Repo!</a>
                },
                {
                    name: "Express Note Taker", 
                    link: <a href="https://github.com/fruityvegetables/NoteTaker" target="blank">Also a GitHub Repo!</a>
                },
                {
                    name: "Superhero Background & Backgrounds", 
                    link: <a href="https://cynthia-dm1216.github.io/ProjectGroup1/" target="blank">Click me!</a>
                }
            ]

        }
    }

    render() {
        return (
            <div className="projectHolder">
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