import React from "react";
import './Card.css';

function Card({title,imageUrl,body}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl}></img>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>Say hello to fast, reliable internet</h3>
                </div>
                <div className="card-body">
                    <p>An affordable and reliable internet service with prepaid, no-hassle billing.</p>
                    <p>#FastInternet</p>
                    <p>#be where you want to be </p>
                </div>
            </div>
            <div className="btn">
                <button>
                    <a>
                        View more
                    </a>
                </button>
            </div>
        </div>
    )
}
export default Card;