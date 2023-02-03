import '../styles/supplierProfile.scss'

import { Footer } from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'

export function SupplierProfile() {
    document.title = 'Perfil'

    return (
        <div id="supplierProfile-page">
            <div className="container">
                <aside>
                    <img 
                        src="https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg" 
                        alt="Foto de perfil" 
                        id="avatar"
                    />

                    <h1>Renato Figueiredo</h1>
                    <h2>Atividade</h2>
                </aside>
                <span></span>
                <main>
                    <section id="description">
                        <p>Descrição do fornecedor</p>
                    </section>
                    <section id="list">
                        <p>Lista do fornecedor</p>
                    </section>
                </main>
            </div>
        </div>
    )
}