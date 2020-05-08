import { addStatusFind } from '../../ducks/statusFindReducer';

export const addUserFetch = (state) => {
	return addStatusFind(state);
};
