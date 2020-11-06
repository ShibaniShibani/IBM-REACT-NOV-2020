import React, { Component } from 'react';



class ProductEditor extends Component {

    state = {

        name: '',

        description: '',

        price: 0,

        category:''

    };


    onAddNewProductClick = () => {
        const { addNew,categories } = this.props,
            { name, description, price ,category} = this.state;
            var x =category;
            if(categories && categories.length>0){
                let c = categories.find(cat => cat.id == parseInt(category))
                x = c ? c.name:categories[0].name
            }
        addNew(name, description, price, x);
    };

    render() {
        const {categories} = this.props
    
        return (

          <section className="edit">

            <div className="field">

              <label htmlFor="">Name :</label>

              <input

                type="text"

                onChange={evt => this.setState({ name: evt.target.value })}

              />

            </div>

            <div className="field">

              <label htmlFor="">Description :</label>

              <input

                type="text"

                onChange={evt =>

                  this.setState({ description: evt.target.value })

                }

              />

            </div>

            <div className="field">

              <label htmlFor="">Price :</label>

              <input

                type="number"

                onChange={evt =>

                  this.setState({ price: parseInt(evt.target.value) })

                }

              />

            </div>

            <div className="field">

              <label htmlFor="">Category</label>

              <div className="field">
                    <label htmlFor="">Category</label>
                    <select onChange={evt => this.setState({ category: evt.target.value})}>
                        {categories.map(cat => <option  key={cat.id} value={cat.id}>{cat.name}</option>)}
                    </select>
                </div>
                  

            </div>

            <div className="field">

              <input

                type="button"

                value="Add Product"

                onClick={this.onAddNewProductClick}

              />

            </div>

          </section>

        );

    }

}



export default ProductEditor;