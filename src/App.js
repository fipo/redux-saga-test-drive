import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './styles/global.css'

import Comments from './components/comments'

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header>
        <h1>Welcome to Saga</h1>
      </header>
      <Comments />
    </div>
  </Provider>
)

export default App
