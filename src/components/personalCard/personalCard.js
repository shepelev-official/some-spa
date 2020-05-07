import React from "react";
import classes from "./personalCard.css"

function PersonalCard(props) {
    return (
        <div className={classes.personalCard}>
            <img src={props.Photo} alt="Изображение не найдено"/>
            {
                props.isAuth ? <div className={classes.personalCardData}>
                        <p>{props.Name}</p>
                        <p>{props.Surname}</p>
                        <p>{props.TelephoneNumber}</p>
                    </div>
                    : null
            }
        </div>
    )
}

export default PersonalCard