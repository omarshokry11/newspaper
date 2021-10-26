import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Image} from "react-bootstrap";
import DropdownList from "./Block/DropdownList";

import "./Style/MainNavBar.scss";

export default function MainNavBar() {

    const [click, setClick] = useState();

    const navLink = [
        {id: 1, pathLink: "/", linkName: "Hom", classActiveName: "active"},
        {id: 2, pathLink: "/news", linkName: "News", classActiveName: "active"},
        {id: 3, pathLink: "/blog", linkName: "Blog", classActiveName: "active"},
        {id: 4, pathLink: "/contact", linkName: "Contact", classActiveName: "active"},
    ]

    return(
        <div className="main-nav-bar-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Image src="/img/logo.png" />
                    </div>
                    <div className="col-12 d-md-block d-none">
                        <div className="item-nav-link">
                            {navLink.map((link) => <NavLink to={link.pathLink} activeClassName={link.classActiveName} key={link.id}>{link.linkName}</NavLink>)}
                        </div>
                    </div>
                    <div className="col-12 d-md-none d-block" onClick={()=>setClick(!click)}>
                        <div className="dropdown-list">
                            <div> </div>
                            <div> </div>
                            <div> </div>
                        </div>
                    </div>
                    {click ? <DropdownList navLink={navLink} /> : null}
                </div>
            </div>
        </div>
    )
}