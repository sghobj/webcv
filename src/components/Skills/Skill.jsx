import React from "react";
import {Row, Col} from "react-bootstrap";

function Skill(props) {
    return <Row className="skillDiv">
            <Col md={4}>
                {/*<p className="info">{props.name}</p>*/}
                {props.name}
            </Col>

        </Row>
}

export default Skill;
