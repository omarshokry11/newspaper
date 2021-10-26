import React from "react";
import {Image} from "react-bootstrap";

import "./Style/EventItems.scss";

export default function EventItems({eventItems}) {
    return(
        <div className="container">
            <div className="row">
                {eventItems.map((event) =>  <div className={event.className} key={event.id}>
                    <div className={event.class}>
                        <div className="img">
                            <Image src={event.img} />
                        </div>
                        <div className="item-details">
                            <h3>{event.h3}</h3>
                            {event.raiber ? <span className="raiber">{event.raiber}</span> : null}
                            <span className="history">{event.span}</span>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}