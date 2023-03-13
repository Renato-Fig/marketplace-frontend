import './navBar.scss'

import LogoNavbarDark from '../../assets/images/Logo-Navbar-Darkmode.svg'
import LogoNavbarLight from '../../assets/images/Logo-Navbar-Lightmode.svg'

import { FaSearch } from "react-icons/fa"
import { FaSignOutAlt } from "react-icons/fa"
import { FaUserEdit } from "react-icons/fa"
import { FaDollarSign } from "react-icons/fa"

import { useState, useRef, useEffect } from 'react'

export function NavBar() {
    const [openDropdown, setOpenDropdown] = useState(false)
    const ref = useRef(null);

    /*
    const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setOpenDropdown(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);*/

    return (
        <nav>
            <div className="container">
                <img 
                    src={ LogoNavbarDark } 
                    alt="MundoWeb" 
                    className="logoNavbar"
                    id="logoDarkmode"
                />
                <img 
                    src={ LogoNavbarLight } 
                    alt="MundoWeb"
                    className="logoNavbar" 
                    id="logoLightmode"
                />
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
                                    <li><FaUserEdit size={20} /> Editar perfil</li>
                                    <li><FaDollarSign size={20} /> Pagamentos</li>
                                    <li><FaSignOutAlt size={20} /> Sair</li>
                                </ul>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </nav>
    )
}