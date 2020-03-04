import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Main from './components/Main'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from './redux/ReduxErntry'


const store = createStore(Root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
, document.getElementById('root'))