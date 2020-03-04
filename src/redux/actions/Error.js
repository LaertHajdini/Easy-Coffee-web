export const AddError = (title, description, code) => {
    return {
        type: 'ADD_ERROR',
        error: {
            title: title,
            description: description,
            code: code
        }
    }
}

export const DeleteError = (code) => {
    return {
        type: 'DELETE_ERROR',
        code: code
    }
}

export const ClearErrorList = () => {
    return {
        type: 'CLEAR_ERROR_LIST'
    }
}