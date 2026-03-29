import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    id: "01",
    title: "ZigMa",
    category: "Designing a Career Progress Ecosystem for Job Seekers and Recruiters",
    tools:
      "Platform: Mobile | Role: Product / UX Designer | Scope: End-to-end experience design | Focus: Career discovery · Job application · Networking · Profile systems",
    overview:
      "An integrated mobile platform enabling users to learn skills, build professional identity, discover relevant opportunities, and connect with recruiters — all within a unified experience.",
    image: "/images/zigmaa.avif",
  link: "/projects/zigma",
    figma: "https://www.figma.com/proto/89uLsutxXe20WhbSp8wqSZ/Zigma?node-id=2-44&t=DBEX8Ez2YsEvF4UD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A44",
  },
  {
    id: "02",
    title: "Ocean Edge",
    category: "Experience-First Booking Platform",
    tools:
      "Role: UX / UI Designer | Platform: Responsive Website | Scope: Visual storytelling · booking flow · amenity discovery",
    image: "/images/oceanedge%20cover.png",
    overview:
      "Ocean Edge is a premium destination platform focused on helping users discover and book high-quality amenities through visually-driven, decision-friendly interfaces.",
    link: "/projects/oceanedge",
    figma: "https://www.figma.com/proto/GLDmXElTbeYIi2A9WmMsLL/Ocean-Ege-Screens?node-id=1601-8011&t=Pt2SvGLWlR9zscb4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=400%3A713&show-proto-sidebar=1",
  },
  {
    id: "03",
    title: "PawFeet",
    category: "Mobile App — Pet Adoption",
    tools: "Figma | UX/UI Design | Prototyping | User Research",
    image: "/images/pawfeet.avif",
    overview:
      "PawFeet is a thoughtfully designed mobile application that connects loving families with pets in need of a home. The platform simplifies the adoption journey by making it easy to discover, connect, and adopt dogs and other pets through a seamless digital experience.",
  link: "/projects/pawfeet",
  },
  {
    id: "04",
    title: "Vellora",
    category: "Mobile App — Smart Urban Bicycle Booking Platform",
    tools: "Figma | UX/UI Design | Prototyping | User Research | Usability Testing",
    image: "/images/velora.png",
    overview:
      "Vellora is a mobile application designed to simplify urban commuting by providing an easy and efficient bicycle booking experience. The platform enables users to locate nearby bicycles, unlock them seamlessly, and ride across the city with minimal effort. The goal was to create a user-friendly, accessible, and eco-conscious solution",
  link: "/projects/vellora",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className={`work-box ${project.id ? `work-${project.id}` : ""}`} key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>
                  <div>
                    <h4>{project.title}</h4>
                      <p>{project.category}</p>
                      {project.overview && (
                        <p className="work-overview">{project.overview}</p>
                      )}
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                {/* view-more button moved to image overlay */}
              </div>
              <div className={`work-image-wrap`}>
                <WorkImage image={project.image} alt={project.title} link={project.link} />
                {project.link && (
                  <a
                    className="view-more"
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : "_self"}
                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    View more
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
