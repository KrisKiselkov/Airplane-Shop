import plane from './images/plane-2.png';
import cloud from './images/clouds.png'
import { Link } from 'react-router-dom';

export function DescriptionHero() {
    const bestPlanes = [
        {
            image: plane,
            fullType: 'Boeing 737-800',
            type: 'B737-800',
            brand: 'Boeing',
            description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
            price: '$ 120,000,000',
            alt: 'B737',
            id: 737
        },
        {
            image: plane,
            fullType: 'Airbus A320-300',
            type: 'A320-300',
            brand: 'Airbus',
            description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
            price: '$ 135,000,000',
            alt: 'A320',
            id: 320
        },
        {
            image: plane,
            type: 'B747-800',
            brand: 'Boeing',
            price: '$ 420,000,000',
            alt: 'B747'
        },
        {
            image: require('./images/plane.jpg') ,
            type: 'A380-800',
            fullType: 'Airbus A380-800',
            brand: 'Airbus',
            description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
            price: '$ 445,000,000',
            alt: 'A380',
            id: 380
        },
        {
            image: plane,
            fullType: 'Boeing 747-800',
            type: 'B747-800',
            description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
            brand: 'Boeing',
            price: '$ 420,000,000',
            alt: 'B747',
            id: 747
        },
      ];

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

            <section id='best-sell'>
                <h1 id='best-h1'>Best Sellers</h1>
                <div id='best-planes'>
                    {bestPlanes.map((plane) => (
                        <Link to={`/${plane.id}`} className='link'><div className='plane-card'>
                        <img src={plane.image} className='plane-img' alt={plane.alt}></img>
                        <div className='plane-desc'>
                            <h3 className='plane-type'>{plane.type}</h3>
                            <p className='plane-brand'>{plane.brand}</p>
                            <h4 className='plane-price'>{plane.price}</h4>
                        </div>
                    </div></Link>
                    ))}
                </div>
            </section>
        </>    
    )
}