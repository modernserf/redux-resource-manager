import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import applyResourceManager from '../../src';
import appState from './reducers/app_state';
import resources from './resources';

let wrappedCreateStore = createStore;
wrappedCreateStore = applyMiddleware(createLogger({ collapsed: true }))(wrappedCreateStore);
wrappedCreateStore = applyResourceManager(resources)(wrappedCreateStore);

const rootReducer = combineReducers({ appState });
export default wrappedCreateStore(rootReducer);