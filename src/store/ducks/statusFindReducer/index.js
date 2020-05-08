import { createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = [];

export const addStatusFind = createAction('ADD_STATUS_FIND');

export default createReducer(INITIAL_STATE, {
	[addStatusFind.type]: (state, action) => [ ...action.payload ],
});
