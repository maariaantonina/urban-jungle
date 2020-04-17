/* selectors */
export const countItems = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const ADD_PRODUCT = createActionName('ADD_PRODUCT');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

export const addProduct = (payload) => ({ payload, type: ADD_PRODUCT });

/* thunk creators */

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
    case ADD_PRODUCT:
      if (
        statePart.products.filter(
          (product) => product._id === action.payload._id
        ).length > 0
      ) {
        return {
          ...statePart,
          products: statePart.products.map((product) => {
            if (product._id === action.payload._id) {
              return {
                ...product,
                amount: product.amount + action.payload.amount,
              };
            } else {
              return product;
            }
          }),
        };
      } else {
        return {
          ...statePart,
          products: [...statePart.products, action.payload],
        };
      }

    default:
      return statePart;
  }
};
