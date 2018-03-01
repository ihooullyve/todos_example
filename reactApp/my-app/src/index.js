import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import component
import TodoList from './containers/TodoList'

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
