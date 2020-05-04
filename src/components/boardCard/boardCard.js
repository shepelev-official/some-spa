import React, {Component} from 'react';
import classes from "./boardCard.css"

class BoardCard extends Component {

    state = {

    }

    render() {
        return (
            <div className={classes.boardCard}>
                <form>
                    <p>Обьявление</p>
                    <input type="file"/>
                    <textarea name="text" id="" cols="90" rows="20"></textarea>
                    <button>Опубликовать</button>
                </form>
            </div>
        );
    }
}

export default BoardCard;