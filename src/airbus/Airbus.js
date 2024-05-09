import { Nav } from "../content/Nav";
import { Newsletter } from "../content/Newsletter";
import { Footer } from "../content/Footer";
import airbus from '../content/images/1200px-Airbus_logo_2017.png';
import { planesObject } from "../content/planesObject";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import wizzair from "../content/images/WizzAir.png";
import singapore from "../content/images/singapore.png"; 
import bulgariair from "../content/images/BulgariaAir.png";
import emirates from "../content/images/emirates.png";
import qatar from "../content/images/Qatar.png" 


export function Airbus() {
    const [ filteredPlanes, setFilteredPlanes ] = useState(planesObject);
    const [ filteredType, setFilteredType ] = useState(null);
    const [ filteredPrice, setFilteredPrice ] = useState(null);

    const filterPlanes = () => {
        const airbusFilter = planesObject.filter(planes => planes.brand === 'Airbus');
        let filteredResult = airbusFilter.slice();

        if (filteredPrice === 'Low-To-High') {
            filteredResult = filteredResult.sort((a, b) => a.price - b.price);
        } else if (filteredPrice === 'High-To-Low') {
            filteredResult = filteredResult.sort((a, b) => b.price - a.price);
        }

        // Apply type filter
        if (filteredType === 'Commercial' || filteredType === 'Military') {
            filteredResult = filteredResult.filter(maker => maker.model === filteredType);
        }

        if (filteredPlanes.length <= 4) {
            document.getElementById('collection').style.height = 'auto';
        } else {
            document.getElementById('collection').style.height = '620px';
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
    }, [filteredType, filteredPrice, filteredPlanes.length]);

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

    const planeOverflow = () => {
        const h = document.getElementById('all-h3');
        const col = document.getElementById('collection');

        const overflow = () => {
            if (filteredPlanes.length > 4) {
                if (col.style.height === '620px') {
                    col.style.height = 'auto';
                    h.innerHTML = 'See Less';
                } else {
                    col.style.height = '620px';
                    h.innerHTML = 'See All';
                }
            }
        }

        h.addEventListener('click', overflow);
    }


    return (
        <>
            <Nav />
            <div id="title-hero">
                <div id="plane-background"></div>
                <img src={airbus} id="air-bo-title"></img>
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
            <h3 id='all-h3' onClick={planeOverflow}>{filteredPlanes.length > 4 ? 'See All' : ''}</h3>


            <section className="about-airbo">
                <div className="m-ab-airbo">
                    <h3 className="ab-airbo-h3">History of Airbus</h3>
                    <h1 className="ab-airbo-h1">The Most <span>Successful</span> European Plane Maker</h1>

                    <p className="ab-airbo-p">Lorem ipsum dolor sit amet aliqua magna alt dolore consectetur. Lorem ipsum dolor sit amet aliqua magna alt dolore consectetur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet aliqua magna alt dolore consectetur. Lorem ipsum dolor sit amet aliqua magna alt dolore consectetur. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="picture-ab-airbo air-ba">
                </div>
                <div className="stats-airbo">
                    <div>
                        <h2>50+</h2>
                        <p>Years of experience</p>
                    </div>
                    <div>
                        <h2>32</h2>
                        <p>Planes</p>
                    </div>
                    <div>
                        <h2>13,500+</h2>
                        <p>Delivered Planes</p>
                    </div>
                    <div>
                        <h2>#1</h2>
                        <p>Top Rank</p>
                    </div>
                </div>
            </section>

            <section id="partners-hero">
                <h1 id="partners-h1">Airbus Clients</h1>
                <div id="all-partners">
                    <img src={wizzair} className="p-img"></img>
                    <img src={bulgariair} className="p-img"></img>
                    <img src={emirates} className="p-img"></img>
                    <img src={singapore} className="p-img"></img>
                    <img src={qatar} className="p-img"></img>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </>
    )
}