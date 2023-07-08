import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderTwo.css'

export const HeaderTwo = () => {
    return (
        <header>
            <div className="rutaDorada__container--header">
                <Link to="/" className="rutaDorada__logo--directorioTuristico">
                    <img src="https://i.postimg.cc/xdByPP5M/logo-directorio-Turistico.jpg" alt="Logo de la empresa" />
                </Link>
                <section className="container__busqueda--header">
                    <label className="container__iconLugar--header" htmlFor="lugar">
                        <span className="material-symbols-outlined icon__lugar--header">location_on</span>
                        <input className="input__lugar--header" type="text" name="lugar" placeholder="Lugar" />
                    </label>
                    <div className="container__botonBuscar--header">
                        <button className="botonBuscar__header">
                            <span className="material-symbols-outlined icon__lupa--header">search</span>
                            <span>Buscar</span>
                        </button>
                    </div>
                </section>
                <nav className="rutaDorada__contenedor--registrateLogin">
                    <Link to="/" className="rutaDorada__registrate">Pauta con nosotros</Link>
                    <Link to="/" className="rutaDorada__login">Iniciar sesión</Link>
                </nav>
            </div>
        </header>
    )
}
