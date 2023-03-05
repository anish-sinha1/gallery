import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="me">
        <h1 className="me-title">Hey, I'm Anish</h1>
        <p className="me-main">
          I'm 21, and a software engineer by trade. I currently work at{" "}
          <a
            href="https://www.sonarmentalhealth.com"
            className="me-work-link"
            target="_blank"
            rel="noreferrer"
          >
            Get Sonar Inc.
          </a>{" "}
          For my past work, you can see my{" "}
          <a href="/cv" className="cv-link">
            résumé
          </a>{" "}
          However, aside from my software engineering talents, I am an
          artist&#8212;specifically, a portrait artist. I'm self taught, and
          never really took art lessons, but drawing faces always came naturally
          to me. Most of what's on this page was created between the ages of
          sixteen and nineteen, and maybe when work slows down a bit, I'll draw
          some more. If I end up at UChicago &#40;&#40;: maybe I'll gain some
          new inspiration too.
          <br />
          <br />
          <br />
          <br />
          Welcome to my gallery, and I hope you enjoy your stay here.
          <br />
          <br />
          &#8212;A
        </p>
      </div>
    </section>
  );
};

export default About;
