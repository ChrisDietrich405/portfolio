import "../styles/components/Footer.scss"
import { FaGithubSquare } from "react-icons/fa"
import { useContext } from "react"
import { SectionContext } from "../contexts/SectionContext"

export default function Footer() {

    const { getInTouchRef } = useContext(SectionContext)

    // https://www.youtube.com/watch?v=kjg0ZUDjRmQ&ab_channel=OkayDexterOkayDexter
    return (
            <div className="footer-container" ref={ getInTouchRef }>
                <FaGithubSquare/>
                <h2>Get In Touch</h2>
                <p>443 286 2875</p>
                <p>chrisdietrich3666@gmail.com</p> 
            </div> 
    )
}