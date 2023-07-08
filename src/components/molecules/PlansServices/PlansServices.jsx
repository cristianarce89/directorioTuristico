import React from 'react'
import './PlansServices.css'

export const PlansServices = () => {
    return (
        <section className="container__planServices">
            <div className="planServices__icons">
                <div className="icon__plan1">
                    <img src="https://i.postimg.cc/63VP1hc2/camara.png" alt="imagen camara" />
                    <p>10 fotografias</p>
                </div>
                <div className="icon__plan1">
                    <img src="https://i.postimg.cc/63VP1hc2/camara.png" alt="imagen camara" />
                    <p>100 palabras con la</p>
                    <p>informacion de tu negocio</p>
                </div>
                <div className="icon__plan1">
                    <img src="https://i.postimg.cc/63VP1hc2/camara.png" alt="imagen camara" />
                    <p>Enlace a tu pagina Web</p>
                    <p>y Whatssap(si tienes)</p>
                </div>
            </div>
        </section>
    )
}
