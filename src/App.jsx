import { BrowserRouter as Router } from 'react-router-dom'
import RoutesViews from './routes/RoutesViews'
import Navbarx from './components/Navbarx'
import Footerx from './components/Footerx'

const App = () => {
  return (
    <>
    <Navbarx/>
    <Router>
      <RoutesViews/>
    </Router>
    <Footerx/>
  
    </>
  )
}

export default App