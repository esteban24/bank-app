import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Header from '../Header';

let pathMap = {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});


describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Header/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  it('should show Home component for /charges router (getting array of routes)', () => {
    expect(pathMap['/charges']).toBe(Home);
  })
  it('should show Create component for /charges/new router', () => {
    expect(pathMap['/charges/new']).toBe(Create);
  })
  it('should show Show component techdomain for /news router', () => {
    expect(pathMap['/charges/show']).toBe(Show);
  })
})
