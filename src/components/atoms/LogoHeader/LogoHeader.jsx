import React from 'react'
import { Link } from 'react-router-dom'
import './LogoHeader.css'

export const LogoHeader = () => {
    return (
        <Link to="/" className="logo__directorioTuristico">
            <img
            className='header__logo'
            src="https://i.postimg.cc/xdByPP5M/logo-directorio-Turistico.jpg"
            alt="Logo de la empresa"
            />
        </Link>
        
    )
}
