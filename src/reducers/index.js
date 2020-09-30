const defaultState={
    value: 0,
    msg: "我是一个计算器"
}
export default (state = defaultState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        state.value=state.value+1
        return state
      case 'DECREMENT':
        state.value=state.value-1;
        return state;
      default:
        return state
    }
}
  