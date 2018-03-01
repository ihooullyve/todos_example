import React from 'react'
import Todo from '../components/Todo'

class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h3>List Todo</h3>
                <Todo />
                <Todo />
                <Todo />
            </div>
        )
    }
}

export default TodoList