import { useState } from 'react'
import '../styles/product.scss'

import MockProduct from '../assets/mock-product.json'
import { FaRegCommentAlt } from "react-icons/fa"

export function Product() {
    document.title = 'Produto'
    const [displayImage, setDisplayImage] = useState(MockProduct.image[0])

    return (
        <div id="product-page">
            <div className="container">
                <main>
                    <section id="productHeader">
                        <h1>{MockProduct.name}</h1>
                        <div id="productPreview">
                            <div id="mainImage">
                                <img
                                    src={displayImage}
                                    alt="Nenhuma imagem"
                                />
                            </div>
                            <div id="otherImages">
                                {
                                    MockProduct.image.map((data) => {
                                        return (
                                            <img
                                                src={data}
                                                alt=""
                                                onMouseOver={() => setDisplayImage(data)}
                                                className={data == displayImage ? "showingThis" : null}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                    <section id="productFeatures">
                        <h2>Características</h2>
                        <table>
                            {
                                MockProduct.features.map((data) => {
                                    return (
                                        <tr>
                                            <td>{data.detail}</td>
                                            <td>{data.content}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </section>
                    <section id="productDescription">
                        <h2>Descrição</h2>
                        <p>{MockProduct.description}</p>
                    </section>
                    <section id="productRelated">
                        <h2>Anúncios relacionados</h2>
                    </section>
                </main>
                <aside>
                    <h2 className="price">{MockProduct.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                    <hr />
                    <h2>Vendedor</h2>
                    <a href="/profile" id="chatBtn"><FaRegCommentAlt />Chat</a>
                    <hr />
                    <a href="/profile">Informações sobre o vendedor</a>
                    <a href="/profile">Ver todos os anúncios</a>
                </aside>
            </div>
        </div>
    )
}