import {combineReducers} from 'redux';
import productReducer from './products';
import cartReducer from './cart';
import messageReducer from './message';


const mainReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    message: messageReducer
});


export default mainReducer;
