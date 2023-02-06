import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { ForgotPassword } from './pages/ForgotPassword'
import { ResetPassword } from './pages/ResetPassword'
import { Registration } from './pages/Registration'
import { SupplierProfile } from './pages/SupplierProfile'
import { Catalog } from './pages/Catalog'
import { Product } from './pages/Product'
import { TermsOfUse } from './pages/TermsOfUse'

import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { ToggleColorMode } from './components/ToggleColorMode/ToggleColorMode'

function App() {
  return (
    <Router>
      <ToggleColorMode />
      <Routes>
        <Route path='/' element={<><Home /> <Footer /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/profile' element={<><NavBar /> <SupplierProfile /> <Footer /></>} />
        <Route path='/catalog' element={<><NavBar /> <Catalog /> <Footer /></>} />
        <Route path='/product' element={<><NavBar /> <Product /> <Footer /></>} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
      </Routes>
    </Router>
  )
}

export default App
