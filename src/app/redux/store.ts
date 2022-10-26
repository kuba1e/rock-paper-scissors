import {applyMiddleware, createStore,  StateFromReducersMapObject } from 'redux';
import { rootReducer,reducers } from './reducers';

import { websocketMiddleware } from './websocket';

const configureStore = () => {

  const store = createStore(rootReducer, applyMiddleware(websocketMiddleware))

  return store;
}

const store = configureStore()


export type RootState = StateFromReducersMapObject<typeof reducers>;


export default store;