import React from 'react'
import Todo from '../components/Todo'
// import { connect } from 'react-redux'
import { listTodoApi } from '../actions/index'

class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const { todos, handleDelete } = this.props
        return(
            <ol>
                {
                    todos && todos.map((v,k) =>
                        <Todo key={k} {...v} handleDelete={handleDelete} />
                     )
                }
            </ol>
        )
    }
}

export default TodoList