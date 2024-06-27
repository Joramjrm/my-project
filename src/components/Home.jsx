import React from "react";
import './Home.css';
import Card from './Card'

function Home(){

 return (
  <div className="Home">
    <div>
    <Card
      title='Card Title'
      imageUrl='src\assets\internet-cables-oceans-1552081048106-videoSixteenByNineJumbo1600-v4.png'
      body=''
      />
    </div>
    <div className="text">
      <div className="text-1">
        <h3>
        No Long term Contracts
        </h3>
        <p>
        Upgrade and Downgrade your package anytime.
        </p>
      </div>
      <div className="text-2">
        <h3>
        Impressive Speeds
        </h3>
        <p>
        Impressive ultra fast speeds with 99.99% uptime.
        </p>
      </div>
      <div className="text-3">
        <h3>
        Customer Support
        </h3>
        <p>
        We are locally deployed for professional and efficient Tech Support.
        </p>
      </div>
    </div>
    <div className="">

    </div>
</div>
 );
}

export default Home;