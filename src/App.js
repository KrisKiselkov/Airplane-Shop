import logo from './logo.svg';
import { Landing } from './content/Landing';
import { Airbus } from './airbus/Airbus';
import './App.css';
import { RouterProvider, Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={ <Landing /> }/>
    <Route path='/airbus' element={ <Airbus/> }/>
  </Route>
    ));

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
