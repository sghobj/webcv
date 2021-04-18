import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/Cards.css";

function Card(props) {
    return (
        /*<div className={"card-div"} style={{width: '18rem', height: "32rem", borderRadius: "10%"}}>
            <img className="mx-auto circle-img" style={{margin:'0.5rem', width: '17rem', height: '17rem'}} variant= "top" src ={props.img}/>
    <div className="container">
                <h5>{props.hobby}</h5>
                <p className={"text-justify details-section"}>
                    {props.details}
                </p>
            </div>
        </div>*/

    <div className="card">
        <div className="top">
            <img className="circle-img" src ={props.img} alt={"hobby-img"}/>
        </div>
        <div className="bottom">
            <h5 className="name">{props.name}</h5>
            <p className="info">{props.details}</p>
        </div>
    </div>
);
}


export default Card;
