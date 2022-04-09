import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('Calculator renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

