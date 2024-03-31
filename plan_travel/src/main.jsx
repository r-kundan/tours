import React, { Suspense } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import ReactDOM from 'react-dom/client'

import Home from './pages/Home.jsx'
import Tours from './pages/Tours.jsx'
import TourDetails from './pages/TourDetails.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import SearchResultList from './pages/SearchResultList.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  
     <Route path='/' element={<Layout/>}>
      <Route path='/home' element={<Home/>} />
      <Route path='/tours' element={<Tours/>} />
      <Route path='/tour/:id' element={<TourDetails/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/tour/search' element={<SearchResultList/>} />
    </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
