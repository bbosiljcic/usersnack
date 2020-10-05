import { Card } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import pizzaService from '../../services/pizza';
import PizzaItem from './partials/PizzaItem';

export default function PizzaDetail() {
  const { pizzaId } = useParams();
  const { history } = useHistory();

  const [pizza, setPizza] = useState(null);

  // if there is no pizzaId supplied we send them back to the overview
  if (!pizzaId) history.push('/');

  useEffect(() => {
    setPizza(pizzaService.getOneById(pizzaId));
  }, [pizzaId]);

  console.log('PizzaDetail', pizzaId, pizza)

  if (!pizza) return <div />;

  return (
    <div>
      <h2>Order a juicy {pizza.name} pizza</h2>
      <PizzaItem pizza={pizza} isDetail />
      <Card>
        <h3>
          Pick your extras
        </h3>
      </Card>
    </div>

  )
}
