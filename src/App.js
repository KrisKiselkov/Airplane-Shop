import { Nav } from './content/Nav';
import { Landing } from './content/Landing';
import { PlanePage } from './content/PlanePage';
import { Airbus } from './airbus/Airbus';
import { Boeing } from './boeing/Boeing';
import './App.css';
import { RouterProvider, Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


function App(props) {
  console.log(props.state)
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={ <Landing state={props.state} dispatch={props.dispatch}/> }/>
      <Route path=':id' element={ <PlanePage state={props.state} dispatch={props.dispatch}/> }/>
      <Route path='airbus' element={ <Airbus /> }/>
      <Route path='boeing' element={ <Boeing /> }/>
    </Route>
      ));
  

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;