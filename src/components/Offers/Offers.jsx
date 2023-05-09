import React, { useEffect, useState } from "react";
import axios from "axios";


import "./homeOffers.css";

export const Offers = () => {
  const [limit, setLimit] = useState(5);
  const [offers,setOffers] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [isError,setIsError] = useState(false);


  const handleMoreOffers = () => {
    if (offers.length >= limit) {
      setLimit((prev) => prev + 5);
    }
  };

  const getOffers = (limit) => {
    setIsLoading(true);
    axios
    .get(`https://makemytrip-api-data.onrender.com/giftcards?_limit=${limit}`)
    .then((res) => {
      // console.log(res.data)
      setOffers(res.data);
      setIsLoading(false);
      
    })
    .catch((err) => {
      setIsError(true);
    });

  }

  useEffect(() => {
    getOffers(limit);
  }, [limit]);

  return (
    <div className="homeOffers">
      <div className="offerCard">
        <div className="offerHead">
          <h1>Offers</h1>
          <div className="allTabs">
            <div className="offerTabs active">
              <h2>ALL OFFERS</h2>
            </div>
            <div className="offerTabs">
              <h2>BANK OFFERS</h2>
            </div>
            <div className="offerTabs">
              <h2>FLIGHTS</h2>
            </div>
            <div className="offerTabs">
              <h2>HOTEL</h2>
            </div>
            <div className="offerTabs">
              <h2>HOLIDAY</h2>
            </div>
            <div className="offerTabs">
              <h2>TRAINS</h2>
            </div>
            <div className="offerTabs">
              <h2>CABS</h2>
            </div>
          </div>
        </div>

        <div className="MaincardOfferBx">
          {offers.map((ele, i) => (
            <div key={i} className="cards">
              <img src={ele.image} alt="" />
              <div className="offerData">
                <p>DOM FLIGHT</p>
                <h1>{ele.title}</h1>
                <p></p>
                <button>Book Now</button>
              </div>
            </div>
          ))}
        </div>
        {isLoading ? <h1>Please wait...</h1> : ""}
        <div className="offerBtnBx">
          {limit > offers.length ? (
            ""
          ) : (
            <button onClick={handleMoreOffers}>More</button>
          )}
        </div>
      </div>
      {/*  */}
      <div className="offerDonwloadApp">
        <div className="donwloadhead">
          <h1>Donwload App Now !</h1>
          <p>
            Get India's #1 travel super app, join 100 Million+ happy travellers!
          </p>
        </div>
        <div className="donwloadBox">
          {/* <p>Use code WELCOMEMMT and get upto Rs 1200 off on your first domestic flight booking</p> */}
          <div className="downloadInputbx">
            <input
              style={{
                width: "50px",
                textAlign: "center",
                padding: "10px 0",
                borderRight: "none",
              }}
              readOnly
              type="text"
              value="+91"
            />
            <input
              placeholder="Enter Your Mobile Number"
              type="number"
              style={{ borderLeft: "none" }}
            />
            <button>GET APP LINK</button>
          </div>

          <div className="donwloadButtons">
            <p>MORE WAY TO GET THE APP</p>
            <button>
              {" "}
              <i className="fa fa-play"></i> Google Play
            </button>
            <button>
              {" "}
              <i className="fa fa-apple"></i> Apple Store
            </button>
          </div>
          <div className="downloadQr">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi/QRCodeDT_QR-code.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
