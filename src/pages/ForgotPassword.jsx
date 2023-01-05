import '../styles/login.scss'

import { Dialog } from '../components/Dialog'

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
            return(isSuccess)
        }
    })

    return (
        <div id="page-login">
            <div id="main">
            
                <div id="title">
                    <h2>Recuperar senha</h2>
                    <p>Informe seu email cadastrado e receba as instruções de como redefinir sua senha.</p>
                </div>

                <form onSubmit={formik.handleSubmit} noValidate>
                    <div>
                        <input
                            formik={formik}
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="email"
                            placeholder='Email *'
                            />
                        {formik.errors.email && formik.touched.email && (
                            <span className='error-message'>{formik.errors.email}</span>
                            )}
                    </div>

                    <button
                        type='submit'
                        >
                        Enviar por email
                    </button> 
                    <p><a href="/login">Voltar para login</a></p>
                </form>

            </div>

            {isSuccess ? <Dialog text='Email enviado' /> : null}
        </div>
    )
}