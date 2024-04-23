import ryanair from "./images/Ryanair-Logo.png";
import wizzair from "./images/WizzAir.png";
import qatar from "./images/Qatar.png";
import bulgariair from "./images/BulgariaAir.png"; 
import emirates from "./images/emirates.png";
import singapore from "./images/singapore.png";


export function Partners() {

    return (
        <section id="partners-hero">
            <h1 id="partners-h1">Partners</h1>
            <div id="all-partners">
                <img src={ryanair} className="p-img"></img>
                <img src={wizzair} className="p-img"></img>
                <img src={qatar} className="p-img"></img>
                <img src={bulgariair} className="p-img"></img>
                <img src={emirates} className="p-img"></img>
                <img src={singapore} className="p-img"></img>
            </div>
        </section>
    )
}