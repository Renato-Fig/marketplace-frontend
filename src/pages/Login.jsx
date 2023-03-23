import '../styles/loginAndRegistration.scss'

// Importação de ícones e imagens
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import LogoNavbarDark from '../assets/images/Logo-Navbar-Darkmode.svg'
import LogoNavbarLight from '../assets/images/Logo-Navbar-Lightmode.svg'

// Importação de dependências
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { useAuthContext } from '../hooks/useAuthProvider';
import { signInCliente } from '../services/auth-service/usuario/authService'

export function Login() {
    document.title = 'Login'
    const [showPassword, setShowPassword] = useState(false)

    const { signIn } = useAuthContext()

    // Validação de email e senha com Formik e Yup
    const formik = useFormik({
        initialValues: {
            email: '',
            senha: '',
            //rememberMe: false
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Email inválido').required('Este campo é obrigatório'),
            senha: yup.string().min(4, 'Senha muito curta').required('Este campo é obrigatório'),
            //rememberMe: yup.bool()
        }),
        onSubmit: async (values) => {
            try {
                const response = await signInCliente(values)
                setUser
            } catch (error) {
                
            }

            
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
                                name="senha"
                                placeholder="••••••"
                                value={formik.values.senha}
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
                        {formik.errors.senha && formik.touched.senha && (
                            <span className="errorFeedback">{formik.errors.senha}</span>
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
                    <p>Novo por aqui? <a href="/registration">Assine agora.</a></p>
                </form>
            </main>
        </div>
    )
}