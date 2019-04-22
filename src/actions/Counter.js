export const ADD_COUNTER = 'ADD_COUNTER';

const addCounter = () => ({
  type: ADD_COUNTER,
  payload: { addQuantity: 1, },
});

export default addCounter;
