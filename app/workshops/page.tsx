const workplaceEnquiryLink =
  "mailto:solregntherapy@gmail.com?subject=Workplace%20and%20Wellbeing%20Program%20Enquiry";

const programmeFormLink =
  "mailto:solregntherapy@gmail.com?subject=Request%20for%20Solregn%20Workplace%20Program%20Form";

export default function WorkshopsPage() {
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
              Workshops
            </p>

            <h1
              className="text-[clamp(2.7rem,10vw,6.8rem)] font-normal leading-[0.92] tracking-[0.045em] text-[#4f5f4b] sm:tracking-[0.055em]"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Reflective mental health support for workplaces, groups, and
              learning spaces.
            </h1>

            <div className="mt-8 h-px w-20 bg-[#c58a5c]/75 sm:mt-9" />

            <p className="mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
              Solregn Therapy offers workshops, webinars, trainings, and
              wellbeing programs for organisations and groups. These spaces are
              designed to be thoughtful, practical, and emotionally attuned,
              supporting people in understanding mental health with more depth,
              language, and care.
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
                Workplace Mental Health Workshops
              </h2>
            </div>

            <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
              <p>
                Workshops can support teams in understanding stress, burnout,
                emotional regulation, communication, boundaries, workplace
                overwhelm, and the emotional realities that shape how people
                show up at work.
              </p>

              <p>
                The focus is not only on information, but on creating a space
                where people can reflect, learn, and leave with language and
                practices that feel usable.
              </p>

              <a
                href={workplaceEnquiryLink}
                className="inline-flex border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
              >
                Enquire about workshops
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
                Manager Mental Health Literacy
              </h2>
            </div>

            <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
              <p>
                Manager-focused sessions help leaders understand emotional
                distress, burnout signals, psychologically safer communication,
                boundaries, referral pathways, and how to respond when someone
                on the team may be struggling.
              </p>

              <p>
                These sessions are not about turning managers into therapists.
                They are about helping managers recognise concerns earlier,
                respond with steadiness, and create more thoughtful workplace
                cultures.
              </p>

              <a
                href={workplaceEnquiryLink}
                className="inline-flex border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
              >
                Enquire about manager training
              </a>
            </div>
          </article>

          <article className="grid gap-8 border-b border-[#d8d0c5]/80 py-12 lg:grid-cols-[0.45fr_1fr] lg:gap-20 lg:py-16">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                03
              </p>

              <h2
                className="text-[clamp(2.4rem,8vw,4.8rem)] font-normal leading-[0.95] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Webinars & Group Sessions
              </h2>
            </div>

            <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
              <p>
                Webinars and group sessions can be designed around themes such
                as anxiety, emotional overwhelm, nervous-system awareness,
                self-care, resilience, relationships, grief, burnout, and
                navigating change.
              </p>

              <p>
                These spaces can be educational, interactive, reflective, or
                practice-based depending on the audience and the purpose of the
                session.
              </p>

              <a
                href={workplaceEnquiryLink}
                className="inline-flex border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
              >
                Enquire about webinars
              </a>
            </div>
          </article>

          <article className="grid gap-8 py-12 lg:grid-cols-[0.45fr_1fr] lg:gap-20 lg:py-16">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                04
              </p>

              <h2
                className="text-[clamp(2.4rem,8vw,4.8rem)] font-normal leading-[0.95] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Wellbeing Programs & Partnerships
              </h2>
            </div>

            <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
              <p>
                Wellbeing programs can be created as one-time sessions, short
                series, or ongoing partnerships. These may include employee
                wellbeing sessions, reflective learning spaces, mental health
                awareness programs, and customised support based on
                organisational needs.
              </p>

              <p>
                The aim is to offer support that is thoughtful rather than
                performative, practical without becoming shallow, and spacious
                enough to honour the complexity of people at work.
              </p>

              <a
                href={workplaceEnquiryLink}
                className="inline-flex border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
              >
                Enquire about partnerships
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 border-b border-[#d8d0c5]/80 pb-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
              How It Works
            </p>

            <h2
              className="text-[clamp(2.4rem,8vw,4.8rem)] font-normal leading-[0.95] tracking-[0.04em]"
              style={{ fontFamily: "var(--font-heading), serif" }}
            >
              Designed around the needs of the room.
            </h2>
          </div>

          <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
            <p>
              Each workshop or program begins with a conversation about the
              group, the context, and the kind of support that may be most
              useful. From there, the session can be shaped around the theme,
              audience, duration, and desired outcome.
            </p>

            <p>
              The format can be reflective, practical, interactive,
              training-focused, or a combination of these. Programs can be
              designed for employees, managers, teams, founders, communities, or
              learning groups.
            </p>

            <p>
              A brief program form may be shared before confirming the session,
              so the offering can be customised with care and clarity.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href={programmeFormLink}
                className="inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
              >
                Request program form
              </a>

              <a
                href={workplaceEnquiryLink}
                className="inline-flex items-center justify-center border border-[#d8d0c5] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b]/80 transition hover:border-[#c58a5c] hover:text-[#c58a5c]"
              >
                Begin an enquiry
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
            Let us shape the support around your people, context, and goals.
          </h2>

          <p className="mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/85 sm:text-lg sm:leading-9">
            You are welcome to reach out for workplace workshops, wellbeing
            webinars, manager trainings, custom programs, or ongoing corporate
            partnerships.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={workplaceEnquiryLink}
              className="inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
            >
              Enquire about a program
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center border border-[#d8d0c5] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b]/80 transition hover:border-[#c58a5c] hover:text-[#c58a5c]"
            >
              View therapy services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}