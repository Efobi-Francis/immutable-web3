import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { ScoreProvider } from './components/ScoreContext.jsx'; // Import ScoreProvider
import SelectProvider from './components/SelectContext.jsx';

import { PrivateRoute } from './components/PrivateRoute.jsx';

import RootLayout from './layouts/RootLayout.jsx';
import SelectContent from './components/bonus/SelectContent.jsx';
import GamePlay from './components/bonus/GamePlay.jsx';

import NotFound from './components/NotFound.jsx';
import './App.css'
import Login from './components/LoginComponent.jsx';
import { AuthProvider } from './components/AuthContext.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout/>}>
        <Route path='login' element={<Login/>}/>
        <Route path='select' element={
          <AuthProvider>
            <PrivateRoute>
              <SelectProvider>
                <SelectContent/>
              </SelectProvider>
            </PrivateRoute>
          </AuthProvider>
        } />
        <Route path='play' element={
          <AuthProvider>
            <PrivateRoute>
              <SelectProvider>
                <GamePlay/>
              </SelectProvider>
            </PrivateRoute>
          </AuthProvider>
        } />
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </>

    // <Route path="/" element={<RootLayout/>}>
    //   <Route path='login' element={<Login/>}/>
    //   <Route path='/' element={
    //     <PrivateRoute>
    //       <SelectProvider><SelectContent/></SelectProvider>
    //     </PrivateRoute>
    //   }/>
    //   <Route path='play' element={
    //     <PrivateRoute>
    //       <SelectProvider><GamePlay/></SelectProvider>
    //     </PrivateRoute>
    //   }/>
    //   <Route path='*' element={<NotFound/>}/>
    // </Route>
  )
);



function App() {

  return (
    <ScoreProvider>
      <div>
        <RouterProvider router={router}/>
      </div>
    </ScoreProvider>
  )
}

export default App
