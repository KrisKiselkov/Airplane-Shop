import { Link } from 'react-router-dom';
import { planesObject } from './planesObject';
import { useState, useEffect } from 'react';


export function Planes() {

    const [ filteredPlanes, setFilteredPlanes ] = useState(planesObject);
    const [ filteredMaker, setFilteredMaker ] = useState(null);
    const [ filteredType, setFilteredType ] = useState(null);
    const [ filteredPrice, setFilteredPrice ] = useState(null);

    const filterPlanes = () => {
        let filteredResult = planesObject;

        if (filteredPrice === 'low') {
            filteredResult = filteredResult.sort((a, b) => a.price - b.price)
        }

        // Apply maker filter
        if (filteredMaker === 'Airbus' || filteredMaker === 'Boeing') {
            filteredResult = filteredResult.filter(maker => maker.brand === filteredMaker);
        } else if (filteredMaker === 'All' || filteredMaker === 'Maker') {
            filteredResult = planesObject;
        }

        // Apply type filter
        if (filteredType === 'Commercial' || filteredType === 'Military') {
            filteredResult = filteredResult.filter(maker => maker.model === filteredType);
        } else if (filteredType === 'All' || filteredType === 'Type') {
            filteredResult = planesObject;
        }

        if (filteredType === 'low' || filteredType === 'high') {
            filteredResult = filteredResult.filter(maker => maker.model === filteredType);
        } else if (filteredType === 'All' || filteredType === 'Type') {
            filteredResult = planesObject;
        }

        setFilteredPlanes(filteredResult);
    };

    const filterPrice = (event) => {
        const priceFilter = event.target.value;
        setFilteredPrice(priceFilter)
    }

    const filterMaker = (event) => {
    const makerFilter = event.target.value;
    setFilteredMaker(makerFilter);
    };

    const filterType = (event) => {
    const typeFilter = event.target.value;
    setFilteredType(typeFilter);
    };

    useEffect(() => {
    filterPlanes();
    }, [filteredMaker, filteredType, filteredPrice]);

    function planeFunc() {
        try {
            return (
                filteredPlanes.map((plane) => (
                    <Link to={`/${plane.id}`} className='link'><div className='plane-card'>
                        <img src={plane.image} className='plane-img' alt={plane.alt}></img>
                        <div className='plane-desc'>
                            <h3 className='plane-type'>{plane.type}</h3>
                            <p className='plane-brand'>{plane.brand}</p>
                            <h4 className='plane-price'>$ {plane.price.toLocaleString()}</h4>
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
            <div id='filter-btns'>
                <select className='dropdown' onChange={(e) => filterPrice(e)}>
                    <option value='price' diasable>Price</option>
                    <hr></hr>
                    <option value='low'>Low-To-High</option>
                    <hr></hr>
                    <option value='high'>High-to-Low</option>
                </select>

                <select className='dropdown' onChange={(e) => filterMaker(e)}>
                    <option value='Maker'>Maker</option>
                    <hr></hr>
                    <option value='All'>All</option>
                    <hr></hr>
                    <option value='Airbus'>Airbus</option>
                    <hr></hr>
                    <option value='Boeing'>Boeing</option>
                </select>

                <select className='dropdown' onChange={(e) => filterType(e)}>
                    <option value='Type' disabled>Type</option>
                    <hr></hr>
                    <option value='Commercial'>Commercial</option>
                    <hr></hr>
                    <option value='Military'>Military</option>
                </select>
            </div>
            <section id='collection'>
                {planeFunc()}
            </section>
            <h3 id='all-h3' onClick={planeOverflow}>See All</h3>
        </>
    )
}