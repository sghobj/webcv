import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import '../../styles/Education.css';


function EduType(props) {
    return (
            <Container className={"edu-cont"} fluid>
                <Row className={"education-row"}>
                    <Col md={4}>
                        <Image className={"uni-logo mx-auto"} src={props.img}/>
                    </Col>
                    <Col md={8} className={"inst-name"}>
                        <p style={{fontWeight: "Bold"}}>{props.date}</p>
                        <h5>{props.university}</h5>
                        <p>{props.degree}</p>

                    </Col>
                </Row>
            </Container>
    );
}

export default EduType;
