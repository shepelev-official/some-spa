import React, {useEffect, useState} from "react";
import classes from "./cardHolder.css";
import PersonalCard from "../../components/personalCard/personalCard";
import axios from "axios";


const CardHolder = (props) => {

  const [isAuth,] = useState(props.isAuth)
  const [personalCard, setPersonalCard] = useState([])

  useEffect(() => {
    const initialState = async () => {
      try {
        const response = await axios.get('https://some-spa.firebaseio.com/users.json')
        const personalCards = Object.keys(response.data).map((key) => {
          return  response.data[`${key}`]
        })
        setPersonalCard(personalCards)
      } catch (e) {
        console.log(e)
      }

    }
    initialState()

  }, [])

  return (
    <div>
      <div className={classes.homePage}>
        {
          !isAuth
            ? <h1>Хотите видеть информацию о пользователях и доску объявлений? Пройдите авторизацию!</h1>
            : null
        }
        <div className={classes.cardHolder}>
          {personalCard.map((card, index) => {
              return (
                <PersonalCard
                  key={index}
                  Email={card.email}
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