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
            Fantasia: '',
            Cnpj: '',
            Responsavel: '',
            Cpf: '',
            Telefone: '',
            Senha: '',
            SenhaConfirmar: '',
            Cep: '',
            Cidade: '',
            Uf: '',
            Endereco: '',
            Numero: '',
            Complemento: '',
            Email: sessionStorage.email,
            termsOfUseAgreement: false
        },
        validationSchema: yup.object().shape({
            Fantasia: yup.string().required('Campo obrigatório'),
            Cnpj: yup.string().min(18, 'CNPJ inválido'),
            Responsavel: yup.string().required('Campo obrigatório'),
            Cpf: yup.string().min(14, 'CPF inválido').required('Campo obrigatório'),
            Telefone: yup.string().min(14, 'Telefone inválido').required('Campo obrigatório'),
            Senha: yup.string().min(4, 'Senha muito curta').required('Campo obrigatório'),
            SenhaConfirmar: yup.string().oneOf([yup.ref('Senha'), null], 'As senhas devem corresponder').required('Campo obrigatório'),
            Cep: yup.string().required('Campo obrigatório'),
            Endereco: yup.string().required('Campo obrigatório'),
            Cidade: yup.string().required('Campo obrigatório'),
            Uf: yup.string().required('Campo obrigatório'),
            Numero: yup.string().required('Campo obrigatório'),
            Complemento: yup.string(),
            termsOfUseAgreement: yup.bool().oneOf([true], 'Você deve concordar com nossos termos e condições para continuar')
        }),
        onSubmit: (values) => {
            console.log('oi')
            values.Cpf = values.Cpf.replace(/\D/g, '')
            values.Cnpj = values.Cnpj.replace(/\D/g, '')
            values.Telefone = values.Telefone.replace(/\D/g, '')
            values.Cep = values.Cep.replace(/\D/g, '')
            console.log(values)
        }
    })

    const onBlurCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '')

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                if (!("erro" in data)) {
                    formik.setFieldValue('Endereco', data.logradouro);
                    formik.setFieldValue('Cidade', data.localidade);
                    formik.setFieldValue('Uf', data.Uf);
                } else {
                    formik.setFieldValue('Endereco', '');
                    formik.setFieldValue('Cidade', '');
                    formik.setFieldValue('Uf', '');
                }
            })
    }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <hr />
            <div className="inputField">
                <label htmlFor="Fantasia">Nome Fantasia</label>
                <input
                    type="text"
                    name="Fantasia"
                    placeholder=""
                    value={formik.values.Fantasia}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.Fantasia && formik.touched.Fantasia && (
                    <span className="errorFeedback">{formik.errors.Fantasia}</span>
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
                <label htmlFor="Cnpj">CNPJ <small>(Opcional)</small></label>
                <InputMask
                    type="text"
                    name="Cnpj"
                    mask="99.999.999/9999-99"
                    maskChar=""
                    placeholder="00.000.000/0000-00"
                    value={formik.values.Cnpj}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.Cnpj && formik.touched.Cnpj && (
                    <span className="errorFeedback">{formik.errors.Cnpj}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="Responsavel">Responsável</label>
                <input
                    type="text"
                    name="Responsavel"
                    placeholder=""
                    value={formik.values.Responsavel}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.Responsavel && formik.touched.Responsavel && (
                    <span className="errorFeedback">{formik.errors.Responsavel}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="Cpf">CPF</label>
                <InputMask
                    type="text"
                    name="Cpf"
                    mask="999.999.999-99"
                    maskChar=""
                    placeholder="000.000.000-00"
                    value={formik.values.Cpf}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.Cpf && formik.touched.Cpf && (
                    <span className="errorFeedback">{formik.errors.Cpf}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="Telefone">Telefone</label>
                <InputMask
                    type="text"
                    name="Telefone"
                    mask="(99) 99999-9999"
                    maskChar=""
                    placeholder="(00) 00000-0000"
                    value={formik.values.Telefone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.Telefone && formik.touched.Telefone && (
                    <span className="errorFeedback">{formik.errors.Telefone}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="Senha"> Senha </label>
                <div className="inputAdornmentEnd">
                    <input
                        type={showPassword == false ? "password" : "text"}
                        name="Senha"
                        placeholder="Mínimo de 4 caracteres"
                        value={formik.values.Senha}
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
                {formik.errors.Senha && formik.touched.Senha && (
                    <span className="errorFeedback">{formik.errors.Senha}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="SenhaConfirmar"> Senha </label>
                <div className="inputAdornmentEnd">
                    <input
                        type={showConfirmPassword == false ? "password" : "text"}
                        name="SenhaConfirmar"
                        placeholder="Repita a senha"
                        value={formik.values.SenhaConfirmar}
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
                {formik.errors.SenhaConfirmar && formik.touched.SenhaConfirmar && (
                    <span className="errorFeedback">{formik.errors.SenhaConfirmar}</span>
                )}
            </div>
            <hr />
            <div className="inputField">
                <label htmlFor="Cep">
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
                    name="Cep"
                    mask="99999-999"
                    maskChar=""
                    placeholder="00000-000"
                    value={formik.values.Cep}
                    onChange={formik.handleChange}
                    onBlur={formik.errors.Cep == true ? formik.handleBlur : onBlurCep}
                    formik={formik}
                />
                {formik.errors.Cep && formik.touched.Cep && (
                    <span className="errorFeedback">{formik.errors.Cep}</span>
                )}
            </div>
            <div className="col2">
                <div className="inputField">
                    <label htmlFor="Cidade">Cidade</label>
                    <input
                        type="text"
                        name="Cidade"
                        placeholder=""
                        value={formik.values.Cidade}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        formik={formik}
                    />
                    {formik.errors.Cidade && formik.touched.Cidade && (
                        <span className="errorFeedback">{formik.errors.Cidade}</span>
                    )}
                </div>
                <div className="inputField">
                    <label htmlFor="Uf">UF</label>
                    <input
                        type="text"
                        name="Uf"
                        placeholder=""
                        value={formik.values.Uf}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        formik={formik}
                    />
                    {formik.errors.Uf && formik.touched.Uf && (
                        <span className="errorFeedback">{formik.errors.Uf}</span>
                    )}
                </div>
            </div>
            <div className="inputField">
                <label htmlFor="Endereco">Endereço</label>
                <input
                    type="text"
                    name="Endereco"
                    placeholder="Primeiro nome e sobrenome"
                    value={formik.values.Endereco}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.Endereco && formik.touched.Endereco && (
                    <span className="errorFeedback">{formik.errors.Endereco}</span>
                )}
            </div>
            <div className="col2 oneThird">
                <div className="inputField">
                    <label htmlFor="Numero">Número</label>
                    <input
                        type="text"
                        name="Numero"
                        placeholder=""
                        value={formik.values.Numero}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        formik={formik}
                    />
                    {formik.errors.Numero && formik.touched.Numero && (
                        <span className="errorFeedback">{formik.errors.Numero}</span>
                    )}
                </div>
                <div className="inputField">
                    <label htmlFor="Complemento">Complemento <small>(Opcional)</small></label>
                    <input
                        type="text"
                        name="Complemento"
                        placeholder=""
                        value={formik.values.Complemento}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        formik={formik}
                    />
                    {formik.errors.Complemento && formik.touched.Complemento && (
                        <span className="errorFeedback">{formik.errors.Complemento}</span>
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
                onSubmit={onsubmit}
            >
                Finalizar
            </button>
        </form>
    )
}