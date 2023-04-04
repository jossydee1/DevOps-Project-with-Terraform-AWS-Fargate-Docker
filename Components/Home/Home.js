import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import AmazonBanner from "./AmazonBanner.jpg";
import Monitor from "./Monitor.jpg";
import Samsung_SSD from "./Samsung SSD.jpg";
import Seagate from "./Seagate.jpg";
import Roku from "./Roku Express.jpg";
import Samsung_EVO from "./Samsung EVO.jpg";
import Acer from "./Acer.jpg";
import Acer_Aspire from "./Acer Aspire.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="contactMe">
          <p>
            Hi, I am Damilare, a web developer. Thanks for visiting my Amazon
            website. This is one of my projects
          </p>
          <p>
            You can contact me on my WhatsApp,
            <a href="https://wa.me/2348069762478">+23480 6976 2478</a>. I am
            always available to work with you.
          </p>
        </div>
        <img className="home__image" src={AmazonBanner} alt="" />

        <div className="home__row">
          <Product
            id="34265837"
            title="HP 24mh FHD Monitor"
            image={Monitor}
            price={174.99}
            rating={5}
          />
          <Product
            id="46372819"
            title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
            image={Samsung_SSD}
            price={99.99}
            rating={5}
          />
          <Product
            id="45331756"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – 
            USB 3.0 for PC, Mac, PS4, & Xbox - 1-year Rescue Service (STGX2000400)"
            image={Seagate}
            price={62.49}
            rating={4}
          />
          <Product
            id="53427554"
            title="Roku Express HD Streaming Media Player"
            image={Roku}
            price={29.99}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="53672718"
            title="Samsung Electronics EVO Select 256GB MicroSDXC UHS-I U3 
            100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME256HA)"
            image={Samsung_EVO}
            price={24.99}
            rating={5}
          />
          <Product
            id="53726367"
            title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
            image={Acer}
            price={93.99}
            rating={4}
          />
          <Product
            id="34257645"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, 
            AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit"
            image={Acer_Aspire}
            price={364.99}
            rating={4}
          />
        </div>

        {/*<div className="home__row">
          <Product
            title=""
            image={}
            price=""
            rating={}
          />
             
          <Product
            title=""
            image={}
            price=""
            rating={}
          />      
          <Product
            title=""
            image={}
            price=""
            rating={}
          />      
          <Product
            title=""
            image={}
            price=""
            rating={}
          />      
        </div>
        <div className="home__row">
          <Product
            title=""
            image={}
            price=""
            rating={}
          />      
          <Product
            title=""
            image={}
            price=""
            rating={}
          />      
        </div>*/}
      </div>
    </div>
  );
}

export default Home;
