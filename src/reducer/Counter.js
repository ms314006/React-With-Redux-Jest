import { ADD_COUNTER } from '../actions/Counter';

const initState = {
  count: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default reducer;
