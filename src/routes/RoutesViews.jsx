import { Routes, Route } from 'react-router-dom'
import Navbarx from '../components/Navbarx'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import HeroPage from '../pages/HeroPage'
import PlansPage from '../pages/PlansPage'
import Footerx from '../components/Footerx'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AdminPage from '../pages/AdminPage'
import AdminProductsPage from '../pages/AdminProductsPage'
import AdminClassPage from '../pages/AdminClassPage'
import AdminUserPage from '../pages/AdminUserPage'
import AdminComment from '../pages/AdminComment'
import ContactPage from '../pages/ContactPage'

import AboutUs from '../pages/AboutUs'
import AdminTeacherPage from '../pages/AdminTeacherPage'

const RoutesViews = () => {
  return (
    <>

    <Navbarx />
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/Product' element={<ProductPage/>}  />
    <Route path='/HeroPage' element={<HeroPage/>}/>
    <Route path='/PlansPage/:id' element={<PlansPage/>}/>
    <Route path='/LoginPage' element={<LoginPage/>}/>
    <Route path='/RegisterPage' element={<RegisterPage/>}/>

    <Route path='/AdminPage' element={<AdminPage/>}/>
    <Route path='/AdminProduct' element={<AdminProductsPage/>}/>
    <Route path='/AdminProductClass' element={<AdminClassPage/>}/>
    <Route path='/AdminUser' element={<AdminUserPage/>}/>
    <Route path='/AdminComment/:id' element={<AdminComment/>}/>
    <Route path='/AdminTeacher' element={<AdminTeacherPage/>}/>

    <Route path='/AboutUs' element={<AboutUs/>}/>

    <Route path='/ContactPage' element={<ContactPage/>}/>

    </Routes>
    <Footerx />
    


  </>  )
}

export default RoutesViews

