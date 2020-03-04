export default function Plan(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_PLAN':
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}