import React, { Component } from 'react';
import Item from './Item';
import '../App.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            listIt: ['']
        }
        this.handleChange = this.handleChange.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        let listIt = JSON.parse(localStorage.getItem('ITEM'));
        this.setState({
            listIt: listIt
        })
    }

    handleChange(event) {
        let content = event.target.value;
        this.setState({
            content: content
        });
        console.log(this.state.content)
    }

    addItem() {
        const content = this.state.content;
        let listIt = this.state.listIt.slice();
        
        if(content) {
            listIt.push(content);
        }
        this.setState({
            content: '',
            listIt: listIt
        });
        localStorage.setItem('ITEM', JSON.stringify(listIt));
    }

    onEdit(value, index) {
        let listIt = this.state.listIt.slice();
        listIt[index] = value;
        this.setState({
            listIt: listIt
        });
        localStorage.setItem('ITEM', JSON.stringify(listIt));
    }

    onDelete(index) {
        let listIt = this.state.listIt.slice();
        listIt.splice(index, 1);
        this.setState({
            listIt: listIt,
        });
        localStorage.setItem('ITEM', JSON.stringify(listIt));
    }

    render() {
        let renderElement = this.state.listIt.map((it, index) => {
            return (
                <Item key={index} value={ it } index={index} edit={ this.onEdit } onDelete={ this.onDelete } />
            )
        });
        return (
            <div className="container">
                <h1>Todo List</h1>
                <div className="board">
                    <div className="add-item">
                    <input type="text" name="content" value={this.state.content} onChange={ this.handleChange }/>
                        <button onClick={ () => this.addItem() }>Thêm mới</button>
                    </div>
                    <div className="list-item">
                     { renderElement }
                    </div>
                </div>

            </div>
        )
    }
}

export default Board;