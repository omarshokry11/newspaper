import React from "react";
import {Image} from "react-bootstrap";
import TitleItems from "../Component/TitleItems";
import CategoryItem from "../Component/Block/CategoryItem";

import "./Style/BlogPage.scss";

export default function BlogPage() {

    const blogPage = [
        {id: 1, className: "col-lg-6 col-12 blog-items", img: "/img/00_header_slider_01-550x360.jpg", h1: "SED PURUS VELIT, FINIBUS NON SEMPER NONUT AM…"},
        {id: 2, className: "col-lg-6 col-12 blog-items", img: "/img/00_header_slider_02-550x360.jpg", h1: "NUNC HENDRERIT EGESTAS AMUS AD ARCU IM USA"}
    ]

    const blogItem = [
        {id: 1, img: "/img/00_header_slider_03-550x360.jpg", h1: "ITUM AS BINUS SITAM CONESTUM EY"},
        {id: 2, img: "/img/img-1.jpg", h1: "ITUM AS BINUS SITAM CONESTUM EY"},
        {id: 3, img: "/img/img-2.jpg", h1: "ITUM AS BINUS SITAM CONESTUM EY"},
        {id: 4, img: "/img/img-3.jpg", h1: "ITUM AS BINUS SITAM CONESTUM EY"},
        {id: 5, img: "/img/img-4.jpg", h1: "ITUM AS BINUS SITAM CONESTUM EY"},
        {id: 6, img: "/img/edit-4.jpg", h1: "ITUM AS BINUS SITAM CONESTUM EY"},
        {id: 7, img: "/img/edit-3.jpg", h1: "ITUM AS BINUS SITAM CONESTUM EY"},
        {id: 8, img: "/img/edit-2.jpg", h1: "ITUM AS BINUS SITAM CONESTUM EY"},
    ]

    return(
        <div className="main-home-page-container">
            <TitleItems title="BLOG" />
            <div className="container">
                <div className="row">
                    {blogPage.map((blog) => <div className={blog.className} key={blog.id}>
                        <div className="img">
                            <Image src={blog.img} />
                        </div>
                        <div className="blog-details">
                            <h1>{blog.h1}</h1>
                            <span className="editor">Editorial</span>
                            <span className="history">May 10, 2017</span>
                            <p>
                                Semper leo. Fusce lectus justo, porta quis felis at, imperdiet elementum libero.
                                Duis nec dignissim lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque venenatis purus eget maximus. Fusce dapibus leo sed sem fringilla,…
                            </p>
                        </div>
                    </div>)}
                    <div className="col-lg-8 col-12 blog-item">
                        {blogItem.map((item) => <div className="item" key={item.id}>
                            <div className="img">
                                <Image src={item.img} />
                            </div>
                            <div className="item-details">
                                <h1>{item.h1}</h1>
                                <span className="editor">Editorial</span>
                                <span className="history">May 10, 2017</span>
                                <p>
                                    Semper leo. Fusce lectus justo, porta quis felis at, imperdiet elementum libero. Duis nec dignissim lectus.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Suspendisse scelerisque venenatis purus eget maximus. Fusce dapibus leo sed sem fringilla,…
                                </p>
                            </div>
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