export const addToCart = (product) => (dispatch) => {
  // Simulate async API call
  setTimeout(() => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  }, 500);
};