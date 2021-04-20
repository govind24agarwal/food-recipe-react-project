import React from "react";
import portfolioImage from "./portfolioImage.jpg";
function About() {
  return (
    <section className="section about-me">
      <div className="about-me-header">
        <h3>About us</h3>
        <div className="underline"></div>
      </div>
      <section className="about-us-content">
        <div className="about-us-info">
          <p>
            This is a React based portfolio project. It uses edamam's free api
            for it's backend.
          </p>
          <p>
            Project displays developers command in react concepts like: context,
            router, state etc
          </p>
        </div>
        <div className="developer">
          <h4>Developed by:</h4>
          <img src={portfolioImage} />
          <p>
            I am an engineer student of IIIT Guwahati, currently at the end of
            my 4th year looking for Internship and Job oppotunities.
          </p>
        </div>
      </section>
    </section>
  );
}

export default About;
