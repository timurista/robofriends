import React from 'react';
import { shallow, render } from 'enzyme'
import CounterButton from './counter-button'


describe('CounterButton component', () => {
  const intialProps = {}
  const setup = (props: {}) => {
    const newProps = {...intialProps, ...props};
    return shallow(<CounterButton {...newProps}/>)
  }

  it('CounterButton component exists', () => {
    const wrapper = setup();
    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('CounterButton updates the color', () => {
    const wrapper = setup({ color: 'red'});
    expect(wrapper.props().color).toBe('red')
  })

  it('cliking button upodates counter', () => {
    const wrapper = setup();
    const counter = () => wrapper.find('[data-test-id="counter-button"]');
    counter().simulate('click');
    expect(counter().text()).toBe('Count: 1')
    counter().simulate('click');
    expect(counter().text()).toBe('Count: 2')
  })

  it('only changes state if count has changed', () => {
    const wrapper = setup();
    expect(wrapper
      .instance()
      .shouldComponentUpdate({ count: 0})
    ).toBe(false)
  })
})