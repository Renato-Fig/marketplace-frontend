import '../styles/loginAndRegistration.scss'

import { Dialog } from '../components/Dialog/Dialog'
import LogoNavbarDark from '../assets/images/Logo-Navbar-Darkmode.svg'
import LogoNavbarLight from '../assets/images/Logo-Navbar-Lightmode.svg'

// Importação de dependências
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';

export function ForgotPassword() {
    document.title = 'Esqueci minha senha'

    const [isSuccess, setIsSuccess] = useState(false)

    // Validação de email com Formik e Yup
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Email inválido').required('Este campo é obrigatório')
        }),
        onSubmit: (values) => {
            console.log(values)
            setIsSuccess(true)
            return (isSuccess)
        }
    })

    return (
        <div id="login-page">
            <img
                src={LogoNavbarDark}
                alt="MundoWeb"
                className="logoNavbar"
                id="logoDarkmode"
            />
            <img
                src={LogoNavbarLight}
                alt="MundoWeb"
                className="logoNavbar"
                id="logoLightmode"
            />
            <main>
                <header>
                    <h1>Recuperar senha</h1>
                    <p>Informe seu email cadastrado e receba as instruções de como redefinir sua senha.</p>
                </header>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <div className="inputField">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="usuario@email.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            formik={formik}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <span className="errorFeedback">{formik.errors.email}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                    >
                        Enviar por email
                    </button>
                    <a href="/login">Voltar para login</a>
                </form>
            </main>
            {isSuccess ? <Dialog text="Email enviado" /> : null}
        </div>
    )
}