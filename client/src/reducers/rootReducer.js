import { combineReducers } from "redux";
import {authReducer,forgotPasswordReducer,userReducer} from "./userReducer";

export default combineReducers({
    authReducer,
    forgotPasswordReducer,
    userReducer
})