import React from "react";
import {Button} from "react-bootstrap";
import "../../styles/Footer.css"


function Footer() {
    return <div className={"foot"}>
        <p style={{color: "white"}}>Interesting Profile?</p>
        <Button className={"btn"} href="mailto:sarahghobj@hotmail.com">Contact Me</Button>
    </div>
}

export default Footer;
