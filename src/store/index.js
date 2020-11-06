
import { createStore, combineReducers } from 'redux';



import productReducer from '../reducers/productReducer';

import categoriesReducer from '../reducers/categoriesReducer';



const rootReducer = combineReducers({

    products : productReducer,

    categories : categoriesReducer

});



//const store = createStore(productsReducer);

//const store = createStore(categoriesReducer);



const store = createStore(rootReducer);

// store state = { products : [], categories : []}

export default store;