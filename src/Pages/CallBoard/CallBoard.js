import React, {Component} from 'react';
import PageMenu from "../../components/pageMenu/pageMenu";
import classes from "./CallBoard.css";
import BoardCard from "../../components/boardCard/boardCard";

class CallBoard extends Component {
    render() {
        return (
            <div className={classes.callBoard}>
                <PageMenu/>
                <h1>Доска обьявлений</h1>
                <div className={classes.boardHolder}>
                    <BoardCard />
                </div>
            </div>
        );
    }
}

export default CallBoard;