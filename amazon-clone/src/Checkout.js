import React, { useEffect } from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import CurrencyFormat from "react-currency-format"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer'
import FlipMove from 'react-flip-move';

function Checkout() {
    
    const [{ cart, user }, dispatch] = useStateValue();
    
    // useEffect({

    // }, []);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2017/Weekly/0912/Download_the_apps_music_india_hero.jpg" alt="" />
                <div style={{borderBottom: "1px solid lightgray"}}>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    <FlipMove>
                        {cart.map((item,i) => (
                            <CheckoutProduct
                                key ={item.id+i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}

                            />
                        ))
                     }
                    </FlipMove>
                        
            </div>
                <CurrencyFormat
                    renderText={value => (
                        < >
                            <p className="checkout__subtotal">
                                    Subtotal ({cart?.length} items): <strong>{value}</strong>
                            </p>
                            
                        </>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix={"₹"}
                />
            </div>


            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
