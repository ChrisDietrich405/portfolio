import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaGithubSquare,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/all";

import { SectionContext } from "../contexts/SectionContext";

import emailjs from "@emailjs/browser";

import "../styles/components/Footer.scss";

export default function Footer() {
  const { getInTouchRef } = useContext(SectionContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y7fq1o3",
        "template_1b41rif",
        form.current,
        "Y8tiOkzf-c7ZDYAZy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="footer-container" ref={getInTouchRef}>
      <h2>Get In Touch</h2>
      <div className="footer-wrap">
        <div className="get-in-touch-container">
          <div className="contact">
            <div className="email-container">
              <p>
                <AiOutlineMail />
              </p>
              <p>chrisdietrich3666@gmail.com</p>
            </div>
            <div className="contact-icons">
              <Link
                to={{ pathname: "https://github.com/ChrisDietrich405/" }}
                target="_blank"
              >
                <FaGithubSquare
                  size="2em"
                  color="white"
                  className="github-icon"
                />
              </Link>
              <Link
                to={{ pathname: "https://github.com/ChrisDietrich405/" }}
                target="_blank"
              >
                <AiOutlineLinkedin size="2em" color="white" />
              </Link>
            </div>
            <div className="phone-container">
              <p>
                <AiFillPhone />
              </p>
              <p>443 286 2875</p>
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
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
