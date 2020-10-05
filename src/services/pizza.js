import { pizzas } from './mockData';

function getAll() {
  return pizzas;
}

function getOneById(id) {
  return pizzas.find((p) => p.id === parseInt(id, 10));
}

export default {
  getAll,
  getOneById,
}
