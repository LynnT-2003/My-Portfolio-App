import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Prev } from "react-bootstrap/esm/PageItem";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const { width } = useWindowSize();
  const isIpadLandscape = width >= 1024 && width <= 1366;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["VMS Student.", "Web Designer.", "Web Developer."];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300); // Set a fixed value of 150ms
  const period = 150;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const commonText = "Web ";

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let commonText = "Web ";

    let animatableText = fullText.startsWith(commonText)
      ? fullText.replace(commonText, "")
      : fullText;

    let updatedText = isDeleting
      ? animatableText.substring(0, text.length - 1)
      : animatableText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === animatableText) {
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
        <Row className="align-items-center text-left">
          <Col xs={12} md={isIpadLandscape ? 12 : 6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! I'm Lynn Thit. I'm a {"      "}
              <span className="wrap">
                {toRotate[loopNum % toRotate.length].startsWith(commonText) &&
                  commonText}
                {text}
              </span>
            </h1>

            <p>
              In a world of ink and hue, anime girls, to you I'm true. Your
              strength and grace, a dance divine, Each character, a love
              enshrined. A love so deep, it knows no bounds. In every frame,
              enchantment's found. In your embrace, my heart does soar. For
              anime girls, forevermore.
            </p>
            <div
              className="tagline-no-bg navbar-text"
              style={{ marginLeft: "0px" }}
            >
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let’s Connect <ArrowRightCircle size={25} />
              </a>
            </div>
          </Col>
          {!isIpadLandscape && (
            <Col xs={12} md={7} xl={5}>
              <img
                src={headerImg}
                alt="Header Image"
                style={{ maxWidth: "120%", height: "auto" }}
              />
            </Col>
          )}
        </Row>
      </Container>
      <div id="skills"></div>
    </section>
  );
};
