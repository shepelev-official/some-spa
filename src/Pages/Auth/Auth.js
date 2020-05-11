import React, {useState} from 'react';
import classes from "./Auth.css";
import {NavLink} from "react-router-dom";
import is from "is_js"

const Auth = () => {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")


  const isPasswordValid = password.length >= 6
  const isLoginValid = is.email(login)


  const loginInputColor = isLoginValid || login === "" ? classes.transparent : classes.red /*красный ореол вокруг INPUT*/

  const passwordInputColor = isPasswordValid || password === "" ? classes.transparent : classes.red /*красный ореол вокруг PASSWORD*/


  const submitHandler = (event) => {
    event.preventDefault()
  }

  const handleLogin = (event) => {
    setLogin(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const isFormValid = isLoginValid && isPasswordValid


  return (
    <div className={classes.Auth}>
      <div>
        <div className={classes.escButton}>
          <NavLink to="/">X</NavLink>
        </div>
        <h1>Авторизация</h1>

        <form onSubmit={submitHandler} className={classes.AuthForm}>
          <label htmlFor='login'>Введите E-mail:</label>
          <input id='login' type="text" onChange={handleLogin} value={login}
                 className={loginInputColor}/>

          <label htmlFor='password'>Введите пароль:</label>
          <input id='password' type="password" onChange={handlePassword} value={password}
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