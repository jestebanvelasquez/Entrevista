import React from 'react'
import './Section.css'
import banco1 from '../assets/banco1.png'
import banco2 from '../assets/banco2.png'
import banco3 from '../assets/banco3.png'
import banco4 from '../assets/banco4.png'
import Tabla from './Tabla'
import tablaimg from '../assets/tablaimg.png'


export default function Section() {
    return (
        <section className='section'>
            <h2>Los bancos con los que trabajamos</h2>
            <div className='clientes' >
                <div>
                    <img src={banco1} alt="" />
                </div>
                <div>
                    <img src={banco2} alt="" />
                </div>
                <div>
                    <img src={banco3} alt="" />
                </div>
                <div>
                    <img src={banco4} alt="" />
                </div>
            </div>

            <Tabla />

            <section className='info'>
                <div>
                    <h2>
                        La mejor solucion de negocio para ti

                    </h2>
                    <h3>
                        Olvídate de gastar tiempo creando tablas de Excel. Con Concilbot, tendrás tus informes en cuestión de minutos.
                    </h3>
                    <h3> ¿Qué esperas para facilitar tu trabajo?</h3>

                    <button>Accede ahora</button>
                </div>
                <div className='vectores'>
                <img src={tablaimg} alt="imagen tabla" />
                </div>
            </section>

        </section>
    )
}
