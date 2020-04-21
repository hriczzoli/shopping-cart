//FILTERS REDUCER
const filtersReducerDefaultState = {
    color: '',
    size: ''
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_COLOR_FILTER':
            return {
                ...state,
                color: action.color
            };
        case 'SET_SIZE_FILTER':
            return {
                ...state,
                size: action.size
            };
        default:
            return state;
    }
}