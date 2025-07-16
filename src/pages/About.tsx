import React from "react";
import "./About.css"; // Optional: or include styles inline if not using CSS file

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
        gap: "40px",
        flexWrap: "wrap",
        background: "linear-gradient(to bottom right, #5e2b97, #e36dc2)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <img
          src="/lovable-uploads/hoopingcoast.jpg"
          alt="Hooping on the Coast"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
            flex: 1,
          }}
        />
        <img
          src="/lovable-uploads/kloeyandme.jpg"
          alt="Kloey and Me"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
            flex: 1,
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Hi, I’m Shanda — creator of Hula Hoop Beast
        </h1>
        <p>
          My journey with hula hooping began during one of the darkest chapters
          of my life. After the devastating loss of my husband, I was left
          navigating deep grief, raising three children, and managing severe
          anxiety and depression. I was doing my best to keep going—but inside,
          I felt broken.
        </p>
        <p>
          Then one day, everything shifted. I caught a glimpse of a hula hoop
          performer doing a trick called the corkscrew on a television show.
          Something inside me lit up. I shouted for my daughter—“Kloey, come see
          this!”—and in that moment, something clicked. We were hooked.
        </p>
        <p>
          From that day on, hooping became our lifeline. We made our own hoops,
          cleared our living room for practice space, and carried our hoops
          everywhere. We choreographed dances, covered ourselves in bruises, and
          even performed together. Hooping was our escape—and our therapy.
        </p>
        <p>
          Years later, while studying accounting and pushing through life, I was
          diagnosed with Multiple Sclerosis. That’s when I knew I had to make a
          change. I needed to return to what truly healed me.
        </p>
        <p>
          So I chose joy. I chose movement. I chose flow. That’s how Hula Hoop
          Beast was born.
        </p>
        <p>
          Today, I teach, perform, and share hooping as a path to strength,
          healing, and expression. If you’ve ever felt stuck, lost, or
          overwhelmed—I want you to know there’s a way forward. Grab a hoop.
          Start where you are. You might just surprise yourself and find your
          inner beast!
        </p>
      </div>
    </div>
  );
};

export default About;
