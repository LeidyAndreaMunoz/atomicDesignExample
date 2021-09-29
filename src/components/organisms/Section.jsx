import React from "react";
import { Cards } from "../molecules/Card";

import './Section.css'

export const Section = ({cards, variant, label, onClick, title, date, day, task, detail, member }) => {
    return (
        <section>
            <h1>{title}</h1>
            <div className='cardsContainer'>
                <Cards
                cards={cards}
                label={label}
                variant={variant}
                onClick={onClick}
                date= {date}
                day={day}
                task={task}
                detail={detail}
                member={member}
                />
            </div>
        </section>
    )
}