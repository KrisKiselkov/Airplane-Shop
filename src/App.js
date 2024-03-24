import logo from './logo.svg';
import { Nav } from './content/Nav';
import { Home } from './content/Home';
import { Planes } from './content/Planes';
import { DescriptionHero } from './content/Description-Hero';
import { Testimonials } from './content/Testimonials';
import { Newsletter } from './content/Newsletter';
import { Footer } from './content/Footer';
import './App.css';


function App() {

  return (
    <body>
      <Nav />

      <Home />

      <main>
        <Planes />

        <DescriptionHero />

        <Testimonials />

        <Newsletter />
      </main>
      <Footer />
    </body>
  );
}

export default App;
