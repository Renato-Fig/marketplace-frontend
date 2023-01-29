import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { ForgotPassword } from './pages/ForgotPassword'
import { ResetPassword } from './pages/ResetPassword'
import { Registration } from './pages/Registration'
import { SupplierProfile } from './pages/SupplierProfile'
import { Catalog } from './pages/Catalog'
import { TermsOfUse } from './pages/TermsOfUse'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/forgot-password' element={ <ForgotPassword /> } />
        <Route path='/reset-password' element={ <ResetPassword /> } />
        <Route path='/registration' element={ <Registration /> } />
        <Route path='/profile' element={ <SupplierProfile /> } />
        <Route path='/catalog' element={ <Catalog /> } />
        <Route path='/terms-of-use' element={ <TermsOfUse /> } />
      </Routes>
    </Router>
  )
}

export default App
