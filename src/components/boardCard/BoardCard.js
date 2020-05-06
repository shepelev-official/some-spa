import React from 'react';
import classes from "./BoardCard.css"
import {NavLink} from "react-router-dom";

function BoardCard(props) {

    return (
        <div className={classes.boardCard}>
            <p>Объявление</p>
            <div className={classes.cardContent}>
                <img src={props.image} alt="Изображение не найдено"/>

                <p>{props.note}</p>
            </div>
            <p className={classes.cardCreatorName}><NavLink to="/" /*props.persone.id*/>{props.persone}</NavLink></p>
        </div>
    );
}

export default BoardCard;