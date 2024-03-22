import plane from './images/plane.png';


export function Planes() {
    const planesObject = [
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
            type: 'B737-8200',
            brand: 'Boeing',
            price: '$ 155,000,000',
            alt: 'B38M'
        },
        {
            image: plane,
            type: 'B787-9',
            brand: 'Boeing',
            price: '$ 240,000,000',
            alt: 'B787'
        },
        {
            image: plane,
            type: 'A330-900',
            brand: 'Airbus',
            price: '$ 300,000,000',
            alt: 'A330'
        },
        {
            image: plane,
            type: 'A340-600',
            brand: 'Airbus',
            price: '$ 275,000,000',
            alt: 'A340'
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
        }
      ];

    return (
        <>
            <h1 id="main-h1">Plane Collection</h1>
            <section id='collection'>
                {planesObject.map((plane) => (
                        <div className='plane-card'>
                            <img src={plane.image} className='plane-img' alt={plane.alt}></img>
                            <div className='plane-desc'>
                                <h3 className='plane-type'>{plane.type}</h3>
                                <p className='plane-brand'>{plane.brand}</p>
                                <h4 className='plane-price'>{plane.price}</h4>
                            </div>
                        </div>
                    )
                )}

                <h3 id='all-h3'>See All -></h3>
            </section>
        </>
    )
}