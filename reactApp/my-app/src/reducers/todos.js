const data = [
    {
        title : 'aaaaa'
    },
    {
        title : 'bbbbbb'
    }
]

const initialState = {
    todos : []
}

const todos = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return 1
        case 'LIST_TODO':
            console.log('===> LIST_TODO')
            console.log(action)
            return {
                ...state,
                todos : action.data
            }
        default:
            return state
    }
}

export default todos