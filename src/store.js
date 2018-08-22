import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(reducers, composeWithDevTools(), applyMiddleware(ReduxThunk));