import React from "react";

export default function TitleItems(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 title">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    )
}