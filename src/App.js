import React, {useState} from 'react';
import classes from './App.css';
import {Route, Switch} from "react-router-dom"
import CardHolder from "./Pages/cardHolder/cardHolder";
import Auth from "./Pages/Auth/Auth";
import CallBoard from "./Pages/CallBoard/CallBoard";
import PageMenu from "./components/pageMenu/pageMenu";


const App = () => {

    const [isAuth, setIsAuth] = useState(false)

    const isAuthToggle = () => {
        setIsAuth(!isAuth)
    }

    const isAuthCallBoard = () => {
        return (
            isAuth
                ? <CallBoard />
                : <CardHolder />
        )
    }


    const isAuthCardHolder = () => {
        return (
            <CardHolder isAuth={isAuth} />
        )
    }


        return (
            <div className={classes.App}>
                <PageMenu isAuth={isAuth} isAuthToggle={isAuthToggle}/>
                <Switch>
                    <Route path="/auth" component={Auth}/>
                    <Route path="/callboard" component={isAuthCallBoard}/>
                    <Route path="/" component={isAuthCardHolder}/>
                </Switch>
            </div>
        );
}

export default App;
