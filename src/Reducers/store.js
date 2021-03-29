import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './rootReducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(rootReducers, persistedState, applyMiddleware(thunk));
store.subscribe(() => {
  saveState(store.getState());
});
export default store;
