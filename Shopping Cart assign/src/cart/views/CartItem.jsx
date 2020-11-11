import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import cartActionCreators from '../actions';

const CartItem = (props) => {
    const {cartItem , productsList ,cartItems} = props;
    const product = productsList.find((item) => {
        return item.id === cartItem.productID;
    });
    const { name, description, price, category , id:productID } = product;
    return (
       
        <li>
            <span> {name} </span> <br />
            <span>Category :{category} </span>
            <div>Description : {description}</div>
            <div className="price">Cost per Quantity For Selected Item: INR {price}</div>
            <div className="price"> Quantity : {cartItem.quantity} </div>
            <div className="price">TOTAL Cost for selcted Items  :  INR {cartItem.quantity*price}</div>
            <br />
            <div>
                <span>
                    <input type="button" value="-" onClick={() => props.reduceItemInCart(productID , cartItems)} />
                </span>&nbsp;
                <span>
                    quantity : {cartItem.quantity} 
                </span>
                <span>&nbsp;
                    <input type="button" value="+" onClick={() => props.addItemInCart(productID, cartItems)} />
                </span>
            </div>
            <input type="button" value="Remove" onClick={() => props.removeItemFromCart(productID, cartItems)} />
        </li>
     
    );

}

const mapStateToProps = (state) => {
    return {
        productsList : state.products,
        cartItems: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(cartActionCreators,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(CartItem);