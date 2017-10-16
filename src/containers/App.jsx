import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Counter from '../components/Counter'
import * as actionCreators from "../actions"

//映射状态
const mapStateToProps = (state) => ({ // 返回的是包含需要传递给Counter组件的一般属性的对象
  count: state
})


// 映射调用dispatch去更新状态的函数
const mapDispatchToProps = (dispatch) => ({ // 返回的是包含需要传递给Counter组件的函数属性的对象
  /*
  increment: (number) => dispatch(increment(number)),
  decrement: (number) => dispatch(decrement(number))
  */
  ...bindActionCreators(actionCreators, dispatch)
})

/*
bindActionCreators(actionCreators, dispatch)
返回的是一个对象, 对象中包含是多个方法
{
increment: (number) => dispatch(increment(number)),
decrement: (number) => dispatch(decrement(number))
}
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)