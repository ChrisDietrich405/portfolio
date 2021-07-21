import { useContext } from "react"
import { SectionContext } from "../contexts/SectionContext"

import aboutMePicture from "../assets/images/about-me.jpg"



import "../styles/pages/AboutMe.scss"

export default function AboutMe() {

    const { aboutMeRef } = useContext(SectionContext)

    return(
        <div ref={aboutMeRef} className="about-me-container">
            <hr />
            <div className="about-me-picture-container">
                <img className="about-me-picture" src={aboutMePicture}/>
            </div>
            <div className="about-me-description-container">
                <h1>About Chris</h1>
                <p>I'm a devoted husband and father who enjoys cooking, reading and running. I taught for my most of professioanl life
                    and enjoyed it, but found my first professional passion when I discovered front end development. 
                </p>
            </div>
        </div>
    )
}