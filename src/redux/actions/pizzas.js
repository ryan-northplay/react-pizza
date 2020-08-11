import {SET_PIZZAS, SET_LOADED} from '../actionTypes'
import axios from 'axios';

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: SET_LOADED,
    payload: false,
  });

  axios
      .get(
        `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
          sortBy.order
        }`,
      )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});

// axios
//   .get(
//     `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
//       sortBy.order
//     }`,
//   )
//   .then(({ data }) => {
//     dispatch(setPizzas(data));
//   });

// axios
//   .get(
//     `./db.json?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
//       sortBy.order
//     }`,
//   )
//   .then(({ data }) => {
//     dispatch(setPizzas(data));
//   });
