import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectCards } from "./ProjectsCardsComponent";
import { projects } from "../utilitys";

export const ProjectsComponent = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate_animated animate_Bounce" : ""}
                >
                  <h2>Projects</h2>
                  <p>Here is a summary of my projects</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills"
              >
                <Nav.Item>
                  <Nav.Link>Own Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="justify-content-center">
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
