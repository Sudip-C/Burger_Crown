import { AUTHECTICATION_FAILED, AUTHECTICATION_PENDING, AUTHECTICATION_SUCCESS } from "../actionTypes/auth"

let User = localStorage.getItem('User')
if(User!==undefined && User!==null){
    User = JSON.parse(User)
}

const initialState ={
    user: User||null,
    token:localStorage.getItem("token")||null,
    isLoading:false,
    isError:false,
    isAuth:false
}

export const AuthReducer =(state=initialState,{type,payload}) =>{
    switch(type){
        case AUTHECTICATION_PENDING:
            return {...state, isLoading:true}
        case AUTHECTICATION_FAILED:
            return { ...state, isError:true}
        case AUTHECTICATION_SUCCESS:
            return { ...state,isLoading:false,isError:false,token:payload.token,user:payload,isAuth:true}
        case "LOGOUT":
            return { ...state, isLoading:false,isError:false,token:null,user:null,isAuth:false}
        case "SIGNUP_PENDING":
            return {...state, isLoading:true}
        case "SIGNUP_FAILED":
            return { ...state, isError:true}
        case "SIGNUP_SUCCESS":
            return { ...state,isLoading:false,isError:false,token:payload.token,user:payload,isAuth:true}
        default:
            return state
    }
}