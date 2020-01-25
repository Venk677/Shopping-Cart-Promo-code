import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducers';

const initialState = {};

const middleware=[thunk]

const store = createStore(
    rootreducer,
    initialState,
    compose(applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    
    )
);
export default store;