import '../styles/catalog.scss'

import { Card } from '../components/Card/Card'

import { FaGripHorizontal } from 'react-icons/fa'
import { FaGripLines } from 'react-icons/fa'
import { FaFilter } from 'react-icons/fa'

import MockSuppliers from '../assets/mock-suppliers.json'
import { useState } from 'react'

export function Catalog() {
    document.title = 'Catálogo de fornecedores'

    const [gridStyle, setGridStyle] = useState('modular')
    const [expandFilters, setExpandFilters] = useState(false)

    return (
        <div id="catalogSupplier-page">
            <div className="container">
                <aside>
                    <p>ADS</p>
                </aside>
                <span></span>
                <main>
                    <section id="filterOptions">
                        <div id="toggleGridStyle">
                            <span
                                onClick={() => setGridStyle('modular')}
                                className={gridStyle == 'modular' ? 'selected' : 'not-selected'}
                            >
                                <FaGripHorizontal size={20} />
                            </span>
                            <span
                                onClick={() => setGridStyle('horizontal')}
                                className={gridStyle == 'horizontal' ? 'selected' : 'not-selected'}
                            >
                                <FaGripLines size={20} />
                            </span>
                        </div>
                        <span
                            id="filterExpander"
                            onClick={() => setExpandFilters(!expandFilters)}
                        >
                            <FaFilter />
                            Filtros
                        </span>
                    </section>
                    {
                        expandFilters == true ? 
                        <div id="filters">
                            Filtros
                        </div> :
                        null
                    }
                    <section 
                        id="listOfSuppliers"
                        className={gridStyle == 'modular' ? "modular" : "horizontal"}
                    >
                        {
                            MockSuppliers.map((data) => {
                                return (
                                    <Card
                                        imagem={data.imagem}
                                        nome_fornecedor={data.nome_fornecedor}
                                        ramo_atividade={data.ramo_atividade}
                                    />
                                )
                            })
                        }
                    </section>
                    <button id="expandItems">
                        Mostrar mais
                    </button>
                </main>
            </div>
        </div>
    )
}