import { combineReducers } from 'redux';
import productReducer from './productsReducer';
import productEditReducer from './productEdit';

const mainReducer = combineReducers({
    products: productReducer,
    productEdit: productEditReducer,
});

export default mainReducer;
