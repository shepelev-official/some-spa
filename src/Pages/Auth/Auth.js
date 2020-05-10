import React, {useState} from 'react';
import classes from "./Auth.css";
import {NavLink} from "react-router-dom";
import is from "is_js"

const Auth = () => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [isFormValid, setIsFormValid] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)
    const [loginValid, setLoginValid] = useState(false)

    let passwordInputColor = classes.transparent
    let loginInputColor = classes.transparent
    if (login !== ""){
        loginValid
            ? loginInputColor = classes.transparent
            : loginInputColor = classes.red
    } /*красный ореол вокруг INPUT*/
    if (password !== "") {
        passwordValid
            ? passwordInputColor = classes.transparent
            : passwordInputColor = classes.red
    } /*красный ореол вокруг PASSWORD*/



    let submitHandler = (event) => {
        event.preventDefault()
    }

    let keyLogin = "login" + Math.random()
    let keyPass = "pass" + Math.random()

    const handleLogin = (event) => {
        setLogin(event.target.value)

        if (is.email(login)) {
            setLoginValid(true)
        } else setLoginValid(false)
    }


    const handlePassword = (event) => {
        setPassword(event.target.value)

        if (password.length >= 6) {
            setPasswordValid(true)
        } else setIsFormValid(false)
    }

    if (loginValid && passwordValid) {
        if (!isFormValid)
        setIsFormValid(true)
    }

    console.log({
        'loginValid': loginValid,
        'passwordValid': passwordValid,
        'isFormValid': isFormValid
    })


    return (
        <div className={classes.Auth}>
            <div>
                <div className={classes.escButton}>
                    <NavLink to="/">X</NavLink>
                </div>
                <h1>Авторизация</h1>

                <form onSubmit={submitHandler} className={classes.AuthForm}>
                    <label htmlFor={keyLogin}>Введите E-mail:</label>
                    <input id={keyLogin} type="text" onChange={handleLogin} value={login}
                           className={loginInputColor}/>

                    <label htmlFor={keyPass}>Введите пароль:</label>
                    <input id={keyPass} type="password" onChange={handlePassword} value={password}
                           placeholder={"минимум 6 символов"} className={passwordInputColor}/>
                    <div className={classes.Buttons}>
                        <button
                            type="enter"
                            className={classes.enterButton}
                            disabled={!isFormValid}
                        >
                            Войти
                        </button>


                        <button
                            type="register"
                            className={classes.registerButton}
                            disabled={!isFormValid}
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