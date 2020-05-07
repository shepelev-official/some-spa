import React from 'react';
import classes from "./BoardCard.css"
import {NavLink} from "react-router-dom";

const BoardCard = (props) => {

    return (
        <div className={classes.boardCard}>
            <p>Объявление</p>
            <div className={classes.cardContent}>
                <p>{props.note}</p>
            </div>
            <p className={classes.cardCreatorName}><NavLink to="/" /*props.persone.id*/>{props.persone}</NavLink></p>
        </div>
    );
}

export default BoardCard;