import { Nav } from "./Nav";
import { Home } from "./Home";
import { Planes } from "./Planes";
import { DescriptionHero } from "./Description-Hero";
import { Testimonials } from "./Testimonials";
import { Partners } from "./Partners";
import { Newsletter } from "./Newsletter";
import { Footer } from "./Footer";

export function Landing() {
    return (
        <body>
            <Nav />
            
            <Home />

            <main>
            <Planes />

            <DescriptionHero />

            <Testimonials />

            <Partners />

            <Newsletter />
            </main>
            <Footer />
        </body>
    )
}