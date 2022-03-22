import { useContext } from "react";
import { SectionContext } from "../contexts/SectionContext";

import "../styles/pages/AboutMe.scss";

export default function AboutMe() {
  const { aboutMeRef } = useContext(SectionContext);

  return (
    <div ref={aboutMeRef} className="about-me-container">
      <div className="about-me-picture-container">
        <img src="/images/about-me3.jpg" />
      </div>
      <div className="about-me-description-container">
        <h2>About Chris</h2>
        <p>
          I'm a devoted husband and father who enjoys cooking, reading and
          running. I taught for my most of professional life and enjoyed it, but
          found my first professional passion when I discovered front end
          development. It all started when I decided to build an English grammar
          website to help my students. As I started to build it (with the help
          of a couple of my students) I quickly became fascinated with the code.
        </p>
      </div>
    </div>
  );
}
