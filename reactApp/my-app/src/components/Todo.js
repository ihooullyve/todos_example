import React from 'react'

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        const {id, title} = this.props
        return(
            <div>{title}</div>
        )
    }
}

export default Todo