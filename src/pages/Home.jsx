import '../styles/home.scss'

// Importação de conteúdos textuais
import FaqContent from '../assets/faq-content.json'

// Importação de ícones e imagens
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import ImagePlaceholder from '../assets/image-placeholder.png'

// Importação de dependências
import { useState } from 'react';
import { useFormik } from 'formik'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

export function Home() {
    document.title = 'Home'

    const navigate = useNavigate()

    // Validação de email com Formik e Yup
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Email inválido').required('Este campo é obrigatório')
        }),
        onSubmit: (values) => {
            console.log(values)
            sessionStorage.setItem("email", values.email)
            navigate('/registration', {replace: true})
        }
    })

    return (
        <div id="page-home">

            <div id="menu">
                <p>Mundo Web</p>
                <a href="/login">Entrar</a>
            </div>

            <div className="container" id="banner">
                <div className="wrapper">

                    <h1>Os melhores preços você encontra aqui!</h1>
                    <h3>Compre e negocie da melhor forma.</h3>

                    <p>Deseja participar do MundoWeb? Informe seu email e comece já!</p>
                    <form onSubmit={formik.handleSubmit} noValidate>
                        <input
                            type="email"
                            name="email"
                            placeholder="Digite seu melhor email"
                            value={formik.values.email}
                            formik={formik}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <button
                            type='submit'
                        >
                            Vamos lá!
                        </button>
                    </form>
                    {formik.errors.email && formik.touched.email && (
                        <span className="errorFeedback">{formik.errors.email}</span>
                    )}

                </div>
            </div>

            <div className="container" id="articles">
                <div className="wrapper">

                    <article>
                        <img 
                            className="image-content"
                            src={ ImagePlaceholder } 
                            alt=""
                        />
                        <div className="text-content">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ante, luctus non auctor ut, aliquet sit amet libero. Vestibulum porta quam sed lectus.</p>
                        </div>
                    </article>

                    <article>
                        <div className="text-content">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ante, luctus non auctor ut, aliquet sit amet libero. Vestibulum porta quam sed lectus.</p>
                        </div>
                        <img 
                            className="image-content"
                            src={ ImagePlaceholder } 
                            alt="" 
                        />
                    </article>

                    <article>
                        <img 
                            className="image-content"
                            src={ ImagePlaceholder } 
                            alt="" 
                        />
                        <div className="text-content">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ante, luctus non auctor ut, aliquet sit amet libero. Vestibulum porta quam sed lectus.</p>
                        </div>
                    </article>

                    <article>
                        <div className="text-content">
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu ante, luctus non auctor ut, aliquet sit amet libero. Vestibulum porta quam sed lectus.</p>
                        </div>
                        <img 
                            className="image-content"
                            src={ ImagePlaceholder }
                            alt="" 
                        />
                    </article>

                </div>
            </div>

            <div className="container" id="accordion">
                <div className="wrapper">

                    <h2>Perguntas frequentes</h2>
                    {
                        FaqContent.map(data => {
                            const [expanded, setExpanded] = useState(false)

                            return (
                                <div className="accordion-item">
                                    <div 
                                        className="title-content"
                                        onClick={() => setExpanded(!expanded)}
                                    >
                                        <h4>{data.title}</h4>
                                        <span>
                                            {expanded == false ? <FaPlus /> : <FaMinus />}
                                        </span>
                                    </div>

                                    {expanded == true ? <p>{data.content}</p> : null}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}