import logo from './images/logo-2.png'


export function Footer() {

    return (
        <footer>
            <img src={logo} id='foo-logo'></img>
            
            <div id='foo-container'>
                <section className='foo-about foo-txt'>
                    <h3>About</h3>
                </section>

                <section className='foo-contact foo-txt'>
                    <h3>Contact</h3>
                </section>

                <section className='foo-support foo-txt'>
                    <h3>Support</h3>
                </section>
            </div>
        </footer>
    )
}