import { Nav } from "../content/Nav"
import boeing from '../content/images/Boeing_full_logo.svg.png'
import { planesObject } from "../content/planesObject";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export function Boeing() {
    const [ filteredPlanes, setFilteredPlanes ] = useState(planesObject);
    const [ filteredType, setFilteredType ] = useState(null);
    const [ filteredPrice, setFilteredPrice ] = useState(null);

    const filterPlanes = () => {
        const boeingFilter = planesObject.filter(planes => planes.brand === 'Boeing');
        let filteredResult = boeingFilter.slice();

        if (filteredPrice === 'Low-To-High') {
            filteredResult = filteredResult.sort((a, b) => a.price - b.price);
        } else if (filteredPrice === 'High-To-Low') {
            filteredResult = filteredResult.sort((a, b) => b.price - a.price);
        }

        // Apply type filter
        if (filteredType === 'Commercial' || filteredType === 'Military') {
            filteredResult = filteredResult.filter(maker => maker.model === filteredType);
        }

        setFilteredPlanes(filteredResult);
    };

    const filterPrice = (event) => {
        const priceFilter = event.target.value;
        setFilteredPrice(priceFilter)
    }

    const filterType = (event) => {
    const typeFilter = event.target.value;
    setFilteredType(typeFilter);
    };

    useEffect(() => {
    filterPlanes();
    }, [filteredType, filteredPrice]);

    function planeFunc() {
        try {
            return (
                filteredPlanes.map((plane) => (
                    <Link to={`/${plane.id}`} className='link'>
                        <div className='plane-card'>
                            <img src={plane.image} className='plane-img' alt={plane.alt}></img>
                            <div className='plane-desc'>
                                <h3 className='plane-type'>{plane.type}</h3>
                                <p className='plane-brand'>{plane.brand}</p>
                                <h4 className='plane-price'>$ {plane.price.toLocaleString()}</h4>
                            </div>
                        </div>
                    </Link>
                    )
                )
            )
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Nav />
            <div id="title-hero">
                <div id="plane-background"></div>
                <img src={boeing} id="air-bo-title"></img>
            </div>

            <div id='filter-btns'>
                <select className='dropdown' onChange={(e) => filterPrice(e)}>
                    <option value='Price'>Price</option>
                    <hr></hr>
                    <option value='Low-To-High'>Low-To-High</option>
                    <hr></hr>
                    <option value='High-To-Low'>High-To-Low</option>
                </select>

                <select className='dropdown' onChange={(e) => filterType(e)}>
                    <option value='Type'>Type</option>
                    <hr></hr>
                    <option value='Commercial'>Commercial</option>
                    <hr></hr>
                    <option value='Military'>Military</option>
                </select>
            </div>
            <section id='collection'>
                {planeFunc()}
            </section>
        </>
    )
}