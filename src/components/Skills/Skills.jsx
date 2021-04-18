import React from "react";
import skillList from "../../skillsList";
import Skill from "./Skill";
import '../../styles/Skills.css';
import skillLis from "../../hobby-list";
import {Col, Row} from "react-bootstrap";

function createSkill(skill) {
    return <Skill
        key = {skill.id}
        name = {skill.name}
    />
}

function Skills() {
    return (
        <div>
            <h2 className={"section-title"}>Skills</h2>
            <Row>
                {skillList.map(sk =>
                    <Col md={4}>
                        {createSkill(sk)}
                    </Col>
                )}
        </Row>
        </div>
    );
}

export default Skills;
