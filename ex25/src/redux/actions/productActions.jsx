export const addProduct = (product) => (dispatch) => {
  // Simulate async API call
  setTimeout(() => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product,
    });
  }, 500);
};