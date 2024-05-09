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

    const navClick = () => {
        const ham = document.getElementById('hamburger');
        const info = document.getElementById('mobile-nav');
        const links = document.getElementById('mobile-nav-links'); 
    
        ham.addEventListener('click', () => {
            ham.classList.toggle('is-active');
            info.classList.toggle('is-active-info');
            
        })
    
        links.addEventListener('click', () => {
            ham.classList.toggle('is-active');
            info.classList.toggle('is-active-info');
        })
    }


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

                    <button id="hamburger" onClick={navClick}>
                        <div class="bar"></div>
                    </button>

                    <Cart openCart={openCart} cartUse={cartUse} cart={cartState.cart}/>
                    <CartContainer openCart={openCart} cartUse={cartUse} cart={cartState.cart} dispatch={cartDispatch}/>
                </nav>

                <nav id="mobile-nav" onClick={navClick}>
                    <ul id="mobile-nav-links">
                        <NavLink to={'/'}><li>Home</li></NavLink>
                        <NavLink to={'/airbus'}><li>Airbus</li></NavLink>
                        <NavLink to={'/boeing'}><li>Boeing</li></NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}

