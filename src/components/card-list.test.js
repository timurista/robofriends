// import * as React from 'react';
// import { shallow, render } from 'enzyme'
// import CardList from './card-list'


describe('CardList component', () => {
  const intialProps = {
    robots: [
      { id: 1, name: 'John Snow', username: 'johnjohn', email: 'john@email.com'}
    ]
  }
  const setup = (props: {}) => {
    const newProps = {...intialProps, ...props};
    // return shallow(<CardList {...newProps}/>)
  }

  it('CardList component exists', () => {
    const wrapper = setup();
    // expect(wrapper.debug()).toMatchSnapshot();
  })
})