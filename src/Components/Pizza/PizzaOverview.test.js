import React from 'react';
import renderer from 'react-test-renderer';

import pizzaService from '../../services/pizza';
import PizzaOverview from './PizzaOverview';

it('renders correctly when there are no pizzas', () => {
  const tree = renderer.create(<PizzaOverview />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a single pizza correctly', () => {
  const fakePizza = {
    id: 1,
    img: test.jpg,
    incredients: ['ing1', 'ing2', 'ing3'],
    name: 'Test Pizza',
    price: 100,
  };

  jest.spyOn(pizzaService, 'getAll').mockImplementation(() => [fakePizza]);

  const tree = renderer.create(<PizzaOverview />).toJSON();
  expect(tree).toMatchSnapshot();
});
