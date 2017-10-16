import React, {Component} from 'react'
import {connect} from 'react-redux'
import Counter from '../components/Counter'

const mapStateToprops = (state) => ({
  count: state
})

// 定义ActionCreator
const incrementAction = (number) => ({type: 'INCREMENT', number})
const decrementAction = (number) => ({type: 'DECREMENT', number})

const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(incrementAction(number)),
  decrement: (number) => dispatch(decrementAction(number))
})


export default connect(
  mapStateToprops,  // 映射state
  mapDispatchToProps // 映射更新函数
)(Counter)