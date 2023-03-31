import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/gradetracker-logo.png";
import projImg2 from "../assets/img/supplier-management-logo.png";
import projImg3 from "../assets/img/tutorplus-logo.png";

export const Projects = () => {
  const projects = [
    {
      title: "Grade Tracker",
      description: "My First Ever Web Dev Project",
      imgUrl: projImg1,
      projURL: "https://lynnt-2003.github.io/grade-tracker/",
    },
    {
      title: "Suppliers Management",
      description: "My First Ever Full Stack Project using MongoDB",
      imgUrl: projImg2,
      projURL: "https://stock-final-6411271.vercel.app/",
    },
    {
      title: "TutorPlus",
      description: "My First Full-Stack Team Project ",
      imgUrl: projImg3,
      projURL: "https://tutor-plus.vercel.app/",
    },
  ];

  return (
    <section className="project">
      <Row id="projects">
        <Col>
          <h2>Projects</h2>
          <p>
            In a world of ink and hue, anime girls, to you I'm true. Your
            strength and grace, a dance divine, Each character, a love
            enshrined. A love so deep, it knows no bounds. In every frame,
            enchantment's found. In your embrace, my heart does soar. For anime
            girls, forevermore.
          </p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav
              variant="pills"
              className="nav-pills mb-5 justify-content-center align-items-center"
              id="pills-tab"
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Phase One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Phase Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Phase Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row className="justify-content-center">
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="second">
                <p>Coming soon...</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>Coming soon...</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </section>
  );
};
