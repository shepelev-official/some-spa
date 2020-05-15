import React, {useEffect, useState} from 'react';
import classes from "./CallBoard.css";
import BoardCard from "../../components/boardCard/BoardCard";
import AddBoardCard from "../../components/boardCard/addBboardCard";
import axios from "axios";


const CallBoard = (props) => {


  const [createBoardCard, setCreateBoardCard] = useState(false)
  const [boardCard, setAddNewBoardCard] = useState([])


  const reverseButtonHandler = () => {
    setCreateBoardCard(!createBoardCard)
  }

  const addNewBoardCardHandler = async note => {
    const newCard = {
      note: note,
      persone: props.getCurrentUser()
    }

    const stateBoardCardCopy = [...boardCard, newCard]

    setCreateBoardCard(!createBoardCard)
    setAddNewBoardCard(stateBoardCardCopy)

    try {
      await axios.post('https://some-spa.firebaseio.com/callboard.json', newCard)
    } catch (e) {
      console.log(e)
    }
  }


  let buttonName
  if (createBoardCard === false) {
    buttonName = "Добавить объявление"
  } else {
    buttonName = "Скрыть"
  }

  useEffect(() => {
      const getDataFromServer = async () => {
        try {
          const response = await axios.get('https://some-spa.firebaseio.com/callboard.json')
          const cardInState = Object.keys(response.data).map((key, index) => {
            let cardNumber = index + 1
            return {...response.data[`${key}`], cardNumber}
          })
          setAddNewBoardCard(cardInState)

        } catch
          (e) {
          console.log(e)
        }
      }
      getDataFromServer()
    }
    , []
  )


  return (
    <div className={classes.callBoard}>
      <h1>Доска объявлений</h1>

      <div className={classes.addFormBoardCard}>
        <button type="button" onClick={reverseButtonHandler}>{buttonName}</button>

        {createBoardCard
          ? <AddBoardCard
            addNewBoardCard={addNewBoardCardHandler}
          />
          : null
        }
      </div>

      <div className={classes.boardHolder}>

        {boardCard.map((card, index) => {
          return (
            <BoardCard
              key={index}
              note={card.note}
              persone={card.persone}
            />
          )
        })}
      </div>
    </div>
  );
}

export default CallBoard;