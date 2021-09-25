import useScroll from "../hooks/useScroll"
import { useContext } from "react"
import { SectionContext } from "../contexts/SectionContext"
import { useState } from "react"

import {Link } from "react-router-dom"

import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { IconContext } from "react-icons"
import { Sidebar } from "../Sidebar"

import "../styles/components/SecondNavbar.scss"


export default function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const { projectRef, getInTouchRef, aboutMeRef } = useContext(SectionContext)

    const { scrollTo } = useScroll()
    

    return(
        <>
          
            <IconContext.Provider value={{color: "#fff"}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>

                    </Link>
                    <ul className="links-container">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>About me</li>
                        <li>Get in touch</li>
                    </ul>
                </div>
                
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu__items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {Sidebar.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}
