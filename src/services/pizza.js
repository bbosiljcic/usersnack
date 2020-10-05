import { pizzas } from './mockData';

function getAll() {
  return pizzas;
}

function getOneById(id) {
  return pizzas.find((p) => p.id === id)
}

export default {
  getAll,
  getOneById,
}
