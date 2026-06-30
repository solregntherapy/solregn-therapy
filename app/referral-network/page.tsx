const referralNetworkFormLink = "https://forms.gle/i9upugvyFmzVMBKL9";

export default function ReferralNetworkPage() {
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
            Referral Network
          </p>

          <h1
            className="text-[clamp(3rem,10vw,6.8rem)] font-normal leading-[0.92] tracking-[0.045em] text-[#4f5f4b] sm:tracking-[0.055em]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Join the Solregn referral network.
          </h1>

          <div className="mx-auto mt-8 h-px w-20 bg-[#c58a5c]/75" />

          <p className="mx-auto mt-8 max-w-3xl text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
            This space is for therapists, psychiatrists, physicians,
            nutritionists, coaches, educators, and allied professionals who may
            wish to be part of Solregn Therapy’s referral network.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-4xl border-y border-[#d8d0c5]/80 py-14 text-center sm:py-16">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
            For Practitioners
          </p>

          <h2
            className="mx-auto max-w-3xl text-[clamp(2.4rem,8vw,4.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            Share your details for future referral conversations.
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-[1.02rem] leading-8 text-[#4f5f4b]/80 sm:text-lg sm:leading-9">
            <p>
              The referral network is intended to help Solregn Therapy connect
              clients, supervisees, organisations, and collaborators with
              trusted professionals when support outside Solregn’s scope may be
              needed.
            </p>

            <p>
              You are welcome to share your professional background, areas of
              work, location, referral preferences, and contact details through
              the form below.
            </p>
          </div>

          <div className="mt-10">
            <a
              href={referralNetworkFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#c58a5c] px-8 py-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
            >
              Open referral network form
            </a>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#4f5f4b]/65">
            Submitting the form does not automatically confirm inclusion in the
            referral network. It begins a professional review and referral-fit
            conversation.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-6xl bg-[#e7ded2]/55 px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c58a5c]">
            Contact
          </p>

          <h2
            className="mx-auto max-w-4xl text-[clamp(2.25rem,8vw,4.8rem)] font-normal leading-[0.98] tracking-[0.04em]"
            style={{ fontFamily: "var(--font-heading), serif" }}
          >
            For questions about the referral network, you can write in directly.
          </h2>

          <div className="mt-9">
            <a
              href="mailto:solregntherapy@gmail.com?subject=Referral%20Network%20Question%20-%20Solregn%20Therapy"
              className="inline-flex items-center justify-center border border-[#c58a5c] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-[#4f5f4b] transition hover:bg-[#c58a5c] hover:text-[#f4f1ec]"
            >
              Email Solregn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}