import React from 'react';
import './Home.css'
import bot from '../assets/bot.png'
import Vector from './Vector';
import chat from '../assets/chat.png'
import Section from './Section';


export default function Home() {
   


    return (
        <div className='container'>
            <Vector />
            <div className='header'>
                <div className='title'>
                    <h1>Concilbot</h1>
                </div>
                <div >
                    <button className='btn'>Acceder</button>
                </div>
            </div>
            <div className='content' >
                <div className='text'>
                    <h3 >BIENVENIDO A CONCILBOT</h3>
                    <h1>Tu ayudante perfecto <br /> para crear informes</h1>
                    <p>Crea tablas con la información de tus extractos bancarios de una <br /> forma muy clara y sencilla</p>
                    <button className='btn-info'>
                        Más sobre nosotros
                    </button>
                </div>
                <div className='img-bot'>
                    <img src={bot} alt="robot" />
                </div>
            </div>
            <div className='chat'>
                <img src={chat} alt="" />
            </div>
            <Section/>
        </div>
    )
}

