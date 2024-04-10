

export function CartContainer(props) {
    const { cart, cartUse } = props;
    console.log(cart)
    const cartElements = [];
    console.log(cartElements)
    const createCartItem = (plane) => {
        const items = cart[plane]
        return (
            <>
                <img src={items.image} id="cart-plane-img"></img>
                <h3 id="cart-plane-type">{plane}</h3>
                <h2 id="cart-plane-price">{items.price}</h2>
            </>
        )
    }

    for (let plane in cart) {
        cartElements.push(createCartItem(plane));
        console.log(plane)
    }


    return (
        <div className={`${cartUse ? "page-overlay" : "no-overlay"}`}>
            <div className={`cart-container ${cartUse ? "open-cart" : "closed-cart"}`}>
                <div id="cart-content">
                    <div id="cart-header">    
                        <h2 id="cart-h2">Your Shopping Cart</h2>
                        <h2 id="x" onClick={props.openCart}>X</h2>
                    </div>
                    <div id="added-container">
                        <div id="cart-plane">
                            {cartElements}
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    ) 
}