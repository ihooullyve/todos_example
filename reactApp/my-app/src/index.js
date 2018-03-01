import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// reducers
import reducer from './reducers'
// import component
import TodoList from './containers/TodoList'
import store from './store'

// const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
