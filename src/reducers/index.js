/*
reducer函数模块
根据指定state和action, 返回一个新的state
纯函数:

 */
export default function counter(state=0, action) {
  console.log('counter()', state, action)

  switch (action.type) {
    case 'INCREMENT':
      return state + action.number
    case 'DECREMENT':
      return state - action.number
    default:
      return state
  }
}