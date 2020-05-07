import React, {Component} from "react";
import classes from "./cardHolder.css";
import PersonalCard from "../../components/personalCard/personalCard";
import imgsss from "../../photo.jpeg"

class CardHolder extends Component {

    state = {
        isAuth: true,
        personalCard: [
            {
                cardPhoto: `${imgsss}`,
                cardName: 'Valentin',
                cardSurname: 'Shepelev',
                cardTelephoneNumber: '89259256281'
            },
            {
                cardName: 'Dmitry',
                cardSurname: 'Shepelev',
                cardTelephoneNumber: 'nan',
                cardPhoto: 'photo'
            }
        ]

    }

    render() {
        return (
            <div>
                <div className={classes.homePage}>
                    {
                        !this.state.isAuth
                        ? <h1>Хотите видеть больше информации о пользователях и доску объявлений? Войдите или зарегистрируйтесь!</h1>
                            : null
                    }
                    <div className={classes.cardHolder}>
                        {this.state.personalCard.map((card, index) => {
                                return (
                                    <PersonalCard
                                        key={index}
                                        Name={card.cardName}
                                        Surname={card.cardSurname}
                                        TelephoneNumber={card.cardTelephoneNumber}
                                        Photo={card.cardPhoto}
                                        isAuth={this.state.isAuth}
                                    />
                                )
                            }
                        )}
                    </div>

                </div>
            </div>
        )
    }
}

export default CardHolder