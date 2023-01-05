import '../styles/login.scss'

// Importação de ícones e imagens
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"

// Importação de dependências
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';

export function Login() {
    document.title = 'Login'

    // Validação de email e senha com Formik e Yup
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember_me: false
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Email inválido').required('Este campo é obrigatório'),
            password: yup.string().min(4, 'Senha muito curta').required('Este campo é obrigatório'),
            remember_me: yup.boolean()
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    // State para habilitar/desabilitar a visibilidade da senha
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div id="page-login">
            <div id="main">

                <div id="title">
                    <h2>Entrar</h2>
                </div>
                
                <form onSubmit={formik.handleSubmit} noValidate>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email *'
                            value={formik.values.email}
                            formik={formik}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <span className='error-message'>{formik.errors.email}</span>
                        )}
                    </div>

                    <div>
                        <div className='input-icon-wrapper'>
                            <input
                                type={showPassword == false ? "password" : "text"}
                                name="password"
                                placeholder='Senha *'
                                value={formik.values.password}
                                formik={formik}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i>{showPassword == true ? <FaEyeSlash /> : <FaEye />}</i>
                            </span>
                        </div>
                        {formik.errors.password && formik.touched.password && (
                            <span className='error-message'>{formik.errors.password}</span>
                        )}
                    </div>

                    <button
                        type='submit'
                    >
                        Entrar
                    </button>

                    <div id='bottom-login'>
                        <div>
                            <input
                                type="checkbox"
                                name='remember_me'
                                value={formik.values.remember_me}
                                formik={formik}
                            />
                            <label htmlFor="remember_me">Lembre-se de mim</label>
                        </div>

                        <p>
                            <a href='/forgot-password'>Esqueceu a senha?</a>
                        </p>
                    </div>

                    <p>Novo por aqui? <a href="/">Assine agora.</a></p>
                </form>

            </div>
        </div>
    )
}