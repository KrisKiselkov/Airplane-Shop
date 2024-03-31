import plane from './images/plane.png';
import plane2 from './images/plane-2.png';
import { Link } from 'react-router-dom';
import { planesObject } from './planesObject';

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
            <div id='filter-btns'>
                <select className='dropdown'>
                    <option className='drop-options'>Price</option>
                    <hr></hr>
                    <option className='drop-options'>All</option>
                    <hr></hr>
                    <option className='drop-options'>Low-To-High</option>
                    <hr></hr>
                    <option className='drop-options'>High-to-Low</option>
                </select>

                <select className='dropdown'>
                    <option className='drop-options'>Maker</option>
                    <hr></hr>
                    <option className='drop-options'>All</option>
                    <hr></hr>
                    <option className='drop-options'>Airbus</option>
                    <hr></hr>
                    <option className='drop-options'>Boeing</option>
                </select>

                <select className='dropdown'>
                    <option className='drop-options'>Type</option>
                    <hr></hr>
                    <option className='drop-options'>All</option>
                    <hr></hr>
                    <option className='drop-options'>Commercial</option>
                    <hr></hr>
                    <option className='drop-options'>Military</option>
                </select>
            </div>
            <section id='collection'>
                {planeFunc()}
            </section>
            <h3 id='all-h3' onClick={planeOverflow}>See All</h3>
        </>
    )
}