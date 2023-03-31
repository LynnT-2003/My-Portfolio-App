import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const { width } = useWindowSize();
  const isIpadLandscape = width >= 1024 && width <= 1366;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [" VMS Student.", " Web Designer.", " Web Developer."];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300); // Set a fixed value of 150ms
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  useEffect(() => {
    // This code applies the effect on the 'p' element on startup
    const letters = "ABIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    let iteration = 0;
    const target = document.querySelector(".tagline");
    const originalText = target.innerText;

    interval = setInterval(() => {
      target.innerText = target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          return letters[Math.floor(Math.random() * 20)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 20);

    // Return a cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  const commonText = " Web ";

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let animatableText = fullText.startsWith(commonText)
      ? fullText.replace(commonText, "")
      : fullText;

    let updatedText = isDeleting
      ? animatableText.substring(0, text.length - 1)
      : animatableText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(150);
    }

    if (!isDeleting && updatedText === animatableText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center text-left">
          <Col xs={12} md={isIpadLandscape ? 12 : 6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! I'm Lynn Thit - <br />
              <div style={{ paddingTop: "1rem" }}>
                <span className="wrap">
                  {"a "}
                  {toRotate[loopNum % toRotate.length].startsWith(commonText) &&
                    commonText}{" "}
                  {text}
                </span>
              </div>
            </h1>

            <p>
              As a dedicated third-year Computer Science student studying at
              Assumption University of Thailand, my focus is on perfecting my
              web development skills.
              <br />
              <br />
              Eager to expand my knowledge, my goal is to learn and grow in this
              ever-evolving field, ultimately enhancing my own abilities and
              expertise.
              <br />
              <br />
              My hobbies are Anime, BlackPink, and Oero.
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
