import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/App.js'
import store from './store/rootStore.js'

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('container'));

module.hot.accept();