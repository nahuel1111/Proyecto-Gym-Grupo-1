
import { Routes, Route } from 'react-router-dom'
import Footerx from '../components/Footerx'
import Navbarx from '../components/Navbarx'
import HomePage from '../pages/HomePage'
import HeroPage from '../pages/HeroPage'

const RoutesViews = () => {
  return (
    <>

    <Navbarx/>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/HeroPage' element={<HeroPage/>}/>

    </Routes>
    

  </>  )
}

export default RoutesViews

