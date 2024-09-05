import { Col } from "react-bootstrap";

interface Props {
  title: string | undefined;
  description?: string | undefined;
  imgUrl: string | undefined;
  href?: string | undefined;
}

export const ProjectCards = ({ title, description, imgUrl, href }: Props) => {
  return (
    <Col sm={12} md={6} lg={4} className="d-flex justify-content-center">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="proj-img" />
        <a href={href} target="_blank" className="text-decoration-none">
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
