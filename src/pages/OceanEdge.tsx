import React, { useEffect } from "react";
import "./styles/OceanEdge.css";

const OceanEdge: React.FC = () => {
  useEffect(() => {
    // simple reveal on mount for SSR-less page
    const els = document.querySelectorAll("[data-reveal]");
    els.forEach((el) => el.classList.add("in"));
  }, []);

  return (
    <div className="oe-wrap">
      <header className="oe-header">
        <a href="/" className="oe-logo-link">
          <img src="/images/logo.png" alt="logo" className="oe-logo" />
        </a>
        <div className="oe-meta">
          <div className="oe-project">Project • Experience Design</div>
          <h1 className="oe-title">Ocean Edge</h1>
          <div className="oe-sub">Designing a Calm &amp; Immersive Coastal Stay Booking Experience</div>
        </div>
      </header>

      <main className="oe-hero" id="oe-hero">
        <svg className="oe-dots" width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g1"><stop offset="0" stopColor="#6ad3ff"/><stop offset="1" stopColor="#8dd3c7" stopOpacity="0"/></radialGradient>
          </defs>
          <circle cx="30" cy="20" r="28" fill="url(#g1)" />
        </svg>

        <div className="oe-hero-grid">
          <div className="oe-hero-left">
            <div className="oe-kicker">Concept • Hospitality</div>
            <p className="oe-lead" data-reveal>
              Ocean Edge is a conceptual web experience designed for a premium coastal stay destination. The project explores how digital interfaces can evoke emotional connection, spatial awareness, and anticipation before a physical travel experience.
            </p>

            <div className="oe-accent-line" data-reveal />

            <div className="oe-cta" data-reveal>
              <p style={{ marginTop: 12 }}>
                Role: <strong>UX / UI Designer</strong> &nbsp; • &nbsp; Platform: <strong>Responsive Website</strong>
              </p>
              <div style={{ marginTop: 14 }}>
                <a
                  className="oe-btn"
                  href="https://www.figma.com/proto/GLDmXElTbeYIi2A9WmMsLL/Ocean-Ege-Screens?node-id=1601-8011&t=Pt2SvGLWlR9zscb4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=400%3A713&show-proto-sidebar=1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Open Prototype
                </a>
              </div>
            </div>
          </div>

          <aside className="oe-panel" data-reveal>
            <h4>Quick snapshot</h4>
            <p>
              Role: UX / UI Designer<br />Platform: Responsive Website<br />Scope: Visual storytelling · booking flow · spatial information hierarchy
            </p>
          </aside>
        </div>
      </main>

      <section className="oe-section" data-reveal>
        <h3>Context</h3>
        <p>
          Travel booking platforms often prioritise dense information and promotional content, which can dilute the emotional value associated with destination-based experiences. Ocean Edge explores how a digital interface can function as a pre-arrival emotional touchpoint that builds desire and confidence.
        </p>
      </section>

      <section className="oe-section" data-reveal>
        <h3>Problem</h3>
        <ul>
          <li>Overwhelming booking pages filled with excessive offers and distractions</li>
          <li>Difficulty visualising the spatial quality and atmosphere of the destination</li>
          <li>Lack of emotional storytelling that reflects the uniqueness of the property</li>
          <li>Fragmented booking journeys requiring multiple decision screens</li>
        </ul>
      </section>

      <section className="oe-section" data-reveal>
        <h3>Design direction</h3>
        <p>
          <strong>Atmospheric Visual Language:</strong> Soft gradients, ocean-inspired color palettes, and spacious layouts were used to create a sense of openness and tranquillity.
        </p>
        <p>
          <strong>Narrative Scroll Experience:</strong> The website is structured as a continuous storytelling journey — from destination introduction to booking action.
        </p>
      </section>

      <section className="oe-section" data-reveal>
        <h3>Outcome &amp; learnings</h3>
        <p>
          The conceptual solution demonstrates how hospitality platforms can move beyond transactional booking interfaces toward experience-led digital journeys. Emotional pacing, minimal design, and spatial storytelling increased perceived luxury and decision confidence.
        </p>
      </section>

      <footer className="oe-footer">
        <a href="/" className="oe-back">← Back to portfolio</a>
      </footer>
    </div>
  );
};

export default OceanEdge;
