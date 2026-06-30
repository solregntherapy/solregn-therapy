const enquiryLink =
  "mailto:solregntherapy@gmail.com?subject=Enquiry%20for%20Solregn%20Therapy";

const intakeFormLink =
  "mailto:solregntherapy@gmail.com?subject=Request%20for%20Solregn%20Therapy%20intake%20form";

export default function ServicesPage() {
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
              Services
            </p>

            <h1
              className="text-[clamp(2.7rem,10vw,6.8rem)] font-normal leading-[0.92] tracking-[0.045em] text-[#4f5f4b] sm:tracking-[0.055em]"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Therapy support for emotional clarity, steadiness, and depth.
            </h1>

            <div className="mt-8 h-px w-20 bg-[#c58a5c]/75 sm:mt-9" />

            <p className="mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
              Solregn Therapy offers online therapy and reflective clinical
              support for adults, couples, and therapists. The work is
              collaborative, trauma-informed, and paced with care, with space
              for both insight and emotional capacity.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-6xl border-y border-[#d8d0c5]/80">
          <article className="grid gap-8 border-b border-[#d8d0c5]/80 py-12 lg:grid-cols-[0.45fr_1fr] lg:gap-20 lg:py-16">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                01
              </p>

              <h2
                className="text-[clamp(2.4rem,8vw,4.8rem)] font-normal leading-[0.95] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Individual Therapy
              </h2>
            </div>

            <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
              <p>
                Online individual therapy for adults navigating anxiety, trauma
                including relational and complex trauma, emotional overwhelm,
                burnout, grief, depression, stress, attachment concerns,
                self-worth, relationship patterns, identity exploration, and
                life transitions.
              </p>

              <p>
                Sessions offer a space to slow down, understand emotional
                patterns, build steadier ways of coping, and relate to yourself
                with more compassion and choice.
              </p>

              <a
                href={enquiryLink}
                className="inline-flex border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
              >
                Enquire about individual therapy
              </a>
            </div>
          </article>

          <article className="grid gap-8 border-b border-[#d8d0c5]/80 py-12 lg:grid-cols-[0.45fr_1fr] lg:gap-20 lg:py-16">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                02
              </p>

              <h2
                className="text-[clamp(2.4rem,8vw,4.8rem)] font-normal leading-[0.95] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Couples Therapy
              </h2>
            </div>

            <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
              <p>
                Couples therapy supports partners in understanding patterns of
                communication, emotional distance, conflict, unmet needs,
                repair, trust, intimacy, family values, and future clarity.
              </p>

              <p>
                The work is not about deciding who is right or wrong. It is a
                space to understand what happens between you, what each person
                needs, and whether the relationship can move with more honesty,
                safety, and care.
              </p>

              <a
                href={enquiryLink}
                className="inline-flex border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
              >
                Enquire about couples therapy
              </a>
            </div>
          </article>

          <article className="grid gap-8 py-12 lg:grid-cols-[0.45fr_1fr] lg:gap-20 lg:py-16">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                03
              </p>

              <h2
                className="text-[clamp(2.4rem,8vw,4.8rem)] font-normal leading-[0.95] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Supervision for Therapists
              </h2>
            </div>

            <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
              <p>
                Supervision offers a reflective space for therapists to think
                through clinical work, case formulation, boundaries,
                therapeutic presence, emotional responses, stuckness,
                documentation, and ethical decision-making.
              </p>

              <p>
                The space is collaborative and grounded, supporting therapists
                in developing depth, clarity, confidence, and reflective
                clinical judgement.
              </p>

              <a
                href={enquiryLink}
                className="inline-flex border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
              >
                Enquire about supervision
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 border-b border-[#d8d0c5]/80 pb-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
              How Therapy Works
            </p>

            <h2
              className="text-[clamp(2.4rem,8vw,4.8rem)] font-normal leading-[0.95] tracking-[0.04em]"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Structured when helpful, open-ended when needed.
            </h2>
          </div>

          <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
            <p>
              Therapy at Solregn is paced with care. Some sessions may involve
              reflection, meaning-making, and emotional exploration. Others may
              include practical tools, nervous-system support, communication
              work, or skills for emotional regulation.
            </p>

            <p>
              You do not need to arrive with perfect clarity. Therapy can begin
              with confusion, overwhelm, questions, silence, or simply a sense
              that something in your inner world needs attention.
            </p>

            <p>
              Before beginning, you may be asked to complete a brief intake form
              so that the work can start with a clearer understanding of what
              brings you here, what you may need support with, and any important
              context you would like to share.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href={intakeFormLink}
                className="inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
              >
                Request intake form
              </a>

              <a
                href={enquiryLink}
                className="inline-flex items-center justify-center border border-[#d8d0c5] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b]/80 transition hover:border-[#c58a5c] hover:text-[#c58a5c]"
              >
                Ask a question first
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-6xl bg-[#e7ded2]/55 px-6 py-10 sm:px-10 sm:py-12">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
            Begin Here
          </p>

          <h2
            className="max-w-4xl text-[clamp(2.25rem,9vw,4.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Reach out to explore what kind of support may feel right.
          </h2>

          <p className="mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
            You are welcome to get in touch for individual therapy, couples
            therapy, or supervision. The first step is simply to begin a
            conversation.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={enquiryLink}
              className="inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
            >
              Begin an enquiry
            </a>

            <a
              href={intakeFormLink}
              className="inline-flex items-center justify-center border border-[#d8d0c5] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b]/80 transition hover:border-[#c58a5c] hover:text-[#c58a5c]"
            >
              Request intake form
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}