import plane from './images/plane.png';
import plane2 from './images/plane-2.png';
import { Link } from 'react-router-dom';


export const planesObject = [
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
        image: plane2,
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
        fullType: 'Boeing 737-8200',
        type: 'B737-8200',
        brand: 'Boeing',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        price: '$ 155,000,000',
        alt: 'B38M',
        id: 7382
    },
    {
        image: plane,
        fullType: 'Boeing 787-9',
        type: 'B787-9',
        brand: 'Boeing',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        price: '$ 240,000,000',
        alt: 'B787',
        id: 787
    },
    {
        image: plane,
        fullType: 'Airbus A330-900',
        type: 'A330-900',
        brand: 'Airbus',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        price: '$ 300,000,000',
        alt: 'A330',
        id: 330
    },
    {
        image: plane,
        fullType: 'Airbus A340-600',
        type: 'A340-600',
        brand: 'Airbus',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        price: '$ 275,000,000',
        alt: 'A340',
        id: 340
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
        fullType: 'Airbus 220-300',
        type: 'A220-300',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        brand: 'Airbus',
        price: '$ 420,000,000',
        alt: 'A220',
        id: 220
    },
    {
        image: plane,
        fullType: 'Boeing 777-9',
        type: 'B777-9',
        brand: 'Boeing',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        price: '$ 155,000,000',
        alt: 'B777',
        id: 777
    },
    {
        image: plane,
        fullType: 'Boeing 767-400',
        type: 'B767-400',
        brand: 'Boeing',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        price: '$ 240,000,000',
        alt: 'B767',
        id: 767
    },
    {
        image: plane,
        fullType: 'Airbus A321-231',
        type: 'A321-231',
        brand: 'Airbus',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        price: '$ 300,000,000',
        alt: 'A321',
        id: 321
    },
    {
        image: plane,
        fullType: 'Airbus A350-1000',
        type: 'A350-1000',
        brand: 'Airbus',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        price: '$ 275,000,000',
        alt: 'A350',
        id: 350
    },
    {
        image: plane,
        fullType: 'Boeing 757-200',
        type: 'B757-200',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        brand: 'Boeing',
        price: '$ 420,000,000',
        alt: 'B757',
        id: 757
    },
    {
        image: require('./images/plane.jpg') ,
        type: 'A400M',
        fullType: 'Airbus A400M',
        brand: 'Airbus',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        price: '$ 445,000,000',
        alt: 'A400M',
        id: 400
    },
    {
        image: plane,
        fullType: 'Boeing C-17',
        type: 'C-17',
        description: ['Lorem ipsum aliqua magna sit amet ver dolor.Lorem ipsum aliqua magna sit amet ver dolor.' ,'4 years', '34m x 40m', '197 pax'],
        brand: 'Boeing',
        price: '$ 420,000,000',
        alt: 'C17',
        id: 17
    }
];

export function Planes() {

    function planeFunc() {
        try {
            return (
                planesObject.map((plane) => (
                    <Link to={`/${plane.id}`} className='link'><div className='plane-card'>
                        <img src={plane.image} className='plane-img' alt={plane.alt}></img>
                        <div className='plane-desc'>
                            <h3 className='plane-type'>{plane.type}</h3>
                            <p className='plane-brand'>{plane.brand}</p>
                            <h4 className='plane-price'>{plane.price}</h4>
                        </div>
                    </div></Link>
                    )
                )
            )
        } catch (error) {
            console.log(error);
        }
    }

    const planeOverflow = () => {
        const h = document.getElementById('all-h3');
        const col = document.getElementById('collection');

        const onClick = () => {
            if (col.style.height === '620px') {
                col.style.height = 'auto';
                h.innerHTML = 'See Less';
            } else {
                col.style.height = '620px';
                h.innerHTML = 'See All';
            }
        }

        h.addEventListener('click', onClick);
    }

    return (
        <>
            <h1 id="main-h1">Plane Collection</h1>
            <section id='collection'>
                {planeFunc()}
            </section>
            <h3 id='all-h3' onClick={planeOverflow}>See All</h3>
        </>
    )
}