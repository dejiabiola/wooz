
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types'

const initialState = {
  token: null,
  isAuthenticated:null,
  isLoading:false,
  user:null
};

export default function(state = initialState,action){
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading:true 
      }
    case USER_LOADED:
      return {
        ...state,
        isLoading:false,
        isAuthenticated:true,
        user: action.payload
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated:true,
        isLoading:false,
        token: action.payload.user.accessToken
      }
    // case AUTH_ERROR:
    // case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('user');
      localStorage.removeItem('testing');
      return {
        ...state,
        isLoading:false,
        isAuthenticated:false,
        token:null,
        user:null,
      }
    default:
      return state;
  }
}