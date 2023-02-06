import React from 'react';
import { dataImages } from '../Data/Data';
import '../Scss/Slide.scss';
import NavBar from './NavBar';


export default  function Slide() {
    return(
        <div className="slideContainer">
            <div className='slideMenu'>
                <NavBar />
            </div>
            <div className="slider"> 
                <li>
                    <input type="radio" id='button1' name='button' />
                    <label htmlFor='button1'></label>
                    <img src={dataImages[0]} alt="slide" />
                </li>
                <li>
                    <input type="radio" id='button2' name='button' defaultChecked/>
                    <label htmlFor='button2'></label>
                    <img src={dataImages[1]} alt="slide" />
                </li>
                <li>
                    <input type="radio" id='button3' name='button'/>
                    <label htmlFor='button3'></label>
                    <img src={dataImages[2]} alt="slide" />
                </li>
            </div>
        </div>
    )
}