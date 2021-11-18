import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"



const middleware = [thunk, logger];

const initialReduxState = {};

const reduxStore = createStore(rootReducer,initialReduxState,composeWithDevTools(applyMiddleware(...middleware)))

export default reduxStore