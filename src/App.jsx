import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { ForgotPassword } from './pages/ForgotPassword'
import { ResetPassword } from './pages/ResetPassword'
import { Registration } from './pages/Registration'
import { SupplierProfile } from './pages/SupplierProfile'
import { Catalog } from './pages/Catalog'
import { Product } from './pages/Product'
import { ProductRegistration } from './pages/ProductRegistration'
import { TermsOfUse } from './pages/TermsOfUse'

import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { ToggleColorMode } from './components/ToggleColorMode/ToggleColorMode'

import { AuthProvider } from './contexts/AuthContext'
import { Routes } from './Routes/index'

function App() {
  return (
    <Routes/>
  )
}

export default App