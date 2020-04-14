export const initialState = {
  products: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    products: [],
  },
  categories: ['succulents', 'cacti', 'flowering', 'palms'],
};
