import { useParams, Link } from "react-router-dom"
import { planesObject } from "./planesObject";
import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Footer } from './Footer';
import { addItem } from "./cartSlice";
import { store } from "../store";
import { Newsletter } from "./Newsletter";


export function PlanePage() {
    const dispatch = store.dispatch;
    
    const { id } = useParams();
    const plane = planesObject.filter((item) => item.id === parseInt(id));

    const [ image, setImage ] = useState(plane[0].image);

    useEffect(() => {
        setImage(plane[0].image);
    }, [id])

    const altArr =[];

    for (let i = 0; i < 4; i++) {
        altArr.push(planesObject[i]);
    } 

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const addPlaneFunc = (plane) => {
        dispatch(addItem(plane))
    };

    const mouseOverBtn = () => {
        const prmBtn = document.querySelector('.plane-page-primaryB');
        const scdBtn = document.querySelector('.plane-page-secondB');

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
    
    const { fullType, price, alt, description } = plane[0];


    return (
        <>
            <Nav />

            <section id="plane-page" key={id}>
                <div id="image-container">
                    <img src={image} alt={alt} id="plane-page-img"></img>
                </div>

                <div id="description-container">
                    <div id="desc-content">
                        <h1 id="plane-page-h1">{fullType}</h1>
                        <h2 id="plane-page-h2">$ {price.toLocaleString()}</h2>

                        <h3 id="plane-page-h3">Description:</h3>

                        <p id="plane-page-Mp">{description[0]}</p>
                        <br></br>
                        <ul id="plane-page-ul" key={`${id}`}>
                            <li key={`${id}${description[1]}`}>Age: <span>{description[1]}</span></li>
                            <br></br>

                            <li key={`${id}${description[2]}`}>Size: <span>{description[2]}</span></li>
                            <br></br>

                            <li key={`${id}${description[3]}`}>Capacity: <span>{description[3]}</span></li>
                        </ul>
                    </div>

                    <button className="plane-page-primaryB plane-btn" onMouseOver={mouseOverBtn}>Buy Now</button>
                    <button className="plane-page-secondB plane-btn" onClick={() => addPlaneFunc(plane[0])}>Add To Cart</button>
                </div>
            </section>

            <section id="plane-page-alt">
                <h2>Suitable Alternatives</h2>
                <div id="alt-container">
                    {
                        altArr.map((plane) => (
                            <Link to={`/${plane.id}`} className='link s-alt'><div className='plane-card' onClick={topFunction()}>
                                <img src={plane.image} className='plane-img' alt={plane.alt}></img>
                                <div className='plane-desc'>
                                    <h3 className='plane-type'>{plane.type}</h3>
                                    <p className='plane-brand'>{plane.brand}</p>
                                    <h4 className='plane-price'>$ {plane.price.toLocaleString()}</h4>
                                </div>
                            </div></Link>
                            )
                        )
                    }
                </div>
            </section>

            <Newsletter />

            <Footer />
        </>
    )
}