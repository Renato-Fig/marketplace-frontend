import '../styles/supplierProfile.scss'

import { Footer } from '../components/Footer/Footer'

export function SupplierProfile() {
    document.title = 'Perfil'

    return (
        <div>
            <p>Esta é a página de perfil de fornecedor</p>
            <Footer />
        </div>
    )
}