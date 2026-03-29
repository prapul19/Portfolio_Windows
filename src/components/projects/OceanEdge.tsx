import React, { useEffect, useRef } from "react";
import "./oceanedge.css";

const OceanEdge: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // reveal on scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      const dy = (e.clientY - rect.top) / rect.height - 0.5;
      hero.style.transform = `translate3d(${dx * 6}px,${dy * 6}px,0)`;
    };
    const onLeave = () => (hero.style.transform = "none");
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="oe-wrap">
      <a className="oe-sticky-back" href="/">← Back</a>
      <header className="oe-header">
        <img src="/images/logo.png" alt="logo" className="oe-logo" />
        <div>
          <div className="oe-meta">Project • Experience Design</div>
          <h1 className="oe-title">Ocean Edge</h1>
          <div className="oe-sub">Experience-First Booking Platform</div>
        </div>
      </header>

      <main className="oe-hero" id="oe-hero" ref={heroRef}>
        <svg className="oe-dots" width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g1"><stop offset="0" stopColor="#6ad3ff"/><stop offset="1" stopColor="#8dd3c7" stopOpacity="0"/></radialGradient>
          </defs>
          <circle cx="30" cy="20" r="28" fill="url(#g1)" />
        </svg>

        <div className="oe-hero-grid">
          <div className="oe-hero-left">
            <div className="oe-kicker">Concept • Hospitality</div>
            <p className="oe-lead reveal" data-reveal>
              Ocean Edge is a premium destination platform where users can explore and book spaces such as banquet halls, amphitheatres, and celebration venues. The objective of this project was to improve how users discover amenities and make booking decisions — focusing on reducing decision friction and creating a seamless, visually driven browsing experience.
            </p>

            <div className="oe-accent reveal" data-reveal />

            <div className="reveal" data-reveal>
              <p style={{ marginTop: 12 }}>
                Role: <strong>UX / UI Designer</strong> &nbsp; • &nbsp; Platform: <strong>Responsive Website</strong>
              </p>
              <div style={{ marginTop: 14 }} className="oe-cta">
                <a
                  className="oe-btn"
                  href="https://www.figma.com/proto/GLDmXElTbeYIi2A9WmMsLL/Ocean-Ege-Screens?node-id=1601-8011&t=Pt2SvGLWlR9zscb4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=400%3A713&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Prototype
                </a>
              </div>
            </div>
          </div>

          <aside className="oe-panel reveal" data-reveal>
            <h4>Quick snapshot</h4>
            <p>
              Role: UX / UI Designer<br />Platform: Responsive Website<br />Scope: Visual storytelling · booking flow · spatial information hierarchy
            </p>
          </aside>
        </div>
      </main>

      <section className="reveal" data-reveal>
        <h3>Overview</h3>
        <p>
          Ocean Edge is a premium destination platform where users can explore and book spaces such as banquet halls, amphitheatres, and celebration venues. The objective of this project was to improve how users discover amenities and make booking decisions. While the platform offered multiple high-quality spaces, users often struggled to choose the right one. This project focuses on reducing decision friction and creating a seamless, visually driven browsing experience.
        </p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/Overview%20OE.png" alt="Overview Ocean Edge" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Problem</h3>
        <p>Users visiting the amenities section experienced:</p>
        <ul>
          <li>Too many options with no clear structure</li>
          <li>Difficulty understanding differences between spaces</li>
          <li>Lack of engaging, real-life context</li>
          <li>Drop-offs before completing booking</li>
        </ul>
        <p>Users were not struggling with availability — they were struggling with decision-making.</p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/Problem%20OE.png" alt="Problem Ocean Edge" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Goal</h3>
        <ul>
          <li>Simplify exploration of amenities</li>
          <li>Help users make faster decisions</li>
          <li>Create a premium and immersive browsing experience</li>
          <li>Improve conversion from browsing to booking</li>
        </ul>
      </section>

      <section className="reveal" data-reveal>
        <h3>User persona</h3>
        <p>
          Insight: Users like Riya don’t want more choices — they want clarity and confidence in their decision.
        </p>
        <div className="oe-image-grid">
          <img className="oe-image" src="/images/Persona1%20OE.png" alt="Persona 1" />
          <img className="oe-image" src="/images/Persona2OE.png" alt="Persona 2" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>User flow</h3>
        <ol>
          <li>User lands on the Amenities page</li>
          <li>Scrolls through available spaces</li>
          <li>Selects an amenity</li>
          <li>Views detailed information</li>
          <li>Evaluates suitability</li>
          <li>Clicks on “Book Now”</li>
          <li>Completes booking</li>
        </ol>
        <p><strong>Key drop-off point:</strong> Users tend to drop off during the exploration phase due to lack of structure and guidance.</p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/UserfLOWoe.png" alt="User flow Ocean Edge" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Wireframing</h3>
        <p>In the initial stage, multiple layout directions were explored: grid-based layout vs vertical scrolling, information-heavy cards vs minimal cards, small cards vs large immersive cards. Final direction: large vertical cards with minimal upfront information to prioritise visual engagement and reduce cognitive load.</p>
        <div className="oe-image-wrap">
          <img className="oe-image" src="/images/WireFramingOE.png" alt="Wireframing Ocean Edge" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Solution</h3>
        <ol>
          <li>
            <strong>Visual-First Amenity Cards:</strong> Large, image-driven cards with minimal text to allow quick scanning and understanding.
          </li>
          <li>
            <strong>Scroll-Based Discovery:</strong> Smooth vertical scrolling that presents one amenity at a time for focused exploration.
          </li>
          <li>
            <strong>Progressive Disclosure:</strong> Layered information — basic details upfront and additional details revealed on interaction.
          </li>
          <li>
            <strong>Clear Action Path:</strong> Each amenity exposes View Details, Book Now, and an easy enquiry flow to remove ambiguity and help users move forward without hesitation.
          </li>
          <li>
            <strong>Clear Action Path:</strong> Each amenity exposes View Details, Book Now, and an easy enquiry flow to remove ambiguity.
          </li>
          <li>
            <strong>Emotion-Driven Experience:</strong> Focus on real-life scenarios and imagery to help users visualise their event in the space.
          </li>
        </ol>
        <div className="oe-image-wrap" style={{ marginTop: 18 }}>
          <img className="oe-image" src="/images/Clearactionpath%20OE.png" alt="Clear action path" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>UX principles applied</h3>
        <ul>
          <li>Recognition over recall</li>
          <li>Visual hierarchy</li>
          <li>Progressive disclosure</li>
          <li>Reduced cognitive load</li>
          <li>Emotion-driven design</li>
        </ul>
      </section>

      <section className="reveal" data-reveal>
        <h3>Impact</h3>
        <p>Improved browsing experience, faster decision-making, reduced drop-offs, increased likelihood of booking, and a stronger premium perception of the brand.</p>
        <div className="oe-image-wrap" style={{ marginTop: 18 }}>
          <img className="oe-image" src="/images/UX%20Principles%20Applied%20OE.png" alt="UX Principles Applied" />
        </div>
      </section>

      <section className="reveal" data-reveal>
        <h3>Conclusion</h3>
        <p>This project highlights the importance of guiding users rather than overwhelming them with choices. By shifting the focus from information-heavy layouts to visual storytelling and structured exploration, the experience becomes more intuitive, engaging, and conversion-driven.</p>
      </section>

      <footer className="oe-foot">
        <div>
          <a href="/" className="oe-back">← Back to portfolio</a>
        </div>
      </footer>
  <a className="oe-next" href="/projects/pawfeet" aria-label="Next project: PawFeet">
        <img className="oe-next-thumb" src="/images/pawfeet.avif" alt="PawFeet thumbnail" />
        <span className="oe-next-meta">
          <span className="oe-next-prefix">Next project</span>
          <span className="oe-next-label">PawFeet</span>
        </span>
        <div className="oe-next-tooltip" role="group" aria-hidden="true">
          <img src="/images/pawfeet.avif" alt="PawFeet preview" className="oe-next-tooltip-img" />
          <div className="oe-next-tooltip-text">
            <strong>PawFeet</strong>
            <div className="oe-next-tooltip-sub">Adoption-first mobile app — discover, connect, adopt</div>
          </div>
        </div>
      </a>
      <a className="oe-prev" href="/projects/zigma" aria-label="Previous project: ZigMa">
        <img className="oe-prev-thumb" src="/images/zigmaa.avif" alt="ZigMa thumbnail" />
        <span className="oe-prev-meta">
          <span className="oe-prev-prefix">Previous project</span>
          <span className="oe-prev-label">ZigMa</span>
        </span>
        <div className="oe-prev-tooltip" role="group" aria-hidden="true">
          <img src="/images/zigmaa.avif" alt="ZigMa preview" className="oe-prev-tooltip-img" />
          <div className="oe-prev-tooltip-text">
            <strong>ZigMa</strong>
            <div className="oe-prev-tooltip-sub">Career progress ecosystem</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default OceanEdge;
