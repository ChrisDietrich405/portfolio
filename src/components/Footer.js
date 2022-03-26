import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaGithubSquare,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/all";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SectionContext } from "../contexts/SectionContext";

import "../styles/components/Footer.scss";

export default function Footer() {
  const notify = () => toast("Email was successfully sent");
  const { getInTouchRef } = useContext(SectionContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let userEmail = document.getElementById("exampleFormControlInput1").value;
    let userMessage = document.getElementById(
      "exampleFormControlTextarea1"
    ).value;

    var templateParams = {
      email: userEmail,
      message: userMessage,
    };

    console.log(templateParams);
    console.log(process.env.REACT_APP_SERVICE_ID);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          notify();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("exampleFormControlTextarea1").value = "";
  };

  return (
    <div className="footer-container" ref={getInTouchRef}>
      <h2>Get In Touch</h2>
      <div className="footer-wrap">
        <div className="get-in-touch-container">
          <div className="contact">
            <div className="email-container">
              <p>
                <AiFillMail size="1.5em" />
              </p>
              <p>
                <a className="email" href="mailto:chrisdietrich3666@gmail.com">
                  chrisdietrich3666@gmail.com
                </a>
              </p>
            </div>
            <div className="phone-container">
              <p>
                <AiFillPhone size="1.5em" />
              </p>
              <p>443 286 2875</p>
            </div>
            <div className="contact-icons">
              <Link
                to={{ pathname: "https://github.com/ChrisDietrich405/" }}
                target="_blank"
              >
                <FaGithubSquare
                  size="2.5em"
                  color="white"
                  className="github-icon"
                />
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/patricia-waltsak-2aa89a206/",
                }}
                target="_blank"
              >
                <AiFillLinkedin size="2.8em" color="white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="message-container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <form ref={form} onSubmit={sendEmail}>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Add message here"
              ></textarea>
              <button>SUBMIT</button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
