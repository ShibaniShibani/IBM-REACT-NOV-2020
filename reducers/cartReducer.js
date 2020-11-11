function cartReducer(currentState = [] , action){
    if(action.type === 'ADD_SUB_QUANTITY_IN_CART'){   // 1. ADD ITEMS TO CART, SUB/ADD ITEM FROM CART
        let newState =[];
            let productFoundInCart = false;
            newState = currentState.map((product) => {
                if (action.payload.productID === product.productID){
                    productFoundInCart = true;
                    return { ...product , quantity: action.payload.quantity};
                }
                return product;
            });
            if (!productFoundInCart){
                newState.push(action.payload);
            };
     
        return newState;
    }
    if(action.type === 'REMOVE_ITEM_FROM_CART'){ // REMOVE FROM CART
        if(action.payload.quantity === 0 ){
            let newState =[]
            newState = currentState.filter((product) => action.payload.productID !== product.productID);
           return newState
        }
    }
    if(action.type === 'INIT_CART_ITEMS'){ // LOAD CART PRODUCTS
        return action.payload;
    }
    return currentState;
}

export default cartReducer;