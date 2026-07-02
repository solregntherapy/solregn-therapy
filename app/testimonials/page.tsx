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
      { label: "Referral Network", href: "https://forms.gle/i9upugvyFmzVMBKL9" },
    ],
  },
];

const directLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

const publicTestimonialForm = "https://forms.gle/GwrU3iytjhh1vXSF7";
const privateFeedbackForm = "https://forms.gle/owQk7UngaQDkG76A6";

const bottomButtonClass =
  "group inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-[#c58a5c] hover:border-[#c58a5c] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#c58a5c]";

const pageLinks = [
  { label: "Share publicly", href: "#share-publicly" },
  { label: "Share privately", href: "#share-privately" },
  { label: "Words shared", href: "#words-shared" },
];

const sharedWords: {
  country: string;
  supportType: string;
  displayName: string;
  quote: string;
}[] = [];

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
      <div className="fixed left-[max(3rem,calc((100vw-72rem)/2))] top-[calc(50%+1cm)] z-10 h-fit max-h-[calc(100vh-9rem)] w-[calc((min(72rem,calc(100vw-6rem))-5rem)*0.36)] -translate-y-1/2 overflow-y-auto border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_28px_80px_rgba(79,95,75,0.06)] sm:p-7">
        <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
          Shared words
        </p>

        <h2
          className="mb-5 text-[clamp(1.25rem,2vw,1.65rem)] font-normal leading-[1.1] tracking-[0.035em] text-[#4f5f4b]"
          style={{ fontFamily: "var(--font-heading), serif" }}
        >
          Reflections from people who have experienced Solregn Therapy spaces.
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
          <BottomButton href={publicTestimonialForm} external>
            Share words
          </BottomButton>
        </div>
      </div>
    </aside>
  );
}

function MobileSidebar() {
  return (
    <aside className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/70 p-5 shadow-[0_24px_70px_rgba(79,95,75,0.055)] sm:p-7 lg:hidden">
      <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
        Shared words
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

function FormChoiceCard({
  id,
  eyebrow,
  title,
  text,
  href,
  button,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  button: string;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-32 border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-7"
    >
      <p className="mb-4 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
        {eyebrow}
      </p>

      <h2
        className="mb-5 text-[clamp(1.35rem,2.4vw,1.75rem)] font-normal leading-[1.08] tracking-[0.035em] text-[#4f5f4b]"
        style={{ fontFamily: "var(--font-heading), serif" }}
      >
        {title}
      </h2>

      <p className="mb-7 text-[0.9rem] leading-7 text-[#4f5f4b]/78">
        {text}
      </p>

      <BottomButton href={href} external>
        {button}
      </BottomButton>
    </article>
  );
}

function SharedWordsCard({
  country,
  supportType,
  displayName,
  quote,
}: {
  country: string;
  supportType: string;
  displayName: string;
  quote: string;
}) {
  return (
    <details className="group border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 transition open:bg-[#f7f3ed]/70 sm:p-7">
      <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[#c58a5c]">
          <span>{country}</span>
          <span aria-hidden="true">·</span>
          <span>{supportType}</span>
        </div>

        <p
          className="line-clamp-4 text-[1.05rem] font-normal leading-7 tracking-[0.02em] text-[#4f5f4b] group-open:line-clamp-none"
          style={{ fontFamily: "var(--font-heading), serif" }}
        >
          “{quote}”
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-[0.78rem] leading-6 text-[#4f5f4b]/70">
            {displayName}
          </p>

          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[#4f5f4b]/65 transition group-open:text-[#c58a5c]">
            <span className="group-open:hidden">Read</span>
            <span className="hidden group-open:inline">Close</span>
          </span>
        </div>
      </summary>
    </details>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#4f5f4b]">
      <SiteNavigation />

      <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <DesktopSidebar />

          <div className="space-y-12 sm:space-y-14">
            <MobileSidebar />

            <header className="border-b border-[#d8d0c5]/80 pb-10 sm:pb-12">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                Shared words
              </p>

              <h1
                className="mb-7 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.08] tracking-[0.03em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Shared words, held with care.
              </h1>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  A quiet space for reflections shared by clients, workshop
                  participants, and people who have experienced Solregn Therapy
                  spaces.
                </p>

                <p>
                  Public words are reviewed before being added here, so privacy
                  and emotional safety can be protected.
                </p>
              </div>
            </header>

            <section className="grid gap-5 sm:grid-cols-2">
              <FormChoiceCard
                id="share-publicly"
                eyebrow="Public"
                title="Share publicly"
                text="For words you are comfortable having reviewed and possibly published on the website. You may choose to share anonymously."
                href={publicTestimonialForm}
                button="Open public form"
              />

              <FormChoiceCard
                id="share-privately"
                eyebrow="Private"
                title="Share privately"
                text="For reflections you want to share only with Solregn Therapy. These words will not be published on the website."
                href={privateFeedbackForm}
                button="Open private form"
              />
            </section>

            <section id="words-shared" className="scroll-mt-32 space-y-7">
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                  Words shared with Solregn
                </p>

                <h2
                  className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                  style={{ fontFamily: "var(--font-heading), serif" }}
                >
                  Shared words will appear here after review.
                </h2>
              </div>

              {sharedWords.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2">
                  {sharedWords.map((item) => (
                    <SharedWordsCard
                      key={`${item.country}-${item.quote}`}
                      country={item.country}
                      supportType={item.supportType}
                      displayName={item.displayName}
                      quote={item.quote}
                    />
                  ))}
                </div>
              ) : (
                <div className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-7">
                  <p
                    className="mb-4 text-[1.18rem] font-normal leading-snug tracking-[0.035em] text-[#4f5f4b]"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    No words have been published yet.
                  </p>

                  <p className="text-[0.9rem] leading-7 text-[#4f5f4b]/78">
                    Once public reflections are submitted, reviewed, and
                    approved, they can be added here as small expandable cards.
                  </p>
                </div>
              )}
            </section>

            <section className="bg-[#e7ded2]/55 px-6 py-9 sm:px-10 sm:py-10">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Privacy note
              </p>

              <h2
                className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Public words are reviewed before they are published.
              </h2>

              <div className="mt-6 space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Please avoid including names, workplaces, diagnoses, crisis
                  details, or identifying information about yourself or others
                  in public submissions.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}