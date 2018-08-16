import * as React from 'react'
import { connect } from 'react-redux';
import MainPage from '../components/main-page';
import { setSearchField, requestRobots } from '../actions';

export interface IRobot {
  name: string;
  id: number;
  email: string;
  username: string;
}

export interface Props {
  onRequestRobots: () => void;
  onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  isPending: boolean;
  error: string;
  robots: any;
  searchField: string;
};
type State = {};

export class App extends React.Component<Props, State> {
  render(): JSX.Element {
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