import { createStore } from 'redux';
import reducer from '../reducer/Counter';

const store = createStore(reducer);

// 上線要刪掉
window.store = store;

export default store;
