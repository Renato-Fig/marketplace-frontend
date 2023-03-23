import '../../styles/loginAndRegistration.scss'

// Importação de ícones e imagens
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"

// Importação de dependências
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputMask from 'react-input-mask'

export function ClientRegistration() {

    const formik = useFormik({
        initialValues: {
            Nome: '',
            Cpf: '',
            DataNascimento: '',
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
            Nome: yup.string().required('Campo obrigatório'),
            Cpf: yup.string().min(14, 'CPF inválido').required('Campo obrigatório'),
            DataNascimento: yup.date().min('1900-01-01', 'Ano inválido').max(new Date(), 'Data futura inválida').required('Campo obrigatório'),
            Telefone: yup.string().min(14, 'Telefone inválido').required('Campo obrigatório'),
            Senha: yup.string().min(4, 'Senha muito curta').required('Campo obrigatório'),
            SenhaConfirmar: yup.string().oneOf([yup.ref('Senha'), null], 'As senhas devem corresponder').required('Campo obrigatório'),
            Cep: yup.string().min(9, 'CEP inválido').required('Campo obrigatório'),
            Endereco: yup.string().required('Campo obrigatório'),
            Cidade: yup.string().required('Campo obrigatório'),
            Uf: yup.string().required('Campo obrigatório'),
            Numero: yup.string().required('Campo obrigatório'),
            Complemento: yup.string(),
            termsOfUseAgreement: yup.bool().oneOf([true], 'Você deve concordar com nossos termos e condições para continuar')
        }),
        onSubmit: (values) => {
            values.Cpf = values.Cpf.replace(/\D/g, '')
            values.Telefone = values.Telefone.replace(/\D/g, '')
            values.Cep = values.Cep.replace(/\D/g, '')
            console.log(values)
        }
    })

    const onBlurCep = (e) => {
        const Cep = e.target.value.replace(/\D/g, '')

        fetch(`https://viacep.com.br/ws/${Cep}/json/`)
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
    const [showSenhaConfirmar, setShowSenhaConfirmar] = useState(false)
    const [isFulled, setIsFulled] = useState(false)
    useEffect(()=>{
        
        if (formik.values != formik.initialValues)
        setIsFulled(true)
    },[{...formik.values}])

    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <hr />
            <div className="inputField">
                <label htmlFor="Nome">Nome completo</label>
                <input
                    type="text"
                    name="Nome"
                    placeholder=""
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.Nome && formik.touched.Nome && (
                    <span className="errorFeedback">{formik.errors.Nome}</span>
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
                    value={formik.values.cpf}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.Cpf && formik.touched.Cpf && (
                    <span className="errorFeedback">{formik.errors.Cpf}</span>
                )}
            </div>
            <div className="inputField">
                <label htmlFor="DataNascimento">Data de nascimento</label>
                <input
                    type="date"
                    name="DataNascimento"
                    value={formik.values.DataNascimento}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.DataNascimento && formik.touched.DataNascimento && (
                    <span className="errorFeedback">{formik.errors.DataNascimento}</span>
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
                <label htmlFor="Senha">Senha</label>
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
                <label htmlFor="SenhaConfirmar">Confirmação da senha</label>
                <div className="inputAdornmentEnd">
                    <input
                        type={showSenhaConfirmar == false ? "password" : "text"}
                        name="SenhaConfirmar"
                        placeholder="Repita a senha"
                        value={formik.values.SenhaConfirmar}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        formik={formik}
                    />
                    <span
                        onClick={() => setShowSenhaConfirmar(!showSenhaConfirmar)}
                    >
                        {showSenhaConfirmar == true ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
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
                    onBlur={formik.errors.Cep ? formik.handleBlur : onBlurCep}
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
                    <label htmlFor="Uf">Uf</label>
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
                    placeholder=""
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
                // disabled = {!isFulled}
                // className={isFulled ? '' : 'disabled'}
            >
                Finalizar
            </button>
        </form>
    )
}