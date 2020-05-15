import React, {useState} from "react";
import classes from "./cardHolder.css";
import PersonalCard from "../../components/personalCard/personalCard";


const CardHolder = (props) => {

  const [isAuth,] = useState(props.isAuth)
  const [personalCard,] = useState([
    {
      cardEmail: 'Valentin',
    },
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
                  Email={card.cardEmail}
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