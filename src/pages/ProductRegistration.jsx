import '../styles/productRegistration.scss'

export function ProductRegistration() {
    document.title = 'Cadastro de Produto'

    return (
        <div id="product-registration-page">
            <div className="container">
                <main>
                    <header>
                        <h1>Cadastre novo produto</h1>
                    </header>
                    <form action="">
                        <div className="inputField">
                            <label htmlFor="title">Título</label>
                            <input
                                type="text"
                                name="title"
                            />
                        </div>
                        <div className="inputField">
                            <label htmlFor="title">Preço</label>
                            <input
                                type="number"
                                name="title"
                            />
                        </div>
                        <div className="inputField">
                            <label htmlFor="description">Descrição</label>
                            <textarea
                                type="text"
                                name="description"
                            />
                        </div>
                        <div className="inputField">
                            <label htmlFor="description">Imagens</label>
                            <input
                                type="file"
                                name="description"
                                accept='image/*'
                                multiple
                            />
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