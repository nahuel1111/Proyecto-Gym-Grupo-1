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
import PrivateRoute from '../components/PrivateRoute'

import AboutUs from '../pages/AboutUs'
import AdminTeacherPage from '../pages/AdminTeacherPage'
import Products from '../pages/Products'

const RoutesViews = () => {
  return (
    <>
    <Navbarx />
    <Routes>
    <Route path='/HomePage' element={ <PrivateRoute role='user'><HomePage/></PrivateRoute>} />
    <Route path='/Product' element={ <PrivateRoute role='user'><ProductPage/></PrivateRoute>}  />
    <Route path='/' element={<HeroPage/>}/>
    <Route path='/PlansPage/:id' element={ <PrivateRoute role='user'><PlansPage/></PrivateRoute>}/>
    <Route path='/LoginPage' element={<LoginPage/>}/>
    <Route path='/RegisterPage' element={<RegisterPage/>}/>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/AdminPage' element={<AdminPage/>}/>
    <Route path='/AdminProduct' element={<AdminProductsPage/>}/>
    <Route path='/AdminProductClass' element={<AdminClassPage/>}/>
    <Route path='/AdminUser' element={<AdminUserPage/>}/>
    <Route path='/AdminComment/:id' element={<AdminComment/>}/>
    <Route path='/AdminTeacher' element={<AdminTeacherPage/>}/>
    <Route path='/AdminPage' element={ <PrivateRoute role='admin'><AdminPage/></PrivateRoute> }/>
    <Route path='/AdminProduct' element={ <PrivateRoute role='admin'><AdminProductsPage/></PrivateRoute>}/>
    <Route path='/AdminProductClass' element={ <PrivateRoute role='admin'><AdminClassPage/></PrivateRoute>}/>
    <Route path='/AdminUser' element={ <PrivateRoute role='admin' ><AdminUserPage/></PrivateRoute>}/>
    <Route path='/AdminComment/:id' element={ <PrivateRoute role='admin' ><AdminComment/></PrivateRoute>}/>
    <Route path='/AdminTeacher' element={ <PrivateRoute role='admin'><AdminTeacherPage/></PrivateRoute>}/>
    <Route path='/AboutUs' element={<AboutUs/>}/>

    <Route path='/ContactPage' element={<ContactPage/>}/>

    </Routes>
    <Footerx />
    


  </>  )
}

export default RoutesViews

