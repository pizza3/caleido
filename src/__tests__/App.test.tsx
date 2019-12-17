import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Adapter from "enzyme-adapter-react-16";
import {configure, shallow } from 'enzyme';
import toJson from "enzyme-to-json";

configure({
  adapter: new Adapter()
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unshallowComponentAtNode(div);
// });


describe('<App/>',()=>{
  const wrapper = shallow(<App/>)
  it('checks App render',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    expect(toJson(wrapper)).toMatchSnapshot();
  })
})