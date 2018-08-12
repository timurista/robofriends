import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../actions/constants'

import * as reducers from './';

describe('searchRobots', () => {

  const initialStateSearch = {
    searchField: '',
  }

  it('should return initial state with search field', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
  })

  it('should handle change search field', () => {
    expect(reducers.searchRobots(initialStateSearch, {      
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })
  })
})

describe('requestRobots', () => {
  const intialStateRobots = {
    robots: [],
    isPending: false,
    error: "",
  }

  it('should return initial state with search field', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(intialStateRobots)
  })

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(intialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toHaveProperty('isPending', true)
  })

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    const robots = [{
      id: '123',
      name: 'test',
      email: 'test@gmail.com'
    }]
    expect(reducers.requestRobots(intialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: robots
    })).toEqual({ ...intialStateRobots, robots, isPending: false })
  })

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    const robots = [];
    const error = 'some error';
    expect(reducers.requestRobots(intialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: error
    })).toEqual({ ...intialStateRobots, error, robots, isPending: false })
  })
})