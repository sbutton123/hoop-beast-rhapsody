import React from "react";

const About = () => {
  return (
    <section className="relative min-h-screen bg-gradient-beast overflow-hidden">
      {/* Subtle pulse grid, just like Hero page */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse" />
      </div>

      {/* Centered card grid */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen max-w-5xl mx-auto px-4 py-20 gap-10">
        {/* Images column, stacked and matched to text height */}
        <div className="flex flex-col gap-6 w-full max-w-xs flex-shrink-0">
          <img
            src="/lovable-uploads/hoopingcoast.jpg"
            alt="Hooping on the coast"
            className="rounded-2xl shadow-xl object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
            style={{ minHeight: "180px", background: "#e36dc2" }}
          />
          <img
            src="/lovable-uploads/kloeyandme.jpg"
            alt="Kloey and me hooping"
            className="rounded-2xl shadow-xl object-cover w-full h-56 sm:h-64 md:h-72 lg:h-80"
            style={{ minHeight: "180px", background: "#5e2b97" }}
          />
        </div>

        {/* Content column */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
          <h1 className="font-bangers text-4xl sm:text-5xl md:text-6xl text-white mb-4 drop-shadow-lg text-center lg:text-left">
            About Me
          </h1>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-white text-lg sm:text-xl font-inter leading-relaxed text-center lg:text-left">
            <p className="mb-4">
              Hi, I’m Shanda—creator of Hula Hoop Beast.
            </p>
            <p className="mb-4">
              My journey with hula hooping began during one of the darkest chapters of my life. After the devastating loss of my husband, I was left navigating deep grief, raising three children, and managing severe anxiety and depression. I was doing my best to keep going—but inside, I felt broken.
            </p>
            <p className="mb-4">
              Then one day, everything shifted. I caught a glimpse of a hula hoop performer doing a trick called the corkscrew on a television show. Something inside me lit up. I shouted for my daughter—“Kloey, come see this!”—and in that moment, something clicked. We were hooked.
            </p>
            <p className="mb-4">
              From that day on, hooping became our lifeline. We made our own hoops, cleared our living room for practice space, and carried our hoops everywhere. We choreographed dances, covered ourselves in bruises, and even performed together. Hooping was our escape—and our therapy.
            </p>
            <p className="mb-4">
              Years later, while studying accounting and pushing through life, I was diagnosed with Multiple Sclerosis. That’s when I knew I had to make a change. I needed to return to what truly healed me.
            </p>
            <p className="mb-4">
              So I chose joy. I chose movement. I chose flow. That’s how Hula Hoop Beast was born.
            </p>
            <p>
              Today, I teach, perform, and share hooping as a path to strength, healing, and expression. If you’ve ever felt stuck, lost, or overwhelmed—I want you to know there’s a way forward. Grab a hoop. Start where you are. You might just surprise yourself and find your inner beast!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
