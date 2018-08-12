import React, { Component } from 'react'
import CardList from './card-list';
import Scroll from './scroll';
import Header from './header';
import SearchBox from './search-box';
import ErrorBoundary from './error-boundary';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => this.props.robots.filter(
    robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
  )

  render() {
    const { onSearchChange, isPending, error } = this.props;

    if (error) {
      return <h2 id="error">ERROR: {error}</h2>
    }

    if (isPending) {
      return <h1 id="loading" className='tc'>Loading</h1>
    }

    return (
      <div className='tc'>
        <Header />
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filteredRobots()} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default MainPage;