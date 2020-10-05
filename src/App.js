import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import PizzaOveview from './Components/Pizza/PizzaOverview';
import PizzaDetail from './Components/Pizza/PizzaDetail';
import Header from './Components/Layout/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Container maxWidth="md">
          <Switch>
            <Route path="/pizza/:pizzaId">
              <PizzaDetail />
            </Route>
            <Route path="/">
              <PizzaOveview />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
