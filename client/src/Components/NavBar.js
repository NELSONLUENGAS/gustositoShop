import React, { useState } from 'react';
import '../Scss/NavBar.scss';
import { IoMenu } from "react-icons/io5";
import logo from '../images/logo.png';
import { Link } from 'react-scroll';
import { useNavigate, useParams } from 'react-router';

export default  function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { business } = useParams();
    console.log(business);

    function toggleMenu(event) {
        event.preventDefault();
        setIsOpen(!isOpen);
    }
    function backToHome(event) {
        event.preventDefault();
        navigate('/');
    }
    function goToBusiness(event) {
        event.preventDefault();
        navigate('/business');
    }

    return(
        <div className='navBarContainer'>
            <div className='navBarElement1'>
                <div className='navBarItem1'>
                    <div>
                        <img src={logo} alt="logoempa" />
                    </div>
                    <div>
                        <li>
                            Empanadas
                        </li>
                        <li>
                            Don Gustosito
                        </li>
                    </div>
                </div>
                <div className='navBarItem2'> 
                    <div>
                        <span>
                            Télefono: +57 (1) 888 888 888 
                        </span>
                    </div>
                    <div>
                        <span>
                            Dirreción: Calle Principal #123 - Barrio San Juan - Medellín
                        </span>
                    </div>
                </div>
                <div className='navBarItem3'>
                    <button onClick={ event => toggleMenu(event)}>
                        <IoMenu />
                    </button>
                </div>
            </div>
            {
                isOpen ?
                <div className={business ? 'navBarElement2_1' : 'navBarElement2'}>
                    <div className='navBarItem4'>
                        <span onClick={event => backToHome(event)}>Home</span>
                        { !business && <span onClick={event => goToBusiness(event)}>Gustosito Empresa</span>}
                        { !business && <Link to="product"  smooth={true} duration={1500} offset={-20}>
                            <span>Gustosito Empanadas</span>
                        </Link>}
                        { !business && <Link to="contact"  smooth={true} duration={1500} offset={-20}>
                            <span>Contacto</span>
                        </Link>}
                    </div>
                </div>
                : null
            }
        </div>
    )
}