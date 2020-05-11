import React from "react";
import classes from "./personalCard.css"

const PersonalCard = (props) => {
    return (
        <div className={classes.personalCard}>
            {
                props.isAuth ? <div className={classes.personalCardData}>
                        <p>{props.Email}</p>
                    </div>
                    : null
            }
        </div>
    )
}

export default PersonalCard