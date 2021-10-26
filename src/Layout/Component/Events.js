import React from "react";
import ItemNews from "./ItemNews";
import TitleItems from "./TitleItems";
import Banner from "./Block/Banner";
import EventItems from "./Block/EventItems";

export default function Events(){

    const items = [
        {id: 1, className: "col-lg-4 col-12", img: "/img/event-1.jpg", h2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", editor: "raibercristian", span: "May 10, 2017", class: "raiber"},
        {id: 2, className: "col-lg-4 col-12", img: "/img/event-2.jpg", h2: "Maecenas tincidunt posuere quam, eu consectetur justo…", editor: "raibercristian", span: "May 10, 2017", class: "raiber"},
        {id: 3, className: "col-lg-4 col-12", img: "/img/event-3.jpg", h2: "Phasellus lacinia tortor euism", editor: "raibercristian", span: "May 10, 2017", class: "raiber"},
    ]

    const eventItems = [
        {id: 1, className: "col-lg-4 col-md-6 col-12", class: "items item-dotted", img: "/img/event-4.jpg", h3: "Fusce a ex vel diam mattis rhoncus vel…", span: "May 10, 2017"},
        {id: 2, className: "col-lg-4 col-md-6 col-12", class: "items item-dotted", img: "/img/event-5.jpg", h3: "Um sociis natoque penati bus et magnis dis…", span: "May 10, 2017"},
        {id: 3, className: "col-lg-4 col-md-6 col-12", class: "items item-dotted", img: "/img/event-6.jpg", h3: "Um sociis natoque penati bus et magnis dis…", span: "May 10, 2017"},
        {id: 4, className: "col-lg-4 col-md-6 col-12", class: "items", img: "/img/event-7.jpg", h3: "Morbi quis odio blandit, bibendum erat sit amet,…", span: "May 10, 2017"},
        {id: 5, className: "col-lg-4 col-md-6 col-12", class: "items", img: "/img/event-8.jpg", h3: "Nulla mollis ante vitae dolor blandit mollis eget…", span: "May 10, 2017"},
        {id: 6, className: "col-lg-4 col-md-6 col-12", class: "items", img: "/img/event-9.jpg", h3: "Nulla mollis ante vitae dolor blandit mollis eget…", span: "May 10, 2017"},
    ]

    return(
        <div className="main-event-container">
            <TitleItems title="EVENTS" />
            <ItemNews items={items} />
            <EventItems eventItems={eventItems} />
            <Banner />
        </div>
    )
}