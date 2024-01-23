import { Routes, Route } from 'react-router-dom'
import Footerx from '../components/Footerx'
import Navbarx from '../components/Navbarx'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'

import HeroPage from '../pages/HeroPage'


const RoutesViews = () => {
  return (
    <>

    <Navbarx/>
    <Routes>
    <Route path='/' element={<HomePage/>} />
<<<<<<< HEAD
    <Route path='/Productos' element={<ProductPage/>}/>
=======

    <Route path='/HeroPage' element={<HeroPage/>}/>


>>>>>>> 9e7e63e419bed8722f886683893d1409391dbcd0
    </Routes>
    

  </>  )
}

export default RoutesViews

