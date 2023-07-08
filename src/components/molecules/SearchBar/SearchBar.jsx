import React from 'react'
import './SearchBar.css'

export const SearchBar = () => {
    return (
        <section className="container__busqueda">
            <label className="container__icon--busqLugar" htmlFor="lugar">
                <span className="material-symbols-outlined icon__lugar">location_on</span>
                <input className="input__lugar" type="text" name="lugar" placeholder="Lugar" />
            </label>
            <div className="container__boton--buscar">
                <button className="boton__buscar">
                    <span className="material-symbols-outlined icon__lupa">search</span>
                    <span>Buscar</span>
                </button>
            </div>
        </section>
    )
}
