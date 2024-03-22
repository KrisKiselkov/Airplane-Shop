import logo from './logo.svg';
import { Nav } from './content/Nav';
import { Home } from './content/Home';
import { Planes } from './content/Planes';
import { DescriptionHero } from './content/Description-Hero';
import './App.css';


function App() {

  return (
    <>
      <Nav />

      <Home />

      <main>
        <Planes />

        <DescriptionHero />
      </main>
    </>
  );
}

export default App;
