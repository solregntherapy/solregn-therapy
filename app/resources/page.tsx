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
      { label: "Workplace Programs", href: "/workshops" },
      { label: "Webinars", href: "/workshops" },
      { label: "Trainings", href: "/workshops" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    links: [
      { label: "Enquiry Form", href: "/contact" },
      { label: "Referral Network", href: "https://forms.gle/i9upugvyFmzVMBKL9" },
    ],
  },
];

const directLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

const resourceTabs = {
  crisis:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=0#gid=0",
  emotionalRegulation:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=947334288#gid=947334288",
  anxietyOverthinking:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=1936214576#gid=1936214576",
  groundingTools:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=1209145903#gid=1209145903",
  journalingPrompts:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=565672434#gid=565672434",
  therapyBetweenSessions:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=770788571#gid=770788571",
  relationshipsBoundaries:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=545366939#gid=545366939",
  griefLoss:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=739983068#gid=739983068",
  selfWorthShame:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=813694042#gid=813694042",
  burnoutWorkStress:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=910334263#gid=910334263",
  booksPodcastsArticles:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=1629863186#gid=1629863186",
  clientsStartingTherapy:
    "https://docs.google.com/spreadsheets/d/1VnDkHCOmbcH1VGJFCKDmVYXRtxGIkLmR199dc9T7YIM/edit?gid=775448657#gid=775448657",
};

const pageLinks = [
  { label: "Start here", href: "#start-here" },
  { label: "Crisis support", href: "#crisis-support" },
  { label: "Resource library", href: "#resource-library" },
  { label: "Begin gently", href: "#begin-gently" },
];

const resourceCards = [
  {
    title: "Emotional Regulation",
    description:
      "Resources for understanding emotions, naming what feels difficult, and finding steadier ways to move through overwhelm.",
    href: resourceTabs.emotionalRegulation,
    button: "Explore resources",
  },
  {
    title: "Anxiety & Overthinking",
    description:
      "Tools and reflections for worry loops, uncertainty, rumination, spiralling thoughts, and anxious patterns.",
    href: resourceTabs.anxietyOverthinking,
    button: "Explore resources",
  },
  {
    title: "Grounding Tools",
    description:
      "Simple body-based and present-moment practices for overwhelm, shutdown, disconnection, and emotional flooding.",
    href: resourceTabs.groundingTools,
    button: "Explore resources",
  },
  {
    title: "Journaling Prompts",
    description:
      "Reflective prompts for making sense of feelings, noticing patterns, and creating language for inner experiences.",
    href: resourceTabs.journalingPrompts,
    button: "Explore resources",
  },
  {
    title: "Therapy Between Sessions",
    description:
      "Gentle practices and reminders for staying connected to the therapy process outside the session hour.",
    href: resourceTabs.therapyBetweenSessions,
    button: "Explore resources",
  },
  {
    title: "Relationships & Boundaries",
    description:
      "Resources for communication, emotional needs, relational patterns, closeness, distance, and boundary-setting.",
    href: resourceTabs.relationshipsBoundaries,
    button: "Explore resources",
  },
  {
    title: "Grief & Loss",
    description:
      "Supportive material for loss, endings, transition, longing, grief, and continuing bonds.",
    href: resourceTabs.griefLoss,
    button: "Explore resources",
  },
  {
    title: "Self-Worth & Shame",
    description:
      "Resources for inner criticism, shame, enoughness, self-trust, and compassionate self-reflection.",
    href: resourceTabs.selfWorthShame,
    button: "Explore resources",
  },
  {
    title: "Burnout & Work Stress",
    description:
      "Resources for exhaustion, capacity, workplace stress, recovery, boundaries, and nervous-system strain.",
    href: resourceTabs.burnoutWorkStress,
    button: "Explore resources",
  },
  {
    title: "Books, Podcasts & Articles",
    description:
      "Curated reading and listening recommendations for deeper reflection, psychoeducation, and ongoing learning.",
    href: resourceTabs.booksPodcastsArticles,
    button: "Explore resources",
  },
  {
    title: "For Clients Starting Therapy",
    description:
      "A soft starting point for what to expect, how to prepare, and how to begin therapy thoughtfully.",
    href: resourceTabs.clientsStartingTherapy,
    button: "Explore resources",
  },
];

const bottomButtonClass =
  "group inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-[#c58a5c] hover:border-[#c58a5c] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#c58a5c]";

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
          On this page
        </p>

        <div className="space-y-3 text-[0.82rem] leading-6 text-[#4f5f4b]/80">
          {pageLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block border border-[#d8d0c5]/70 bg-[#f4f1ec]/60 px-4 py-3 transition hover:border-[#c58a5c]/70 hover:text-[#4f5f4b]"
            >
              {link.label}
            </a>
          ))}
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
            className="border border-[#d8d0c5]/70 bg-[#f4f1ec]/60 px-4 py-3 transition hover:border-[#c58a5c]/70 hover:text-[#4f5f4b]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#4f5f4b]">
      <SiteNavigation />

      <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <DesktopSidebar />

          <div className="min-w-0 space-y-12">
            <header>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                Resources
              </p>

              <h1
                className="mb-7 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.08] tracking-[0.03em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                A quiet library of resources for support, reflection, and
                therapy between sessions.
              </h1>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  This page gathers Solregn Therapy’s resource library in one
                  place. Each section opens into a curated Google Sheet tab with
                  links, prompts, worksheets, recommendations, and support
                  options.
                </p>

                <p>
                  The page itself is intentionally simple, so you can find the
                  right area quickly and move into the resource library when you
                  are ready.
                </p>
              </div>
            </header>

            <MobileSidebar />

            <section
              id="start-here"
              className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-7"
            >
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Start here
              </p>

              <h2
                className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Choose the section closest to what you need today.
              </h2>

              <div className="mt-6 space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  You do not have to move through everything in order. Start
                  with the area that feels most relevant — immediate support,
                  emotional regulation, anxiety, grounding, relationships,
                  grief, self-worth, or therapy preparation.
                </p>

                <p>
                  These resources are designed to support reflection and
                  grounding. They are not a substitute for therapy, diagnosis,
                  medical care, or emergency support.
                </p>
              </div>
            </section>

            <section
              id="crisis-support"
              className="bg-[#e7ded2]/55 px-6 py-9 sm:px-10 sm:py-10"
            >
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Crisis support
              </p>

              <h2
                className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                When support needs to be immediate.
              </h2>

              <div className="mt-6 space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Solregn Therapy is not an emergency or crisis response
                  service. Email enquiries are not monitored for urgent support.
                </p>

                <p>
                  If there is immediate danger or you feel unable to stay safe,
                  please contact local emergency services, go to the nearest
                  hospital emergency department, or reach out to a trusted person
                  near you right away.
                </p>

                <p>
                  The crisis support library includes helplines, emergency
                  support options, and real-time resources that may be useful
                  when waiting for a therapy response is not appropriate.
                </p>
              </div>

              <div className="mt-8">
                <BottomButton href={resourceTabs.crisis} external>
                  View urgent support
                </BottomButton>
              </div>
            </section>

            <section id="resource-library" className="space-y-7">
              <div>
                <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                  Resource library
                </p>

                <h2
                  className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  Browse by theme.
                </h2>

                <p className="mt-6 max-w-3xl text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                  Each card opens a specific section of the Solregn resource
                  library in a new tab.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {resourceCards.map((resource) => (
                  <article
                    key={resource.title}
                    className="flex h-full flex-col border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-7"
                  >
                    <h3
                      className="mb-4 text-[1.12rem] font-normal leading-snug tracking-[0.035em]"
                      style={{ fontFamily: "var(--font-heading), serif" }}
                    >
                      {resource.title}
                    </h3>

                    <p className="mb-7 grow text-[0.9rem] leading-7 text-[#4f5f4b]/80">
                      {resource.description}
                    </p>

                    <div>
                      <BottomButton href={resource.href} external>
                        {resource.button}
                      </BottomButton>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="begin-gently"
              className="border-t border-[#d8d0c5]/80 pt-9"
            >
              <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Begin gently
              </p>

              <h2
                className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Looking for support beyond self-guided resources?
              </h2>

              <div className="mt-6 space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  If you are considering therapy, you can write in with a brief
                  note about what you are looking for. The next step can be slow,
                  thoughtful, and clear.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BottomButton href="mailto:solregntherapy@gmail.com">
                  Write to Solregn
                </BottomButton>

                <BottomButton href="/services">View services</BottomButton>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}