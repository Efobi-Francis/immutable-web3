import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { ScoreProvider } from './components/ScoreContext.jsx'; // Import ScoreProvider
import SelectProvider from './components/SelectContext.jsx';
import { ToggleProvider } from './components/ToggleContext.jsx';

import RootLayout from './layouts/RootLayout.jsx';

import SelectContentBasic from './components/basic/SelectContentBasic.jsx';
import GamePlayBasic from './components/basic/GamePlayBasic.jsx'
import SelectContentBonus from './components/bonus/SelectContentBonus.jsx'
import GamePlayBonus from './components/bonus/GamePlayBonus.jsx';
import NotFound from './components/NotFound.jsx';
import './App.css'
import Login from './components/LoginComponent.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Login/>}/>
      <Route path='basic' element={<SelectProvider><SelectContentBasic/></SelectProvider>}/>
      <Route path='play' element={<SelectProvider><GamePlayBasic/></SelectProvider>}/>
      <Route path=':mode' element={<SelectProvider><SelectContentBonus/></SelectProvider>}/>
      <Route path=':mode/play' element={<SelectProvider><GamePlayBonus/></SelectProvider>}/>

      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);


function App() {

  return (
    <ToggleProvider>
      <ScoreProvider>
      <div>
        <RouterProvider router={router}/>
      </div>
      </ScoreProvider>
    </ToggleProvider>
  )
}

export default App
