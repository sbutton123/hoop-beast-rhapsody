// src/pages/Tutorials.tsx

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-beast py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-4">
            BEAST TUTORIALS
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            We’re polishing the Tutorials section. Check back soon for beginner tricks,
            advanced flow, hoop building, and more.
          </p>
        </div>
      </section>

      {/* Coming Soon Card */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-card shadow-lg shadow-beast">
            <div className="p-8 text-center">
              <h2 className="font-bangers text-4xl mb-3 text-gradient-beast">
                Coming Soon
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                The Tutorials page isn’t ready yet, but it’s in the works. In the meantime,
                feel free to explore the rest of Hula Hoop Beast.
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  href="/"
                  className="inline-block rounded-full border px-5 py-2 text-sm"
                >
                  ← Back to Home
                </a>
                <a
                  href="/programs"
                  className="inline-block rounded-full border px-5 py-2 text-sm"
                >
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tutorials
