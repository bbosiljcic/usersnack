import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Button,
  Card,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import './PizzaDetail.css';

import PizzaItem from './partials/PizzaItem';

import pizzaService from '../../services/pizza';
import extraService from '../../services/extra';
import orderService from '../../services/order';

const allExtras = extraService.getAll();

function calculatePrice(pizza, extras) {
  let finalPrice = pizza.price;

  extras.forEach((e) => {
    finalPrice += e.price
  });

  return finalPrice;
}

export default function PizzaDetail() {
  const { pizzaId } = useParams();
  const { history } = useHistory();

  const [pizza, setPizza] = useState(null);
  const [extras, setExtras] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState(false);

  // if there is no pizzaId supplied we send them back to the overview
  if (!pizzaId) history.push('/');

  useEffect(() => {
    setPizza(pizzaService.getOneById(pizzaId));
  }, [pizzaId]);

  const handleExtraChange = (event) => {
    setExtras(event.target.value);
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOrder(false);
  };

  if (!pizza) return <div />;

  const snackBar = (
    <Snackbar open={order} autoHideDuration={6000} onClose={handleSnackBarClose}>
      <Alert onClose={handleSnackBarClose} severity="success">
        Your order was placed successfully!
      </Alert>
    </Snackbar>
  )

  return (
    <div>
      <h2>Order a juicy {pizza.name} pizza</h2>
      <PizzaItem pizza={pizza} isDetail price={calculatePrice(pizza, extras)} />
      <Card className="pizza-detail">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <h3>Extras</h3>
            <FormControl className="extra">
              <InputLabel>Pick your extras</InputLabel>
              <Select
                className="extra--select"
                id="extras"
                multiple
                value={extras}
                onChange={handleExtraChange}
                renderValue={(selected) => (
                  <div className="extra--chip--wrap">{selected.map((value) => (<Chip key={value.name} label={value.name} className="extra--chip" />))} </div>
                )}
              >
                {allExtras.map((extra) => (
                  <MenuItem key={extra.name} value={extra} className="extra--menu-item">
                    {extra.name} <span className="extra--menu-item--price">${extra.price.toFixed(2)}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <h3>Your Information</h3>
            <TextField className="pizza-detail--input" id="name" label="Your Name" variant="outlined" value={name} onChange={(e) => { setName(e.target.value) }} />
            <TextField className="pizza-detail--input" id="address" label="Your Address" variant="outlined" value={address} onChange={(e) => { setAddress(e.target.value) }} />
          </Grid>
        </Grid>
        <Button
          className="pizza-detail--order"
          variant="contained"
          color="primary"
          disabled={!address || !name}
          onClick={() => {
            orderService.placeOrder({
              pizza,
              extras,
              name,
              address,
            });
            setOrder(true);
          }}
        >
          <span role="img" aria-label="pizza" className="pizza-detail--order--emoji">🍕</span>Place the order
        </Button>
        {snackBar}
      </Card>
    </div>
  )
}
