import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projURL }) => {
  return (
    <Col size={12} sm={6} md="auto">
      <div
        className="proj-imgbx"
        onClick={() => window.open(projURL, "_blank")}
        style={{ width: "30rem", height: "30rem" }}
      >
        <img src={imgUrl} style={{ width: "100%", height: "100%" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
