import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'typeface-roboto'
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'))
