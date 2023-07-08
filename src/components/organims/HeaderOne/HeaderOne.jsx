import { Link } from 'react-router-dom'
import './HeaderOne.css'
import { LogoHeader } from '../../atoms/LogoHeader/LogoHeader'

export const HeaderOne = () => {
    return (
        <header>
            <section className="container__header">
                < LogoHeader />
                <nav className="index__contenedor--registrateLogin">
                    <Link to="#" className="index__registrate">Pauta con nosotros</Link>
                    <Link to="#" className="index__login">Iniciar sesión</Link>
                </nav>
            </section>
        </header>
    )
}
