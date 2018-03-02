import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// reducers
import reducer from './reducers'
// import component
import TodosApp from './containers/TodosApp'
import store from './store'

// const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <TodosApp />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
