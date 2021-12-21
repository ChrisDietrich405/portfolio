import { Link } from "react-router-dom";
import { useSection } from "../contexts/SectionContext";

import "../styles/pages/Projects.scss";

export default function Projects() {
  const { projectRef } = useSection();

  return (
    <div ref={projectRef}>
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="project-section">
          <div className="card-body-project">
            <h5 className="card-title">English in Eight Minutes</h5>
            <p className="card-text">
              So this is how it started. I was building a English teaching
              website with the help of some students. I quickly became
              fascinated with coding and next realized I had found my first real
              professinal passion.
            </p>
            <a href="https://github.com/ChrisDietrich405/english-in-eight-react-final">
              GitHub repo
            </a>
          </div>

          <div>
            <Link
              to={{
                pathname: "https://english-in-eight-minutes.web.app/",
              }}
              target="_blank"
            >
              <img
                src="/images/english-in-eight.png"
                className="website-image"
              />
            </Link>
          </div>
        </div>
        <div className="project-section-middle">
          <div>
            <Link
              to={{
                pathname: "https://dietrich-landcare.web.app/",
              }}
              target="_blank"
            >
              <img
                src="/images/dietrich-landcare.png"
                className="website-image"
              />
            </Link>
          </div>
          <div className="card-body-project">
            <h5 className="card-title">Dietrich Landcare</h5>
            <p className="card-text">
              My oldest son needed a website for his business so I started
              building him one. For this project I used object oriented
              programming.
            </p>
            <a href="https://github.com/ChrisDietrich405/dietrich-landcare">
              GitHub repo
            </a>
          </div>
        </div>
        <div className="project-section">
          <div className="card-body-project">
            <h5 className="card-title">CGShop</h5>
            <p className="card-text">
              Welcome to CGShop! I learned a lot about async await working on
              the loading page of this project. I also finally understood how to
              work with state management
            </p>
            <a href="https://github.com/ChrisDietrich405/GC.Shop">
              GitHub repo
            </a>
          </div>

          <div>
            <Link
              to={{
                pathname: "https://gcshop-b5488.web.app/",
              }}
              target="_blank"
            >
              <img src="/images/cgshop.png" className="website-image" />
            </Link>
          </div>
        </div>

        <div className="project-section-middle">
          <div>
            <Link
              to={{
                pathname: "https://dietrich-landcare.web.app/",
              }}
              target="_blank"
            >
              <img src="/images/beauty-by-jo.png" className="website-image" />
            </Link>
          </div>
          <div className="card-body-project">
            <h5 className="card-title">Beauty By Jo</h5>
            <p className="card-text">
              This was my first freelance job, a website for a salon. Creating
              the modals for the appointment calendar was the biggest challenge.
            </p>
            <a href="https://github.com/ChrisDietrich405/dietrich-landcare">
              GitHub repo
            </a>
          </div>
        </div>
        <div className="project-section">
          <div className="card-body-project">
            <h5 className="card-title">Earthsave Baltimore</h5>
            <p className="card-text">
              I built this website for a friend, someone who runs a nonprofit.
              It was fairly simple, but I was able to practice a lot with scss.
            </p>
            <a href="https://github.com/ChrisDietrich405/GC.Shop">
              GitHub repo
            </a>
          </div>

          <div>
            <Link
              to={{
                pathname: "https://gcshop-b5488.web.app/",
              }}
              target="_blank"
            >
              <img
                src="/images/earthsave-baltimore.jpg"
                className="website-image"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
