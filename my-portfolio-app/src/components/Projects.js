import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/gradetracker-logo.png";
import projImg2 from "../assets/img/supplier-management-logo.png";
import projImg3 from "../assets/img/tutorplus-logo.png";
import projImg4 from "../assets/img/ecommerce.png";
import projImg5 from "../assets/img/discord-gpt-35-chatbot-logo.png";
import projImg6 from "../assets/img/discord-translation-bot-logo.png";

export const Projects = () => {
  const projects_p1 = [
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

  const projects_p2 = [
    {
      title: "Discord GPT-3.5 ChatBot",
      description:
        "(GitHub Repository) A Discord bot utilizing OpenAI's latest GPT-3.5-turbo API to generate friendly responses ",
      imgUrl: projImg5,
      projURL: "https://github.com/LynnT-2003/Discord-GPT-3.5-Bot",
    },
    {
      title: "Discord Translation Bot",
      description:
        "(GitHub Repository) A Discord bot utilizing Google Translate's API to translate messages from English to Burmese ",
      imgUrl: projImg6,
      projURL: "https://github.com/LynnT-2003/Discord-Translate-Bot",
    },
    {
      title: "E-commerce Application",
      description:
        "A Modern Full Stack E-Commerce Web Application built using React. Powered by Stripe payment system, and Sanity.io CMS",
      imgUrl: projImg4,
      projURL: "https://https://ecommerce-sanity-stripe-lynnt-2003.vercel.app/",
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
            <Tab.Content style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
              <Tab.Pane eventKey="first">
                <Row className="justify-content-center">
                  {projects_p1.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="second">
                <Row className="justify-content-center">
                  {projects_p2.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
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
