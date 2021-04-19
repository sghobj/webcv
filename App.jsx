import 'bootstrap/dist/css/bootstrap.min.css';
import Hobbies from "./src/components/Hobbies/Hobbies";
import AboutMe from "./src/components/AboutMe/AboutMe";
import Education from "./src/components/Education/Education";
import Experience from "./src/components/Experience/Experience";
import Skills from "./src/components/Skills/Skills";
import Achievements from "./src/components/Achievements/Achievements";
import {Container} from "react-bootstrap";

import './src/styles/App.css';
import Footer from "./src/components/Footer/Footer";
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
