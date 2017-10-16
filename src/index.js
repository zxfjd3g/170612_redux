import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import counter from './reducers'
import App from './containers/App'

// 创建store对象
const store = createStore(counter) // 内部调用reducer()得到初始化状态 state=0

ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById('root')
)