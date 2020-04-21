//CART ACTIONS - functions that are being called by components
// to pass data to the respective reducers to manipulate data
export const addItem = (product = {}) => ({
    type: 'ADD_ITEM',
    product: {
        ...product
    }
})

export const removeItem = (product = {}) => ({
    type: 'REMOVE_ITEM',
    product: {
        id: product.id
    }
})
