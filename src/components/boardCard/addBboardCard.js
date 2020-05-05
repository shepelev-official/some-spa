import React from 'react';
import classes from "./addBoardCard.css"

function AddBoardCard (props) {

    const stopEvent = (event) => {
        event.preventDefault()
    }

    const boardCardText = (event) => {
        console.log(event.target.value)
    }

    const boardCardImg = (event) => {
        console.log(event.target.value)
    }

        return (
            <div className={classes.boardCard}>
                <form onSubmit={stopEvent}>
                    <p>Объявление</p>
                    <input type="file" onChange={boardCardImg}/>
                    <textarea name="text" id="" cols="90" rows="20" onChange={boardCardText}/>
                    <button onClick={props.addNewBoardCard}>Опубликовать</button>
                </form>
            </div>
        );
}

export default AddBoardCard;