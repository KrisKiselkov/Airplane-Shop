import plane from './images/plane-2.png';
import cloud from './images/clouds.png'
import { Link } from 'react-router-dom';
import { planesObject } from './planesObject';

export function DescriptionHero() {

    const bestPlanes = [ planesObject[0], planesObject[1], planesObject[2], planesObject[6], planesObject[7] ];

    const mouseOverBtn = () => {
        const prmBtn = document.getElementById('primary-btn');
        const scdBtn = document.getElementById('secondary-btn');

        const mouseOver = () => {
            prmBtn.style.backgroundColor='transparent';
            prmBtn.style.color='#1644cc';

            scdBtn.style.backgroundColor='#1644cc';
            scdBtn.style.color='#fff';
        };

        const mouseOut = () => {
            prmBtn.style.backgroundColor='#1644cc';
            prmBtn.style.color='#fff';

            scdBtn.style.backgroundColor='transparent';
            scdBtn.style.color='#1644cc';
        }

        prmBtn.addEventListener('mouseover', mouseOver);
        prmBtn.addEventListener('mouseout', mouseOut);
    };

    return (
        <>
            <section id="description">
                <img src={plane} alt='plane' id='plane-2'></img>
                <img src={cloud} alt='cloud' id='cloud-1'></img>
                <img src={cloud} alt='cloud' id='cloud-2'></img>

                <div id='para-desc'>
                    <h1 id='para-desc-h1'>DEDICATED TO<br></br><span className='qa-res'>Quality</span> & <span className='qa-res'>Results</span></h1>
                    <p id='para-desc-p'>Lorem ipsum dolor sit amet, consectetur dolore magna aliqua. Lorem ipsum dolor sit amet, consesn dolore magna aliqua. Lorem ipsum, magna aliqua.</p>

                    <button id='primary-btn' onMouseOver={mouseOverBtn}><h3>Buy</h3></button>

                    <button id='secondary-btn'><h3>Sell</h3></button>
                </div>
            </section>

            <section id='brief-rating'>
                
            </section>

            <section id='best-sell'>
                <h1 id='best-h1'>Best Sellers</h1>
                <div id='best-planes'>
                    {bestPlanes.map((plane) => (
                        <Link to={`/${plane.id}`} className='link'><div className='plane-card'>
                        <img src={plane.image} className='plane-img' alt={plane.alt}></img>
                        <div className='plane-desc'>
                            <h3 className='plane-type'>{plane.type}</h3>
                            <p className='plane-brand'>{plane.brand}</p>
                            <h4 className='plane-price'>$ {plane.price.toLocaleString()}</h4>
                        </div>
                    </div></Link>
                    ))}
                </div>
            </section>
        </>    
    )
}