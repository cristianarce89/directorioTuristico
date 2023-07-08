import React from 'react'
import './SearchesServicesButton.css'
import { Link } from 'react-router-dom'

export const SearchesServicesButton = () => {
    return (
        <section className="container__navbar">
            <nav className="navbar">
                <ul className="navbar__ul">
                    <li className="navbar__ul--list">
                        <Link to="/" className='searches__a'>Hospedaje</Link>
                    </li>

                    <li className="navbar__ul--list">
                        <Link to="/" className='searches__a'>Agencia de viajes</Link>
                    </li>

                    <li className="navbar__ul--list">
                        <Link to="/" className='searches__a'>Operadores Turisticos</Link>
                    </li>

                    <li className="navbar__ul--list">
                        <Link to="/" className='searches__a'>Guias</Link>
                    </li>

                    <li className="navbar__ul--list">
                        <Link to="/" className='searches__a'>Centro recreativos</Link>
                    </li>

                    <li className="navbar__ul--list">
                        <Link to="/" className='searches__a'>Otros</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
