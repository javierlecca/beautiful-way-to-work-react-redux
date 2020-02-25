import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import AllReducers from './reducers/AllReducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(AllReducers,
    composeWithDevTools(applyMiddleware(reduxThunk)));

export default store;

