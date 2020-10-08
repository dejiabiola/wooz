import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger"

import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
const userInfo = JSON.parse(localStorage.getItem("user1"))
const initialSate = {userInfo};
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  initialSate,
 composeWithDevTools(applyMiddleware(...middleware))
);

export default store;