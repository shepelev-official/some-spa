import React from "react";
import classes from "./pageMenu.css"
import {NavLink} from "react-router-dom";


const PageMenu = (props) => {

  return (
    props.isAuth
      ? <div className={classes.pageMenu}>
        <div className={classes.menuAuth}>
          <button onClick={props.isAuthToggle}>
            <NavLink to="/">Выйти</NavLink>
          </button>
        </div>

        <div className={classes.menuBar}>
          <NavLink to="/callboard" activeClassName={classes.activeButton}>Доска обьявлений</NavLink>
          <NavLink exect={"true"} to="/" activeClassName={classes.activeButton}>Список
            участников</NavLink>
        </div>
      </div>
      : <div className={classes.pageMenu}>
        <div className={classes.menuAuth}>

          <button onClick={props.isAuthToggle}>  {/*ПОТОМ НАДО УДАЛИТЬ СОБЫТИЕ*/}

            <NavLink to="/auth">Авторизация</NavLink>
          </button>
        </div>

        <div className={classes.menuBar}>
          <NavLink exect={"true"} to="/" activeClassName={classes.activeButton}>Список
            участников</NavLink>
        </div>
      </div>
  )
}


export default PageMenu