import '../styles/loginAndRegistration.scss'

// Importação de ícones e imagens
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"

// Importação de dependências
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

export function Login() {
    document.title = 'Login'

    // Validação de email e senha com Formik e Yup
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Email inválido').required('Este campo é obrigatório'),
            password: yup.string().min(4, 'Senha muito curta').required('Este campo é obrigatório'),
            rememberMe: yup.bool()
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    // State para habilitar/desabilitar a visibilidade da senha
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div id="login-page">
            <main>
                <header>
                    <h1>Entrar</h1>
                </header>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <div className="inputField">
                        <label htmlFor="email"> Email </label>
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
                    <div className="inputField">
                        <label htmlFor="password"> Senha </label>
                        <div className="inputAdornmentEnd">
                            <input
                                type={showPassword == false ? "password" : "text"}
                                name="password"
                                placeholder="••••••"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                formik={formik}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword == true ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </span>
                        </div>
                        {formik.errors.password && formik.touched.password && (
                            <span className="errorFeedback">{formik.errors.password}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                    >
                        Entrar
                    </button>
                    <div id="loginOptions">
                        <div>
                            <input
                                type="checkbox"
                                name="rememberMe"
                                value={true}
                                formik={formik}
                            />
                            <label htmlFor="rememberMe">Lembre-se de mim</label>
                        </div>
                        <a href="/forgot-password">Esqueceu a senha?</a>
                    </div>
                    <p>Novo por aqui? <a href="/">Assine agora.</a></p>
                </form>
            </main>
        </div>
    )
}