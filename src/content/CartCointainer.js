

export function CartContainer(props) {
    const { cart, cartUse } = props;
    
    const cartElements = [];

    const createCartItem = (plane) => {
        const items = cart[plane]
        return (
            <div key={plane} id="cart-plane">
                <img src={items.image} id="cart-plane-img"></img>
                <div id="cart-plane-desc">
                    <h3 id="cart-plane-type">{plane}</h3>
                    <h2 id="cart-plane-price">$ {items.price.toLocaleString()}</h2>
                    <p>1 Week Delivery</p>
                </div>
                <div id="cart-remove">
                    <h1>X</h1>
                </div>
                <br></br>
            </div>
        )
    }

    for (let plane in cart) {
        cartElements.push(createCartItem(plane));
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
                        {cartElements}
                    </div>
                </div>
            </div>
        </div>    
    ) 
}