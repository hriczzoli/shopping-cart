/*
    Product component - it's purpose is to define the layout and functionality of a product
    It is also connected to the store to have access to the items currently placed in the shopping cart
*/

import React, { useState, useEffect } from 'react'
import  { connect } from 'react-redux'

const Product = ({ product, addItemToCart, cart }) => {
    //Creating local state to check whether item has been added to the shopping cart
    const [isClicked, setIsClicked] = useState(false)

    //Updating the component's state every time the cart is changing
    useEffect(() => {
        //Mapping over current state of the shopping cart
        cart.map((item) => {
            //Checking each items's ID against the product's ID that the component is rendering
            if(item.id !== product.id){
                //If it's not in the cart setting checked state to false/unchecked
                setIsClicked(false)
            } else {
                //If it's a match we're setting checked state to true/checked
                setIsClicked(true)
            }
        })
        //If the shopping cart is empty we are setting every component's checked state to false
        if(cart.length === 0) {
            setIsClicked(false)
        }
    }, [cart])

    return (
        <div className="product__container">
            <div className="product__container__header">
                <img src={product.image_link} alt="clothing-item"/>
                <div className="product__container__overlay--details">
                    <div className="left">
                        <button 
                            className={isClicked ? "active": ""}
                            disabled={product.availability === "out of stock"}
                            onClick={addItemToCart}
                        >{isClicked ? <span>&#10003;</span> : <span>+</span>}
                        </button>
                    </div>
                    <div className="right">
                        {product.availability === "out of stock" ? 
                        <span className="notification">{product.availability}</span> :
                        <span></span>
                        }
                        <span className="price">{product.price}</span>
                    </div>
                </div>
            </div>
            <div className="product__container__bottom--details">
                <span>{product.title} - {product.size}</span>
                <span>{product.color}</span>
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

export  default connect(mapStateToProps)(Product)