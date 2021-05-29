import React from 'react'
import "./Home.css"
import Product from './Product'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


function Home() {

    
    return (
        <div className="home">
            <div className="home__container">

                <Carousel
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} className="header__carouselButton" style={{ left: 15 }}>
                            {/* <NavigateBeforeIcon style={{ fontSize: 100,}}/> */}
                        </button>
                    )
                }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button type="button" onClick={onClickHandler} title={label} className="header__carouselButton"  style={{ right: 15 }}>
                                {/* <NavigateNextIcon style={{ fontSize: 100, }} /> */}
                                
                            </button>
                        )
                    }
                    showThumbs={false} showIndicators={false} showStatus={false} autoPlay autoFocus infiniteLoop className="home__carousel">
                    <div>
                        <img
                                alt=""
                                className="home__image"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg" />
                    </div>
                    <div>
                        <img
                                alt=""
                                className="home__image"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Household_1500x600_V2._CB670004437_.jpg" />
                    </div>
                    <div>
                        <img
                                alt=""
                                className="home__image"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg" />
                    </div>
                    <div>
                        <img
                                alt=""
                                className="home__image"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg" />
                    </div>
                    <div>
                            <img
                                alt=""
                                className="home__image"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/May21/fresh-pc_021x._CB670987717_.jpg" />
                    </div>
                    <div>
                            <img
                                alt=""
                                className="home__image"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/1500X600._CB668498028_.png" />
                    </div>
                    <div>
                            <img
                                alt=""
                                className="home__image"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg" />
                    </div>
                    <div>
                            <img
                                alt=""
                                className="home__image"
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Javed/GTM/HeroPC_1500x600_CBCC._CB669049594_.jpg" />
                    </div>
            </Carousel>

                {/* <img
                    className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg" /> */}
                
                <div className="home__row">
                    <Product
                        key={102344353455}
                        id={ 102344353455}
                        title="Masks Combo"
                        price={299}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2021/MayArt_GW/Couple_mask_1._SY304_CB670955378_.jpg"
                        rating={4} />
                    <Product
                        key={10234455}
                        id={ 10234455}
                        title="Pulse oximeters | Starting"
                        price={1499}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/oxi-99PC-1x._SY304_CB655087945_.jpg"
                        rating={5} />
                    <Product
                        key={1023445523}
                        id={ 1023445523}
                        title="Pay your credit card bills on Amazon"
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
                        rating={ 0}/>
                    
                </div>
                <h1 style={{marginLeft:"30px"}}>Inspired by your search history</h1>
                <div className="home__row">
                    <Product
                        key={102344535}
                        id={ 102344535}
                        title="Guide To Technical Analysis & Candlesticks"
                        price={248}
                        image="https://images-na.ssl-images-amazon.com/images/I/51CZiEkTPuL._SX322_BO1,204,203,200_.jpg"
                        rating={ 4}/>
                    <Product
                        key={1023445557}
                        id={ 1023445557}
                        title="ZOSOE Plastic Table Lamp, white"
                        price={529}
                        image="https://images-na.ssl-images-amazon.com/images/I/612vqqkyz-L._SL1000_.jpg"
                        rating={ 4}/>
                    <Product
                        key={1023445675}
                        id={ 1023445675}
                        title="Mellifluous Reversible Super Soft Velvet Round Cat Dog Pet Bed Diameter 61 cms Height 15 cms S (Small, Brown Cream)"
                        price={439}
                        image="https://images-na.ssl-images-amazon.com/images/I/71YMD-eEy6L._SL1500_.jpg"
                        rating={ 5}/>
                </div>
                <h1 style={{marginLeft:"30px"}}>Apple Products</h1>
                <div className="home__row">
                    <Product
                        key={10234453554}
                        id={ 10234453554}
                        title="New Apple Watch Series 6 (GPS, 44mm) - Blue Aluminium Case with Deep Navy Sport Band"
                        price={43900}
                        image="https://images-na.ssl-images-amazon.com/images/I/71ZlG-lXrSL._SL1500_.jpg"
                        rating={ 5}/>
                    <Product
                        key={10234455574563}
                        id={ 10234455574563}
                        title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)"
                        price={116700}
                        image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"
                        rating={ 5}/>
                    <Product
                        key={1023445675354323}
                        id={ 1023445675354323}
                        title="Apple AirPods with Wireless Charging Case"
                        price={15000}
                        image="https://images-na.ssl-images-amazon.com/images/I/71IPFP9WJIL._SL1500_.jpg"
                        rating={5} />
                    <Product
                        key={102344567523}
                        id={ 102344567523}
                        title="New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model, 8th Generation)"
                        price={29900}
                        image="https://images-na.ssl-images-amazon.com/images/I/71ZXj1QEE0L._SL1500_.jpg"
                        rating={ 5}/>
                </div>
                <h1 style={{marginLeft:"30px"}}>Deal of the Day</h1>
                <div className="home__row">
                    <Product
                        key={10234456545}
                        id={ 10234456545}
                        title="LG 25-inch (63.5 cm) UltraWide Multitasking Monitor with Full HD  (2560 x 1080) IPS Panel, HDMI Port, AMD Freesync - 25UM58 (Black)"
                        price={13391}
                        image="https://images-na.ssl-images-amazon.com/images/I/81pv0g8bQhL._SL1500_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        key={1023445655}
                        id={ 1023445655}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
                        rating={0}
                    />
                </div>
            </div>
        </div>
    )
}



export default Home
