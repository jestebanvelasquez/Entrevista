import React from 'react';
import './Footer.css';
import phone from '../assets/phone.png';
import email from '../assets/email.png';
import twiter from '../assets/twiter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';



export default function Footer() {
    return (
        <footer className='footer'>
            <div className='contact'>

                <div className=''>
                    <h1>Concilbot</h1>
                </div>
                <div >
                    <div className='phone'>
                        <img src={phone} alt="telefono" />
                        <p>123 45 67 89</p>
                    </div>
                    <div className='email'>
                        <img src={email} alt="telefono" />
                        <p>info@concilbot.com</p>
                    </div>

                </div>
            </div>

            <section className='social'>
                <img src={twiter} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
            </section>
            <div className='end'>
            <hr />
            <p>copyright 2020 Concilbot. All Rigths Reserved | Politica de privacidad</p>
            </div>
        </footer>
    )
}
