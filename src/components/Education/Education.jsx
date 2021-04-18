import React from "react";
import EduType from "./EduType";
import "../../styles/Education.css";
import Card from "../Hobbies/Card";
import eduList from "../../eduList";
import {Col} from "react-bootstrap";

function createEdu(edu) {
    return (
        <EduType
            key= {edu.id}
            date={edu.date}
            img= {edu.imgURL}
            university= {edu.uni}
            degree= {edu.deg}
        />
    );
}

function Education() {
    return (
        <div >
            <div>
                <h2 className={"section-title"}>Education</h2>
            </div>
            <div>
                {eduList.map(createEdu)}

            </div>
        </div>
    );
}

export default Education;
