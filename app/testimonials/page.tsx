type Testimonial = {
  quote: string;
  context: string;
};

const testimonials: Testimonial[] = [
  // Later, add testimonials like this:
  // {
  //   quote:
  //     "This space helped me slow down and understand what I was feeling instead of rushing to fix it.",
  //   context: "Individual therapy client",
  // },
];

export default function TestimonialsPage() {
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

      <section className="px-6 pb-16 pt-32 text-center sm:px-8 sm:pb-20 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#c58a5c]">
            Testimonials
          </p>

          <h1
            className="text-[clamp(3rem,10vw,6.8rem)] font-normal leading-[0.92] tracking-[0.045em] text-[#4f5f4b] sm:tracking-[0.055em]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Reflections from the work.
          </h1>

          <div className="mx-auto mt-8 h-px w-20 bg-[#c58a5c]/75" />

          <p className="mx-auto mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
            This page will hold reflections shared with consent from therapy,
            supervision, workshops, and learning spaces. Any words shared here
            will be held with care, privacy, and respect.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-5xl">
          {testimonials.length > 0 ? (
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.context}-${index}`}
                  className="border-y border-[#d8d0c5]/80 py-10 sm:py-12"
                >
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <blockquote
                    className="text-[clamp(2rem,5vw,3.8rem)] font-normal leading-[1.05] tracking-[0.035em] text-[#4f5f4b]"
                    style={{ fontFamily: "var(--font-heading), serif" }}
                  >
                    “{testimonial.quote}”
                  </blockquote>

                  <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-[#4f5f4b]/60">
                    {testimonial.context}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl border-y border-[#d8d0c5]/80 py-14 text-center">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Coming Soon
              </p>

              <h2
                className="mx-auto max-w-2xl text-[clamp(2.5rem,8vw,4.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Reflections will be added here with care.
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
                Solregn Therapy is currently building this space thoughtfully.
                Testimonials and reflections will only be shared where they are
                appropriate, consent-based, and non-identifying.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-6xl bg-[#e7ded2]/55 px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
            Begin Here
          </p>

          <h2
            className="mx-auto max-w-4xl text-[clamp(2.25rem,8vw,4.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            The first step can simply be reaching out.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
            You are welcome to contact Solregn Therapy for individual therapy,
            couples therapy, supervision, workshops, or general enquiries.
          </p>

          <div className="mt-9">
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
            >
              Contact Solregn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}