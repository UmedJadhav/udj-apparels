import  UserActionTypes  from './user-types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case UserActionTypes.GOOGLE_SIGIN_SUCCESS:
    case  UserActionTypes.EMAIL_SIGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    
    case UserActionTypes.GOOGLE_SIGIN_FAILURE:
    case UserActionTypes.EMAIL_SIGIN_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
};

export default userReducer;