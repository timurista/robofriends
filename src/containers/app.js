import React, { Component } from 'react'
import { connect } from 'react-redux';
import MainPage from '../components/main-page';
import { setSearchField, requestRobots } from '../actions';

export class App extends Component {
  render() {
    return <MainPage {...this.props} />
  }
}

const mapStateToProps = state => {
  const { searchField } = state.searchRobots;
  const { isPending, error, robots } = state.requestRobots;
  return {
    searchField,
    robots,
    isPending,
    error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);