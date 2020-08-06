import {ADD_PIZZA_CART} from '../actionTypes'

export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj
})
