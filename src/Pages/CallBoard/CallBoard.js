import React, {useState} from 'react';
import classes from "./CallBoard.css";
import BoardCard from "../../components/boardCard/BoardCard";
import AddBoardCard from "../../components/boardCard/addBboardCard";



const CallBoard = () => {


    const [createBoardCard, createBoardCardFunc] = useState(false)
    const [boardCard, addNewBoardCardFunc] = useState([
        {
            note: ' Этот подход хорош, потому что все ресурсы обрабатываются системой сборки и получат имена файлов с хэшами в производственной сборке. Вы также получите сообщение об ошибке, если файл был перемещен или удален. Недостатком является то, что это может быть громоздким, если у вас есть сотни изображений, потому что вы не можете иметь произвольные пути импорта.',
            persone: 'ME'
        }]
    )


    const reverseButtonFlag = () => {
        createBoardCardFunc(!createBoardCard)
    }


    const addNewBoardCard = (note) => {
        const stateBoardCardCopy = [...boardCard, {
            note: note,
            persone: 'mememe'
        }]

        createBoardCardFunc(!createBoardCard)
        addNewBoardCardFunc(stateBoardCardCopy)
    }


    let buttonName
    if (createBoardCard === false) {
        buttonName = "Добавить объявление"
    } else {
        buttonName = "Скрыть"
    }

    return (
        <div className={classes.callBoard}>
            <h1>Доска объявлений</h1>

            <div className={classes.addFormBoardCard}>
                <button type="button" onClick={reverseButtonFlag}>{buttonName}</button>

                {createBoardCard
                    ? <AddBoardCard
                        addNewBoardCard={addNewBoardCard}
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