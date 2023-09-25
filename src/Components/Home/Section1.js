import React from "react";
import './Home.css';

const Section1 = () => {
    return (
      <div className="Section1 section h-screen flex flex-row">
          <div className="leftSection1 w-180 flex flex-col pt-20 ">
                <h1 className="font-semibold text-6xl text-left ml-16">Fill.</h1>
                <h1 id="red" className="font-semibold text-6xl text-left ml-16 my-3">Generate.</h1>
                <h1 className="font-semibold text-6xl text-left ml-16">Share.</h1>
                <h3 className="text-xl font-light ml-14 my-3">Share your vehicle details with ease by filling them a single time.</h3>
                <a href="/Qr" class="btn btn-danger w-36 ml-14 flex justify-center" role="button">Generate QR<span class="material-symbols-outlined">
arrow_forward
</span></a>
          </div>
          <div className="rightSection1 pt-20">
                <img src="https://linky.se/wp-content/uploads/2022/11/linky-qr-1-1.svg" alt="vehicle-qr" />
          </div>
      </div>
    )
  }
  
  export default Section1