import React from "react";
import classes from "./pageMenu.css"
import {NavLink} from "react-router-dom";


const PageMenu = (props) => {

    return (
        props.isAuth
            ? <div className={classes.pageMenu}>
                <div className={classes.menuAuth}>

                    <button onClick={props.isAuthToggle}>isAuthToggle</button> {/*ПОТОМ НАДО УДАЛИТЬ ИМИТАЦИЯ ВХОДА*/}

                    <NavLink to="/">Выйти</NavLink> {/*надо добавить событие на изменение состояния isAuth*/}
                </div>

                <div className={classes.menuBar}>
                    <NavLink to="/callboard" activeClassName={classes.activeButton}>Доска обьявлений</NavLink>
                    <NavLink exect={"true"} to="/" activeClassName={classes.activeButton}>Список
                        участников</NavLink>
                    <NavLink to="/notes" activeClassName={classes.activeButton}>Мои заметки</NavLink>
                </div>
            </div>
            : <div className={classes.pageMenu}>
                <div className={classes.menuAuth}>

                    <button onClick={props.isAuthToggle}>isAuthToggle</button> {/*ПОТОМ НАДО УДАЛИТЬ ИМИТАЦИЯ ВХОДА*/}

                    <NavLink to="/auth">Авторизация</NavLink>
                </div>

                <div className={classes.menuBar}>
                    <NavLink exect={"true"} to="/" activeClassName={classes.activeButton}>Список
                        участников</NavLink>
                </div>
            </div>
    )
}


export default PageMenu