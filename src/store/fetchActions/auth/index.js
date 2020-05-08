import api from '../../../services/Api';
import { login } from '../../ducks/auth';
import { notify } from '../../../helpers';

export const authLogin = (user) => {
	return (dispatch) => {
		api
			.post('api/v1/users/auth', user)
			.then((response) => {
				localStorage.setItem('token', response.data.token);
				dispatch(login());
				window.location.pathname = '/dashboard';
			})
			.catch((error) => {
				const { message } = error.response.data;
				if (message === undefined) {
					notify('E-mail ou senha inválidos', '🤷‍♀️', 'error', 'top-right', 2000)
				} else {
					notify(`${message}`, '🤷‍♀️', 'error', 'top-right', 2500)
				}
			});
	};
};
