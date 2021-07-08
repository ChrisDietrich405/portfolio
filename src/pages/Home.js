import { Link } from "react-router-dom"
import { IconContext } from "react-icons";


import { 
    CgArrowUpR, 
    FaReact, 
    FaBootstrap, 
    FaHtml5, 
    FaCss3Alt, 
    FaSass, 
    FaGithubSquare, 
    IoLogoJavascript, 
    SiVisualstudio, 
    SiFirebase,
    SiPostman 
} from "react-icons/all"


import GetInTouch from "../components/Footer"
import Projects from "./Projects"
import useScroll from "../hooks/useScroll"

import "../styles/components/Home.scss"

//https://mail.google.com/mail/u/0/#inbox?projector=1
//ADD A HERO IMAGE A PICTURE OF ME AT THE COMPUTER FROM BEHIND SHOWING MY SILHOUETTE 
export default function Home() {

	const { shouldScrollToTop } = useScroll()

    return (
    <>
    {shouldScrollToTop && <div className="scroll-top"><IconContext.Provider value={{ position: "fixed", color: "green", className: "global-class-name" }}>
                          <div>
                          <CgArrowUpR size={100}/>
                          </div>
                          </IconContext.Provider></div>}
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
                            <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                            <div>
                            <IoLogoJavascript />
                            </div>
                            </IconContext.Provider>
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
        <Projects />
        <GetInTouch/>
    </div>
    </>
    )
}