import React from 'react';
import classes from './App.css';
import {Route, Switch} from "react-router-dom"
import CardHolder from "./Pages/cardHolder/cardHolder";
import Auth from "./Pages/Auth/Auth";
import CallBoard from "./Pages/CallBoard/CallBoard";
import Notes from "./Pages/Notes/Notes";


function App() {
    return (
        <div className={classes.App}>
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/callboard" component={CallBoard}/>
                <Route path="/notes" component={Notes}/>
                <Route path="/" component={CardHolder}/>
            </Switch>
        </div>

    );
}

export default App;
