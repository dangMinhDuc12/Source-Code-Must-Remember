
const data = JSON.parse(localStorage.getItem('cart'));


const initialState =  data ? data : [];



const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            
            const atcState = JSON.parse(JSON.stringify(state));
            let index = findProductInCart(atcState, action.product);
            if(index !== -1) {
                atcState[index].quantity += action.quantity;
            }else {
                atcState.push({
                    product: action.product,
                    quantity: action.quantity
                });
            }
            localStorage.setItem('cart', JSON.stringify(atcState));
            
            return atcState;

        case 'REMOVE_PRODUCT':
            const rpState = JSON.parse(JSON.stringify(state));
            let indexToDelete = findProductInCart(rpState, action.product);
            if(indexToDelete !== -1) {
                rpState.splice(indexToDelete, 1);
            }
            localStorage.setItem('cart', JSON.stringify(rpState));

            return rpState;


        case 'UPDATE_QUANTITY':
            const uqState = JSON.parse(JSON.stringify(state));
            let indexToUpdate = findProductInCart(uqState, action.product);
            if(indexToUpdate !== -1) {
                if(uqState[indexToUpdate].quantity === 1 && action.quantity === 1) {
                    uqState[indexToUpdate].quantity += action.quantity;
                }else if (uqState[indexToUpdate].quantity === 1 && action.quantity === -1) {
                    uqState.splice(indexToUpdate, 1);
                }else {
                    uqState[indexToUpdate].quantity += action.quantity;
                }

                
            }
            localStorage.setItem('cart', JSON.stringify(uqState));

            return uqState;



            


        default:
            return state;
    }
}

const findProductInCart = (cart, product) => {
    let index = -1;
    if(cart.length > 0) {
        cart.forEach((item, i) => {
            if(item.product.id === product.id) {
                index = i;
            }
        })
    }
    return index;
}

export default cartReducer;