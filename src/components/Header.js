/*
    Header component - it's purpose is to display the header and show the number of items
    in the shopping cart, and when clicking on the icon, the drawer open with the list of items in the cart
*/

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import logo from '../images/logo.svg'
import cart from '../images/cart.svg'
import Cart from './Cart'

const Header = (props) => {
    const [scroll, setScroll] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY
            if (scrollPosition > 30) {
                setScroll(scrollPosition)
            } else {
                setScroll(0)
            }
        })
    })

    const toggleCart = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={scroll === 0 ? "header" : "header scroll"}>
            <div className="content-container--header">
                <div className="header__content">
                    <div className="header__logo">
                        <img src={logo} alt="brand-logo"/>
                    </div>
                    <div className="header__cart" onClick={toggleCart}>
                        <img src ={cart} alt="shopping-cart-icon"/>
                        <span>{props.cart.length}</span>
                    </div>
                </div>
            </div>
            <Cart active={isOpen} closeCart={toggleCart}/>
        </header>
    )
}

//Mapping redux state to props -> that are passed in to the component
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Header)