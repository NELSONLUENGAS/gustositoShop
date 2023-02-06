import React from 'react';
import '../Scss/ProductCard.scss';
import accounting from 'accounting';

export default  function ProductCard({name, price, image, description}) {
    const detail = description.slice(0, 200)
    return(
        <div className='productCardContainer'>
            <div className="productCardElement1">
                <span>
                    {name}
                </span>
            </div>
            <div className="productCardElement2">
                <img src={image} alt="product" />
            </div>
            <div className="productCardElement3">
                {accounting.formatMoney(price, '$', 0)}
            </div>
            <div className="productCardElement4">
                <p>
                    {detail}...
                </p>
            </div>
        </div>
    )
}