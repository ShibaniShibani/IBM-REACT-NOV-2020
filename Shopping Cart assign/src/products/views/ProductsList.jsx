import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductsList extends Component {
    render() {
        const { products, toggleOutOfStock, remove, removeOutOfStock , cart , addItemInCart } = this.props;
        const productItems = products.map(product => (
            <ProductItem
                key={product.id}
                product={product}
                toggleOutOfStock={toggleOutOfStock}
                remove={remove}
                cart={cart}
                addItemInCart={addItemInCart}
            />
        )
        );
        return (
            <div className="container">
            <section className="list">
                <ol>
                    {productItems}
                </ol>
                <input
                    type="button"
                    value="Remove Out Of Stock"
                    onClick={() => removeOutOfStock(products)}
                />
            </section>
            </div>
        )
    }
}

export default ProductsList;