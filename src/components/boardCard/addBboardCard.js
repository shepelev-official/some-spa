import React, {useState} from 'react';
import classes from "./addBoardCard.css"

const AddBoardCard = (props) => {

    const [text, setText] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleClick = () => {
        props.addNewBoardCard(text)
    }


    const handleTextChange = (event) => setText(event.target.value)

    return (
        <div className={classes.boardCard}>
            <form onSubmit={handleSubmit}>
                <p>Объявление</p>
                <textarea name="text" id="" cols="90" rows="20" onChange={handleTextChange} value={text}/>
                <button type="button" onClick={handleClick}>Опубликовать</button>
            </form>
        </div>
    );
}

export default AddBoardCard;