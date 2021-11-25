import { combineReducers } from "redux";
import {authReducer,forgotPasswordReducer} from "./userReducer";

export default combineReducers({
    authReducer,
    forgotPasswordReducer
})