import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAll = ({ products }) => products.data;
export const getById = ({ products }, id) => {
  const filtered = products.data.filter((product) => product._id === id);
  return filtered.length ? filtered[0] : { error: true };
};

/* action name creator */
const reducerName = 'products';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

/* thunk creators */

export const fetchProducts = () => {
  return (dispatch, getState) => {
    try {
      const { products } = getState();
      if (!products.data.length || products.loading.active === false) {
        dispatch(fetchStarted());
        axios.get(`${API_URL}/products`).then((res) => {
          dispatch(fetchSuccess(res.data));
        });
      }
    } catch (err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
