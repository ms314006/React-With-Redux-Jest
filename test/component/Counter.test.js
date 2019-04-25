import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../../src/actions/Counter';
import reducer from '../../src/reducer/Counter';
import { Counter } from '../../src/component/Counter/Counter';

Enzyme.configure({ adapter: new Adapter(), });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const setup = () => {

  const props = {
    count: 0,
    addCount: jest.fn(),
  };

  const counter = shallow(<Counter {...props} />);

  return {
    props,
    counter,
  };
};

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
    const initialData = { count: 0, request: false, };
    expect(reducer(undefined, {})).toEqual(initialData);

    expect(reducer(initialData,
      actions.addCounter())).toEqual(
      {
        count: 1,
        request: false,
      }
    );

    expect(reducer(initialData,
      actions.fetchCountRequest())).toEqual(
      {
        count: 0,
        request: true,
      }
    );

    expect(reducer(initialData,
      actions.fetchCountSuccess({ count: 2, }))).toEqual(
      {
        count: 2,
        request: false,
      }
    );
  });

  test('<Counter />', () => {
    const { counter, props, } = setup();

    counter.find('div').find('button').at(0).simulate('click');
    expect(props.addCount.mock.calls.length).toBe(1);
  });


});
