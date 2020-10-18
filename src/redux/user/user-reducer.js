import  UserActionTypes  from './user-types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case UserActionTypes.SIGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    
    case UserActionTypes.SIGN_OUT_SUCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case UserActionTypes.SIGIN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
};

export default userReducer;