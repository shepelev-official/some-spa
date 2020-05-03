import React, {Component} from "react";
import classes from "./cardHolder.css";
import PageMenu from "../../components/pageMenu/pageMenu";
import PersonalCard from "../../components/personalCard/personalCard";

class CardHolder extends Component {


    render() {
        return (
            <div>
                <PageMenu />
                <div className={classes.cardHolder}>
                    <PersonalCard />
                    <PersonalCard />
                    <PersonalCard />
                    <PersonalCard />
                </div>
            </div>

        )
    }
}

export default CardHolder