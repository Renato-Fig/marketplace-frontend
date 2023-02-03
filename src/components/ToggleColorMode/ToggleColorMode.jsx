import './toggleColorMode.scss'

import { FaMoon } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa'

import { useState, useEffect } from 'react'

export function ToggleColorMode() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'darkmode')

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme])

    return (
        <div id="toggleColorMode">
            <span
                onClick={() => theme == 'darkmode' ? setTheme('lightmode') : null}
                className={theme == 'lightmode' ? "selected" : "not-selected"}
            >
                <FaSun size={20}/>
            </span>
            <span
                onClick={() => theme == 'lightmode' ? setTheme('darkmode') : null}
                className={theme == 'darkmode' ? "selected" : "not-selected"}
            >
                <FaMoon size={20} />
            </span>
        </div>
    )
}