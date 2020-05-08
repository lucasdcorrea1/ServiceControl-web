import { createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = [];

export const addUser = createAction('ADD_USER');
export const addUsers = createAction('ADD_USERS');



export default createReducer(INITIAL_STATE, {
	[addUser.type]: (state, action) => [ ...state, action.payload ],
	[addUsers.type]: (state, action) => [ ...action.payload ],
});
