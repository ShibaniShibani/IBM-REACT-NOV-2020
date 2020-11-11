import Services from '../services';

const cartActionCreators = {
    addItemInCart(productID, cartItems){
        return (dispatch) => {
            const product = cartItems.find((item) => item.productID === productID);
            const item ={productID}
            if (product === undefined){
                item.id =0;
                item.quantity = 1;
            } else {
                item.id = product.id;
                item.quantity = product.quantity+1;
            }
            console.log(item);
            Services.save(item).then((response) => {
                const action = {
                    type: 'ADD_SUB_QUANTITY_IN_CART',
                    payload: response,
                }
                dispatch(action);
            });
        }
    },
    reduceItemInCart(productID, cartItems){
        return (dispatch) => {
            const product = cartItems.find((item) => item.productID === productID);
            const item = {productID};
            item.id = product.id;
            item.quantity = product.quantity-1;
            Services.save(item).then(() => {
                const action={
                    type:'ADD_SUB_QUANTITY_IN_CART',
                    payload: item
                };
                dispatch(action);
            });
        }
    },
    removeItemFromCart(productID , cartItems){
        return (dispatch) => {
            const product = cartItems.find((item) => item.productID === productID);
            const item = {
                id: product.id,
                quantity: 0,
                productID,
            };
            Services.save(item).then(() => {
                const action={
                    type:'REMOVE_ITEM_FROM_CART',
                    payload: item
                };
                dispatch(action);
            });
        }
    },
      getAllCartItems(){
        return (dispatch) => {
            Services.getAll().then((response) => {
                const action = {
                    type: 'INIT_CART_ITEMS',
                    payload: response
                };
                dispatch(action);
            })
        }
    }
}

export default cartActionCreators;