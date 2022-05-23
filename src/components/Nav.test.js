import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

it('Nav renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Nav /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
