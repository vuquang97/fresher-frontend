import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ischeck: false,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        })
    }

    componentWillReceiveProps(newprop) {
        this.setState({
            value: newprop.value
        })
    }


    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    onEdit(value) {
        this.setState({
            ischeck: !this.state.ischeck
        })
        if (value) {
            this.props.edit(value, this.props.index);
        }
    }

    onDelete(index) {
        if (confirm('Delete?')) { //eslint-disable-line
            this.props.onDelete(index);
        }
    }
    render() {
        return (
            <div className="item">
                {this.state.ischeck ?
                    <input className='input-item' value={this.state.value} type="text" name="element"
                        onChange={this.handleChange} />
                    : <span className="text-item">{this.state.value}</span>}
                <div>
                    {this.state.ischeck ?
                        <button className="luu" onClick={() => this.onEdit(this.state.value)}>Lưu</button>
                        : <span>
                            <span className="sua" onClick={() => this.onEdit(this.state.value)}>sửa</span>&nbsp;||&nbsp;
                            <span className="xoa" onClick={() => this.onDelete(this.props.index)}>xóa</span>
                          </span>}

                </div>
            </div>
        )
    }
}

export default Item;