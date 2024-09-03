import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js from "../assets/icons/js-icon.svg";
import html from "../assets/icons/html-5.svg";
import css from "../assets/icons/css3.svg";
import Github from "../assets/icons/github.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Laravel from "../assets/img/laravel.jpg";
import yarn from "../assets/img/yarn.png";
import npm from "../assets/icons/npm.svg";
import java from "../assets/icons/java.svg";
import nextIcon from "../assets/icons/nextjs-icon.svg";
import react from "../assets/icons/react.svg";
import springIcon from "../assets/icons/spring-boot.svg";
import typescript from "../assets/icons/typescript.svg";

export const SkillsComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const icons = [
    {
      icon: html,
      title: "HTML",
    },
    {
      icon: typescript,
      title: "Typescript",
    },
    {
      icon: java,
      title: "Java",
    },
    {
      icon: nextIcon,
      title: "NextJS",
    },
    {
      icon: react,
      title: "React",
    },
    {
      icon: springIcon,
      title: "Spring Boot",
    },
    {
      icon: js,
      title: "JavaScript",
    },
    {
      icon: css,
      title: "Css",
    },
    {
      icon: Github,
      title: "Github",
    },
    {
      icon: Laravel,
      title: "Laravel/PHP",
    },
    {
      icon: npm,
      title: "Npm",
    },
    {
      icon: yarn,
      title: "Yarn",
    },
    {
      icon: npm,
      title: "Npm",
    },
  ];

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here is a summary of my skills</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {icons.map(({ icon, title }) => (
                  <div className="item" key={title}>
                    <img src={icon} alt="image" />
                    <h5>{title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
