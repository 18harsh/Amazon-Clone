import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { useHistory } from 'react-router';


function Subtotal() {

    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue();   
    return (
        <>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" className="subtotal__image"
            />
        <div className="subtotal">
            
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                                Subtotal ({cart?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"₹"}
            />
            <button onClick={e=>history.push('/payment')}>Proceed to Buy</button>
            </div>
        </>
    )
}

export default Subtotal
