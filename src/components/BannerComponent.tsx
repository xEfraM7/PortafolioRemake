import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const BannerComponent = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Front-End Developer", "Programmer", "Software Enginner"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 3000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate_animated animate_FadeIn" : ""}
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, i'm Efra and I'm `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I am a web developer graduated in Computer
                    Engineering and a self-taught student in most of the topics
                    I master. During my educational and professional experience,
                    I have developed strong front-end skills with React, Next,
                    and TypeScript, as well as responsive design with CSS3 and
                    various popular frameworks. I also have experience in the
                    backend using languages such as PHP with Laravel and, more
                    specialized, in Java 11 with Spring. In addition to my
                    technical skills, I have soft skills such as critical
                    thinking and empathy, which are reflected in superior work
                    performance, teamwork, and better decision making when
                    working for a company.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/efrain-cabrera-b25489216/"
                    className="text-decoration-none"
                  >
                    <button onClick={() => {}}>
                      Let's connect <ArrowRightCircle size={25} />{" "}
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
