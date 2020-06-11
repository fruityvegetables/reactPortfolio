import React from "react";
import Project from "../Project/Project.js";
import "./ProjectHolder.css";
import * as dat from 'dat.gui';
class ProjectHolder extends React.Component {
    constructor() {
        super()
        this.state = {
            projects: [
                {
                    name: "Superhero Background & Backgrounds",
                    link: <a href="https://cynthia-dm1216.github.io/ProjectGroup1/" target="blank">Click me!</a>
                },
                {
                    name: "Career Resource Wiki",
                    link: <a href="https://secure-shelf-77308.herokuapp.com/" target="blank">Click me!</a>
                },
                {
                    name: "React Employee Directory",
                    link: <a href="https://fruityvegetables.github.io/reactEmployeeDirectory/" target="blank">Click me!</a>
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
                    name: "React Google Book Search",
                    link: <a href="https://gtroyer-react-book-search.herokuapp.com/" target="blank">Click me!</a>
                },
                {
                    name: "PlantSheets",
                    link: <a href="https://github.com/kyledahl201/plant-market" target="blank">Click me!</a>
                }
            ]

        }
    }

    activateProject(blah) {
        //doom function goes here
        (function () {
            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
            window.requestAnimationFrame = requestAnimationFrame;
        })();

        var image1 = new Image(),
            image2 = new Image();

        var canvas = document.getElementById("canvas"),
            ctx = canvas.getContext("2d"),
            width = 640,
            height = 480;

        canvas.width = width;
        canvas.height = height;

        // wipe effect
        var meltCan = document.createElement("canvas"),
            meltCtx = meltCan.getContext("2d"),
            images = [image1, image2],
            bgImage = 1,
            meltImage = 0,
            settings = {
                colSize: 2, // width of the coloumns
                maxDev: 100, // max deviation a column can have
                maxDiff: 50, // max difference in height a column can have to its neighbor
                fallSpeed: 6, // how fast the columns fall
            },
            columns = width / settings.colSize, // total number of columns
            y = [], // holds the current y pos of each column
            done = true; // used to tell when the effect is actually done

        meltCan.width = 640;
        meltCan.height = 480;

        function init() {
            meltCtx.drawImage(images[meltImage], 0, 0);
            // seed the rest of the y array
            for (var x = 0; x < columns; x++) {
                // seed the first element of the y array with a value between 0 and -maxDeviation
                if (x === 0) {
                    y[x] = -Math.floor(Math.random() * settings.maxDev);
                } else {
                    // assign a random value thats within maxDiff of our previous value;
                    y[x] = y[x - 1] + (Math.floor(Math.random() * settings.maxDiff) - settings.maxDiff / 2);
                }

                // keep the value between 0 and -maxDev
                if (y[x] > 0) {
                    y[x] = 0;
                } else if (y[x] < -settings.maxDev) {
                    y[x] = -settings.maxDev;
                }
            }

        }

        console.log(blah)
        switch (blah) {
            case "Employee CMS - Node Application":
            case "Express Note Taker":
                console.log("doom function ran!!!");
                //the rest of the DOOM FUNCTION!!!!
                // wipe render
                var col = 0,
                    yPos = 0;

                var gui = new dat.GUI();
                gui.add(settings, 'colSize');
                gui.add(settings, 'fallSpeed', 1, 40);
                gui.add(settings, 'maxDev');
                gui.add(settings, 'maxDiff');

                // Data urls for the 2 image.. they are pretty long
                image1.src = "https://i.imgur.com/OopPMsA.jpg"

                image2.src = "https://i.imgur.com/vsiBmjl.jpeg"
                image2.onload = function () {
                    init();
                    doMelt();
                }
                function doMelt() {
                    ctx.drawImage(images[bgImage], 0, 0);
                    done = true;

                    for (col = 0; col < columns; col++) {
                        y[col] += settings.fallSpeed;

                        // if within bounds of the canvas do the melt.
                        if (y[col] < 0) {
                            done = false;
                            yPos = 0;
                        } else if (y[col] < height) {
                            done = false;
                            yPos = y[col];
                        }

                        ctx.drawImage(meltCan, col * settings.colSize, 0, settings.colSize, height, col * settings.colSize, yPos, settings.colSize, height);
                    }

                    if (done) {
                        var swap = meltImage;
                        meltImage = bgImage;
                        bgImage = swap;
                        init();
                    }
                    requestAnimationFrame(doMelt);
                }
                //end of doom function...
                break;
            case "React Employee Directory":
                window.open("https://github.com/fruityvegetables/reactEmployeeDirectory/blob/master/README.md");
                break;
            case "React Google Book Search":
                window.open("https://github.com/fruityvegetables/reactBookSearch/blob/master/README.md");
                break;
            case "Career Resource Wiki":
                window.open("https://github.com/aroblesgalit/Project2/blob/master/README.md");
                break;
            case "Superhero Background & Backgrounds":
                window.open("https://github.com/cynthia-dm1216/ProjectGroup1/blob/master/README.md");
                break;
            case "PlantSheets":
                window.open("https://github.com/kyledahl201/plant-market/blob/master/README.md");
                break;
            default:
                console.log("no switch case made for this yet");
        }
    }
    render() {
        return (
            <div className="projectHolder">
                {this.state.projects.map((projects, index) => (
                    <Project
                        name={projects.name}
                        link={projects.link}
                        dataId={projects.name}
                        key={index}
                        onClick={() => {
                            this.activateProject(projects.name);

                        }}
                    />


                ))}
            </div>
        )
    }
}

export default ProjectHolder;