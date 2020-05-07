import React, {Component} from 'react';
import classes from './App.css';
import {Route, Switch} from "react-router-dom"
import CardHolder from "./Pages/cardHolder/cardHolder";
import Auth from "./Pages/Auth/Auth";
import CallBoard from "./Pages/CallBoard/CallBoard";
import Notes from "./Pages/Notes/Notes";
import PageMenu from "./components/pageMenu/pageMenu";


class App extends Component {

    state={
        isAuth: true,
    }

    render () {
        return (
            <div className={classes.App}>
                <PageMenu isAuth={this.state.isAuth}/>
                <Switch>
                    <Route path="/auth" component={Auth}/>
                    <Route path="/callboard" component={CallBoard}/>
                    <Route path="/notes" component={Notes}/>
                    <Route path="/" component={CardHolder}/>
                </Switch>
            </div>
        );
    }
}

export default App;
