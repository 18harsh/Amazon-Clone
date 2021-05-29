import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ id, title, image, price, rating }) {
    
    const [{ cart }, dispatch] = useStateValue();
    const notify = (title) => toast(
        <>
            <p style={{color: "black"}}>{title}</p>
            <strong style={{color: "green"}}> has been added in your Cart</strong>
        </>
    ); 
    
    // console.log(cart)

    const addToCart = () => {
        // dispatch the item into data layer
        notify(title);
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })

    }

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
                <>
                <button onClick={addToCart}>Add to Cart</button>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                    toastClassName="product__toastContainer"
                />
                </>
            }
        </div>
    )
}

export default Product
