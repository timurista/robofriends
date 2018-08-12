import React,  { Component } from 'react'

class Header extends Component {
  state = {
    count: 0,
  }

  updateCount = () => {
    this.setState(state => ({ count: state.count + 1}))
  }

  shouldComponentUpdate(nextState) {
    if (this.state.count !== nextState.count) {
      return true
    }
    return false;
  }
  render() {
    return (
      <button data-test-id="counter-button" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    )
  }
}

export default Header;