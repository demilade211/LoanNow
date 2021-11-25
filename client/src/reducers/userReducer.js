import * as types from "../types/userTypes";

const initialState = {
    user: {}
};
 export const authReducer = (state = initialState,action)=>{
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

export const forgotPasswordReducer = (state = {},action)=>{
    switch (action.type) {
        case types.FORGOT_PASSWORD_REQUEST:
        case types.NEW_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case types.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload
            }

        case types.NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                sucess: action.payload
            }
        case types.FORGOT_PASSWORD_FAIL:
        case types.NEW_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
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