

import React, { Component } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';



import ProductStats from './views/ProductStats';

import ProductEditor from './views/ProductEditor';

import ProductList from './views/ProductList';

import './index.css';

import productActionCreators from './actions';



class Products extends Component {

    render() {

        const { data ,toggleOutOfStock, remove, removeOutOfStock, addNew , categories } = this.props;

        return (

            <div>

                <h3>Products</h3>

                <hr />

                <ProductStats products={data} />

                <ProductEditor addNew={addNew}  categories={categories}/>

                <ProductList

                    products={data}

                    toggleOutOfStock={toggleOutOfStock}

                    remove={remove}

                    removeOutOfStock={removeOutOfStock}

                />

            </div>

        )

    }

}



function mapStateToProps(storeState){

    const products = storeState.products;
    const category = storeState.categories;

    return { data : products,categories:category};

}



function mapDispatchToProps(dispatch){

    const productActionDispatchers = bindActionCreators(productActionCreators, dispatch);

    return productActionDispatchers;

}



export default connect(mapStateToProps, mapDispatchToProps)(Products);