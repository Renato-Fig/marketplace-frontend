import '../../styles/loginAndRegistration.scss'

// Importação de dependências
import { useFormik } from 'formik'
import * as yup from 'yup'
import InputMask from 'react-input-mask'

export function ClientRegistration() {

    const formik = useFormik({
        initialValues: {
            name: '',
            termsOfUseAgreement: false
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Este campo é obrigatório'),
            termsOfUseAgreement: yup.bool().oneOf([true], 'Aceite os termos e condições para continuar')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const onBlurCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '')

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                formik.setFieldValue('address', data.logradouro);
                formik.setFieldValue('city', data.localidade);
                formik.setFieldValue('uf', data.uf);
            })
    }

    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <p>Cadastro como cliente</p>
            <div className="inputField">
                <label htmlFor="name">Nome completo</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Primeiro nome e sobrenome"
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
                <label htmlFor="businessName">Nome Fantasia</label>
                <input
                    type="text"
                    name="businessName"
                    placeholder="Primeiro nome e sobrenome"
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
                <label htmlFor="cnpj">CNPJ</label>
                <InputMask
                    type="text"
                    name="cnpj"
                    mask="999.999.999-99"
                    maskChar=""
                    placeholder="000.000.000-00"
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
                <label htmlFor="phone">Telefone</label>
                <InputMask
                    type="text"
                    name="phone"
                    mask="999.999.999-99"
                    maskChar=""
                    placeholder="000.000.000-00"
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
                <label htmlFor="cep">CEP</label>
                <InputMask
                    type="text"
                    name="cep"
                    mask="99999-999"
                    maskChar=""
                    placeholder="00000-000"
                    value={formik.values.cep}
                    onChange={formik.handleChange}
                    onBlur={onBlurCep}
                    formik={formik}
                />
                {formik.errors.cep && formik.touched.cep && (
                    <span className="errorFeedback">{formik.errors.cep}</span>
                )}
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
            <div className="inputField">
                <label htmlFor="addressNumber">Número</label>
                <input
                    type="text"
                    name="addressNumber"
                    placeholder="Primeiro nome e sobrenome"
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
                <label htmlFor="addressComplement">Complemento</label>
                <input
                    type="text"
                    name="addressComplement"
                    placeholder="Primeiro nome e sobrenome"
                    value={formik.values.addressComplement}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    formik={formik}
                />
                {formik.errors.addressComplement && formik.touched.addressComplement && (
                    <span className="errorFeedback">{formik.errors.addressComplement}</span>
                )}
            </div>
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
                <a href="/terms-of-use">Visualizar contrato</a>
            </div>
            {formik.errors.termsOfUseAgreement && formik.touched.termsOfUseAgreement && (
                <span className="errorFeedback">{formik.errors.termsOfUseAgreement}</span>
            )}
            <button
                type="submit"
            >
                Finalizar
            </button>
        </form>
    )
}