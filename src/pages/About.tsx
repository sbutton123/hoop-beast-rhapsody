import React from "react";

const About = () => {
  return (
    <section className="relative min-h-screen bg-gradient-beast overflow-hidden">
      {/* Subtle pulse grid, just like Hero page */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <h1 className="font-bangers text-4xl sm:text-5xl md:text-6xl text-white mb-6 md:mb-8 drop-shadow-lg text-center md:text-left">
          About Shanda
        </h1>

        {/*
          Story card. On desktop the first photo floats on the left beside the
          opening of the story, and the text flows full width once it passes
          the photo. On phones the photo sits at the top, above the story.
        */}
        <div className="flow-root bg-white/10 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg text-white text-lg sm:text-xl font-inter leading-relaxed [&>p]:mb-5 [&>p:last-child]:mb-0">
          <img
            src="/lovable-uploads/hoopingcoast.JPG"
            alt="Hooping on the coast"
            width={1456}
            height={1841}
            className="mx-auto mb-6 w-full max-w-[18rem] rounded-2xl object-cover shadow-xl md:float-left md:mb-4 md:mr-8 md:mt-1 md:w-64"
            style={{ background: "#e36dc2" }}
          />

          <p>
            Hi, I’m Shanda, creator of Hula Hoop Beast.
          </p>
          <p>
            My hula hoop journey started after my kids and I suffered a great loss. My husband, their father, died by suicide, and my three kids and I were trying to figure out how to process our grief and keep going.
          </p>
          <p>
            During that time I was dealing with depression and severe anxiety attacks. I had three children depending on me, so I kept myself going, but there were days when all I really wanted to do was sleep.
          </p>
          <p>
            I remember one anxiety attack in particular. I was cleaning the kitchen while my oldest son had a friend over when suddenly my throat started closing up and I couldn't breathe. I fell to the ground gasping for air. My son's friend saw what was happening and called his mom, who took me to the emergency room.
          </p>
          <p>
            After being checked out, I was told I had experienced an anxiety attack.
          </p>
          <p>
            I couldn't believe it. I was embarrassed and felt like I had wasted everyone's time because I thought I had somehow imagined what happened. But I hadn't imagined it. The physical experience had been very real. I continued having anxiety attacks after that, sometimes seemingly out of nowhere, but at least I began to understand what was happening.
          </p>
          <p>
            That was where life was when hula hooping unexpectedly entered the picture.
          </p>

          {/* Second photo, beside the part of the story where Kloey joins in */}
          <img
            src="/lovable-uploads/kloeyandme.jpg"
            alt="Kloey and me hooping"
            width={337}
            height={337}
            loading="lazy"
            className="mx-auto mb-6 w-full max-w-[16rem] rounded-2xl object-cover shadow-xl md:float-right md:mb-4 md:ml-8 md:mt-1 md:w-56"
            style={{ background: "#5e2b97" }}
          />

          <p>
            One day I was watching television and saw a woman demonstrating hula hoop tricks. She did a move called the corkscrew, and I thought it was absolutely incredible. I started yelling for my daughter, "Kloey, Kloey, you have to see this!"
          </p>
          <p>
            She came running into the room, saw the trick, and we decided we had to learn how to do it.
          </p>
          <p>
            We started looking everywhere for hula hoops. We checked stores like Fred Meyer, Target, and Walmart, but couldn't find what we were looking for. That actually turned out to be a good thing because I eventually discovered an online hula hoop community and learned that there was a whole world of hooping I knew absolutely nothing about.
          </p>
          <p>
            I still remember one of the questions I had to answer to join the group. It asked what kind of hula hoop I used.
          </p>
          <p>
            I thought that was a ridiculous question.
          </p>
          <p>
            "A round one, of course."
          </p>
          <p>
            I had no idea there were different materials, tubing sizes, diameters, weights, and different hoops for different styles of hooping.
          </p>
          <p>
            Eventually we learned how to make our own beginner hoops. We went to Home Depot for tubing, connectors, and a pipe cutter, ordered special tape online, and made our own.
          </p>
          <p>
            After that, we were hooked.
          </p>
          <p>
            Kloey and I watched tutorials, moved the furniture out of our living room so we would have more room to practice, carried our hoops everywhere, covered ourselves in bruises, learned tricks, choreographed dances, and eventually started performing together.
          </p>
          <p>
            Hooping became an escape during a time when we really needed one.
          </p>
          <p>
            When I was trying to learn a trick, I had to concentrate on what the hoop was doing. When I put on music and moved, my attention was on the movement and the music instead of everything happening inside my head. I didn't know anything about flow arts or flow states at the time. I just knew that when I was hooping, something changed.
          </p>
          <p>
            Years later, I decided I needed to be more responsible and pursue a more traditional career. I went back to school and studied accounting. I worked hard and got good grades, but my hoops slowly ended up sitting in the corner collecting dust.
          </p>
          <p>
            During that period I began experiencing some frightening physical symptoms. One night while studying, I realized that half of my face was numb. That eventually led to MRIs, the discovery of lesions on my brain, and later a diagnosis of Multiple Sclerosis.
          </p>
          <p>
            As the years went on, I began paying much more attention to stress in my life and to the things that made me feel good mentally and physically. I thought about the hoops sitting in the corner and realized I had walked away from something that had once brought an incredible amount of movement, focus, fun, and joy into my life.
          </p>
          <p>
            So I picked them back up.
          </p>
          <p>
            That decision eventually became Hula Hoop Beast.
          </p>
          <p>
            Today I perform, teach, create, and continue learning. I perform at libraries and community events, teach people to make and use hoops, and share something that became much more important in my own life than I ever expected it to be.
          </p>
          <p>
            It's also why I'm interested in sharing flow arts with people dealing with anxiety and depression.
          </p>
          <p>
            Flow arts became one of the ways I learned to step outside of my thoughts for a while, focus on something in front of me, move my body, and get lost in music and movement.
          </p>
          <p>
            Hula Hoop Beast grew out of that experience.
          </p>
          <p>
            For me, hooping is about tricks and performances, but it's also about movement, music, play, challenge, failure, persistence, and flow.
          </p>
          <p>
            Sometimes you drop the hoop. Sometimes you drop it a hundred times. And sometimes, eventually, you get the trick.
          </p>
          <p>
            That's part of the fun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
