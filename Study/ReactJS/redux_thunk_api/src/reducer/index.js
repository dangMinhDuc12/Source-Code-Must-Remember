import { combineReducers } from 'redux';
import productReducer from './productsReducer';

const mainReducer = combineReducers({
    products: productReducer,
});

export default mainReducer;
