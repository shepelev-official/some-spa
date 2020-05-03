import React, {Component} from 'react';
import PageMenu from "../../components/pageMenu/pageMenu";

class Notes extends Component {
    render() {
        return (
            <div>
                <PageMenu/>
                <h1>Мои Заметки</h1>
            </div>
        );
    }
}

export default Notes;