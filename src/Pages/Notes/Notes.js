import React from 'react';
import classes from "./Notes.css"
import BoardCard from "../../components/boardCard/BoardCard";

const Notes = () => {
    return (
        <div className={classes.Notes}>
            <h1>Мои Заметки</h1>
            <div className={classes.notesArea}>
                <BoardCard/>
            </div>
        </div>
    );
}

export default Notes;