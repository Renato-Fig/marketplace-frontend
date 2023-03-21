import '../styles/supplierProfile.scss'

import { Footer } from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import { Card } from '../components/Card/Card'

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
                    <h3>Atividade</h3>
                </aside>
                <span></span>
                <main>
                    <section id="description">
                        <h2>Sobre o fornecedor</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt esse ab quas, praesentium id earum laudantium aspernatur. Modi esse nihil voluptatum sunt eum ad laborum hic fugiat cupiditate itaque.</p>
                    </section>
                    <section id="list">
                        <h2>Anúncios do fornecedor</h2>
                        <Card />
                    </section>
                </main>
            </div>
        </div>
    )
}