import { useParams, Link } from "react-router-dom"
import { planesObject } from "./planesObject";
import { useState } from "react";
import { Nav } from "./Nav";
import { Footer } from './Footer';


export function PlanePage() {
    const { id } = useParams();
    const plane = planesObject.filter((item) => item.id === parseInt(id));

    const [ image, setImage ] = useState(plane[0].image);

    const altArr =[];

    for (let i = 0; i < 4; i++) {
        altArr.push(planesObject[i]);
    } 

    return (
        <>
            <Nav />

            <section id="plane-page">
                <div id="image-container">
                    <img src={image} alt={plane[0].alt} id="plane-page-img"></img>
                </div>

                <div id="description-container">
                    <div id="desc-content">
                        <h1 id="plane-page-h1">{plane[0].fullType}</h1>
                        <h2 id="plane-page-h2">{plane[0].price}</h2>

                        <h3 id="plane-page-h3">Description:</h3>

                        <p id="plane-page-Mp">{plane[0].description[0]}</p>
                        <br></br>
                        <ul id="plane-page-ul">
                            <li>Age: {plane[0].description[1]}</li>
                            <br></br>

                            <li>Size: {plane[0].description[2]}</li>
                            <br></br>

                            <li>Capacity: {plane[0].description[3]}</li>
                        </ul>
                    </div>

                    <button className="plane-page-primaryB plane-btn">Buy Now</button>
                    <button className="plane-page-secondB plane-btn">Add To Cart</button>
                </div>
            </section>

            <section id="plane-page-alt">
                <h2>Suitable Alternatives</h2>
                <div id="alt-container">
                    {
                        altArr.map((plane) => (
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
                    }
                </div>
            </section>

            <Footer />
        </>
    )
}