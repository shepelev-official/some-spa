import React, {Component} from "react";
import classes from "./pageMenu.css"
import {NavLink} from "react-router-dom";


class PageMenu extends Component {


    render() {
        return (
            <div className={classes.pageMenu}>
                <div className={classes.menuAuth}>
                    <NavLink to="/auth">Авторизация</NavLink>
                </div>
                <div className={classes.menuBar}>
                    <NavLink to="/callboard" activeClassName={classes.activeButton}>Доска обьявлений</NavLink>
                    <NavLink exect={"true"} to="/" activeClassName={classes.activeButton}>Список участников</NavLink>
                    <NavLink to="/notes" activeClassName={classes.activeButton}>Мои заметки</NavLink>
                </div>
            </div>
        )
    }
}

export default PageMenu