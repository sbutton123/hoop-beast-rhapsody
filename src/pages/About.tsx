// src/pages/About.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 py-10 min-h-screen bg-gradient-to-b from-pink-50 via-violet-100 to-white">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      <Card className="w-full max-w-6xl bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden">
        <CardContent className="p-6 md:flex md:gap-8 md:items-start">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/lovable-uploads/kloeyandme.jpg"
              alt="Shanda and Kloey hooping together"
              className="rounded-lg shadow-md w-full object-cover h-auto max-h-[500px]"
            />
          </div>

          <div className="md:w-1/2 text-gray-800 space-y-5 text-lg">
            <p>
              Hi, I’m Shanda—creator of <strong>Hula Hoop Beast</strong>.
            </p>

            <p>
              My journey with hula hooping began during one of the darkest chapters of my life.
              After the devastating loss of my husband, I was left navigating deep grief, raising
              three children, and managing severe anxiety and depression. I was doing my best to
              keep going—but inside, I felt broken.
            </p>

            <p>
              Then one day, everything shifted. I caught a glimpse of a hula hoop performer doing a trick
              called the <em>corkscrew</em> on a television show. Something inside me lit up.
              I shouted for my daughter—“Kloey, come see this!”—and in that moment, something clicked.
              We were hooked.
            </p>

            <p>
              From that day on, hooping became our lifeline. We made our own hoops, cleared our living
              room for practice space, and carried our hoops everywhere. We choreographed dances,
              covered ourselves in bruises, and even performed together. Hooping was our escape—and
              our therapy.
            </p>

            <p>
              Years later, while studying accounting and pushing through life, I was diagnosed with
              <strong> Multiple Sclerosis</strong>. That’s when I knew I had to make a change.
              I needed to return to what truly healed me.
            </p>

            <p>
              So I chose joy. I chose movement. I chose flow. That’s how Hula Hoop Beast was born.
            </p>

            <p>
              Today, I teach, perform, and share hooping as a path to strength, healing, and expression.
              If you’ve ever felt stuck, lost, or overwhelmed—I want you to know there’s a way forward.
              Grab a hoop. Start where you are. You might just surprise yourself and find your inner beast!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
