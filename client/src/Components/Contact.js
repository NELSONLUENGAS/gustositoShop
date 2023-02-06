import React, { useState } from 'react';
import logo from '../images/logo.png';
import '../Scss/Contact.scss';
import { ToastContainer, toast, Bounce, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default  function Contact() {
    const [ text, setText ] = useState('');
    const notify = () => toast.success("Correspondencia enviada con éxito",{
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
        autoClose: 2000,
        transition: Bounce
    });
    const notifyError = () => toast.error("Escriba una respuesta correcto",{
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
        autoClose: 2000,
        transition: Zoom
    });
    
    function handleSubmit(event){
        event.preventDefault();
        if(text.length > 10){
            setText('');
            notify()
        }
        else{
            notifyError()
        }
    }
    function handleChange(event){
        const { value } = event.target;
        setText(value);
    }

    return(
        <div id='contact' className='contactContainer'>
            <div className='contactElement1'>
                <img src={logo} alt="logoem" />
                <p>
                Hola nos alegra mucho que estés visitando nuestra página web, podrás seguirnos y ver más contenido en nuestras redes sociales 
                    <br/>
                    Podrás dejarnos sugerencias o comentarios en nuestro buzón de correo electrónico para así mejorar nuestros servicios
                    <br/>
                    <h6>¡¡Don Gustosito siempre a tu alcance y disponibilidad!!</h6>
                </p>
            </div>
            <div className='contactElement2'>
                <p>
                    Télefonos: +57 (1) 888 888 888 - +57 (1) 999 999 999
                </p>
                <p>
                    Dirreción: Calle Principal #123 - Barrio San Juan - Medellín
                </p>
                <h6>¡¡ Pide tu domicilio!!</h6>
                <textarea value={text} onChange={event => handleChange(event)} cols="50" rows="5" placeholder='Buzón de correos'></textarea>
                <br/>
                <button onClick={event => handleSubmit(event)}>Enviar</button>
            </div>
            <ToastContainer />
        </div>
    )
}