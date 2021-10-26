import React from "react";
import {Image} from "react-bootstrap";
import CoverHomePage from "../Component/CoverHomePage";
import Banner from "../Component/Block/Banner";
import LatestNews from "../Component/LatestNews";
import Events from "../Component/Events";
import Editorial from "../Component/Editorial";
import TheWorld from "../Component/TheWorld";

import "./Style/HomePage.scss";

export default function HomePage() {

    const imgItems = [
        {id: 1, className: "item-img", img: "/img/img-1.jpg", details: [
                {id: 1, h1: "Vivamus id lorem blandit"}
            ]},
        {id: 2, className: "item-img", img: "/img/img-2.jpg", details: [
                {id: 1, h1: "Nam aliquet, lorem vita"}
            ]},
        {id: 3, className: "item-img", img: "/img/img-3.jpg", details: [
                {id: 1, h1: "Nulla nec enimus amis"}
            ]},
        {id: 4, className: "item-img", img: "/img/img-4.jpg", details: [
                {id: 1, h1: "Aliquet, lorem pantum."}
            ]},
    ]

    return(
        <div className="main-home-page-container">
            <CoverHomePage />
            <div className="img-item">
                {imgItems.map((item) => <div className={item.className} key={item.id}>
                    <Image src={item.img} />
                    {item.details.map((det) => <div className="details" key={det.id}>
                        <h1>{det.h1}</h1>
                        <span className="editor">Editorial</span>
                        <span>May 10, 2017</span>
                    </div>)}
                </div>)}
            </div>
            <Banner />
            <LatestNews />
            <Events />
            <Editorial />
            <TheWorld />
        </div>
    )
}