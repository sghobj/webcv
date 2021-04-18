import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import React from "react";


function ExpType(props) {
return (
    <Container className={"exp-cont"} fluid>
        <Row className={"exp-row"}>
            <Col md={4}>
                <Image className={"exp-logo mx-auto"} src={props.img}/>
            </Col>
            <Col md={8} className={"exp-name"}>
                <p style={{fontWeight: "Bold"}}>{props.date}</p>
                <h5>{props.ttl}</h5>
                <p>{props.pl}</p>
                {/*<p className={"task-phrase"}>Tasks:</p>*/}
                {/*<p className={"description"}>{props.det}</p>*/}
            </Col>
        </Row>
    </Container>
);
}

export default ExpType;
