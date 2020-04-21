/*
    ProductList component - it's purpose is to fetch the list of products from the store
    and render them according to the current state of the store
*/

import React from 'react'
import { connect } from 'react-redux'
import selectProducts from '../selectors/products'
import { addItem } from '../actions/cart'
import Product from './Product'

const ProductsList = (props) => {
    return (
        <div className="products__container">
            {props.products.map((product) => (
                //Mapping over the products array coming from the store and 
                //rendering a Product component for each of the items (objects) in the array
                <Product 
                    key={product.id}
                    product={product}
                    addItemToCart={() => (props.dispatch(addItem(product)))}
                />
            ))}
        </div>
    )
}

//Mapping redux state to props -> that are passed in to the component
const mapStateToProps = (state) => {
    return {
        products: selectProducts(state.products, state.filters),
        cart: state.cart
    }
}

export default connect(mapStateToProps)(ProductsList)