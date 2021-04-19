import 'bootstrap/dist/css/bootstrap.min.css';
import Hobbies from "./components/Hobbies/Hobbies";
import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Achievements from "./components/Achievements/Achievements";
import {Container} from "react-bootstrap";

import './styles/App.css';
import Footer from "./components/Footer/Footer";
import {useEffect} from "react";


function App() {

    useEffect(() => {
        
    });

  return (
    <div>
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
