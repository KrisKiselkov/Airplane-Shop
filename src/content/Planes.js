import plane from './images/plane.png';
import { Link } from 'react-router-dom';


export const planesObject = [
    {
        image: plane,
        fullType: 'Boeing 737-800',
        type: 'B737-800',
        brand: 'Boeing',
        description: 'Lorem',
        price: '$ 120,000,000',
        alt: 'B737',
        id: 737
    },
    {
        image: plane,
        fullType: 'Airbus A320-300',
        type: 'A320-300',
        brand: 'Airbus',
        price: '$ 135,000,000',
        alt: 'A320',
        id: 320
    },
    {
        image: plane,
        fullType: 'Boeing 737-8200',
        type: 'B737-8200',
        brand: 'Boeing',
        price: '$ 155,000,000',
        alt: 'B38M',
        id: 7382
    },
    {
        image: plane,
        fullType: 'Boeing 787-9',
        type: 'B787-9',
        brand: 'Boeing',
        price: '$ 240,000,000',
        alt: 'B787',
        id: 787
    },
    {
        image: plane,
        fullType: 'Airbus A330-900',
        type: 'A330-900',
        brand: 'Airbus',
        price: '$ 300,000,000',
        alt: 'A330',
        id: 330
    },
    {
        image: plane,
        fullType: 'Airbus A340-600',
        type: 'A340-600',
        brand: 'Airbus',
        price: '$ 275,000,000',
        alt: 'A340',
        id: 340
    },
    {
        image: plane,
        fullType: 'Boeing 747-800',
        type: 'B747-800',
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
        price: '$ 445,000,000',
        alt: 'A380',
        id: 380
    }
];

export function Planes() {

    function planeFunc() {
        try {
            return (
                planesObject.map((plane) => (
                    <Link to={`/${plane.id}`}><div className='plane-card'>
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

    return (
        <>
            <h1 id="main-h1">Plane Collection</h1>
            <section id='collection'>
                {planeFunc()}

                <h3 id='all-h3'>See All</h3>
            </section>
        </>
    )
}