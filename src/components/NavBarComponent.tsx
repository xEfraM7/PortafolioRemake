import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import { useNavbarScroll } from "../hooks/useNavbarScroll"; // Import the hook

export const NavBarComponent = () => {
  const { activeLink, scrolled, onUpdateActiveLink } = useNavbarScroll(); // Using the hook

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/efrain-cabrera-b25489216/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/efrain_lol/">
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="https://twitter.com/xEfraCD">
                <img src={navIcon4} alt="Twitter" />
              </a>
              <a href="https://github.com/xEfraM7">
                <img src={navIcon5} alt="GitHub" />
              </a>
            </div>
            <a href="https://www.linkedin.com/in/efrain-cabrera-b25489216/">
              <button className="vvd" onClick={() => {}}>
                <span>Let's Connect</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
