import axios from "axios";
import * as types from "../types/userTypes";

// Login
export const login = (email,password) => async (dispatch) =>{
     try {
         dispatch({type: types.LOGIN_REQUEST })

         const {data} = await axios.post("/api/v1/login",{email,password})

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

        const {data} = await axios.post("/api/v1/register",userData)

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

// Load user
export const loadUser = () => async (dispatch) =>{
    try {
        dispatch({type: types.LOAD_USER_REQUEST })

        const {data} = await axios.get("/api/v1/me")

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

//         const {data} = await axios.put("/api/v1/me/update",userData)

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

// Logout user
export const logOut = () => async (dispatch) =>{
    try {

        await axios.get("/api/v1/logout")

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