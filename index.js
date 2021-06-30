import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import App from './modules/App'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('container'));

module.hot.accept();