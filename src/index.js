import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './containers/App'
import counter from './reducers'

// 创建store对象
const store = createStore(counter)


ReactDOM.render(
  (
    <Provider store={store}>
      <App></App>
    </Provider>
  ),
  document.getElementById('root')
)

