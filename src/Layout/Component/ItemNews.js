import React from "react";
import {Image} from "react-bootstrap";

import "./Style/ItemNews.scss";

export default function ItemNews({items}) {
    return(
        <div className="main-item-news-container">
            <div className="container">
                <div className="row">
                    {items.map((item) => <div className={item.className} key={item.id}>
                        <div className="item">
                            <div className="img">
                                <Image src={item.img} />
                            </div>
                            <div className="item-details">
                                <h2>{item.h2}</h2>
                                <span className={item.class}>{item.editor}</span>
                                <span className="history">{item.span}</span>
                                <p>Semper leo. Fusce lectus justo, porta quis felis at, imperdiet elementum libero. Duis nec dignissim lectus.Lorem ...</p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}