import React from 'react'

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    deleteTodo = (id) => {
        this.props.handleDelete(id)
    }

    render(){
        const {id, title} = this.props
        return(
            <li>
                <span style={{ marginRight: '30px' }}>{title}</span>
                <button onClick={e => this.deleteTodo(id)} >x</button>
            </li>
        )
    }
}

export default Todo