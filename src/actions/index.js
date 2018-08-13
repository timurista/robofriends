import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import apiFetch from './api-fetch';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
})

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  return apiFetch('https://jsonplaceholder.typicode.com/users')
    .then(users => dispatch({ 
      type: REQUEST_ROBOTS_SUCCESS, 
      payload: users,
    }))
    .catch(error => dispatch({
      type: REQUEST_ROBOTS_FAILED,
      payload: error,
    }))
}
