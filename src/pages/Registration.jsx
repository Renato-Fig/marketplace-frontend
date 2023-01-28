import '../styles/loginAndRegistration.scss'

// Importação de componentes
import { ClientRegistration } from '../components/Registration/ClientRegistration'
import { SupplierRegistration } from '../components/Registration/SupplierRegistration'

// Importação de dependências
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

export function Registration() {
    document.title = 'Cadastro'

    const [userType, setUserType] = useState('client')

    return (
        <div id="registration-page">
            <main>
                <header>
                    <h1>Cadastre-se</h1>
                    <p>Finalize a criação da sua conta com o email {sessionStorage.getItem("email")}.</p>
                    <div id="toggleUserType">
                        <span
                            onClick={() => setUserType('client')}
                        >
                            Cliente
                        </span>
                        <span
                            onClick={() => setUserType('supplier')}
                        >
                            Fornecedor
                        </span>
                    </div>
                </header>
                {userType == 'client' ? <ClientRegistration /> : <SupplierRegistration />}
            </main>
        </div>
    )
}