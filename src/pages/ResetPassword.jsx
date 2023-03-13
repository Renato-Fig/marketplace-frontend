import '../styles/loginAndRegistration.scss'

// Importação de ícones e imagens
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"

import LogoNavbarDark from '../assets/images/Logo-Navbar-Darkmode.svg'
import LogoNavbarLight from '../assets/images/Logo-Navbar-Lightmode.svg'

// Importação de dependências
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup';

export function ResetPassword() {
    document.title = 'Alterar senha'

    const navigate = useNavigate()

    // Validação de senha e confirmaçção de senha com Formik e Yup
    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmNewPassword: ''
        },
        validationSchema: yup.object().shape({
            newPassword: yup.string().min(4, 'Senha muito curta').required('Este campo é obrigatório'),
            confirmNewPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'As senhas devem corresponder')
        }),
        onSubmit: (values) => {
            console.log(values)
            navigate('/login', {replace: true})
        }
    })

    // State para habilitar/desabilitar a visibilidade da senha
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)

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
                    <h1>Redefinir senha</h1>
                    <p>Insira sua nova senha abaixo.</p>
                </header>
                <form onSubmit={formik.handleSubmit} noValidate>
                    <div className="inputField">
                        <label htmlFor="newPassword">Nova senha</label>
                        <div className="inputAdornmentEnd">
                            <input
                                type={showNewPassword == false ? "password" : "text"}
                                name="newPassword"
                                placeholder="Mínimo de 4 caracteres"
                                value={formik.values.newPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                formik={formik}
                            />
                            <span
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                {showNewPassword == true ? <FaEyeSlash /> : <FaEye />}
                            </span>

                        </div>
                        {formik.errors.newPassword && formik.touched.newPassword && (
                            <span className="errorFeedback">{formik.errors.newPassword}</span>
                        )}
                    </div>
                    <div className="inputField">
                        <label htmlFor="confirmNewPassword">Confirmar nova senha</label>
                        <div className="inputAdornmentEnd">
                            <input
                                type={showConfirmNewPassword == false ? "password" : "text"}
                                name="confirmNewPassword"
                                placeholder="As senhas devem corresponder"
                                value={formik.values.confirm_new_password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                formik={formik}
                            />
                            <span
                                onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                            >
                                {showConfirmNewPassword == true ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {formik.errors.confirmNewPassword && formik.touched.confirmNewPassword && (
                            <span className="errorFeedback">{formik.errors.confirmNewPassword}</span>
                        )}
                    </div>
                    <button
                        type="submit"
                    >
                        Mudar senha
                    </button>
                </form>
            </main>
        </div>
    )
}