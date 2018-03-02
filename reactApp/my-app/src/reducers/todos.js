const initialState = {
    todos : [],
    loadPage : false,
}

const todos = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            state.todos.push(action.data)
            return {
                ...state,
                todo : action.data
            }
        case 'LIST_TODO':
            return {
                ...state,
                todos : action.data
            }
        case 'DELETE_TODO':
            console.log(action)
            return {
                ...state,
                loadPage : true
            }
        default:
            return state
    }
}

export default todos