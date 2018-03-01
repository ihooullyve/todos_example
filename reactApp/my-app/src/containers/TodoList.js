import React from 'react'
import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { listTodoApi } from '../actions/index'

class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.initData = this.initData.bind(this);
        this.initData()
    }

    initData = () => {
        this.props.dispatch(listTodoApi())
    }

    render(){
        const {todos } = this.props.todos
        console.log(todos)
        return(
            <div>
                {
                    todos.map((v,k) => <Todo key={k} {...v} /> )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        todos : state.todos
    }
}

export default connect(mapStateToProps)(TodoList)