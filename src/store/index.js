import reducer from '../reducer/Counter';
import { createStore } from 'redux';

const store = createStore(reducer);

// 上線要刪掉
window.store = store;

export default store;
