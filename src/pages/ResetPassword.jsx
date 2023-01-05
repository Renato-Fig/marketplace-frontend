import '../styles/login.scss'

// Importação de ícones e imagens
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"

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
            new_password: '',
            confirm_new_password: ''
        },
        validationSchema: yup.object().shape({
            new_password: yup.string().min(4, 'Senha muito curta').required('Este campo é obrigatório'),
            confirm_new_password: yup.string().oneOf([yup.ref('new_password'), null], 'As senhas devem corresponder')
        }),
        onSubmit: (values) => {
            console.log(values)
            navigate('/login', {replace: true})
        }
    })

    // State para habilitar/desabilitar a visibilidade da senha
    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)

    return (
        <div id="page-login">
            <div id="main">

                <div id="title">
                    <h2>Redefinir senha</h2>
                    <p>Insira sua nova senha abaixo.</p>
                </div>

                <form onSubmit={formik.handleSubmit} noValidate>
                    <div>
                        <div className='input-icon-wrapper'>
                            <input
                                formik={formik}
                                type={showPassword == false ? "password" : "text"}
                                value={formik.values.new_password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="new_password"
                                placeholder='Nova senha *'
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i>{showPassword == true ? <FaEyeSlash /> : <FaEye />}</i>
                            </span>

                        </div>
                        {formik.errors.new_password && formik.touched.new_password && (
                            <span className='error-message'>{formik.errors.new_password}</span>
                        )}
                    </div>

                    <div>
                        <div className='input-icon-wrapper'>
                            <input
                                formik={formik}
                                type={showNewPassword == false ? "password" : "text"}
                                value={formik.values.confirm_new_password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="confirm_new_password"
                                placeholder='Confirmar nova senha *'
                            />
                            <span
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                <i>{showNewPassword == true ? <FaEyeSlash /> : <FaEye />}</i>
                            </span>
                        </div>
                        {formik.errors.confirm_new_password && formik.touched.confirm_new_password && (
                            <span className='error-message'>{formik.errors.confirm_new_password}</span>
                        )}
                    </div>
                    
                    <button
                        type='submit'
                    >
                        Mudar senha
                    </button>
                </form>

            </div>
        </div>
    )
}