import '../styles/catalog.scss'

import { Footer } from '../components/Footer/Footer'

export function Catalog() {
    document.title = 'Catálogo de fornecedores'

    return (
        <div>
            <p>Esta é a página de catálogo de fornecedores</p>
            <Footer />
        </div>
    )
}