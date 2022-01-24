import { createStore, applyMiddleware, compose } from "redux"
import { createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"
import rootReducer from './reducers/rootReducer';

const middleware = [thunk]

const store = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))


export const wrapper = createWrapper(store)