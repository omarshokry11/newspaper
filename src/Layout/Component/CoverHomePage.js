import React from "react";
import {Image} from "react-bootstrap";

export default function CoverHomePage() {

    const items = [
        {id: 1, className: "item item-1", image: [{id: 1,class: "img-1 img", img: "/img/00_header_slider_01-550x360.jpg", details: [{id: 1, h1: "Sed purus velit, finibus non semper..."}]}]},
        {id: 2, className: "item item-2", image: [{id: 1, class: "img-2 img", img: "/img/00_header_slider_02-550x360.jpg", details: [{id: 1, h1: "Nunc hendrerit egestas amus ad arcu..."}]},
                {id: 2, class: "img-3 img", img: "/img/00_header_slider_03-550x360.jpg", details: [{id: 2, h1: "itum as binus sitam conestum ey..."}]}]},
    ]

    return(
        <div className="main-cover-home-page-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 items">
                        {items.map((item) => <div className={item.className} key={item.id}>
                            {item.image.map((img) => <div className={img.class} key={img.id}>
                                <div className="background-color"> </div>
                                <Image src={img.img} />
                                {img.details.map((det) => <div className="details" key={det.id}>
                                    <h1>{det.h1}</h1>
                                    <span className="editor">Editorial</span>
                                    <span className="history">May 10, 2017</span>
                                </div>)}
                            </div>)}
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}