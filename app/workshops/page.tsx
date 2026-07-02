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
      {
        label: "EAP & Workplace Support",
        href: "/workshops#eap-workplace-support",
      },
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
  { label: "EAP & workplace support", href: "#eap-workplace-support" },
  { label: "Webinars", href: "#webinars" },
  { label: "Trainings", href: "#trainings" },
  { label: "How we shape it", href: "#how-we-shape-it" },
  { label: "Enquire", href: "#enquire" },
];

const workshopFormats = [
  {
    id: "eap-workplace-support",
    eyebrow: "For organisations and teams",
    title: "EAP & Workplace Psychological Support",
    description:
      "Thoughtful mental health support for workplaces that want more than a one-time motivational talk. Sessions can be shaped around stress, burnout, emotional resilience, psychological safety, manager sensitivity, communication strain, and workplace wellbeing.",
    bestFor: [
      "Organisations building or strengthening their wellbeing support",
      "Teams navigating stress, burnout, transition, conflict, or emotional load",
      "HR teams, managers, and people-facing teams who need clearer mental health language",
    ],
    includes: [
      "Psychoeducational workshops",
      "Manager mental health literacy sessions",
      "Reflective group sessions",
      "Short wellbeing series or awareness-week sessions",
    ],
    button: "Enquire for workplace support",
  },
  {
    id: "webinars",
    eyebrow: "For public or closed groups",
    title: "Webinars",
    description:
      "Accessible, reflective sessions for groups who want to understand emotional patterns with warmth and clarity. Webinars can combine psychoeducation, simple practices, journaling prompts, grounding tools, and space for quiet reflection.",
    bestFor: [
      "Community spaces, colleges, online groups, and public workshops",
      "Participants who want emotional clarity and practical tools",
      "Introductory mental health topics that need warmth, structure, and accessibility",
    ],
    includes: [
      "Anxiety and body-based calming",
      "Shame and self-criticism",
      "Emotional overwhelm",
      "Grief, change, and inner safety",
    ],
    button: "Enquire for a webinar",
  },
  {
    id: "trainings",
    eyebrow: "For deeper learning spaces",
    title: "Trainings",
    description:
      "More structured learning spaces for groups who need practical frameworks, emotionally sensitive language, and reflective tools for supporting people without over-functioning or taking on a therapist role.",
    bestFor: [
      "Managers, HR teams, educators, peer supporters, and care-facing professionals",
      "Groups that need both sensitivity and usable language",
      "Teams wanting repeat sessions rather than a single awareness talk",
    ],
    includes: [
      "Responding to emotional distress",
      "Creating psychologically safer conversations",
      "Supporting without rescuing",
      "Boundaries in helping roles",
    ],
    button: "Enquire for trainings",
  },
];

const processSteps = [
  {
    title: "Understand the need",
    text: "We begin with the context: who the session is for, what the group may be carrying, what has prompted the enquiry, and what kind of support would feel useful.",
  },
  {
    title: "Shape the session",
    text: "The format is then adapted to the audience. It may include psychoeducation, reflection prompts, grounding practices, discussion pauses, or practical tools.",
  },
  {
    title: "Hold it with care",
    text: "The session is facilitated gently, without forced disclosure. Participants are invited to engage in ways that feel safe, respectful, and appropriate to the setting.",
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
      <div className="fixed left-[max(3rem,calc((100vw-72rem)/2))] top-1/2 z-10 h-fit max-h-[calc(100vh-9rem)] w-[calc((min(72rem,calc(100vw-6rem))-5rem)*0.36)] -translate-y-1/2 overflow-y-auto border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_28px_80px_rgba(79,95,75,0.06)] sm:p-7">
        <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
          Workshops
        </p>

        <h2
          className="mb-5 text-[clamp(1.25rem,2vw,1.65rem)] font-normal leading-[1.1] tracking-[0.035em] text-[#4f5f4b]"
          style={{ fontFamily: "var(--font-heading), serif" }}
        >
          Psychological support for groups, workplaces, and learning spaces.
        </h2>

        <div className="space-y-2 text-[0.82rem] leading-6 text-[#4f5f4b]/82">
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

        <div className="mt-7">
          <BottomButton href={workshopMail}>Enquire</BottomButton>
        </div>
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

          <div className="space-y-12 sm:space-y-14">
            <MobileSidebar />

            <header>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                Workshops & trainings
              </p>

              <h1
                className="mb-7 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.08] tracking-[0.03em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Thoughtful psychological support for workplaces, groups, and
                reflective learning spaces.
              </h1>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Solregn Therapy offers workshops, trainings, and EAP-aligned
                  psychological support for spaces that want mental health
                  conversations to feel grounded, human, and clinically
                  thoughtful.
                </p>

                <p>
                  Sessions are structured without becoming rigid, interactive
                  without forcing disclosure, and practical without reducing
                  emotional wellbeing to quick fixes.
                </p>
              </div>
            </header>

            <section className="bg-[#e7ded2]/55 px-6 py-9 sm:px-10 sm:py-10">
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                What this space is for
              </p>

              <h2
                className="mb-5 max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                For groups that need emotional language, practical tools, and a
                steady space to think.
              </h2>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/82 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Workshops can be shaped for teams, organisations, colleges,
                  community spaces, online groups, managers, HR teams, and
                  care-facing professionals.
                </p>

                <p>
                  The focus is on making psychological ideas usable in everyday
                  life: noticing stress earlier, understanding emotional
                  patterns, building steadier responses, and knowing when deeper
                  support may be needed.
                </p>
              </div>
            </section>

            <section className="space-y-6">
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
                        Can include
                      </h3>

                      <ul className="space-y-3 text-[0.9rem] leading-7 text-[#4f5f4b]/80">
                        {format.includes.map((item) => (
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

            <section id="how-we-shape-it" className="scroll-mt-32 space-y-7">
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                  How we shape the work together
                </p>

                <h2
                  className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  The session is designed around the people in the room, not
                  pulled from a generic workshop template.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
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
                  Workshops and EAP-aligned sessions can support awareness,
                  reflection, and practical skills. They are not a substitute
                  for personal therapy, emergency care, or crisis intervention.
                </p>

                <p>
                  For organisations, support can be shaped as a one-time
                  workshop, a short series, or part of a broader employee mental
                  health and wellbeing calendar.
                </p>
              </div>
            </section>

            <section
              id="enquire"
              className="scroll-mt-32 border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-8"
            >
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                Begin gently
              </p>

              <h2
                className="mb-5 max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                To plan a session, share the audience, format, group size, and
                what you hope the space can support.
              </h2>

              <p className="mb-7 text-[0.92rem] leading-7 text-[#4f5f4b]/82 sm:text-[0.96rem] sm:leading-8">
                Until the booking and form backend are ready, workshop and
                workplace-support enquiries can come through email.
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