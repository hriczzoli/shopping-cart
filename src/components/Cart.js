/*
  Cart component - it's purpose is to define layout and functionality of the shopping cart component,
  based on the current state of the store and display the total amount for checkout.
*/

import React, { useState } from 'react'
import { connect } from 'react-redux'
import cart from '../images/cart.svg'
import logo from '../images/logo.svg'
import CartProduct from './CartProduct'

const Cart = (props) => {
  const [total, setTotal] = useState(0)

  return (
    <div
      className={props.active ? 'cart__container active' : 'cart__container'}
    >
      <div className="cart__logo__container">
        <img src ={logo} alt="logo"/>
      </div>
      <div className="cart__container__header">
        <div className="cart__container__header--info">
          <h2>Shopping Cart</h2>
          <div className="header__cart">
            <img src ={cart} alt="shopping-cart-icon"/>
            <span>{props.cart.length}</span>
          </div>
        </div>
        <span onClick={props.closeCart}>X</span>
      </div>
      <div className="cart__container__products--scrollable">
        {props.cart.map(item => (
          <CartProduct 
            key={item.id} 
            product={item}
            total={total}
            setTotal={setTotal}
          />
        ))}
      </div>
      <div className="cart__summary__container">
        <div className="cart__summary--description">
          <span>Total:</span>
          <span>{total} EUR</span>
        </div>
        <div className="cart__summary--checkout-btn">
          Checkout
        </div>
      </div>
    </div>
  );
}

//Mapping redux state to props -> that are passed in to the component
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)