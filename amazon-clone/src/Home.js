import React from 'react'
import "./Home.css"
import Product from './Product'
import SimpleImageSlider from "react-simple-image-slider";
function Home() {

    const images = [
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Household_1500x600_V2._CB670004437_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/May21/fresh-pc_021x._CB670987717_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/1500X600._CB668498028_.png" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Javed/GTM/HeroPC_1500x600_CBCC._CB669049594_.jpg" },
    ];

    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image" src="" />
                
                <div className="home__row">
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
                        title="RiaTech Large Size (600mm x 300mm x 2mm) Extended Gaming Mouse Pad with Stitched Embroidery Edge, Premium-Textured Keyboard Desk Mat, Non-Slip Rubber Base Mousepad for Laptop/Computer- Black with Blue Border"
                        price={329}
                        image="https://images-na.ssl-images-amazon.com/images/I/91UMAY5GRNL._SL1500_.jpg"
                        rating={ 4}/>
                    <Product
                        key={1023445675}
                        id={ 1023445675}
                        title="Mellifluous Reversible Super Soft Velvet Round Cat Dog Pet Bed Diameter 61 cms Height 15 cms S (Small, Brown Cream)"
                        price={439}
                        image="https://images-na.ssl-images-amazon.com/images/I/71YMD-eEy6L._SL1500_.jpg"
                        rating={ 4}/>
                </div>
                <div className="home__row">
                    <Product
                        key={1023445655}
                        id={ 1023445655}
                        // title="Mellifluous Reversible Super Soft Velvet Round Cat Dog Pet Bed Diameter 61 cms Height 15 cms S (Small, Brown Cream)"
                        // price={439}
                        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
                        rating={0}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
