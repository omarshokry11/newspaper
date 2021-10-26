import React from "react";
import {Link} from "react-router-dom";
import CategoryItem from "../Component/Block/CategoryItem";

import "./Style/ContactPage.scss";

export default function ContactPage() {

    const contactItem = [
        {id: 1, linkName: "Home", span: "Contact", h1: "Contact", p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper metus eget enim auctor, non lobortis risus hendrerit.\n" +
                "Mauris interdum semper eros, at dictum augue volutpat ut. In nec odio ac erat porttitor ullamcorper. Etiam varius turpis purus,\n" +
                "ultrices mattis leo faucibus id. Nunc aliquet eros nec venenatis rutrum. Suspendisse potenti. Curabitur ac odio id neque venenatis iaculis quis vel enim.\n" +
                "Nunc quis tellus imperdiet, sodales justo at, accumsan nunc. Maecenas eu velit sed massa laoreet sodales in ac est.\n" +
                "Praesent eu facilisis tortor. Praesent aliquet nisl auctor urna eleifend, sed rhoncus risus fermentum.",
            p2: "Suspendisse ante elit, feugiat ac faucibus sed, semper tincidunt elit. " +
                "Sed molestie a mi at facilisis. Vestibulum vel dui efficitur tellus bibendum accumsan. Integer efficitur efficitur mi, ac semper odio tempus in. Nulla sem ipsum, egestas a rutrum ut, " +
                "molestie quis odio. Cras ut finibus mi, rhoncus laoreet lorem. Proin fermentum fermentum quam id commodo. Sed facilisis accumsan libero, eget ultricies nibh varius vel. Aenean tortor nisl, " +
                "semper id facilisis ac, aliquet eu risus. Sed ac lectus massa. Mauris varius sagittis ipsum nec pretium. Phasellus quis magna dignissim, rutrum orci a, luctus ipsum. Morbi vulputate ultrices urna, " +
                "eu facilisis mauris luctus et. Sed convallis suscipit erat mattis dignissim. Aenean mollis fermentum tempor."}
    ]

    return(
        <div className="main-home-page-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        {contactItem.map((item) => <div className="contact-item" key={item.id}>
                            <Link to="/">{item.linkName}</Link>
                            <span>/ {item.span}</span>
                            <h1>{item.h1}</h1>
                            <p className="p-1">{item.p1}</p>
                            <p className="p-2">{item.p2}</p>
                        </div>)}
                    </div>
                    <div className="col-lg-4 col-12">
                        <CategoryItem />
                    </div>
                </div>
            </div>
        </div>
    )
}