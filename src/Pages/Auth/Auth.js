import React, {useState} from 'react';
import classes from "./Auth.css";
import {NavLink} from "react-router-dom";
import is from "is_js"
import axios from "axios"

const Auth = (props) => {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [newUser, setNewUser] = useState(false)


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


  const loginHandler = async () => {
    const loginData = {
      email: login,
      password: password,
      returnSecureToken: true
    }
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALc3IJ5EUuz0HEBSvTYMqlj8mL-14rKJw', loginData)

      let currentUser = {email: response.data.email}

      props.getCurrentUser(currentUser)

    } catch (e) {
      console.log(e)
    }
  }


  const registerHandler = async () => {
    const authData = {
      email: login,
      password: password,
      returnSecureToken: true
    }
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALc3IJ5EUuz0HEBSvTYMqlj8mL-14rKJw', authData)
      let addNewUserInBase = {email: response.data.email}
      await axios.post('https://some-spa.firebaseio.com/users.json', addNewUserInBase)
      setNewUser(true)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={classes.Auth}>
      <div>
        <div className={classes.escButton}>
          <NavLink to="/">X</NavLink>
        </div>

        {props.isAuth === true
          ? <div className={classes.authSuccess}>
            <p>Вы авторизованы как: </p>
            <p>{`${props.currentUser}`}</p>
          </div>
          : <div>
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
                  onClick={loginHandler}
                >
                  Войти
                </button>

                {newUser === false
                  ? <button
                    type="register"
                    className={classes.registerButton}
                    disabled={!isFormValid}
                    onClick={registerHandler}
                  >
                    Регистрация
                  </button>
                  : null}
              </div>
            </form>
          </div>
        }

      </div>
    </div>
  );
}

export default Auth;