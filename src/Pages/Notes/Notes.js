import React, {Component} from 'react';
import PageMenu from "../../components/pageMenu/pageMenu";
import classes from "./Notes.css"
import BoardCard from "../../components/boardCard/addBboardCard";

class Notes extends Component {
    render() {
        return (
            <div className={classes.Notes}>
                <PageMenu />
                <h1>Мои Заметки</h1>
                <div className={classes.notesArea}>
                    <BoardCard />
                </div>
            </div>
        );
    }
}

export default Notes;