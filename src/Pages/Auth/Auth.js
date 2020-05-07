import React from 'react';
import classes from "./Auth.css";
import {NavLink} from "react-router-dom";

const Auth = () => {

    let submitHendler = (event) => {
        event.preventDefault()
    }

    let keyLogin = "login" + Math.random()
    let keyPass = "pass" + Math.random()


    return (
        <div className={classes.Auth}>
            <div>
                <div className={classes.escButton}>
                    <NavLink to="/">X</NavLink>
                </div>
                <h1>Авторизация</h1>

                <form onSubmit={submitHendler} className={classes.AuthForm}>
                    <label htmlFor={keyLogin}>Введите E-mail:</label>
                    <input id={keyLogin} type="text"/>

                    <label htmlFor={keyPass}>Введите пароль:</label>
                    <input id={keyPass} type="password"/>
                    <div className={classes.Buttons}>
                        <button
                            type="enter"
                            className={classes.enterButton}
                        >
                            Войти
                        </button>


                        <button
                            type="register"
                            className={classes.registerButton}
                        >
                            Регистрация
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;