import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../Scss/Products.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../Redux/actions';

export default  function Product() {
    const dispatch = useDispatch();
    const products = useSelector( state => state.products);
    const { data } = products;
    const principal = data?.length && data.slice(1, 4)
    const [more, setMore] = useState(false);

    function handleMore(event){
        event.preventDefault();
        setMore(!more);
    }

    useEffect(()=>{
        dispatch(getAllProducts());
    },[dispatch]);

    return(
        <div id='product' className='ProductContainer'>
            <div className="productElement1">
                {
                    !more ?
                    data?.length && principal.map(product => 
                        <ProductCard
                            key={ product.id}
                            name = {product.name}
                            image = {product.image}
                            price = {product.price}
                            description = {product.description}
                        />):
                    data?.length && data.map(product => 
                        <ProductCard
                            key={ product.id}
                            name = {product.name}
                            image = {product.image}
                            price = {product.price}
                            description = {product.description}
                        />)
                }
            </div>
            <div className="productElement2">
                <button onClick={event => handleMore(event)}>
                    { ! more ? 'Ver más' : 'Ver menos'}
                </button>
            </div>
        </div>
    )
}