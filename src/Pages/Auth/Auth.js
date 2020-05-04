import React, {Component} from 'react';
import classes from "./Auth.css";
import {NavLink} from "react-router-dom";

class Auth extends Component {

    submitHendler = (event) => {
        event.preventDefault()
    }

    keyLogin = "login" + Math.random()
    keyPass = "pass" + Math.random()


    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <div className={classes.escButton}>
                        <NavLink to="/">X</NavLink>
                    </div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHendler} className={classes.AuthForm}>
                        <label htmlFor={this.keyLogin}>Введите E-mail:</label>
                        <input id={this.keyLogin} type="text"/>

                        <label htmlFor={this.keyPass}>Введите пароль:</label>
                        <input id={this.keyPass} type="password"/>
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
}

export default Auth;