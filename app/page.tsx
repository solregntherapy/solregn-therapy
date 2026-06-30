export default function Home() {
  return (
    <main className="home-page">
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

      <section className="hero-section">
        <div className="hero-bg" />
        <div className="shadow-left" />
        <div className="shadow-center" />
        <div className="shadow-right" />

        <div className="hero-copy">
          <div className="hero-copy-inner">
            <h1>
              Solregn
              <br />
              Therapy
            </h1>

            <div className="hero-line" />

            <p>
              A steady space to think,
              <br />
              feel, and make sense of things.
            </p>

            <div className="tiny-leaf" aria-hidden="true">
              <svg
                width="34"
                height="34"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 31V6"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M18 19C14 17 11 14 9.5 10"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M18 23C22.3 21 25.8 17.5 27.5 13"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="hero-vase" aria-hidden="true">
          <div className="vase-shadow" />
          <img
            src="/images/hero-vase.png"
            alt=""
            className="vase-image"
          />
        </div>

        <div className="stone-shelf" aria-hidden="true" />
      </section>
    </main>
  );
}