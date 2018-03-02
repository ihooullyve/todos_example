import React from 'react'

class AddTodo extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleChange = (e) => {
        this.props.changeValue(e.target.value)
    }

    handleSubmit = () => {
        this.props.addTodo(this.props.value)
    }

    render(){
        return(
            <div>
                <input type='text' name='add_todo' value={this.props.value} onChange={e => this.handleChange(e)} />
                <button onClick={this.handleSubmit.bind(this)} >Add</button>
            </div>
        )
    }
}

export default AddTodo