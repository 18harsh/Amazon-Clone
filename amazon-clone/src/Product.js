import React from 'react'
import "./Product.css"

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                { (price) ? (
                <p>{title}</p>
            ) : (
                title &&
                     < h1 className="product__header">{title}</h1>
                
            )
            }
            { price &&
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                }
                <div className="product__rating">
                {
                    Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))
                }
                    
                </div>
            </div>
            
            
            <img src={ image} alt="" />
            { price &&
                <button>Add to Cart</button>
            }
        </div>
    )
}

export default Product
