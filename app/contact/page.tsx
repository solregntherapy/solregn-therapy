import type { ReactNode } from "react";

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
      { label: "Referral Network", href: "/referral-network" },
    ],
  },
];

const directLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
];

const contactItems = [
  "Individual therapy",
  "Couples therapy",
  "Workshops",
  "Supervision",
  "General enquiries",
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

function ContactSidebar({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <aside className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/70 p-5 shadow-[0_24px_70px_rgba(79,95,75,0.055)] sm:p-7 lg:hidden">
        <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
          Contact
        </p>

        <div className="grid gap-3 text-[0.82rem] leading-6 text-[#4f5f4b]/80 sm:grid-cols-2">
          {contactItems.map((item) => (
            <div
              key={item}
              className="border border-[#d8d0c5]/80 bg-[#f4f1ec]/65 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className="hidden h-fit max-h-[calc(100vh-9rem)] overflow-y-auto border border-[#d8d0c5]/80 bg-[#f7f3ed]/65 p-6 shadow-[0_28px_80px_rgba(79,95,75,0.06)] sm:p-7 lg:sticky lg:top-1/2 lg:block lg:-translate-y-1/2 lg:self-start">
      <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
        Contact
      </p>

      <h2
        className="mb-5 text-[clamp(1.35rem,2.2vw,1.75rem)] font-normal leading-[1.1] tracking-[0.035em] text-[#4f5f4b]"
        style={{ fontFamily: "var(--font-heading), serif" }}
      >
        Reach out for
      </h2>

      <div className="space-y-3 text-[0.82rem] leading-6 text-[#4f5f4b]/80">
        {contactItems.map((item) => (
          <p
            key={item}
            className="border-b border-[#d8d0c5]/80 pb-3 last:border-b-0 last:pb-0"
          >
            {item}
          </p>
        ))}
      </div>

      <div className="mt-6 border-t border-[#d8d0c5]/80 pt-5">
        <p className="mb-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]">
          Email
        </p>

        <a
          href="mailto:solregntherapy@gmail.com"
          className="break-words text-[0.86rem] leading-6 text-[#4f5f4b]/84 underline underline-offset-4 transition hover:text-[#c58a5c]"
        >
          solregntherapy@gmail.com
        </a>
      </div>
    </aside>
  );
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-3 block text-[0.66rem] font-medium uppercase tracking-[0.18em] text-[#c58a5c]"
    >
      {children}
    </label>
  );
}

function TextInput({
  id,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full border border-[#d8d0c5]/80 bg-[#f4f1ec]/65 px-5 py-4 text-[0.92rem] leading-7 text-[#4f5f4b]/84 outline-none transition placeholder:text-[#4f5f4b]/45 focus:border-[#c58a5c]"
    />
  );
}

function SubmitButton({ children }: { children: string }) {
  return (
    <button type="submit" className={bottomButtonClass}>
      <span className="text-[#4f5f4b] transition group-hover:text-[#fff8ef]">
        {children}
      </span>
    </button>
  );
}

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a href={href} className={bottomButtonClass}>
      <span className="text-[#4f5f4b] transition group-hover:text-[#fff8ef]">
        {children}
      </span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#4f5f4b]">
      <SiteNavigation />

      <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <ContactSidebar />

          <div className="space-y-10 sm:space-y-12">
            <section className="border-b border-[#d8d0c5]/80 pb-10 sm:pb-12">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
                Solregn Therapy
              </p>

              <h1
                className="mb-7 max-w-3xl text-[clamp(1.55rem,3vw,2.25rem)] font-semibold leading-[1.08] tracking-[0.03em] text-[#4f5f4b]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Contact Solregn Therapy
              </h1>

              <div className="space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Send a short note about what you are looking for. You do not
                  need to have everything clearly figured out before reaching
                  out.
                </p>

                <p>
                  For now, enquiries can be sent through this form or directly
                  by email. A professional email, booking calendar, and payment
                  flow will be added once the backend systems are ready.
                </p>
              </div>

              <div className="mt-10">
                <ContactSidebar mobile />
              </div>
            </section>

            <form
              action="mailto:solregntherapy@gmail.com"
              method="post"
              encType="text/plain"
              className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/45 p-6 sm:p-7"
            >
              <div className="grid gap-6">
                <div>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <TextInput
                    id="name"
                    name="Name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <TextInput
                    id="email"
                    name="Email"
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="enquiry">Enquiry type</FieldLabel>
                  <select
                    id="enquiry"
                    name="Enquiry type"
                    required
                    className="w-full border border-[#d8d0c5]/80 bg-[#f4f1ec]/65 px-5 py-4 text-[0.92rem] leading-7 text-[#4f5f4b]/84 outline-none transition focus:border-[#c58a5c]"
                  >
                    <option value="">Select one</option>
                    <option value="Individual therapy">
                      Individual therapy
                    </option>
                    <option value="Couples therapy">Couples therapy</option>
                    <option value="Workshops">Workshops</option>
                    <option value="Supervision">Supervision</option>
                    <option value="General enquiry">General enquiry</option>
                  </select>
                </div>

                <div>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <textarea
                    id="message"
                    name="Message"
                    required
                    rows={7}
                    placeholder="Share a little about what you are looking for..."
                    className="w-full resize-none border border-[#d8d0c5]/80 bg-[#f4f1ec]/65 px-5 py-4 text-[0.92rem] leading-7 text-[#4f5f4b]/84 outline-none transition placeholder:text-[#4f5f4b]/45 focus:border-[#c58a5c]"
                  />
                </div>

                <div>
                  <SubmitButton>Send enquiry</SubmitButton>
                </div>
              </div>

              <p className="mt-6 text-[0.82rem] leading-6 text-[#4f5f4b]/68">
                This form currently opens an email draft to
                solregntherapy@gmail.com.
              </p>
            </form>

            <section className="bg-[#e7ded2]/55 px-6 py-9 sm:px-10 sm:py-10">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                A gentle note
              </p>

              <h2
                className="max-w-3xl text-[clamp(1.45rem,2.6vw,1.95rem)] font-normal leading-[1.08] tracking-[0.035em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                For urgent support, please use immediate local help.
              </h2>

              <div className="mt-6 space-y-5 text-[0.92rem] leading-7 text-[#4f5f4b]/84 sm:text-[0.96rem] sm:leading-8">
                <p>
                  Solregn Therapy is not an emergency or crisis service. If you
                  need urgent support, please contact local emergency services
                  or reach out to someone near you who can help you stay safe.
                </p>

                <p>
                  The Resources page will hold grounding tools, support
                  information, and crisis-support details as the website is
                  built further.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <LinkButton href="/resources">View resources</LinkButton>

                <LinkButton href="mailto:solregntherapy@gmail.com">
                  Email Solregn Therapy
                </LinkButton>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}