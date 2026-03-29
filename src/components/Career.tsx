import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Iconic Infinity Group</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Designed end-to-end user-centered features including research,
              user flows, wireframes, and high-fidelity prototypes. Conducted
              usability testing and collaborated with developers and product
              managers to deliver data-driven solutions.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Engineer (UX-Focused)</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>
              Conducted stakeholder interviews and user research to identify
              workflow inefficiencies. Proposed UX improvements and collaborated
              with cross-functional teams to translate insights into features.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UX Design Lead</h4>
                <h5>STYLIN (Startup Project)</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Led end-to-end product design for Stylin — a fashion discovery
              mobile app. Designed user flows, wireframes, and interactive
              prototypes. Improved onboarding completion rate by 30% through
              simplified user flows and iterative testing.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Design Intern</h4>
                <h5>Tata Elxsi</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Designed personas, user journeys, and wireframes for automotive
              product prototypes. Collaborated in design sprints and delivered
              high-fidelity UI screens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
