import React from 'react';
import classes from "./BoardCard.css"

function BoardCard(props) {

    return (
        <div className={classes.boardCard}>
            <p>Объявление</p>
            <div className={classes.cardContent}>
                <img src={props.image} alt="Изображение не найдено"/>

                <p>{props.note}</p>
            </div>
            <div className={classes.cardCreator}>
                {props.persone}
            </div>
        </div>
    );
}

export default BoardCard;