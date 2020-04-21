//CART REDUCER
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.product]
        case 'REMOVE_ITEM':
            return state.filter( i => i.id !== action.product.id)
        default:
            return state
    }
}