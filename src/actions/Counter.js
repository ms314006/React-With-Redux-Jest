export const ADD_COUNTER = 'ADD_COUNTER';

export const addCounter = () => ({
  type: ADD_COUNTER,
  payload: { addQuantity: 1, },
});

export const FETCH_COUNT_REQUEST = 'FETCH_COUNT_REQUEST';

export const fetchCountRequest = () => ({
  type: FETCH_COUNT_REQUEST,
});

export const FETCH_COUNT_SUCCESS = 'FETCH_COUNT_SUCCESS';

export const fetchCountSuccess = body => ({
  type: FETCH_COUNT_SUCCESS,
  count: body.count,
});

export const fetchCount = () => (
  (dispatch) => {
    dispatch(fetchCountRequest());
    return fetch('http://example.com/count')
      .then(res => res.json())
      .then(body => dispatch(fetchCountSuccess(body)));
  }
);
