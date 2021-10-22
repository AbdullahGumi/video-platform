import { UserActionTypes } from './userTypes'


export const setAdminUser = (user) => ({
	type: UserActionTypes.SET_ADMIN_USER,
	payload: user
})