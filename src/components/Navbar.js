import useScroll from "../hooks/useScroll"
import { useContext } from "react"
import { SectionContext } from "../contexts/SectionContext"

import "../styles/components/Navbar.scss"

export default function Navbar() {

    const { projectRef, getInTouchRef, aboutMeRef } = useContext(SectionContext)

    const { scrollTo } = useScroll()

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" ><img src="/images/logo.png" style={{width: "180px"}}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-7 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#" onClick={() => scrollTo(projectRef.current.offsetTop)}>Projects</a>
                        </li>                                                                         
                        <li className="nav-item">
                          <a className="nav-link" href="#" onClick={() => scrollTo(aboutMeRef.current.offsetTop)}>About Me</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#" onClick={() => scrollTo(getInTouchRef.current.offsetTop)}>Get in touch</a>
                        </li>
                    </ul>
                </div>
                <hr className="hr-navbar"/>
 
            </div>
            
        </nav>
    )
}