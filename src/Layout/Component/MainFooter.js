import React from "react";
import {Link} from "react-router-dom";

import "./Style/MainFooter.scss";

export default function MainFooter() {

    const mainFooter = [
        {id: 1, h2: "ABOUT", paragraph: [
                {id: 1, p: "Maecenas finibus pretium congue. Quisque sed sem itum turpis. Mauris ut quam vitae urna dignissim."},
                {id: 2, p: "Curabitur pharetra mauris id urna vestibulum, ne pharetra elit commodo. Nunc rutrum mi lectus am utan es nimbus avientin am estas potivan."},
            ]},
        {id: 2, class: "post", h2: "RECENT POSTS", links: [
                {id: 1, link: "Sed purus velit, finibus non semper nonut am utas", span: "May 10, 2017"},
                {id: 2, link: "Nunc hendrerit egestas amus ad arcu im usa", span: "May 10, 2017"},
                {id: 3, link: "Itum as binus sitam conestum ey", span: "May 10, 2017"},
            ]},
        {id: 3, class: "category", h2: "CATEGORIES", links: [
                {id: 1, link: "Editorial", span: "(11)"},
                {id: 2, link: "Events", span: "(9)"},
                {id: 3, link: "News", span: "(3)"},
                {id: 4, link: "The World", span: "(7)"},
            ]},
        {id: 4, h2: "CONTACT", contact: [
                {id: 1, p: "Phone:", span: "228 135 887"},
                {id: 2, p: "Email:", span: "newspaperx@contact.com"},
                {id: 3, p: "Address:", span: "Northon Street, 2015 NYC"},
            ]},
    ]

    return(
        <div className="main-footer-container">
            <div className="container">
                <div className="row">
                    {mainFooter.map((footer) => <div className="col-lg-3 col-md-6 col-12 item" key={footer.id}>
                        <h2>{footer.h2}</h2>
                        {footer.paragraph ? <>{footer.paragraph.map((p) => <p key={p.id}>{p.p}</p>)}</> : null}
                        <div className={footer.class}>{footer.links ? <>{footer.links.map((link) => <div key={link.id}>
                            <Link to="/">{link.link}</Link>
                            <span>{link.span}</span>
                        </div>)}</> : null}</div>
                        {footer.contact ? <>{footer.contact.map((cont) => <div className="contact" key={cont.id}>
                            <strong>{cont.p}</strong>
                            <span>{cont.span}</span>
                        </div>)}</> : null}
                    </div>)}
                </div>
            </div>
        </div>
    )
}