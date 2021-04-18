import React from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from "react-bootstrap";
import '../../styles/AboutMe.css';




function AboutMe() {
    return (
        <div className={"aboutme-cont"}>
        <div>
            <h2 className={"about-title"}>About Me</h2>
        </div>
        <Container className={"cont-img"}>
            <Image className={"profileImg mx-auto"} src={"./images/myphoto.jpg"} fluid img />
        </Container>

        </div>
    );
}

export default AboutMe;
