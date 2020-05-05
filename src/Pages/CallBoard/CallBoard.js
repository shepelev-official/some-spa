import React, {Component} from 'react';
import PageMenu from "../../components/pageMenu/pageMenu";
import classes from "./CallBoard.css";
import BoardCard from "../../components/boardCard/BoardCard";
import AddBoardCard from "../../components/boardCard/addBboardCard";


import img from "../../promocode4.jpg"

class CallBoard extends Component {

    state = {
        createBoardCard: false,
        boardCard: [
            {
                image: `${img}`,
                note: ' Этот подход хорош, потому что все ресурсы обрабатываются системой сборки и получат имена файлов с хэшами в производственной сборке. Вы также получите сообщение об ошибке, если файл был перемещен или удален. Недостатком является то, что это может быть громоздким, если у вас есть сотни изображений, потому что вы не можете иметь произвольные пути импорта.',
                persone: 'ME'
            },
            {
                image: 'Image',
                note: 'Lorem ipsum parabelum',
                persone: 'ME'}
        ]
    }




    createBoardCard = () => {
        this.setState({
            createBoardCard: !this.state.createBoardCard
        })
    }

    addNewBoardCard = () => {
        const stateCopy = {
            createBoardCard: !this.state.createBoardCard,
            boardCard: this.state.boardCard.concat()
        }
        stateCopy.boardCard.push({
            image: 'sgagadfgadg',
            note: 'asdgasgasdgfas',
            persone: 'asdgsagasdf'
        })
        this.setState({
            stateCopy
        })
    }


    render() {

        let buttonName
        if (this.state.createBoardCard === false) {
            buttonName = "Добавить объявление"
        } else {
            buttonName = "Скрыть"
        }

        return (
            <div className={classes.callBoard}>
                <PageMenu/>
                <h1>Доска объявлений</h1>
                <div className={classes.boardHolder}>

                    <button onClick={this.createBoardCard}>{buttonName}</button>

                    {this.state.createBoardCard
                        ? <AddBoardCard
                            addNewBoardCard={this.addNewBoardCard}
                        />
                        : null
                    }

                    {this.state.boardCard.map((card, index) => {
                        return (
                            <BoardCard
                                key={index}
                                image={card.image}
                                note={card.note}
                                persone={card.persone}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default CallBoard;