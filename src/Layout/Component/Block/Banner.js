import React from "react";
import {Image} from "react-bootstrap";

import "./Style/Banner.scss";

export default function Banner() {
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col-12 banner">
                    <Image src="/img/banner.png" />
                </div>
            </div>
        </div>
    )
}