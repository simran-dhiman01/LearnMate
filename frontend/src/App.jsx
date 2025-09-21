import React from 'react'
import Login from './pages/Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import HeroSection from './components/HeroSection'
import Courses from './components/Courses'
import QuizBanner from './components/QuizBanner'

 const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element: (
        <>
        <HeroSection />
        <Courses />
        <QuizBanner />
        </>
        )
      },
      {
        path:'login',
        element:<Login/>
      }
    ]
  }
    
  ])

const App = () => {
 
  return (
  <main>
    <RouterProvider router={appRouter}/>
  </main>
  )
}

export default App
