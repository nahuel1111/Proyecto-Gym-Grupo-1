import { Routes, Route } from 'react-router-dom'
import Navbarx from '../components/Navbarx'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import HeroPage from '../pages/HeroPage'
import Footerx from '../components/Footerx'


import LoginPage from '../pages/LoginPage'

const RoutesViews = () => {
  return (
    <>

    <Navbarx />
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/Product' element={<ProductPage/>}  />
    <Route path='/HeroPage' element={<HeroPage/>}/>

    <Route path='/LoginPage' element={<LoginPage/>}/>


    </Routes>
    <Footerx />
    


  </>  )
}

export default RoutesViews

