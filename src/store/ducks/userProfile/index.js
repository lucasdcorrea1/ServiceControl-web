import { createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = [];

export const addUserProfile = createAction('ADD_USER_PROFILE');

export default createReducer(INITIAL_STATE, {
 	[addUserProfile.type]: (state, action) => [ action.payload ]
});
