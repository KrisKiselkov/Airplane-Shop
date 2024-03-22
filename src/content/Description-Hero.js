import plane from './images/plane-2.png';
import cloud from './images/clouds.png'

export function DescriptionHero() {
    const bestPlanes = [
        {
            image: plane,
            type: 'B737-800',
            brand: 'Boeing',
            price: '$ 120,000,000',
            alt: 'B737'
        },
        {
            image: plane,
            type: 'A320-300',
            brand: 'Airbus',
            price: '$ 135,000,000',
            alt: 'A320'
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
            brand: 'Airbus',
            price: '$ 445,000,000',
            alt: 'A380'
        },
        {
            image: plane,
            type: 'B747-800',
            brand: 'Boeing',
            price: '$ 420,000,000',
            alt: 'B747'
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
                        <div className='plane-card'>
                            <img src={plane.image} className='plane-img' alt={plane.alt}></img>
                            <div className='plane-desc'>
                                <h3 className='plane-type'>{plane.type}</h3>
                                <p className='plane-brand'>{plane.brand}</p>
                                <h4 className='plane-price'>{plane.price}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>    
    )
}