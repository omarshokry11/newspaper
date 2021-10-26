import React from "react";
import TitleItems from "./TitleItems";
import ItemNews from "./ItemNews";
import EventItems from "./Block/EventItems";

export default function TheWorld() {

    const items = [
        {id: 1, className: "col-lg-4 col-12", img: "/img/world-1.jpg", h2: "Maecenas tincidunt posuere quam, eu consectetur justo", editor: "raibercristian", span: "May 10, 2017", class: "raiber"},
        {id: 2, className: "col-lg-4 col-12", img: "/img/world-2.jpg", h2: "Phasellus lacinia tortor am ust euismod, rutrum tellus…", editor: "raibercristian", span: "May 10, 2017", class: "raiber"},
        {id: 3, className: "col-lg-4 col-12", img: "/img/world-3.jpg", h2: "Maecenas tincidunt posuere quam, eu consectetur justo", editor: "raibercristian", span: "May 10, 2017", class: "raiber"},
    ]

    const eventItems = [
        {id: 1, className: "col-md-6 col-12", class: "items", img: "/img/world-4.jpg", h3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", span: "May 10, 2017", raiber: "raibercristian"},
        {id: 2, className: "col-md-6 col-12", class: "items", img: "/img/world-5.jpg", h3: "Nunc dictum condimentum cursus votum es atium", span: "May 10, 2017", raiber: "raibercristian"},
        {id: 3, className: "col-md-6 col-12", class: "items", img: "/img/world-6.jpg", h3: "Maecenas tincidunt posuere quam, eu consectetur justo", span: "May 10, 2017", raiber: "raibercristian"},
        {id: 4, className: "col-md-6 col-12", class: "items", img: "/img/world-7.jpg", h3: "In odio sapien, accumsan ut dolor vel istum…", span: "May 10, 2017", raiber: "raibercristian"},
    ]

    return(
        <div className="main-the-world-container">
            <TitleItems title="The World" />
            <ItemNews items={items} />
            <EventItems eventItems={eventItems} />
        </div>
    )
}