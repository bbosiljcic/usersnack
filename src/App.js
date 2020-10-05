import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PizzaOveview from './Components/Pizza/PizzaOverview';
import PizzaDetail from './Components/Pizza/PizzaDetail';
import Header from './Components/Layout/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/pizza/:pizzaId">
          <PizzaDetail />
        </Route>
        <Route path="/">
          <PizzaOveview />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
