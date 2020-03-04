const stateTemplate = {
    login: {
        email: '',
        password: ''
    },
    register: {
        email: '',
        password: ''
    }
}

export default function UserData(state = stateTemplate, action) {
    switch (action.type) {
        case 'UPDATE_LOGIN_EMAIL':
            return {
                ...state,
                login: {
                    ...state.login,
                    email: action.email
                }
            }
        case 'UPDATE_LOGIN_PASSWORD':
            return {
                ...state,
                login: {
                    ...state.login,
                    password: action.password
                }
            }
        case 'UPDATE_REGISTER_EMAIL':
            return {
                ...state,
                register: {
                    ...state.register,
                    email: action.email
                }
            }
        case 'UPDATE_REGISTER_PASSWORD':
            return {
                ...state,
                register: {
                    ...state.register,
                    password: action.password
                }
            }
        default:
            return state
    }
}