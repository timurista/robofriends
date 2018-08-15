// import * as React from 'react';
// import { shallow } from 'enzyme';
// import { App } from './app'

const initialProps = {
  searchField: '',
  robots: [],
  isPending: false,
  error: false,
  onSearchChange: jest.fn(() => Promise.resolve()),
  onRequestRobots: jest.fn().mockReturnValue(Promise.resolve())
}

const setup = (props?: {}) => {
  const newProps = {...initialProps, ...props}
  // return shallow(<App {...newProps} />)
}

it('renders the app', () => {
  const wrapper = setup()
  expect(wrapper).toHaveLength(1)
})