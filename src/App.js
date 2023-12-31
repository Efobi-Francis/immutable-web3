import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { ScoreProvider } from './components/ScoreContext.jsx'; // Import ScoreProvider
import SelectProvider from './components/SelectContext.jsx';

import { PrivateRoute } from './components/PrivateRoute.jsx';

import RootLayout from './layouts/RootLayout.jsx';
import SelectContent from './components/bonus/SelectContent.jsx';
import GamePlay from './components/bonus/GamePlay.jsx';

import NotFound from './components/NotFound.jsx';
import './App.css'
import { AuthProvider } from './components/AuthContext.jsx';
import LoginComponent from './components/LoginComponent.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route element={<RootLayout/>}>
        <Route path='/login' element={<LoginComponent/>}/>
        <Route element={<PrivateRoute/>}>
          <Route index element={<SelectProvider><SelectContent/></SelectProvider>} />
          <Route path='play' element={<SelectProvider><GamePlay/></SelectProvider>} />
        </Route>

        <Route path='*' element={<NotFound/>}/>
    </Route>
   
  )
);



function App() {

  return (
    <AuthProvider>
      <ScoreProvider>
        <div>
          <RouterProvider router={router}/>
        </div>
      </ScoreProvider>
    </AuthProvider>
  )
}

export default App
