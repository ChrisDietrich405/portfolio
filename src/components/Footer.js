import "../styles/components/Footer.scss"
import { IconContext } from "react-icons";
import { FaGithubSquare } from "react-icons/fa"

export default function Footer() {

    // https://www.youtube.com/watch?v=kjg0ZUDjRmQ&ab_channel=OkayDexterOkayDexter
    return (
            <div className="footer-container">
                <FaGithubSquare/>
                <h2>Get In Touch</h2>
                <p>443 286 2875</p>
                <p>chrisdietrich3666@gmail.com</p>
               
            </div> 
    )
}