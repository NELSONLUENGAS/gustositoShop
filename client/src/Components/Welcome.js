import React from 'react';
import { dataImages } from '../Data/Data';
import '../Scss/Welcome.scss';


export default  function Welcome() {
    return(
        <div className="welcomeContainer">
            <div className='welcomeElement1'>
                <img src={dataImages[0]} alt="welcome" />
            </div>
            <div className='welcomeElement2'>
                <p>
                    Bienvenido a Empanadas Don Gustosito, aquí encontraras las mejores empanadas que hayas 
                    provado en tu vida, con la mejor sazón, sabor y crocancia, te ofrecemos una gran variedad de productos,
                    para que puedas elegir la que más te guste y deleite tu paladar, además como si fuera poco 
                    puedes disfrutar la que quieras por el mismo precio
                </p>
                <p>
                    Que esperas para disfrutar de la mejor sazón de Don Gustosito, te esperamos!! 
                </p>
            </div>
        </div>
    )
}