import '../styles/supplierProfile.scss'

import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

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
                    <span></span>
                </aside>
                <span></span>
                <main>
                    <section id="description">
                        <h2>Sobre o fornecedor</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt esse ab quas, praesentium id earum laudantium aspernatur. Modi esse nihil voluptatum sunt eum ad laborum hic fugiat cupiditate itaque.</p>
                    </section>
                    <section id="list">
                        <div id="listHeader">
                            <h2>Anúncios do fornecedor</h2>
                            <a href="/product-registration"><FaPlus size={12}/> Novo anúncio</a>
                        </div>
                        
                        <div className="cardSupplierView">
                            <div className="photo">
                                <img src="https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png" alt="" />
                            </div>
                            <div className="info">
                                <h1>Nome</h1>
                                <h2>R$ 1.000</h2>
                                <div className="actions">
                                    <button><FaPen size={12}/> Editar</button>
                                    <button><FaRegTrashAlt size={12}/> Excluir</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}