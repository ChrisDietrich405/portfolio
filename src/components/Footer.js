import "../styles/components/Footer.scss"
import { FaGithubSquare } from "react-icons/fa"
import { useContext } from "react"
import { SectionContext } from "../contexts/SectionContext"
import { Link } from "react-router-dom"

export default function Footer() {

    const { getInTouchRef } = useContext(SectionContext)

    // https://www.youtube.com/watch?v=kjg0ZUDjRmQ&ab_channel=OkayDexterOkayDexter
    return (
            <div className="footer-container" ref={ getInTouchRef }>
                <h2>Get In Touch</h2>
                <Link to={{ pathname: "https://github.com/ChrisDietrich405/" }} target="_blank" >
                    <FaGithubSquare size="2.5em"/>
                </Link>
                <p>443 286 2875</p>
                <p><AiOutlineMail/>chrisdietrich3666@gmail.com</p> 
            </div> 
    )
}