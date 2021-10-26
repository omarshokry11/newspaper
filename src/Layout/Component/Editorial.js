import React from "react";
import TitleItems from "./TitleItems";
import ItemNews from "./ItemNews";

export default function Editorial() {

    const items = [
        {id: 1, className: "col-lg-3 col-md-6 col-12", img: "/img/edit-1.jpg", h2: "Maecenas tincidunt posuere quam, eu consectetur justo", editor: "raibercristian", span: "May 10, 2017", class: "raiber"},
        {id: 2, className: "col-lg-3 col-md-6 col-12", img: "/img/edit-2.jpg", h2: "Phasellus lacinia tortor am ust euismod, rutrum tellus…", editor: "raibercristian", span: "May 10, 2017", class: "raiber"},
        {id: 3, className: "col-lg-3 col-md-6 col-12", img: "/img/edit-3.jpg", h2: "Maecenas tincidunt posuere quam, eu consectetur justo", editor: "raibercristian", span: "May 10, 2017", class: "raiber"},
        {id: 4, className: "col-lg-3 col-md-6 col-12", img: "/img/edit-4.jpg", h2: "Maecenas tincidunt posuere quam, eu consectetur justo", editor: "raibercristian", span: "May 10, 2017", class: "raiber"},
    ]

    return(
        <div className="main-editorial-container">
            <TitleItems title="EDITORIAL" />
            <ItemNews items={items} />
        </div>
    )
}