import api from '../../../services/Api';
import { addUsers, addUser } from '../../ducks/user';
import { addUserProfile } from '../../ducks/userProfile';

export const getAllUsers = () => {
	return (dispatch) => {
		api
			.get('/api/v1/users')
			.then((res) => {
				dispatch(addUsers(res.data));
			})
			.catch(console.log);
	};
};

export const getUser = () => {
	return (dispatch) => {
		api
			.get('/api/v1/users/profile')
			.then((res) => {
				dispatch(addUserProfile(res.data));
			})
			.catch(console.log);
	};
};

export const getUsersFilterStatus = (status) => {
	return (dispatch) => {
		api
			.get(`/api/v1/users/filter/${status}`)
			.then((res) => {
				dispatch(addUsers(res.data));
			})
			.catch(
				dispatch(addUsers([]))
			);
	};
};

export const addUserFetch = (user) => {
	return (dispatch) => {
		api
			.post('/api/v1/users', user)
			.then((res) => dispatch(addUser(res.data)))
			.catch(alert('Não addd'));
	};
};