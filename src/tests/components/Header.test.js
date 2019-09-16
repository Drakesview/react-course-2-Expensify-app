import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'
//react-test-renderer

let startLogout, wrapper;

test('should render Header correctly', () => {
    wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot();
    
    //expect(wrapper.find('h1').text()).toBe('Expensify')
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput())
})



test('should call startLogout on button click', () => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
    
});