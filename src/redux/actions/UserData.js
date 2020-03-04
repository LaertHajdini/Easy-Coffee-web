export const UpdateLoginEmail = (email) => {
    return {
        type: 'UPDATE_LOGIN_EMAIL',
        email: email
    }
}

export const UpdateLoginPassword = (password) => {
    return {
        type: 'UPDATE_LOGIN_PASSWORD',
        password: password
    }
}

export const UpdateRegisterEmail = (email) => {
    return {
        type: 'UPDATE_REGISTER_EMAIL',
        email: email
    }
}

export const UpdateRegisterPassword = (password) => {
    return {
        type: 'UPDATE_REGISTER_PASSWORD',
        password: password
    }
}