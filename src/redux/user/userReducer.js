import { UserActionTypes } from './userTypes'

const INITIAL_STATE = {
	user: {
		name: 'farooq bellow',
		profileImage: 'https://images.unsplash.com/photo-1518671645931-e1d946a64b17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VsZmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
	},
	admin: {
        name: 'Abdullah Gumi',
		profileImage: 'https://images.unsplash.com/photo-1518671645931-e1d946a64b17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VsZmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionTypes.SET_ADMIN_USER:
			return {
				...state,
				admin: action.payload
			}
		default:
			return state;
			
	}
}

export default userReducer;