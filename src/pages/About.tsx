import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      <img
        src="/lovable-uploads/kloeyandme.jpg"
        alt="Shanda and Kloey hooping together"
        className="rounded-2xl shadow-lg mb-8 w-full object-cover"
      />

      <div className="text-lg leading-relaxed space-y-6 text-gray-800">
        <p>
          Hi, I’m Shanda—creator of <strong>Hula Hoop Beast</strong>.
        </p>

        <p>
          My journey with hula hooping began during one of the darkest chapters
          of my life. After the devastating loss of my husband, I was left
          navigating deep grief, raising three children, and managing severe
          anxiety and depression. I was doing my best to keep going—but inside,
          I felt broken.
        </p>

        <p>
          Then one day, everything shifted. I caught a glimpse of a hula hoop
          performer doing a trick called the <em>corkscrew</em>. Something
          inside me lit up. I shouted for my daughter—“Kloey, come see this!”—
          and in that moment, something clicked. We were hooked.
        </p>

        <p>
          From that day on, hooping became our lifeline. We made our own hoops,
          cleared our living room for practice space, and carried our hoops
          everywhere. We choreographed dances, covered ourselves in bruises,
          and even performed together. Hooping was our escape—and our therapy.
        </p>

        <p>
          Years later, while studying accounting and pushing through life, I was
          diagnosed with <strong>Multiple Sclerosis</strong>. That’s when I knew
          I had to make a change. I needed to return to what truly healed me.
        </p>

        <p>
          So I chose joy. I chose movement. I chose flow. That’s how Hula Hoop
          Beast was born.
        </p>

        <p>
          Today, I teach, perform, and share hooping as a path to strength,
          healing, and expression. If you’ve ever felt stuck, lost, or
          overwhelmed—I want you to know there’s a way forward. Grab a hoop.
          Start where you are. You might just surprise yourself.
        </p>

        <div className="mt-10 text-center">
          <a
            href="/tutorials"
            className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
}
