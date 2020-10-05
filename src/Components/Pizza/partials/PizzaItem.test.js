import React from 'react';
import renderer from 'react-test-renderer';

import PizzaItem from './PizzaItem';

it('renders correctly when there a pizza', () => {
  const pizza = {
    id: 1,
    img: test.jpg,
    incredients: ['ing1', 'ing2', 'ing3'],
    name: 'test Pizza',
    price: 100,
  }
  const tree = renderer.create(<PizzaItem pizza={pizza} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there a pizza and isDetail', () => {
  const pizza = {
    id: 1,
    img: test.jpg,
    incredients: ['ing1', 'ing2', 'ing3'],
    name: 'test Pizza',
    price: 100,
  }
  const tree = renderer.create(<PizzaItem pizza={pizza} isDetail />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there a pizza and is detail', () => {
  const pizza = {
    id: 1,
    img: test.jpg,
    incredients: ['ing1', 'ing2', 'ing3'],
    name: 'test Pizza',
    price: 100,
  }
  const tree = renderer.create(<PizzaItem pizza={pizza} isDetail />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there a pizza, is detail and has a price', () => {
  const pizza = {
    id: 1,
    img: test.jpg,
    incredients: ['ing1', 'ing2', 'ing3'],
    name: 'test Pizza',
    price: 100,
  }
  const tree = renderer.create(<PizzaItem pizza={pizza} isDetail price={200} />).toJSON();
  expect(tree).toMatchSnapshot();
});
