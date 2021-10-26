import React from "react";
import TitleItems from "../Component/TitleItems";
import ItemNews from "../Component/ItemNews";

import "./Style/NewsPage.scss";

export default function NewsPage() {

    const items = [
        {id: 1, className: "col-lg-6 col-12", img: "/img/latestnews-1.jpg", h2: "Maecenas tincidunt posuere quam, eu consectetur justo", editor: "News", span: "May 10, 2017", class: "editor"},
        {id: 2, className: "col-lg-6 col-12", img: "/img/latestnews-2.jpg", h2: "Phasellus lacinia tortor am ust euismod, rutrum tellus…", editor: "News", span: "May 10, 2017", class: "editor"},
        {id: 3, className: "col-lg-4 col-12", img: "/img/latestnews-3.jpg", h2: "Maecenas tincidunt posuere quam, eu consectetur justo", editor: "News", span: "May 10, 2017", class: "editor"},
    ]

    return(
        <div className="main-home-page-container">
            <TitleItems title="NEWS" />
            <ItemNews items={items} />
        </div>
    )
}