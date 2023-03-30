import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Row>
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
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="section">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quam, quod neque provident velit, rem explicabo
                  excepturi id illo molestiae blanditiis, eligendi dicta
                  officiis asperiores delectus quasi inventore debitis quo.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quam, quod neque provident velit, rem explicabo
                  excepturi id illo molestiae blanditiis, eligendi dicta
                  officiis asperiores delectus quasi inventore debitis quo.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </section>
  );
};
