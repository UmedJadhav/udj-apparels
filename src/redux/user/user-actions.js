import  UserActionTypes  from './user-types';

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGIN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGIN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGIN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGIN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCESSS
})

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
})