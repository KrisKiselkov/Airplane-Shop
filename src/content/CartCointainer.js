import { useState, useEffect } from "react";
import { store } from "../store";
import { removeItem } from "./cartSlice";


export function CartContainer(props) {
    const { cart, cartUse } = props;
    const dispatch = store.dispatch;

    const [ cartElements, setCartElements ] = useState([]);

    console.log(cart)
    console.log(cartElements)
    const removeElement = (id) => {
        const newCartElements = cartElements.filter(plane => plane !== id);
        setCartElements(newCartElements);
        dispatch(removeItem(id))
    };
    
    const createCartItem = (plane) => {
        const { fullType, image, price } = cart[plane];
        
        return (
            <div key={plane} id="cart-plane">
                <img src={image} id="cart-plane-img" alt={plane}></img>
                <div id="cart-plane-desc">
                    <h3 id="cart-plane-type">{fullType}</h3>
                    <h2 id="cart-plane-price">$ {price.toLocaleString()}</h2>
                    <p>1 Week Delivery</p>
                </div>
                <div id="cart-remove" onClick={() => removeElement(plane)}>
                    <h1>X</h1>
                </div>
                <br></br>
            </div>
        );
    };
    
    useEffect(() => {
        const newCartElements = Object.keys(cart).map(plane => createCartItem(plane));
        setCartElements(newCartElements);
    }, [cart]);

    return (
        <div className={`${cartUse ? "page-overlay" : "no-overlay"}`}>
            <div className={`cart-container ${cartUse ? "open-cart" : "closed-cart"}`}>
                <div id="cart-content">
                    <div id="cart-header">    
                        <h2 id="cart-h2">Your Shopping Cart</h2>
                        <h2 id="x" onClick={props.openCart}>X</h2>
                    </div>
                    <div id="container-body">
                        <div id="added-container">
                            {cartElements}
                        </div>
                        <div id="total-price">
                            <h2 id="total-price-h2">Total:<br></br>$ 122,200,000</h2>
                            <button id="checkout">To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    ) 
}