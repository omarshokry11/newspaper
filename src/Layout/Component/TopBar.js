import React from "react";
import {Link} from "react-router-dom";

import "./Style/TopBar.scss";

export default function TopBar() {

    const social = [
        {id: 1, icon: "fab fa-facebook-f"},
        {id: 2, icon: "fab fa-tumblr"},
        {id: 3, icon: "fab fa-twitter"},
        {id: 4, icon: "fab fa-google-plus-g"},
        {id: 5, icon: "fab fa-youtube"},
    ]

    return(
        <div className="main-top-bar-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 d-lg-block d-none">
                        <div className="item">
                            <div className="icon">
                                <i className="fas fa-bullhorn"> </i>
                                <span>Latest News</span>
                            </div>
                            <div className="link"><a href="/">Sed purus velit, finibus non semper nonut am utas</a></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 form">
                        <div className="input">
                            <input type="text" placeholder="Search..." />
                            <i className="fas fa-search"> </i>
                        </div>
                        <ul className="social">
                            {social.map((app) => <li key={app.id}><Link to="/"><i className={app.icon}> </i></Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}