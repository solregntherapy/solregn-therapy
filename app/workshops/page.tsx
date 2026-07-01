const navGroups = [
  {
    label: "About",
    href: "/about",
    links: [
      { label: "About Solregn", href: "/about" },
      { label: "About Founder", href: "/about" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    links: [
      { label: "Individual Therapy", href: "/services#individual-therapy" },
      { label: "Couples Therapy", href: "/services#couples-therapy" },
      { label: "Supervision", href: "/services#supervision" },
      { label: "Workshops", href: "/services#workshops" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    links: [
      { label: "Emotional Regulation", href: "/resources" },
      { label: "Anxiety & Overthinking", href: "/resources" },
      { label: "Crisis Support", href: "/resources" },
    ],
  },
  {
    label: "Workshops",
    href: "/workshops",
    links: [
      { label: "Workplace Programs", href: "/workshops#workplace-programs" },
      { label: "Webinars", href: "/workshops#webinars" },
      { label: "Trainings", href: "/workshops#trainings" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    links: [
      { label: "Enquiry Form", href: "/contact" },
      { label: "Referral Network", href: "/referral-network" },
    ],
  },
];

const directLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

const workshopMail =
  "mailto:solregntherapy@gmail.com?subject=Workshop%20Enquiry%20-%20Solregn%20Therapy";

const bottomButtonClass =
  "group inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-[#c58a5c] hover:border-[#c58a5c] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#c58a5c]";

const pageLinks = [
  { label: "Workplace Programs", href: "#workplace-programs" },
  { label: "Webinars", href: "#webinars" },
  { label: "Trainings", href: "#trainings" },
  { label: "Common Themes", href: "#common-themes" },
  { label: "How It Works", href: "#how-it-works" },
];

const workshopFormats = [
  {
    id: "workplace-programs",
    eyebrow: "For teams and organisations",
    title: "Workplace Programs",
    description:
      "Reflective, practical mental health sessions for teams navigating stress, emotional labour, communication strain, burnout, and change.",
    bestFor: [
      "Startups, growing teams, and people-first workplaces",
      "Mental health awareness weeks or monthly wellbeing calendars",
      "Teams needing language around stress, boundaries, and emotional regulation",
    ],
    themes: [
      "Burnout and nervous system awareness",
      "Emotional resilience at work",
      "Manager mental health literacy",
      "Communication, boundaries, and repair",
    ],
    button: "Enquire for workplace programs",
  },
  {
    id: "webinars",
    eyebrow: "For public or closed groups",
    title: "Webinars",
    description:
      "Gentle, accessible sessions that combine psychoeducation, reflection, and practical tools without making the space feel overly clinical.",
    bestFor: [
      "Community spaces, colleges, online groups, and public workshops",
      "Participants who want emotional clarity and self-understanding",
      "Introductory mental health topics that need warmth and structure",
    ],
    themes: [
      "Calming anxiety in the body",
      "Working with shame and self-criticism",
      "Understanding emotional overwhelm",
      "Grief, change, and inner safety",
    ],
    button: "Enquire for a webinar",
  },
  {
    id: "trainings",
    eyebrow: "For deeper learning spaces",
    title: "Trainings",
    description:
      "Structured learning sessions for groups that need more depth, reflection, and practical frameworks for emotional support and mental health conversations.",
    bestFor: [
      "Managers, HR teams, educators, peer supporters, and care-facing professionals",
      "Groups that need both sensitivity and usable language",
      "Teams wanting repeat sessions rather than a one-off talk",
    ],
    themes: [
      "Responding to emotional distress",
      "Creating psychologically safer conversations",
      "Supporting without rescuing",
      "Boundaries in helping roles",
    ],
    button: "Enquire for trainings",
  },
];

const commonThemes = [
  {
    title: "Emotional Resilience",
    text: "Understanding stress, emotional capacity, regulation, and recovery without reducing resilience to productivity.",
  },
  {
    title: "Anxiety & Overthinking",
    text: "Making sense of anxious loops, body-based activation, uncertainty, and practical ways to return to steadiness.",
  },
  {
    title: "Burnout & Work Stress",
    text: "Exploring exhaustion, invisible labour, boundaries, and sustainable ways of working within real-life constraints.",
  },
  {
    title: "Manager Mental Health Literacy",
    text: "Helping leaders notice distress, respond with care, hold boundaries, and know when to refer.",
  },
  {
    title: "Shame & Self-Worth",
    text: "Creating language around self-criticism, comparison, inner safety, and gentler ways of relating to oneself.",
  },
  {
    title: "Relationships & Boundaries",
    text: "Exploring communication, emotional needs, repair, limits, and the difference between care and over-functioning.",
  },
];

const processSteps = [
  {
    title: "1. Share the context",
    text: "Tell us about the group, setting, size, preferred format, and what the participants may be navigating.",
  },
  {
    title: "2. Shape the session",
    text: "The workshop is adapted to the audience, with a balance of psychoeducation, reflection, and practical tools.",
  },
  {
    title: "3. Facilitate gently",
    text: "Sessions are held with care, spaciousness, and attention to emotional safety rather than forced participation.",
  },
  {
    title: "4. Close with clarity",
    text: "Participants leave with simple takeaways, reflective prompts, or tools they can return to after the session.",
  },
];

function SiteNavigation() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="Solregn Therapy Home">
          <img
            src="/images/logo.png"
            alt="Solregn Therapy"
            className="nav-logo-image"
          />
        </a>

        <div className="nav-links desktop-nav-links">
          {navGroups.map((group) => (
            <div key={group.label} className="nav-item has-dropdown">
              <div className="nav-trigger">
                <a href={group.href}>{group.label}</a>
                <span aria-hidden="true">⌄</span>
              </div>

              <div className="dropdown-menu">
                {group.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {directLinks.map((link) => (
            <div key={link.label} className="nav-item">
              <a href={link.href}>{link.label}</a>
            </div>
          ))}
        </div>

        <details className="mobile-menu">
          <summary>
            <span>Menu</span>
            <span aria-hidden="true">⌄</span>
          </summary>

          <div className="mobile-menu-panel">
            {navGroups.map((group) => (
              <details key={group.label} className="mobile-nav-group">
                <summary>
                  <span>{group.label}</span>
                  <span aria-hidden="true">⌄</span>
                </summary>

                <div className="mobile-sub-links">
                  {group.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </details>
            ))}

            {directLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-direct-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </nav>
  );
}

function BottomButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={bottomButtonClass}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="text-[#4f5f4b] transition group-hover:text-[#fff8ef]">
        {children}
      </span>
    </a>
  );
}

function DesktopSidebar() {
  return (
    <aside className="hidden lg:block lg:self-start">
      <div className="fixed left-[max(3rem,calc((100vw-72rem)/2))] top-[calc(50%+3rem)] z-10 min-h-[calc(100vh-6.75rem)] max-h-[calc(100vh-6.75rem)] w-[18.5rem] -translate-y-1/2 overflow-y-auto border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_28px_80px_rgba(79,95,75,0.06)] sm:p-7 xl:w-[24rem]">
        <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
          Workshops
        </p>

        <h2
          className="mb-5 text-[clamp(1.35rem,2.2vw,1.85rem)] font-normal leading-[1.1] tracking-[0.035em] text-[#4f5f4b]"
          style={{ fontFamily: "var(--font-heading), serif" }}
        >
          Mental health spaces that feel human, reflective, and useful.
        </h2>

        <p className="mb-7 text-[0.9rem] leading-7 text-[#4f5f4b]/78">
          Workshops at Solregn are designed for organisations, communities, and
          learning spaces that want mental health conversations with depth,
          warmth, and practical grounding.
        </p>

        <div className="mb-8 space-y-2 text-[0.82rem] leading-6 text-[#4f5f4b]/82">
          {pageLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block border border-[#d8d0c5]/80 bg-[#f4f1ec]/55 px-4 py-3 transition hover:border-[#c58a5c] hover:bg-[#f7f3ed]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <BottomButton href={workshopMail}>Enquire</BottomButton>
      </div>
    </aside>
  );
}

function MobileSidebar() {
  return (
    <aside className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/70 p-5 shadow-[0_24px_70px_rgba(79,95,75,0.055)] sm:p-7 lg:hidden">
      <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
        On this page
      </p>

      <div className="grid gap-3 text-[0.82rem] leading-6 text-[#4f5f4b]/80 sm:grid-cols-2">
        {pageLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="border border-[#d8d0c5]/80 bg-[#f4f1ec]/55 px-4 py-3 transition hover:border-[#c58a5c] hover:bg-[#f7f3ed]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#4f5f4b]">
      <SiteNavigation />

      <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <DesktopSidebar />

          <div className="space-y-14">
            <MobileSidebar />

            <header>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                Workshops & trainings
              </p>

              <h1
                className="mb-7 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.08] tracking-[0.03em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Thoughtful mental health workshops for workplaces, groups, and
                reflective learning spaces.
              </h1>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Solregn Therapy offers workshops and trainings that make
                  emotional health easier to understand, speak about, and work
                  with in everyday life.
                </p>

                <p>
                  Sessions are designed to be gentle, structured, and
                  interactive without forcing disclosure. The aim is not to
                  overwhelm participants with information, but to create a
                  grounded space where insight, language, and practical tools
                  can begin to take shape.
                </p>
              </div>
            </header>

            <section className="bg-[#e7ded2]/55 px-6 py-9 sm:px-10 sm:py-10">
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Start here
              </p>

              <h2
                className="mb-5 max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                These sessions are useful when a group needs more than a
                motivational talk, but less than a therapy room.
              </h2>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/82 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Workshops can be adapted for teams, community groups,
                  colleges, online gatherings, and organisations that want a
                  trauma-informed and emotionally thoughtful approach to mental
                  health.
                </p>

                <p>
                  Each session can include reflection prompts, grounding
                  practices, discussion pauses, psychoeducation, and simple
                  tools that participants can return to after the workshop.
                </p>
              </div>
            </section>

            <section className="space-y-7">
              {workshopFormats.map((format) => (
                <article
                  key={format.id}
                  id={format.id}
                  className="scroll-mt-32 border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-7"
                >
                  <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                    {format.eyebrow}
                  </p>

                  <h2
                    className="mb-5 max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    {format.title}
                  </h2>

                  <p className="mb-7 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                    {format.description}
                  </p>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h3 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#4f5f4b]/70">
                        Best suited for
                      </h3>

                      <ul className="space-y-3 text-[0.9rem] leading-7 text-[#4f5f4b]/80">
                        {format.bestFor.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-[0.68rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c58a5c]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#4f5f4b]/70">
                        Possible themes
                      </h3>

                      <ul className="space-y-3 text-[0.9rem] leading-7 text-[#4f5f4b]/80">
                        {format.themes.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-[0.68rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c58a5c]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <BottomButton href={workshopMail}>
                      {format.button}
                    </BottomButton>
                  </div>
                </article>
              ))}
            </section>

            <section id="common-themes" className="scroll-mt-32 space-y-7">
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                  Browse by theme
                </p>

                <h2
                  className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  Common workshop themes can be adapted depending on the
                  audience, setting, and emotional needs of the group.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {commonThemes.map((theme) => (
                  <article
                    key={theme.title}
                    className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-7"
                  >
                    <h3
                      className="mb-3 text-[1.18rem] font-normal leading-snug tracking-[0.035em] text-[#4f5f4b]"
                      style={{ fontFamily: "var(--font-heading), serif" }}
                    >
                      {theme.title}
                    </h3>

                    <p className="text-[0.9rem] leading-7 text-[#4f5f4b]/78">
                      {theme.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section id="how-it-works" className="scroll-mt-32 space-y-7">
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                  How it works
                </p>

                <h2
                  className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  The process is collaborative, so the session can meet the
                  group where they actually are.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {processSteps.map((step) => (
                  <article
                    key={step.title}
                    className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-7"
                  >
                    <h3 className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#c58a5c]">
                      {step.title}
                    </h3>

                    <p className="text-[0.9rem] leading-7 text-[#4f5f4b]/78">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="bg-[#e7ded2]/55 px-6 py-9 sm:px-10 sm:py-10">
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                A gentle note
              </p>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/82 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Workshops can support awareness, reflection, and practical
                  skills. They are not a substitute for personal therapy,
                  emergency care, or crisis intervention.
                </p>

                <p>
                  For organisations, sessions can be shaped as a one-time
                  workshop, a short series, or part of a broader mental health
                  and wellbeing calendar.
                </p>
              </div>
            </section>

            <section className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-8">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                Begin gently
              </p>

              <h2
                className="mb-5 max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                To plan a workshop, share the audience, format, group size, and
                what you hope the session can hold.
              </h2>

              <p className="mb-7 text-[0.92rem] leading-7 text-[#4f5f4b]/82 sm:text-[0.96rem] sm:leading-8">
                Until the booking and form backend are ready, workshop enquiries
                can come through email.
              </p>

              <BottomButton href={workshopMail}>
                Send a workshop enquiry
              </BottomButton>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}