import React, { useState } from 'react';
import '../Scss/Footer.scss';
import map from '../images/map.png';
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { BsArrowRightShort, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { ToastContainer, toast, Bounce, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default  function Footer() {
    const [ email, setEmail ] = useState('');
    const notify = () => toast.success("Subscrito con éxito",{
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
        autoClose: 2000,
        transition: Bounce
    });
    const notifyError = () => toast.error("Correo incorrecto",{
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "dark",
        autoClose: 2000,
        transition: Zoom
    });

    function handleEmail(event){
        event.preventDefault();
        const { value } = event.target;
        setEmail(value);
    }
    function handleSubmit(event){
        event.preventDefault();
        const regexEmail = /\S+@\S+\.\S+/;
        if(regexEmail.test(email)){
            setEmail('');
            notify()
        }
        else{
            notifyError()
        }
    }

    return(
        <div className='footerContainer'>
            <div className='footerElement1'>
                <img src={map} alt="map" />
                <button>
                    <AiFillPhone/>
                    +57 (1) 999 999 999
                </button>
                <button>
                    <AiFillMail/>
                    DonGustosito2@gmail.com
                </button>
            </div>
            <div className='footerElement2'>
                <div>
                    <h6>Newsletter</h6> 
                </div>
                <div>
                    <div>
                        <input  onChange={event => handleEmail(event)} value={email} type="email" placeholder='Ingresa tu email'/>
                        <button onClick={event => handleSubmit(event)}>
                            <BsArrowRightShort/>
                        </button>
                    </div>
                </div>
                <div>
                    <button>
                        <BsFacebook/>
                    </button>
                    <button>
                        <BsTwitter/>
                    </button>
                    <button>
                        <BsInstagram/>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}