import { useState } from 'react'
import '../styles/product.scss'

import MockProduct from '../assets/mock-product.json'

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
                <aside></aside>
            </div>
        </div>
    )
}