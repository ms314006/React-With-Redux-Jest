import { ADD_COUNTER, FETCH_COUNT_REQUEST, FETCH_COUNT_SUCCESS } from '../actions/Counter';

const initState = {
  count: 0,
  request: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case FETCH_COUNT_REQUEST:
      return {
        ...state,
        request: true,
      };
    case FETCH_COUNT_SUCCESS:
      return {
        ...state,
        count: action.count,
        request: false,
      };
    default:
      return state;
  }
};

export default reducer;
