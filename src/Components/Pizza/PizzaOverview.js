import React, { useState, useEffect } from 'react';

import PizzaItem from './partials/PizzaItem'
import pizzaService from '../../services/pizza';

export default function PizzaOverview() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    setPizzas(pizzaService.getAll());
  }, []);

  return (
    <div>
      <h2>Get one of our freshly made pizzas</h2>
      { pizzas.map((p) => (<PizzaItem pizza={p} key={p.id} />)) }
    </div>

  )
}
