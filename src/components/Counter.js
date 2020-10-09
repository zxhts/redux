import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  // eslint-disable-next-line 
  constructor(props) {
    super(props);
  }

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
        this.props.onIncrement()
      }
  }

  incrementIfEven = () => {
    if (this.props.value % 2 === 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement, title} = this.props
    return (
      <div>
            <h1>{title}</h1>
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                +
                </button>
                {' '}
                <button onClick={onDecrement}>
                -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                Increment if odd
                </button>
                {' '}
                <button onClick={this.incrementIfEven}>
                Increment if even
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                Increment async
                </button>
            </p>
      </div>    
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter