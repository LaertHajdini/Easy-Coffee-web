export default function Error(state = [], action) {
    switch (action.type) {
        case 'ADD_ERROR':
            for (const error of state) {
                if (error.code === action.error.code)
                    return state
            }
            return [...state, action.error]
        case 'DELETE_ERROR':
            for (const index in state) {
                if (state[index].code === action.code) {
                    return [...state.slice(0, index), ...state.slice(index + 1)]
                }
            }
            return state
        case 'CLEAR_ERROR_LIST':
            return []
        default:
            return state
    }
}