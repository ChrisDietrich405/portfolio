import { Link } from "react-router-dom"
import { Image } from "react"

import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaSass, FaGithubSquare } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiVisualstudio, SiFirebase, SiPostman } from "react-icons/si"
import GetInTouch from "../components/Footer"
import "../styles/components/Home.scss"


//https://mail.google.com/mail/u/0/#inbox?projector=1
//ADD A HERO IMAGE A PICTURE OF ME AT THE COMPUTER FROM BEHIND SHOWING MY SILHOUETTE 
export default function Home() {
    return (
    <div className="home-container"> 
        <h1>Successful Front-end Development</h1>
        <h3> Hello I'm Chris, a Front-end Developer with a true passion for web development</h3>
        
        
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">Languages</h5>
                            
                            <div className="credentials">
                                <IoLogoJavascript/>
                                <p>Javascript</p>
                            </div>
                            <div className="credentials">
                                <FaHtml5/>
                                <p>HTML</p>
                            </div>
                            <div className="credentials">
                                <FaCss3Alt/>
                                <p>CSS</p>
                            </div>
                            <div className="credentials">
                                <FaSass/>
                                <p>Sass</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">Frameworks</h5>
                            <div className="credentials">
                                <FaReact/>
                                <p>React</p>
                            </div>
                            <div className="credentials">
                                <FaBootstrap/>
                                <p>Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">Other Stuff</h5>
                            <div className="credentials">
                                <FaGithubSquare/>
                                <p>Github</p>
                            </div>
                            <div className="credentials">
                                <SiVisualstudio/>
                                <p>VSC</p>
                            </div>
                            <div className="credentials">
                                <SiFirebase/>
                                <p>Firebase</p>
                            </div>
                            <div className="credentials">
                                <SiPostman/>
                                <p>Postman</p>
                            </div>
                            <p>VSC integrated terminal</p>
                            <p>Axios</p>
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <h1>Projects</h1>
        <div className="projects-container">
            <div class="container project-container">
                <div class="row justify-content-center">
                    <div class="col-4">
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">English in Eight Minutes</h5>
                                <p className="card-text">So this is how it started. 
                                I was building a English teaching website with the help of some students.
                                I quickly became fascinated with coding and next realized I had found my
                                first real professinal passion.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-8">
                        <Link to={{ pathname: "https://english-in-eight-minutes.web.app/" }} target="_blank" >
                            <img src="../../images/english-in-eight.png" className="english-in-eight-image" />
                        </Link>
                    </div> 
                </div>
            </div>
            <div class="container project-container container-margin">
                <div class="row">
                    <div class="col-8">
                        <img src="../../images/dietrich-landcare.png" alt="" />
                    </div>
                    <div class="col-4">
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Dietrich Landcare</h5>
                                <p className="card-text">My son needed a website for his business, so I built him one</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <div class="container project-container">
                <div class="row justify-content-center">
                    <div class="col-4">
                    <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">English in Eight Minutes</h5>
                                <p className="card-text">So this is how it started. 
                                I was building a English teaching website with the help of some students.
                                I quickly became fascinated with coding and next realized I had found my
                                first real professinal passion.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-8">
                        <img src="../../images/cgshop.png" className="cgshop" alt="" />
                    </div> 
                </div>
            </div>
        </div>
        <GetInTouch/>
    </div>
    )
}