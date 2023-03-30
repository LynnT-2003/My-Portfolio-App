import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Prev } from "react-bootstrap/esm/PageItem";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["like", "love", "worship"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
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
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Lynn Thit. I`} <br />
              <span className="wrap">
                {text} {` anime girls`}
              </span>
            </h1>
            <p>
              In a world of ink and hue, Anime girls, to you I'm true, With eyes
              that sparkle, vibrant, wide, In their stories, I do confide. Their
              strength and grace, a dance divine, Each character, a love
              enshrined, Through trials and laughs, they persevere, Embodying
              hope, in a world unclear. A love so deep, it knows no bounds, In
              every frame, enchantment's found, In their embrace, my heart does
              soar, For anime girls, forevermore.
            </p>
            <div className="tagline-no-bg">
              Let’s Connect <ArrowRightCircle size={25} />
            </div>
          </Col>
          <Col xs={12} md={7} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
