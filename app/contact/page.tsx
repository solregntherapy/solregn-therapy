const contactFormAction =
  "mailto:solregntherapy@gmail.com?subject=Contact%20Form%20Enquiry%20-%20Solregn%20Therapy";

export default function ContactPage() {
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
            Contact
          </p>

          <h1
            className="text-[clamp(3.1rem,10vw,6.7rem)] font-normal leading-[0.92] tracking-[0.045em] text-[#4f5f4b] sm:tracking-[0.055em]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Begin with a note.
          </h1>

          <div className="mx-auto mt-8 h-px w-20 bg-[#c58a5c]/75" />

          <p className="mx-auto mt-8 max-w-2xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
            You do not need to have everything figured out before reaching out.
            Share a little about what you are looking for, and we can take it
            from there.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-3xl">
          <form
            action={contactFormAction}
            method="post"
            encType="text/plain"
            className="border border-[#d8d0c5]/80 bg-[#f7f3ed]/70 p-6 shadow-[0_28px_90px_rgba(79,95,75,0.07)] sm:p-8 lg:p-10"
          >
            <div className="mb-8 text-center">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
                Enquiry Form
              </p>

              <h2
                className="mx-auto max-w-2xl text-[clamp(2.2rem,7vw,4rem)] font-normal leading-[0.98] tracking-[0.04em]"
                style={{ fontFamily: "var(--font-heading), serif" }}
              >
                Tell us what kind of support you are looking for.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#c58a5c]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="Name"
                    type="text"
                    required
                    className="w-full border border-[#d8d0c5] bg-[#f4f1ec] px-4 py-3 text-base text-[#4f5f4b] outline-none transition placeholder:text-[#4f5f4b]/35 focus:border-[#c58a5c]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#c58a5c]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    className="w-full border border-[#d8d0c5] bg-[#f4f1ec] px-4 py-3 text-base text-[#4f5f4b] outline-none transition placeholder:text-[#4f5f4b]/35 focus:border-[#c58a5c]"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#c58a5c]"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="Phone"
                  type="tel"
                  required
                  className="w-full border border-[#d8d0c5] bg-[#f4f1ec] px-4 py-3 text-base text-[#4f5f4b] outline-none transition placeholder:text-[#4f5f4b]/35 focus:border-[#c58a5c]"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiry"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#c58a5c]"
                >
                  What are you reaching out for?
                </label>

                <select
                  id="enquiry"
                  name="Enquiry Type"
                  required
                  className="w-full border border-[#d8d0c5] bg-[#f4f1ec] px-4 py-3 text-base text-[#4f5f4b] outline-none transition focus:border-[#c58a5c]"
                >
                  <option value="">Select one</option>
                  <option value="Individual therapy">Individual therapy</option>
                  <option value="Couples therapy">Couples therapy</option>
                  <option value="Supervision">Supervision</option>
                  <option value="Workshops or workplace programs">
                    Workshops or workplace programs
                  </option>
                  <option value="General enquiry">General enquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#c58a5c]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="Message"
                  required
                  rows={7}
                  className="w-full resize-none border border-[#d8d0c5] bg-[#f4f1ec] px-4 py-3 text-base leading-7 text-[#4f5f4b] outline-none transition placeholder:text-[#4f5f4b]/35 focus:border-[#c58a5c]"
                  placeholder="Share a little about what you are looking for."
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center border border-[#c58a5c] px-8 py-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
                >
                  Send enquiry
                </button>
              </div>

              <div className="border-t border-[#d8d0c5]/80 pt-6 text-center">
                <p className="mx-auto max-w-xl text-sm leading-7 text-[#4f5f4b]/65">
                  Please do not use this form for crisis or emergency support.
                </p>
              </div>
            </div>
          </form>

          <div className="mt-10 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#c58a5c]">
              Email
            </p>

            <a
              href="mailto:solregntherapy@gmail.com"
              className="inline-block break-all text-base leading-7 text-[#4f5f4b]/85 transition hover:text-[#c58a5c] sm:text-lg"
            >
              solregntherapy@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}