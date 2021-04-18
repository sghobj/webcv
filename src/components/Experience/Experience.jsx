import React from "react";
import ExpType from "./ExpType";
import '../../styles/Experience.css';
import ExpList from "../../expList";

function createExp(list) {
    return <ExpType
        key = {list.id}
        img = {list.imageURL}
        date = {list.date}
        ttl = {list.title}
        pl = {list.place}
        det = {list.details}
    />
}

function Experience() {
    return (
        <div>
        <div>
            <h2 className={"section-title"}>Experience</h2>
        </div>
        <div>
            {ExpList.map(createExp)}
        </div>
        </div>
    );
}

export default Experience;
