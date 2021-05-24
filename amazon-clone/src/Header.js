import React from 'react'
import './Header.css'
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <div className="header__logoIndia">
                <img
                className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                />
                <span className="header__logoDotIn">
                    .in
                </span>
            </div>
            
            <div className="header__nav">
                <RoomIcon
                    className="header__locationIcon"/>
                <div className="header__optionAddress">
                    
                    <span className="header__optionLineOne">
                        Hello
                    </span>
                    <span className="header__optionLineTwo">
                        
                        Select your address
                    </span>
                </div>
            </div>
            <div
             className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon
                    className="header__searchIcon"/>

            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello, Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
            
        </div>
    )
}

export default Header
