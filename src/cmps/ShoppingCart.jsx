// const { useState, useEffect } = React
// const { useSelector, useDispatch } = ReactRedux

import { useDispatch, useSelector } from 'react-redux'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { CLEAR_CART, REMOVE_TOY_FROM_CART } from '../store/reducers/toy.reducer.js'
import { SET_USER_SCORE } from '../store/reducers/user.reducer.js'

export function ShoppingCart({ isCartShown }) {
    const dispatch = useDispatch()
    // DONE: get from storeState
    const shoppingCart = useSelector(storeState => storeState.toyModule.shoppingCart)
    // DONE: get from storeState
    const user = useSelector(storeState => storeState.userModule.loggedinUser)

    function removeFromCart(carId) {
        console.log(`Todo: remove: ${toyId} from cart`)
        // DONE: use dispatch
        dispatch({ type: REMOVE_TOY_FROM_CART, carId })
    }

    function getCartTotal() {
        return shoppingCart.reduce((acc, toy) => acc + toy.price, 0)
    }

    function onCheckout() {
        const amount = getCartTotal()
        userService.updateScore(-amount)
            .then(score => {
                dispatch({ type: SET_USER_SCORE, score })
                dispatch({ type: CLEAR_CART })
                showSuccessMsg(`Charged you: $ ${amount.toLocaleString()}`)
            })
    }

    if (!isCartShown) return <span></span>
    const total = getCartTotal()
    return (
        <section className="cart" >
            <h5>Your Cart</h5>
            <ul>
                {
                    shoppingCart.map((toy, idx) => <li key={idx}>
                        <button onClick={() => {
                            removeFromCart(toy._id)
                        }}>x</button>
                        ${toy.price}
                    </li>)
                }
            </ul>
            <p>Total: ${total} </p>
            <button disabled={!user || !total} onClick={onCheckout}>Checkout</button>
        </section>
    )
}
