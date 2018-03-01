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


// export const LoadAPIs = () => {
//     return async dispatch => {
//         dispatch(loadAPIAction(true));
//         try {
//             const response = await axios.get(endpoints.ListAPIs());
//             dispatch(apisLoadedAction(response.data));
//         } catch (err) {
//             dispatch(loadAPIAction(false));
//             message.error('There is a problem loading apis');
//         }
//     };
// };

// action type 
const todoListAction = data => ({
    type: 'LIST_TODO',
    data: data
})