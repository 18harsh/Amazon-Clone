import React, { useEffect, useState } from 'react'
import './Header.css'
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
// import * as functions from 'firebase-functions';


// const config = functions.config();
// const stripe = config.stripe.geocoding_api

function Header() {

    const classes = useStyles();
    
    const [categories, setCategories] = useState("");
    const [{ cart, user,address }, dispatch] = useStateValue();

    const handleChangeFormcontrol = (event) => {
        setCategories(event.target.value);
    };

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    

    return (
        <div className='header'>
            
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="header__logoIndia">
                    <img
                            alt=""
                            className="header__logo"
                            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                            />
                        <span className="header__logoDotIn">
                                .in
                        </span>
                    </div>
                </Link>
                
            
            
            <div className="header__nav">
                <RoomIcon
                    className="header__locationIcon"/>
                <div className="header__optionAddress">
                    <span className="header__optionLineOne">
                        {user?'Deliver to '+ user.email : 'Hello' }    
                    </span>
                   
                    <span className="header__optionLineTwo">
                        
                        {(address?.city) ?
                            (
                                address?.city+ ' ' + address?.postcode
                            ): (
                                'Select your address'
                            )
                        }
                    </span>
                </div>
            </div>
            <div
                className="header__search">
                
                <FormControl variant="outlined" className={classes.header__formControl}>
                    <Select
                        displayEmpty
                        value={categories}
                        onChange={handleChangeFormcontrol}
                        displayEmpty
                        className={classes.header__formControlSelectEmpty}
                    >   
                        <MenuItem value="">All Catergories</MenuItem>
                        <MenuItem value="Deals">Deals</MenuItem>
                    
                    </Select>
                </FormControl>


                <input
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon
                    className="header__searchIcon"/>

            </div>
            <div  className="header__nav">
                <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
                    <div className="header__option" onClick={ handleAuthentication}>
                        <span className="header__optionLineOne">
                            Hello, {user?.email}
                        </span>
                        <span className="header__optionLineTwo">
                               {user?'Sign Out':'Sign In'} 
                        </span>
                    </div>
                </Link>
                
                <Link to="/orders" style={{ textDecoration: 'none' }}>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>
                    
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                     <div className="header__optionBasket">
                    <ShoppingCartIcon />
                        <span className="header__basketCount">{cart?.length} </span>
                        <span className="header__optionLineCart">Cart</span>
                    </div>
                 </Link>
               
            </div>
            
        </div>
    )
}


const useStyles = makeStyles(() => ({
    header__formControl: {
        backgroundColor: "white",
        minWidth: "auto",
        border: 0,
        borderRadius: "10px 0 0 10px",
        
  },
    header__formControlSelectEmpty: {
        
        backgroundColor: "white",
        '&:hover': {
            background: "#dadada",
        },
        fontSize: 13,
        height: "40px",
        
  }
}));

export default Header
