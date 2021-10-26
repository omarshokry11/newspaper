import React from "react";
import {Image} from "react-bootstrap";
import TitleItems from "../Component/TitleItems";
import ItemNews from "../Component/ItemNews";
import CategoryItem from "../Component/Block/CategoryItem";

import "./Style/NewsPage.scss";

export default function NewsPage() {

    const items = [
        {id: 1, className: "col-lg-6 col-12", img: "/img/latestnews-1.jpg", h2: "Maecenas tincidunt posuere quam, eu consectetur justo", editor: "News", span: "May 10, 2017", class: "editor"},
        {id: 2, className: "col-lg-6 col-12", img: "/img/latestnews-2.jpg", h2: "Phasellus lacinia tortor am ust euismod, rutrum tellus…", editor: "News", span: "May 10, 2017", class: "editor"},
    ]

    return(
        <div className="main-home-page-container">
            <TitleItems title="NEWS" />
            <ItemNews items={items} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="item">
                            <div className="img">
                                <Image src="/img/latestnews-3.jpg" />
                            </div>
                            <div className="item-details">
                                <h2>Maecenas tincidunt posuere quam, eu consectetur justo</h2>
                                <span className="editor">News</span>
                                <span className="history">May 10, 2017</span>
                                <p>Semper leo. Fusce lectus justo, porta quis felis at, imperdiet elementum libero. Duis nec dignissim lectus.Lorem ...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"> </div>
                    <div className="col-lg-4 col-12">
                        <CategoryItem />
                    </div>
                </div>
            </div>
        </div>
    )
}