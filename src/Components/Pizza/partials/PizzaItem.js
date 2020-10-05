import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, Card } from '@material-ui/core';

import './PizzaItem.css';
import joinArrayPhonetically from '../../../helpers/formating';

export default function PizzaItem(props) {
  const { pizza, isDetail } = props;
  const history = useHistory();

  return (
    <Card className="pizza-item">
      <div className="pizza-item--content">
        <div>
          <h3>{pizza.name}</h3>
          <span className="pizza-item--incredients">{joinArrayPhonetically(pizza.incredients)}</span>
        </div>
        <div className="pizza-item--actions">
          {
            !isDetail
            && (
            <Button variant="outlined" color="primary" onClick={() => history.push(`/pizza/${pizza.id}`)}>
              Order a {pizza.name}
            </Button>
            )
          }
          <div className="pizza-item--price">
            USD {pizza.price.toFixed(2)}
          </div>
        </div>
      </div>
      <img src={`/assets/pizzas/${pizza.img}`} alt={`tasty ${pizza.name}`} />

    </Card>
  )
}

PizzaItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    incredients: PropTypes.array,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  isDetail: PropTypes.bool,
};
