import '../../styles/loginAndRegistration.scss'

// Importação de ícones e imagens
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"

// Importação de dependências
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputMask from 'react-input-mask'

export function ClientRegistration() {

    const formik = useFormik({
        initialValues: {
            name: '',
            cpf: '',
            birthDate: '',
            phone: '',
            password: '',
            confirmPassword: '',
            cep: '',
            city: '',
            uf: '',
            address: '',
            addressNumber: '',
            addressComplement: '',
            termsOfUseAgreement: false
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Campo obrigatório'),
            cpf: yup.string().min(14, 'CPF inválido').required('Campo obrigatório'),
            birthDate: yup.date().min('1900-01-01', 'Ano inválido').max(new Date(), 'Data futura inválida').required('Campo obrigatório'),
            phone: yup.string().min(14, 'Telefone inválido').required('Campo obrigatório'),
            password: yup.string().min(4, 'Senha muito curta').required('Campo obrigatório'),
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem corresponder').required('Campo obrigatório'),
            cep: yup.string().min(9, 'CEP inválido').required('Campo obrigatório'),
            address: yup.string().required('Campo obrigatório'),
            city: yup.string().required('Campo obrigatório'),
            uf: yup.string().required('Campo obrigatório'),
            addressNumber: yup.string().required('Campo obrigatório'),
            addressComplement: yup.string(),
            termsOfUseAgreement: yup.bool().oneOf([true], 'Você deve concordar com nossos termos e condições para continuar')
        }),
        onSubmit: (values) => {
            values.cpf = values.cpf.replace(/\D/g, '')
            values.phone = values.phone.replace(/\D/g, '')
            values.cep = values.cep.replace(/\D/g, '')
            console.log(values)
        }
    })

    const onBlurCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '')

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                if (!("erro" in data)) {
                    formik.setFieldValue('address', data.logradouro);
                    formik.setFieldValue('city', data.localidade);
                    formik.setFieldValue('uf', data.uf);
                } else {
                    formik.setFieldValue('address', '');
                    formik.setFieldValue('city', '');
                    formik.setFieldValue('uf', '');
                }
            })
    }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <hr />
            <div className="inputField">
                <label htmlFor="name">Nome completo</label>
                <input
                    type="text"
                    name="name"
                    placeholder=""
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.name && formik.touched.name && (
                    <span className="errorFeedback">{formik.errors.name}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="cpf">CPF</label>
                <InputMask
                    type="text"
                    name="cpf"
                    mask="999.999.999-99"
                    maskChar=""
                    placeholder="000.000.000-00"
                    value={formik.values.cpf}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.cpf && formik.touched.cpf && (
                    <span className="errorFeedback">{formik.errors.cpf}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="birthDate">Data de nascimento</label>
                <input
                    type="date"
                    name="birthDate"
                    value={formik.values.birthDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.birthDate && formik.touched.birthDate && (
                    <span className="errorFeedback">{formik.errors.birthDate}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="phone">Telefone</label>
                <InputMask
                    type="text"
                    name="phone"
                    mask="(99) 99999-9999"
                    maskChar=""
                    placeholder="(00) 00000-0000"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.phone && formik.touched.phone && (
                    <span className="errorFeedback">{formik.errors.phone}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="password">Senha</label>
                <div className="inputAdornmentEnd">
                    <input
                        type={showPassword == false ? "password" : "text"}
                        name="password"
                        placeholder="Mínimo de 4 caracteres"
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
            <div className="inputField">
                <label htmlFor="confirmPassword">Confirmação da senha</label>
                <div className="inputAdornmentEnd">
                    <input
                        type={showPassword == false ? "password" : "text"}
                        name="confirmPassword"
                        placeholder="Repita a senha"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        formik={formik}
                    />
                    <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword == true ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </span>
                </div>
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <span className="errorFeedback">{formik.errors.confirmPassword}</span>
                )}
            </div>

            <hr />
            <div className="inputField">
                <label htmlFor="cep">
                    CEP
                    <small>
                        <a
                            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                            target="_blank"
                        >
                            (Buscar CEP)
                        </a>
                    </small>
                </label>
                <InputMask
                    type="text"
                    name="cep"
                    mask="99999-999"
                    maskChar=""
                    placeholder="00000-000"
                    value={formik.values.cep}
                    onChange={formik.handleChange}
                    onBlur={formik.errors.cep ? formik.handleBlur : onBlurCep}
                    formik={formik}
                />
                {formik.errors.cep && formik.touched.cep && (
                    <span className="errorFeedback">{formik.errors.cep}</span>
                )}
            </div>
            <div className="col2">
                <div className="inputField">
                    <label htmlFor="city">Cidade</label>
                    <input
                        type="text"
                        name="city"
                        placeholder=""
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        formik={formik}
                    />
                    {formik.errors.city && formik.touched.city && (
                        <span className="errorFeedback">{formik.errors.city}</span>
                    )}
                </div>
                <div className="inputField">
                    <label htmlFor="uf">UF</label>
                    <input
                        type="text"
                        name="uf"
                        placeholder=""
                        value={formik.values.uf}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        formik={formik}
                    />
                    {formik.errors.uf && formik.touched.uf && (
                        <span className="errorFeedback">{formik.errors.uf}</span>
                    )}
                </div>
            </div>
            <div className="inputField">
                <label htmlFor="address">Endereço</label>
                <input
                    type="text"
                    name="address"
                    placeholder=""
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.address && formik.touched.address && (
                    <span className="errorFeedback">{formik.errors.address}</span>
                )}
            </div>
            <div className="col2 oneThird">
                <div className="inputField">
                    <label htmlFor="addressNumber">Número</label>
                    <input
                        type="text"
                        name="addressNumber"
                        placeholder=""
                        value={formik.values.addressNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        formik={formik}
                    />
                    {formik.errors.addressNumber && formik.touched.addressNumber && (
                        <span className="errorFeedback">{formik.errors.addressNumber}</span>
                    )}
                </div>
                <div className="inputField">
                    <label htmlFor="addressComplement">Complemento <small>(Opcional)</small></label>
                    <input
                        type="text"
                        name="addressComplement"
                        placeholder=""
                        value={formik.values.addressComplement}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        formik={formik}
                    />
                    {formik.errors.addressComplement && formik.touched.addressComplement && (
                        <span className="errorFeedback">{formik.errors.addressComplement}</span>
                    )}
                </div>
            </div>
            <hr />
            <div>
                <div id="termsOfUse">
                    <div>
                        <input
                            type="checkbox"
                            name="termsOfUseAgreement"
                            value={true}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            formik={formik}
                        />
                        <label htmlFor="termsOfUseAgreement">Li e aceito os termos e condições do contrato</label>
                    </div>
                    <a href="/terms-of-use" target="_blank">Visualizar contrato</a>
                </div>
                {formik.errors.termsOfUseAgreement && formik.touched.termsOfUseAgreement && (
                    <span className="errorFeedback">{formik.errors.termsOfUseAgreement}</span>
                )}
            </div>
            <button
                type="submit"
            >
                Finalizar
            </button>
        </form>
    )
}