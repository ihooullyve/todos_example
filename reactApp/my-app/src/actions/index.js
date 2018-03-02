import axios from 'axios'
import * as url from '../url/index'

export const listTodoApi = () => {
    console.log(url.url_todos)
    return async dispatch => {
        try {
            const response = await axios.get(url.url_todos);
            dispatch(todoListAction(response.data));
        } catch (err) {
            // dispatch(loadAPIAction(false));
            // message.error('There is a problem loading apis');
            console.log(err)
        }
    };
};

export const addTodoApi = (data) => {
    return async dispatch => {
        try{
            const response = await axios.post(url.url_todos, {'title': data});
            console.log(response)
            dispatch(todoAddAction(response.data))
           
        } catch(err){
            console.log(err)
        }
    }
}

export const deleteTodoApi = (id) => {
    return async dispatch => {
        try{
            const response = await axios.delete(url.url_todos + id + '/');
            console.log(response)
            dispatch(todoDeleteAction(response.data))
        } catch(err){
            console.log(err)
        }
    }
}

// action type 
const todoListAction = data => ({
    type: 'LIST_TODO',
    data: data
})

const todoAddAction = data => ({
    type : 'ADD_TODO',
    data : data
})

const todoDeleteAction = data => ({
    type : 'DELETE_TODO',
    data : data
})