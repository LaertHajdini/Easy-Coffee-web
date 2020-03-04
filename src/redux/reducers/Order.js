export default function Order(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_ORDER':
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}