import '../styles/loginAndRegistration.scss'


import { EditSupplier } from '../components/EditProfile/EditSupplier'
import { EditClient } from '../components/EditProfile/EditClient'

import LogoNavbarDark from '../assets/images/Logo-Navbar-Darkmode.svg'
import LogoNavbarLight from '../assets/images/Logo-Navbar-Lightmode.svg'

// Importação de dependências
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

export function EditProfile() {
    document.title = 'Cadastro'

    return (
        <div id="edit-page">
            <div className="container">
                <main>
                    <header>
                        <h1>Editar perfil</h1>
                    </header>
                    {/*<EditSupplier/>*/}
                    <EditClient/>
                </main>
            </div>
        </div>
    )
}