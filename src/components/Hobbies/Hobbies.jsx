
import React from "react";
import {Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import hobbiesList from "../../hobby-list";
import "../../styles/Cards.css";


function createHobby(hobby) {
    return (
        <Card
            key= {hobby.id}
            img= {hobby.imageURL}
            name= {hobby.hobby}
            details= {hobby.det}
        />
    );
}

function Hobbies() {
    return (
        <div>
        <h2 className={"section-title"}>My Hobbies</h2>
            <Row>
                    {hobbiesList.map(hobby =>
                        <Col md={4}>
                            {createHobby(hobby)}
                        </Col>
                            )}
            </Row>
        </div>
    );
}


export default Hobbies;
