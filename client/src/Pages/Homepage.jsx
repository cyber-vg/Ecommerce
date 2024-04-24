import React from 'react'
import Navbar from '../components/Navbar.jsx'
import CardGrid from '../components/CardBody/CardGrid.jsx'
import ImageSlider from '../components/Slider/ImageSlider.jsx'
import { useAuth } from '../context/auth.jsx'
function Homepage() {
  const [auth,setauth]= useAuth()
  return (
    
    <>
      
   <Navbar/>
   {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
   <ImageSlider/>
   <CardGrid/>
   </>
  )
}

export default Homepage