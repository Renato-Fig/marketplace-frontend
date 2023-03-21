import '../../styles/loginAndRegistration.scss'

// Importação de ícones e imagens
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"

// Importação de dependências
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputMask from 'react-input-mask'

export function SupplierRegistration() {

    const formik = useFormik({
        initialValues: {
            businessName: '',
            cnpj: '',
            responsiblePerson: '',
            cpf: '',
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
            businessName: yup.string().required('Campo obrigatório'),
            cnpj: yup.string().min(18, 'CNPJ inválido'),
            responsiblePerson: yup.string().required('Campo obrigatório'),
            cpf: yup.string().min(14, 'CPF inválido').required('Campo obrigatório'),
            phone: yup.string().min(14, 'Telefone inválido').required('Campo obrigatório'),
            password: yup.string().min(4, 'Senha muito curta').required('Campo obrigatório'),
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem corresponder').required('Campo obrigatório'),
            cep: yup.string().required('Campo obrigatório'),
            address: yup.string().required('Campo obrigatório'),
            city: yup.string().required('Campo obrigatório'),
            uf: yup.string().required('Campo obrigatório'),
            addressNumber: yup.string().required('Campo obrigatório'),
            addressComplement: yup.string(),
            termsOfUseAgreement: yup.bool().oneOf([true], 'Você deve concordar com nossos termos e condições para continuar')
        }),
        onSubmit: (values) => {
            values.cpf = values.cpf.replace(/\D/g, '')
            values.cnpj = values.cnpj.replace(/\D/g, '')
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
                <label htmlFor="businessName">Nome Fantasia</label>
                <input
                    type="text"
                    name="businessName"
                    placeholder=""
                    value={formik.values.businessName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.businessName && formik.touched.businessName && (
                    <span className="errorFeedback">{formik.errors.businessName}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="category">Categoria</label>
                <select name="category">
                    <option value={1}>Selecione uma categoria</option>
                    <option value={2}>Tecnologia</option>
                </select>
                {formik.errors.category && formik.touched.category && (
                    <span className="errorFeedback">{formik.errors.category}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="cnpj">CNPJ <small>(Opcional)</small></label>
                <InputMask
                    type="text"
                    name="cnpj"
                    mask="99.999.999/9999-99"
                    maskChar=""
                    placeholder="00.000.000/0000-00"
                    value={formik.values.cnpj}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.cnpj && formik.touched.cnpj && (
                    <span className="errorFeedback">{formik.errors.cnpj}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="responsiblePerson">Responsável</label>
                <input
                    type="text"
                    name="responsiblePerson"
                    placeholder=""
                    value={formik.values.responsiblePerson}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.responsiblePerson && formik.touched.responsiblePerson && (
                    <span className="errorFeedback">{formik.errors.responsiblePerson}</span>
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
                <label htmlFor="password"> Senha </label>
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
                <label htmlFor="confirmPassword"> Senha </label>
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
                    onBlur={formik.errors.cep == true ? formik.handleBlur : onBlurCep}
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
                    placeholder="Primeiro nome e sobrenome"
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