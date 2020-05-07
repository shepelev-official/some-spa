import React, { useState} from "react";
import classes from "./cardHolder.css";
import PersonalCard from "../../components/personalCard/personalCard";
import imgsss from "../../photo.jpeg"

const CardHolder = () => {

    const [isAuth, ] = useState(true)
    const [personalCard, ] = useState([
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
    ])

    return (
        <div>
            <div className={classes.homePage}>
                {
                    !isAuth
                        ? <h1>Хотите видеть больше информации о пользователях и доску объявлений? Войдите или
                            зарегистрируйтесь!</h1>
                        : null
                }
                <div className={classes.cardHolder}>
                    {personalCard.map((card, index) => {
                            return (
                                <PersonalCard
                                    key={index}
                                    Name={card.cardName}
                                    Surname={card.cardSurname}
                                    TelephoneNumber={card.cardTelephoneNumber}
                                    Photo={card.cardPhoto}
                                    isAuth={isAuth}
                                />
                            )
                        }
                    )}
                </div>

            </div>
        </div>
    )
}

export default CardHolder