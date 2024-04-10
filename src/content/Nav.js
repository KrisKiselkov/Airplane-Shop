import logo from '../logo.png'
import { NavLink } from 'react-router-dom';
import { Cart } from './CartButton';
import { CartContainer } from './CartCointainer';
import { useState } from 'react';
import { store } from '../store';

export function Nav() {
    const cartState = store.getState();
    const cartDispatch = store.dispatch;
    const [cartUse, setCartUse] = useState(false);

    const openCart = () => {
        setCartUse(!cartUse);
    }

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const cart = document.getElementById('cart-button');
        const logo = document.getElementById('logo');
        const scrollHeight = window.scrollY;
        header.classList.toggle('sticky', scrollHeight > 0);
        if (scrollHeight) {
            cart.style.right = '8em'
            logo.style.left = '7em';
        } else {
            cart.style.right = '2em'
            logo.style.left = '2em';
        }
      })
    return (
        <>
            <header>
                <nav>
                <img src={logo} alt="logo" id="logo"></img>
                    <ul id="nav-list">
                        <NavLink to={'/'} className='nav-a'><li>Home</li></NavLink>
                        <NavLink to={'/airbus'} className='nav-a'><li>Airbus</li></NavLink>
                        <NavLink to={'/boeing'} className='nav-a'><li>Boeing</li></NavLink>
                        
                    </ul>
                    <Cart openCart={openCart} cartUse={cartUse}/>
                    <CartContainer openCart={openCart} cartUse={cartUse} cart={cartState.cart} dispatch={cartDispatch}/>
                </nav>
            </header>
        </>
    )
}

