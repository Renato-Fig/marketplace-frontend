import './card.scss'

import { useNavigate } from 'react-router-dom'

export function Card(props) {

    const navigate = useNavigate()

    return (
        <div className="card">
            <div className="photo">
                <img src={props.imagem} alt="" />
            </div>
            <div className="info">
                <h1>{props.nome_fornecedor}</h1>
                <h2>{props.ramo_atividade}</h2>
            </div>
        </div>
    )
}