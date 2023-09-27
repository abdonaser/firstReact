import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Portofolio from './Components/Portofolio/Portofolio'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import NotFound from './Components/Notfound/NotFound'
import Home from './Components/Home/Home'
import Nav from './Components/NavBar/Nav'


const router = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portofolio", element: <Portofolio /> },
      { path: "contact", element: <Contact /> },
      { path: "", element: <About /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])



export default class App extends Component {
  render() {
    return <>
      <RouterProvider router={router} />

    </>
  }
}
