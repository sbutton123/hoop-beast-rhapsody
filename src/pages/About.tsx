<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Me – Hula Hoop Beast</title>
    <link rel="stylesheet" href="/index.css" />
    <style>
      body {
        margin: 0;
        font-family: 'Arial', sans-serif;
        background: linear-gradient(to bottom right, #5e2b97, #e36dc2);
        color: white;
      }

      .about-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        max-width: 1200px;
        margin: 50px auto;
        padding: 20px;
        gap: 40px;
        flex-wrap: wrap;
      }

      .image-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
      }

      .image-column img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
        flex: 1;
      }

      .text-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .text-column h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
      }

      .text-column p {
        font-size: 1.2rem;
        line-height: 1.6;
      }

      @media (max-width: 900px) {
        .about-container {
          flex-direction: column;
          padding: 20px;
        }

        .image-column {
          flex-direction: row;
          gap: 20px;
        }

        .image-column img {
          height: auto;
        }

        .text-column h1 {
          font-size: 2rem;
        }

        .text-column p {
          font-size: 1rem;
        }
      }
    </style>
  </head>

  <body>
    <div class="about-container">
      <div class="image-column">
        <img src="/lovable-uploads/hoopingcoast.jpg" alt="Hooping on the coast" />
        <img src="/lovable-uploads/kloeyandme.jpg" alt="Kloey and Me Hooping" />
      </div>

      <div class="text-column">
        <h1>Hi, I’m Shanda — creator of Hula Hoop Beast</h1>
        <p>
          My journey with hula hooping began during one of the darkest chapters of my life. After the devastating loss of my husband, I was left navigating deep grief, raising three children, and managing severe anxiety and depression. I was doing my best to keep going—but inside, I felt broken.
        </p>
        <p>
          Then one day, everything shifted. I caught a glimpse of a hula hoop performer doing a trick called the corkscrew on a television show. Something inside me lit up. I shouted for my daughter—“Kloey, come see this!”—and in that moment, something clicked. We were hooked.
        </p>
        <p>
          From that day on, hooping became our lifeline. We made our own hoops, cleared our living room for practice space, and carried our hoops everywhere. We choreographed dances, covered ourselves in bruises, and even performed together. Hooping was our escape—and our therapy.
        </p>
        <p>
          Years later, while studying accounting and pushing through life, I was diagnosed with Multiple Sclerosis. That’s when I knew I had to make a change. I needed to return to what truly healed me.
        </p>
        <p>
          So I chose joy. I chose movement. I chose flow. That’s how Hula Hoop Beast was born.
        </p>
        <p>
          Today, I teach, perform, and share hooping as a path to strength, healing, and expression. If you’ve ever felt stuck, lost, or overwhelmed—I want you to know there’s a way forward. Grab a hoop. Start where you are. You might just surprise yourself and find your inner beast!
        </p>
      </div>
    </div>
  </body>
</html>
