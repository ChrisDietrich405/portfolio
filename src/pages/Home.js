import { Link } from "react-router-dom";

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
  SiPostman,
  SiRedux,
} from "react-icons/all";

// import { BeforeAndAfterSliderFunctional } from "chris-library";

import GetInTouch from "../components/Footer";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import useScroll from "../hooks/useScroll";

import BeforePic from "..";

import "../styles/pages/Home.scss";
import "../styles/custom-style.scss";

export default function Home() {
  const { shouldScrollToTop, scrollToTop } = useScroll();

  return (
    <>
      <div className="home-container">
        {/* <BeforeAndAfterSliderFunctional BeforePic="/images/about-me.jpg" /> */}
        {shouldScrollToTop && (
          <div className="scroll-top" onClick={() => scrollToTop()}>
            <CgArrowUpR size={50} />
          </div>
        )}
        <h1>Successful Front-end Development</h1>

        <h3>
          {" "}
          Hello I'm Chris, a React Developer with a true passion for web
          development
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Languages</h5>
                  <div className="credentials">
                    <div></div>
                    <IoLogoJavascript color="#323330" />
                    <p>Javascript</p>
                  </div>
                  <div className="credentials">
                    <FaHtml5 color="#e44d26" />
                    <p>HTML</p>
                  </div>
                  <div className="credentials">
                    <FaCss3Alt color="#264de4" />
                    <p>CSS</p>
                  </div>
                  <div className="credentials">
                    <FaSass color=" #c69" />
                    <p>Sass</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xs-12">
              <div className="card">
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                <div className="card-body">
                  <h5 className="card-title">Frameworks</h5>
                  <div className="credentials">
                    <FaReact color="#61dafb" />
                    <p>React</p>
                  </div>
                  <div className="credentials">
                    <FaBootstrap color="#080135" />
                    <p>Bootstrap</p>
                  </div>
                  <div className="credentials">
                    <SiRedux color="#080135" />
                    <p>Redux</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 col-xs-12">
              <div className="card">
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                <div className="card-body">
                  <h5 className="card-title">Other Stuff</h5>
                  <div className="credentials">
                    <FaGithubSquare color="#000000" />
                    <p>Github</p>
                  </div>
                  <div className="credentials">
                    <SiVisualstudio color="#0078d7" />
                    <p>VSC</p>
                  </div>
                  <div className="credentials">
                    <SiFirebase color="ffcb2b" />
                    <p>Firebase</p>
                  </div>
                  <div className="credentials">
                    <SiPostman color="#ef5b25" />
                    <p>Postman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Projects />
        <AboutMe />
        <GetInTouch />
      </div>
    </>
  );
}
