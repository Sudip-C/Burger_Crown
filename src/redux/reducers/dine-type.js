
const initialState = {
    dineType: 'dine-in',
}

const DineType = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DINE_TYPE':
            return {
                ...state,
                dineType: action.payload,
            }
        default:
            return state
    }
}
export default DineType