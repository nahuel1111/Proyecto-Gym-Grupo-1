
import { Routes, Route } from 'react-router-dom'
import Footerx from '../components/Footerx'
import Navbarx from '../components/Navbarx'
import HomePage from '../pages/HomePage'

const RoutesViews = () => {
  return (
    <>

    <Navbarx/>
    <Routes>
    <Route path='/' element={<HomePage/>} />
  
    </Routes>
    

  </>  )
}

export default RoutesViews