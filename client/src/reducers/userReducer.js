import * as types from "../types/userTypes";

const initialState = {
    user: {}
};
 const authReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.LOGIN_REQUEST:
        case types.REGISTER_USER_REQUEST:
        case types.LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case types.LOGIN_SUCCESS:
        case types.REGISTER_USER_SUCCESS:
        case types.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null
            }

        case types.LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case types.LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        
        case types.LOGIN_FAIL:
        case types.REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        
        case types.CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export default authReducer;