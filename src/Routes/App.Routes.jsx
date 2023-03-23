import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { SupplierProfile } from '../pages/SupplierProfile'
import { Catalog } from '../pages/Catalog'
import { Product } from '../pages/Product'
import { ProductRegistration } from '../pages/ProductRegistration'
import { TermsOfUse } from '../pages/TermsOfUse'

import { NavBar } from '../components/NavBar/NavBar.jsx'
import { Footer } from '../components/Footer/Footer'
import { ToggleColorMode } from '../components/ToggleColorMode/ToggleColorMode'
import { AuthProvider } from '../contexts/AuthContext'

function AppRoutes() {
  return (
      <Router>
        <ToggleColorMode />
          <Routes>
          <Route path='/' element={<><Home /> <Footer /></>} />
          <Route path='/profile' element={<><NavBar /> <SupplierProfile /> <Footer /></>} />
          <Route path='/catalog' element={<><NavBar /> <Catalog /> <Footer /></>} />
          <Route path='/product-registration' element={<><NavBar /> <ProductRegistration /> <Footer /></>} />
          <Route path='/product' element={<><NavBar /> <Product /> <Footer /></>} />
          <Route path='/terms-of-use' element={<TermsOfUse />} />
          <Route path='*' element={<><Home /> <Footer /></>} />
        </Routes>
      </Router>
  )
}

export default AppRoutes