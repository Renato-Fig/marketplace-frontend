import '../styles/productRegistration.scss'

import { useState } from 'react'
import { useFormik } from 'formik'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import * as yup from 'yup'

export function ProductRegistration() {
    document.title = 'Cadastro de Produto'

    const [features, setFeatures] = useState([]);
    const [files, setFiles] = useState([])

    const addFeature = () => {
        const newFeature = { detail: '', content: '' };
        setFeatures([...features, newFeature]);
    };

    const removeFeature = (indexToRemove) => {
        const updatedFeatures = features.filter((_, index) => index !== indexToRemove);
        setFeatures(updatedFeatures);
    };

    function handleChange(event) {
        setFiles([]);

        for (let file of event.target.files) {
            let reader = new FileReader();

            reader.onload = function () {
                setFiles(files => [...files, { name: file.name, size: file.size, dataUrl: reader.result }]);
            }

            reader.readAsDataURL(file);
        }
    }

    function handleDelete(index) {
        setFiles(files => files.filter((_, i) => i !== index));
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            price: '',
            category: '',
            features: [
                {
                    detail: '',
                    content: '',
                }
            ],
            description: '',
        },
        validationSchema: yup.object().shape({
            title: yup.string().required('Este campo obrigatório'),
            price: yup.number().required('Este campo obrigatório'),
            category: yup.number(),
            features: yup.array().of(yup.object().shape({
                detail: yup.string(),
                content: yup.string(),
            })),
            description: yup.string().required('Este campo obrigatório'),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <div id="product-registration-page">
            <div className="container">
                <main>
                    <header>
                        <h1>Cadastre novo produto</h1>
                    </header>
                    <form onSubmit={formik.handleSubmit} noValidate>
                        <div className="inputField">
                            <label htmlFor="title">Título</label>
                            <input
                                type="text"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                formik={formik}
                            />
                            {formik.errors.title && formik.touched.title && (
                                <span className="errorFeedback">{formik.errors.title}</span>
                            )}
                        </div>
                        <div className="inputField">
                            <label htmlFor="price">Preço</label>
                            <input
                                type="number"
                                name="price"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                formik={formik}
                            />
                            {formik.errors.price && formik.touched.price && (
                                <span className="errorFeedback">{formik.errors.price}</span>
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
                            <label htmlFor="feature">Características <small>(Opcional)</small></label>
                            <div className="feature">
                                            <input
                                                type="text"
                                                name="detail"
                                                placeholder="Detail"
                                            />
                                            <input
                                                type="text"
                                                name="content"
                                                placeholder="Content"
                                            />
                                            <span className="actionBtn"><FaRegTrashAlt size={12} />Remover</span>
                                        </div>
                            {
                                features.map((feature, index) => {
                                    return (
                                        <div className="feature">
                                            <input
                                                type="text"
                                                name="detail"
                                                placeholder="Detail"
                                            />
                                            <input
                                                type="text"
                                                name="content"
                                                placeholder="Content"
                                            />
                                            <button onClick={removeFeature(index)} className="actionBtn">Remover</button>
                                        </div>
                                    )
                                }
                                )
                            }
                            <span onClick={console.log("teste")} className="actionBtn"><FaPlus size={12}/>Adicionar característica</span>
                        </div>
                        <div className="inputField">
                            <label htmlFor="description">Descrição</label>
                            <textarea
                                type="text"
                                name="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                formik={formik}
                            />
                            {formik.errors.description && formik.touched.description && (
                                <span className="errorFeedback">{formik.errors.description}</span>
                            )}
                        </div>
                        <div className="inputField">
                            <label htmlFor="images">Imagens</label>
                            <input
                                type="file"
                                name="images"
                                accept='image/*'
                                multiple
                                onChange={handleChange}
                            />
                            <div id="dropzone" htmlFor="images">
                                <FaCloudUploadAlt size={45} />
                                <p>Arraste e solte os itens ou clique para abrir o explorador</p>
                            </div>
                            <ul>
                                {files.map((file, index) => (
                                    <li key={file.name} className="previewItem">
                                        <div className="wrapperImageInfo">
                                            <div className="previewImageContainer">
                                                <img src={file.dataUrl} alt="Preview" className="preview"/>
                                            </div>
                                            <div className="previewInfo">
                                                <h3>{file.name}</h3> 
                                                <small>({(file.size / (1024 * 1024)).toFixed(2)} MB)</small>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDelete(index)} className="actionBtn"><FaRegTrashAlt size={12}/>Excluir</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button
                            type="submit"
                        >
                            Cadastrar produto
                        </button>
                    </form>
                </main>
            </div>
        </div>
    )
}