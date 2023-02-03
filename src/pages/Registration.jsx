import '../styles/loginAndRegistration.scss'

// Importação de componentes
import { ClientRegistration } from '../components/Registration/ClientRegistration'
import { SupplierRegistration } from '../components/Registration/SupplierRegistration'

// Importação de dependências
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'

export function Registration() {
    document.title = 'Cadastro'

    const [userType, setUserType] = useState('client')
    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.email == '') {
            navigate('/', {replace: true})
        }
    })

    return (
        <div id="registration-page">
            <main>
                <header>
                    <h1>Cadastre-se</h1>
                    <p>
                        Finalize a criação da sua conta com o email {sessionStorage.getItem("email")}. 
                        <a href="/" onClick={() => sessionStorage.setItem("email", '')}> Voltar.</a> 
                    </p>
                </header>
                <div id="toggleUserType">
                    <span
                        onClick={() => setUserType('client')}
                        className={userType == 'client' ? 'selected' : 'not-selected'}
                    >
                        Busco fornecedor
                    </span>
                    <span
                        onClick={() => setUserType('supplier')}
                        className={userType == 'supplier' ? 'selected' : 'not-selected'}
                    >
                        Sou fornecedor
                    </span>
                </div>
                {userType == 'client' ? <ClientRegistration /> : <SupplierRegistration />}
            </main>
        </div>
    )
}