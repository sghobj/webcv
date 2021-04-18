import 'bootstrap/dist/css/bootstrap.min.css';
import Hobbies from "./Hobbies/Hobbies";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Achievements from "./Achievements/Achievements";
import {Container} from "react-bootstrap";

import '../styles/App.css';
import Footer from "./Footer/Footer";
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
