import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const skillsRef = useRef(null);
  return (
    <div
      className="App"
      // style={{
      //   backgroundImage:
      //     "radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center center",
      //   height: "100vh", // Adjust the height as needed
      //   width: "100vw", // Adjust the width as needed
      // }}
    >
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
