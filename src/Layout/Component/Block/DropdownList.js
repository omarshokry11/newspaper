import React from "react";
import {NavLink} from "react-router-dom";

export default function DropdownList({navLink}) {
    return(
        <div className="item-nav-link">
            {navLink.map((link) => <NavLink to={link.pathLink} activeClassName={link.classActiveName} key={link.id}>{link.linkName}</NavLink>)}
        </div>
    )
}