/*
    CartProduct component - it's purpose is to determine the layout and functionality of
    the items that are in the shopping cart. Could have used the already existing Product component
    but then it would have had too many conditionals to properly render both different layouts
    and provide the necessary functionality.
*/

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../actions/cart'

const CartProduct = ({ product, total, setTotal, dispatch }) => {
    //Creating local state to keep track of the count as in
    //the number of items and the price
    let [count, setCount] = useState(1)
    let [price, setPrice] = useState(parseFloat(product.price.split(" ")[0]))
    const productPrice = parseFloat(product.price.split(" ")[0])

    //Function to calculate total price of items in shopping cart
    const calculateTotal = (price) => {
        total += price
        setTotal(total)
    }

    //To constantly update price when the component updates
    useEffect(() => {
        calculateTotal(price)
    }, [])

    //Function to increase count of specific item and calculate new price
    const increaseCount = () => {
        count++
        setCount(count)
        let newPrice = count *= productPrice
        setPrice(newPrice)
        calculateTotal(productPrice)
    }

    //Function to decrease count of specific item and calculate new price
    const decreaseCount = () => {
        count--
        setCount(count)
        let newPrice = count *= productPrice
        setPrice(newPrice)
        let decreaseTotal = total - productPrice
        setTotal(decreaseTotal)
        if (count === 0) {
            dispatch(removeItem(product))
        }
    }

    return (
        <div className="cart__product__container">
            <div className="cart__product--image">
                <img src={product.image_link} alt="clothing-item"/>
            </div>
            <div className="cart__product--description">
                <span><strong>{product.title}</strong></span>
                <span>{product.size} / {product.color}</span>
                <div className="cart__product--description--counter">
                    <div>
                        <span 
                            className="counter--button"
                            onClick={increaseCount}
                        >+
                        </span>
                        <span className="count">{count}</span>
                        <span 
                            className="counter--button"
                            onClick={decreaseCount}
                        >-
                        </span>
                    </div>
                    <span>{price} EUR</span>
                </div>
            </div>
        </div>
    )
}

//Mapping redux state to props -> that are passed in to the component
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartProduct)