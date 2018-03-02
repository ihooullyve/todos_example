import React from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import { addTodoApi, listTodoApi, deleteTodoApi } from '../actions/index'

class TodosApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
        this.addTodo = this.addTodo.bind(this)
        this.initData = this.initData.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.initData()
    }

    initData = () => {
        this.props.dispatch(listTodoApi())
    }

    addTodo = (data) => {
        this.setState({value : ''})
        console.log(this.state.value)
        this.props.dispatch(addTodoApi(data))
    }

    changeValue = (data) => {
        this.setState({ value : data })
    }

    handleDelete = (id) => {
        console.log('handleDelete')
        console.log(id)
        this.props.dispatch(deleteTodoApi(id))
    }

    render(){
        const { todos, loadPage } = this.props.todos
        if(loadPage){
            window.location.reload()
        }
        return(
            <div>
                <AddTodo value={this.state.value} changeValue={this.changeValue} addTodo={this.addTodo} />
                <TodoList todos={todos} handleDelete={this.handleDelete}  />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        todos : state.todos,
        loadPage : state.loadPage
    }
}

export default connect(mapStateToProps)(TodosApp)