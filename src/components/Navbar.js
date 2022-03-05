import useScroll from "../hooks/useScroll";
import { useContext } from "react";
import { SectionContext } from "../contexts/SectionContext";

import { GiHamburgerMenu } from "react-icons/gi";

import "../styles/components/Navbar.scss";

export default function Navbar() {
  const { projectRef, getInTouchRef, aboutMeRef } = useContext(SectionContext);

  const { scrollToSection } = useScroll();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand">
          <img src="/images/logo.png" style={{ width: "180px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu className="hamburger" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-7 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio-section">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#aboutme-section"
                onClick={() => scrollToSection(aboutMeRef.current.offsetTop)}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => scrollToSection(getInTouchRef.current.offsetTop)}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
