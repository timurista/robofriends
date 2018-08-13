import * as actions from './';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

const mockStore = configureStore([thunkMiddleware])
const mockFetcher = jest.fn(() => Promise.resolve({ data: []}));

it('should create an action to search robots', () => {
  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('should create an action to search robots', () => {
  const text = 'wooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requesting robots API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots())
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction)
})

it('handles requesting REQUEST_ROBOTS_FAILED', () => {
  const store = mockStore();
  global.fetch = jest.fn(() => Promise.reject({ json: () => new Error('some error')}))
  return store.dispatch(actions.requestRobots()).then(data => {
    const action = store.getActions();
    const failedAction = {
      type: REQUEST_ROBOTS_FAILED,
      payload: expect.anything()
    };
    expect(action).toContainEqual(failedAction)
  })
})

it('handles requesting REQUEST_ROBOTS_SUCCESS', () => {
  const store = mockStore();
  const payload = [{ id: '123', username: 'test', email: 'test@gmail.com'}];
  global.fetch = jest.fn(() => Promise.resolve({ json: () => payload}))
  return store.dispatch(actions.requestRobots()).then(data => {
    const action = store.getActions();
    const successAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload
    };
    expect(action).toContainEqual(successAction)
  })
})
