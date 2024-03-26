import { useParams } from "react-router-dom"
import { planesObject } from "./Planes";
import { useState } from "react";
import { Nav } from "./Nav";


export function PlanePage() {
    const { id } = useParams();
    const plane = planesObject.filter((item) => item.id === parseInt(id));

    const [ image, setImage ] = useState(plane[0].image);

    return (
        <>
            <Nav />

            <section id="plane-page">
                <div id="image-container">
                    <img src={image} alt={plane[0].alt} id="plane-page-img"></img>
                </div>

                <div id="description-container">
                    <h1 id="plane-page-h1">{plane[0].fullType}</h1>
                    <h2 id="plane-page-h2">{plane[0].price}</h2>
                    <p id="plane-page-p">{plane[0].description}</p>
                </div>
            </section>
        </>
    )
}