export const addToCart = (product, quantity) => ({
    type: 'ADD_TO_CART',
    product,
    quantity
});


export const changeMessage = (message) => ({
    type: 'CHANGE_MESSAGE',
    message
});


export const removeProductInCart = (product) => ({
    type: 'REMOVE_PRODUCT',
    product
})

export const updateQuantity = (product, quantity) => ({
    type: 'UPDATE_QUANTITY',
    product,
    quantity

})