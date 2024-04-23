import { Nav } from "../content/Nav";
import { Newsletter } from "../content/Newsletter";
import { Footer } from "../content/Footer";
import boeing from '../content/images/Boeing_full_logo.svg.png';
import { planesObject } from "../content/planesObject";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ryanair from "../content/images/Ryanair-Logo.png";
import qatar from "../content/images/Qatar.png"; 
import emirates from "../content/images/emirates.png";


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

            <section className="about-airbo">
                <div className="m-ab-airbo">
                    <h3 className="ab-airbo-h3">History of Boeing</h3>
                    <h1 className="ab-airbo-h1">The Most <span>Successful</span> American Plane Maker</h1>

                    <p className="ab-airbo-p">Lorem ipsum dolor sit amet aliqua magna alt dolore consectetur. Lorem ipsum dolor sit amet aliqua magna alt dolore consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet aliqua magna alt dolore consectetur. Lorem ipsum dolor sit amet aliqua magna alt dolore consectetur. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="picture-ab-airbo bo-ba">
                </div>
                <div className="stats-airbo">
                    <div>
                        <h2>65+</h2>
                        <p>Years of experience</p>
                    </div>
                    <div>
                        <h2>38</h2>
                        <p>Planes</p>
                    </div>
                    <div>
                        <h2>15,000+</h2>
                        <p>Delivered Planes</p>
                    </div>
                    <div>
                        <h2>#2</h2>
                        <p>Top Rank</p>
                    </div>
                </div>
            </section>

            <section id="partners-hero">
                <h1 id="partners-h1">Boeing Clients</h1>
                <div id="all-partners">
                    <img src={ryanair} className="p-img"></img>
                    <img src={emirates} className="p-img"></img>
                    <img src={qatar} className="p-img"></img>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </>
    )
}