export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#4f5f4b]">
      <nav className="site-nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            Solregn Therapy
          </a>

          <div className="nav-links">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/resources">Resources</a>
            <a href="/workshops">Workshops</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
            <a href="/testimonials">Testimonials</a>
          </div>
        </div>
      </nav>

      <section className="px-6 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
              About Solregn Therapy
            </p>

            <h1
              className="text-[clamp(2.6rem,10vw,6.8rem)] font-normal leading-[0.92] tracking-[0.045em] text-[#4f5f4b] sm:tracking-[0.055em]"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Therapy here honours complexity rather than rushing resolution.
            </h1>

            <div className="mt-8 h-px w-20 bg-[#c58a5c]/75 sm:mt-9" />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <aside className="h-fit border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_28px_80px_rgba(79,95,75,0.08)] sm:p-8 lg:sticky lg:top-32">
            <div className="mb-7 aspect-[4/5] w-full overflow-hidden border border-[#d8d0c5]/80 bg-[#e7ded2]">
              <img
                src="/images/founder-yashna.png"
                alt="Yashna Tulsiani, founder of Solregn Therapy"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
              About the Founder
            </p>

            <h2
              className="text-4xl font-normal leading-none tracking-[0.04em] text-[#4f5f4b]"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Yashna Tulsiani
            </h2>

            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#4f5f4b]/70">
              Founder, Solregn Therapy
            </p>

            <div className="my-7 h-px w-full bg-[#d8d0c5]/90" />

            <div className="space-y-5 text-sm leading-7 text-[#4f5f4b]/80">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#c58a5c]">
                  Experience
                </p>
                <p className="mt-1">2000+ sessions facilitated</p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#c58a5c]">
                  Format
                </p>
                <p className="mt-1">Online therapy for adults</p>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#c58a5c]">
                  Available In
                </p>
                <p className="mt-1">English, Hindi, Tamil, and Sindhi</p>
              </div>
            </div>
          </aside>

          <div className="space-y-14 sm:space-y-16">
            <section>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Founder
              </p>

              <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
                <p>
                  Hi, I’m Yashna. I facilitate online therapy for adults,
                  working across anxiety, trauma including relational and
                  complex trauma, emotional regulation, burnout, attachment
                  difficulties, grief, depression, stress, relationship
                  concerns, and identity exploration.
                </p>

                <p>
                  My approach is reflective, collaborative, and trauma-informed,
                  with a strong emphasis on safety, attunement, and
                  nervous-system awareness. In practice, this means therapy is
                  paced with care, with attention to how your mind, body,
                  emotions, relationships, and past experiences have shaped the
                  ways you cope, protect yourself, and make sense of the world.
                </p>

                <p>
                  Rather than focusing only on symptom reduction, therapy here
                  emphasises awareness, emotional capacity, meaning-making, and
                  long-term psychological resilience. The aim is not to “fix”
                  you quickly, but to help you understand yourself more deeply,
                  relate to your experiences with more compassion, and build
                  steadier ways of being with yourself and others.
                </p>

                <p>
                  My work is integrative, drawing from relational,
                  attachment-based, emotion-focused, narrative, and DBT-informed
                  approaches. Sessions are paced and flexible, structured when
                  helpful and open-ended when needed, guided by what feels most
                  alive for the client.
                </p>
              </div>
            </section>

            <section className="border-y border-[#d8d0c5]/80 py-12 sm:py-14">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                About Solregn
              </p>

              <div className="mb-8">
                <h2
                  className="text-[clamp(3rem,12vw,6rem)] font-normal leading-none tracking-[0.08em] text-[#4f5f4b]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  Solregn
                </h2>
                <p className="mt-3 text-lg italic tracking-[0.05em] text-[#4f5f4b]/70">
                  /suːlˈrɛɪn/
                </p>
              </div>

              <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
                <p>
                  Solregn /suːlˈrɛɪn/ is a Norwegian word for sun-shower, the
                  quiet meeting of sunlight and rain. It describes a moment
                  where two seemingly opposite things exist together: warmth and
                  difficulty, clarity and uncertainty, tenderness and heaviness.
                  For us, this image holds the essence of therapy. Healing does
                  not always arrive as a sudden breakthrough or a complete
                  absence of pain. Sometimes, it begins in the space where light
                  slowly enters what once felt overwhelming.
                </p>

                <p>
                  Solregn Therapy was created as a reflective, nurturing space
                  for people who are trying to make sense of themselves, their
                  emotions, their relationships, and the patterns they keep
                  returning to. It is built on the belief that growth often
                  happens through complexity, not by rushing past it. Here, we
                  hold space for the parts of you that feel confused, tired,
                  anxious, grieving, guarded, hopeful, or still becoming.
                </p>

                <p>
                  At Solregn Therapy, our aim is to help you feel more connected
                  to your inner world with safety, depth, and compassion. We
                  support you in understanding your experiences, building
                  emotional capacity, softening survival patterns, and finding
                  steadier ways of being with yourself and others. Like a
                  sun-shower, this work honours both the rain and the light,
                  making room for resilience, renewal, and meaning to emerge at
                  your own pace.
                </p>
              </div>
            </section>

            <section>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                This Space May Support You With
              </p>

              <h2
                className="mb-8 max-w-3xl text-[clamp(2.2rem,9vw,4.4rem)] font-normal leading-[0.98] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Insight, steadiness, and emotional capacity.
              </h2>

              <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
                <p>
                  Solregn Therapy may be a good fit if you are navigating
                  emotional overwhelm, anxiety, overthinking, trauma, burnout,
                  grief, relationship concerns, attachment patterns, low
                  self-worth, depression, stress, identity exploration, or
                  significant life transitions.
                </p>

                <p>
                  It may also be supportive if you often understand things
                  intellectually but still struggle to feel different
                  emotionally.
                </p>

                <p>
                  Therapy here offers space for both insight and capacity:
                  understanding why something feels the way it does, while
                  slowly building the ability to respond to it differently.
                </p>
              </div>
            </section>

            <section className="bg-[#e7ded2]/55 px-6 py-10 sm:px-10 sm:py-12">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Begin Here
              </p>

              <h2
                className="max-w-3xl text-[clamp(2.25rem,9vw,4.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Therapy can begin exactly where you are.
              </h2>

              <div className="mt-8 space-y-5 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
                <p>
                  Starting therapy can feel vulnerable. You do not need to have
                  everything figured out before you begin.
                </p>

                <p>
                  You are welcome to arrive with confusion, questions, silence,
                  emotion, or simply a sense that something needs attention.
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
                >
                  Reach out to begin
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center justify-center border border-[#d8d0c5] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b]/80 transition hover:border-[#c58a5c] hover:text-[#c58a5c]"
                >
                  View services
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}