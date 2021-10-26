import React from "react";

import "./Style/CategoryItem.scss";

export default function CategoryItem() {

    const calendarItem = [
        {id: 1, className: "day-name", days: [{id: 1, day: "M"}, {id: 2, day: "T"}, {id: 3, day: "W"}, {id: 4, day: "T"},{id: 5, day: "F"}, {id: 6, day: "S"}, {id: 7, day: "S"}]},
        {id: 2, className: "day-number item-number", days: [{id: 1, day: "1"}, {id: 2, day: "2"}, {id: 3, day: "3"}]},
        {id: 3, className: "day-number", days: [{id: 1, day: "4"}, {id: 2, day: "5"}, {id: 3, day: "6"}, {id: 4, day: "7"},{id: 5, day: "8"}, {id: 6, day: "9"}, {id: 7, day: "10"}]},
        {id: 4, className: "day-number", days: [{id: 1, day: "11"}, {id: 2, day: "12"}, {id: 3, day: "13"}, {id: 4, day: "14"},{id: 5, day: "15"}, {id: 6, day: "16"}, {id: 7, day: "17"}]},
        {id: 5, className: "day-number", days: [{id: 1, day: "18"}, {id: 2, day: "19"}, {id: 3, day: "20"}, {id: 4, day: "21"},{id: 5, day: "22"}, {id: 6, day: "23"}, {id: 7, day: "24"}]},
        {id: 6, className: "day-number", days: [{id: 1, day: "25"}, {id: 2, class: "active", day: "26"}, {id: 3, day: "27"}, {id: 4, day: "28"},{id: 5, day: "29"}, {id: 6, day: "30"}, {id: 7, day: "31"}]},
    ]

    const categoryItem = [
        {id: 1, h2: "CATEGORIES", lists: [
                {id: 1, span: "Editorial", number: "(11)"},
                {id: 2, span: "Events", number: "(9)"},
                {id: 3, span: "News", number: "(3)"},
                {id: 4, span: "The World", number: "(7)"},
            ]},
        {id: 2, h2: "TAGS", tags: [
                {id: 1, span: "business"},
                {id: 2, span: "coast"},
                {id: 3, span: "information"},
                {id: 4, span: "life"},
                {id: 5, span: "man"},
                {id: 6, span: "money"},
                {id: 7, span: "news"},
                {id: 8, span: "politics"},
                {id: 9, span: "sport"},
            ]},
    ]

    return(
        <div className="main-category-item-container">
            <div className="input">
                <input type="search" placeholder="Search..." />
                <i className="fas fa-search"> </i>
            </div>
            <div className="calendar">
                <h2>October 2021</h2>
                {calendarItem.map((item) => <div className={item.className} key={item.id}>
                    {item.days.map((day) => <span className={day.class} key={day.id}>{day.day}</span>)}
                </div>)}
            </div>
            <div className="category">
                {categoryItem.map((list) =>  <div key={list.id}>
                    <h2>{list.h2}</h2>
                    {list.lists ? <>
                        <ul>
                            {list.lists.map((li) => <li key={li.id}>
                                <span>{li.span}</span>
                                <span className="number">{li.number}</span>
                            </li>)}
                        </ul>
                    </> : null}
                    {list.tags ? <>
                            {list.tags.map((tag) => <span key={tag.id} className="tag">{tag.span}</span>)}
                    </> : null}
                </div>)}
            </div>
        </div>
    )
}