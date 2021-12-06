import axios from "axios";
import * as types from "../types/userTypes";

const Axios = axios.create({
    baseURL: "https://loannow-api0.herokuapp.com/api/v1",
})
// Login
export const login = (email,password) => async (dispatch) =>{
     try {
         dispatch({type: types.LOGIN_REQUEST })

         const {data} = await Axios.post("/login",{email,password})

         dispatch({
             type: types.LOGIN_SUCCESS,
             payload: data.user 
        })
     } catch (error) {
         dispatch({
             type: types.LOGIN_FAIL,
             payload: error.response.data.errMessage
         })
     }
}

// Register user
export const registerUser = (userData) => async (dispatch) =>{
    try {
        dispatch({type: types.REGISTER_USER_REQUEST })

        const {data} = await Axios.post("/register",userData)

        dispatch({
            type: types.REGISTER_USER_SUCCESS,
            payload: data.user 
       })
    } catch (error) {
        dispatch({
            type: types.REGISTER_USER_FAIL,
            payload: error.response.data.errMessage
        })
    }
}

// Request loan
export const requestLoan = (userData) => async (dispatch) =>{
    try {
        dispatch({type: types.APPLY_FOR_LOAN_REQUEST })

        const {data} = await Axios.post("/loan",userData)

        dispatch({
            type: types.APPLY_FOR_LOAN_SUCCESS,
            payload: data.success
       })
    } catch (error) {
        dispatch({
            type: types.APPLY_FOR_LOAN_FAIL,
            payload: error.response.data.errMessage
        })
    }
}

// Get loan history
export const getLoanHistory = () => async (dispatch) =>{
    try {
        dispatch({type: types.GET_LOAN_HISTORY_REQUEST })

        const {data} = await Axios.get("/loan")

        dispatch({
            type: types.GET_LOAN_HISTORY_SUCCESS,
            payload: data.loanHistory
       })
    } catch (error) {
        dispatch({
            type: types.GET_LOAN_HISTORY_FAIL,
            payload: error.response.data.errMessage
        })
    }
}

// Load user
export const loadUser = () => async (dispatch) =>{
    try {
        dispatch({type: types.LOAD_USER_REQUEST })

        const {data} = await Axios.get("/me")

        dispatch({
            type: types.LOAD_USER_SUCCESS,
            payload: data.user 
       })
    } catch (error) {
        dispatch({
            type: types.LOAD_USER_FAIL,
            payload: error.response.data.errMessage
        })
    }
}

// Update profile
// export const updateProfile = (userData) => async (dispatch) =>{
//     try {
//         dispatch({type: types.UPDATE_PROFILE_REQUEST })

//         const {data} = await Axios.put("/me/update",userData)

//         dispatch({
//             type: types.UPDATE_PROFILE_SUCCESS,
//             payload: data.success
//        })
//     } catch (error) {
//         dispatch({
//             type: types.UPDATE_PROFILE_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// Forgot password
export const forgotPassword = (email) => async (dispatch) =>{
    try {
        dispatch({type: types.FORGOT_PASSWORD_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await Axios.post("/password/forgot",email,config)

        dispatch({
            type: types.FORGOT_PASSWORD_SUCCESS,
            payload: data.message
       })
    } catch (error) {
        dispatch({
            type: types.FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Reset password
export const resetPassword = (token,passwords) => async (dispatch) =>{
    try {
        dispatch({type: types.NEW_PASSWORD_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await Axios.put(`/password/reset/${token}`,passwords,config)

        dispatch({
            type: types.NEW_PASSWORD_SUCCESS,
            payload: data.success
       })
    } catch (error) {
        dispatch({
            type: types.NEW_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

// Logout user
export const logOut = () => async (dispatch) =>{
    try {

        await Axios.get("/logout")

        dispatch({
            type: types.LOGOUT_SUCCESS,
       })
    } catch (error) {
        dispatch({
            type: types.LOGOUT_FAIL,
        })
    }
}

export const clearError = ()=>async (dispatch)=>{
    dispatch({
        type: types.CLEAR_ERRORS,
    })
}