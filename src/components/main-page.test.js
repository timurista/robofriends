import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './main-page'

const initialProps = {
  searchField: '',
  robots: [],
  isPending: false,
  error: false,
  onSearchChange: jest.fn(Promise.resolve()),
  onRequestRobots: jest.fn().mockReturnValue(Promise.resolve())
}

const setup = (props: {}) => {
  const newProps = {...initialProps, ...props}
  return shallow(<MainPage {...newProps} />)
}

it('renders the app', () => {
  const wrapper = setup()
  expect(wrapper.debug()).toMatchSnapshot()
})

it('filters robots and returns empty array', () => {
  const wrapper = setup()
  expect(wrapper.instance().filteredRobots([])).toEqual([])
})

it('filters robots and returns empty array', () => {
  const robots = [
    {id: 3, name: 'john', email: 'john@gmail.com'}
  ];
  const wrapper = setup({ searchField: 'a', robots })
  expect(wrapper
    .instance()
    .filteredRobots()
  ).toEqual([])
})

it('shows error', () => {
  const wrapper = setup({ error: 'error'});
  expect(wrapper.find('#error')).toHaveLength(1)
})

it('shows pending', () => {
  const wrapper = setup({ isPending: true});
  expect(wrapper.find('#loading')).toHaveLength(1)
})

it('filters robots and returns john only', () => {
  const robots = [
    {id: 3, name: 'john', email: 'john@gmail.com'},
    {id: 3, name: 'ggg', email: 'ggg@gmail.com'},
  ];
  const wrapper = setup({ searchField: 'j', robots })
  expect(wrapper
    .instance()
    .filteredRobots()
  ).toEqual([{"email": "john@gmail.com", "id": 3, "name": "john"}])
})