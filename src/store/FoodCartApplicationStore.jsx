import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
/* reduxImmutableStateInvariant is to ensure state is not getting mutated in the store in case any then throws
 error notifying the developer to fix it which is configured only for dev environment considering the fact that
 meant only for developer to ensure store delivers high performance with immutable state */
 import combinedSagas from '../sagas/rootSagas';
 import rootReducer from '../reducers/rootReducer';

 const configureStore = () => {
    const sagaMiddleWare = createSagaMiddleware();
    const middleWares = [sagaMiddleWare];
    const composables = [applyMiddleware(...middleWares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),];
    const enhancer = compose(...composables);
    const store = createStore(rootReducer, enhancer);
    combinedSagas.map (saga => (sagaMiddleWare.run(saga)));

    return store;
 };

 export default configureStore;