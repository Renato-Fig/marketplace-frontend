import './navBar.scss'

import { FaSearch } from "react-icons/fa"
import { useState, useRef, useEffect } from 'react'

export function NavBar() {
    const [openDropdown, setOpenDropdown] = useState(true)
    const ref = useRef(null);

    const handleClick = (event) => {
        console.log(event)
        if (ref.current && !ref.current.contains(event.target)) {
            setOpenDropdown(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <nav>
            <div className="container">
                <p>Logo</p>
                <div className="inputAdornmentEnd">
                    <input
                        type="text"
                        name="search"
                        placeholder="Encontre fornecedores para seu negócio"
                    />
                    <span>
                        <FaSearch />
                    </span>
                </div>
                <div id="account">
                    <span
                        onClick={() => setOpenDropdown(!openDropdown)}
                    >
                        Minha Conta
                    </span>
                    {
                        openDropdown ? (
                            <div id="dropdownMenu" ref={ref}>
                                <ul >
                                    <li>Pagamentos</li>
                                    <li>Pagamentos</li>
                                    <li>Sair</li>
                                </ul>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </nav>
    )
}