import React from 'react';
import Slide from './Slide';
import Welcome from './Welcome';
import Product from './Products';
import Contact from './Contact';
import Footer from './Footer';


export default  function Home() {
    return(
        <div>
            <div>
                <Slide/>
            </div>
            <div>
                <Welcome/>
            </div>
            <div>
                <Product/>
            </div>
            <div>
                <Contact/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}