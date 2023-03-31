import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { ForgotPassword } from '../pages/ForgotPassword'
import { ResetPassword } from '../pages/ResetPassword'
import { Registration } from '../pages/Registration'
import { Footer } from '../components/Footer/Footer'
import { ToggleColorMode } from '../components/ToggleColorMode/ToggleColorMode'
import { AuthProvider } from '../contexts/AuthContext'

function AuthRoutes() {
  return (
    <Router>
      <AuthProvider>
        <ToggleColorMode />
        <Routes>
          <Route exact path='/' element={<><Home /> <Footer /></>} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AuthRoutes