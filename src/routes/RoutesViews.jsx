import { Routes, Route } from 'react-router-dom'
import Footerx from '../components/Footerx'
import Navbarx from '../components/Navbarx'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import HeroPage from '../pages/HeroPage'
import PlansPage from '../pages/PlansPage'


const RoutesViews = () => {
  return (
    <>

    <Navbarx/>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/Product' element={<ProductPage/>}  />
    <Route path='/HeroPage' element={<HeroPage/>}/>
    <Route path='/PlansPage' element={<PlansPage/>}/>

    </Routes>
    

  </>  )
}

export default RoutesViews

