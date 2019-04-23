import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../../src/actions/Counter';
import reducer from '../../src/reducer/Counter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('addCount', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('test actions', () => {
    const expectAction = {
      type: actions.ADD_COUNTER,
      payload: { addQuantity: 1, },
    };
    expect(actions.addCounter()).toEqual(expectAction);
  });

  test('get count dispatch of action', () => {
    fetchMock.getOnce('http://example.com/count', {
      body: { count: 3, },
    });

    const store = mockStore({ count: 0, });

    return store.dispatch(actions.fetchCount()).then(() => {
      console.log(store.getState());
      console.log(store.getActions());
    });
  });

  test('test reducer', () => {
    expect(reducer(undefined, {})).toEqual({
      count: 0,
      request: false,
    });

    expect(reducer({
      count: 0,
      request: false,
    }, actions.addCounter())).toEqual({
      count: 1,
      request: false,
    });
  });
});
