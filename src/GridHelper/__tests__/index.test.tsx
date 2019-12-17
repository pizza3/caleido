import React from 'react';
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from 'enzyme';
import GridHelper from '../index'


configure({
    adapter: new Adapter()
});

describe('<GridHelper/>', () => {
    it('It shallow renders GridHelper', () => {
        const component = shallow(<GridHelper />)
        expect(toJson(component)).toMatchSnapshot();
    })

    it('It shallow renders GridHelper when props provided', () => {
        const component = shallow(<GridHelper mode='HexagonRotation' />)
        expect(toJson(component)).toMatchSnapshot();
    })
})