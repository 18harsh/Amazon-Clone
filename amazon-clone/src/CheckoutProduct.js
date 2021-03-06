import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
import { forwardRef } from "react";


const CheckoutProduct = forwardRef(({id,image,title,price,rating ,hideButton},ref)=> {
    const [{ cart }, dispatch] = useStateValue();
    
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div ref={ref} className="checkoutProduct">
            <img
                alt=""
                src={image}
                className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                {
                    !hideButton && (
                        <button onClick={removeFromCart} className="">
                            Remove from Cart 
                        </button>
                    )
                }
                
            </div>
        </div>
    )
})

export default CheckoutProduct
