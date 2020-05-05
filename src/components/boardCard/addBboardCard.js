import React from 'react';
import classes from "./addBoardCard.css"

function AddBoardCard(props) {

    const stopEvent = (event) => {
        event.preventDefault()
    }

    const clickButton = () => {
        props.addNewBoardCard(img, text)
    }

    let img = ''
    let text = ''

    const boardCardText = event => text = event.target.value

    const boardCardImg = event => img = event.target.value

    return (
        <div className={classes.boardCard}>
            <form onSubmit={stopEvent}>
                <p>Объявление</p>
                <input type="file" onChange={boardCardImg}/>
                <textarea name="text" id="" cols="90" rows="20" onChange={boardCardText}/>
                <button type="button" onClick={clickButton}>Опубликовать</button>
            </form>
        </div>
    );
}

export default AddBoardCard;