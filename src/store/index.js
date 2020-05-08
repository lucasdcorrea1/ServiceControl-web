import { configureStore } from '@reduxjs/toolkit';

import userReducer from './ducks/user';
import userProfileReducer from './ducks/userProfile';
// import layoutReducer from './ducks/layout';
// import cartReducer from './ducks/cart';
import authReducer from './ducks/auth';

export default configureStore({
	reducer: {
		users: userReducer,
		userProfile: userProfileReducer,
		auth: authReducer
	}
});
