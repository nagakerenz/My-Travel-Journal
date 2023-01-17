import React from "react";
import pin from "../images/pin.png";

function Card(props) {
  return (
    <div>
      <div className="card-container">
        <img src={props.imageUrl} className="card--image" alt="landscape" />
        <div className="card-content">
          <div className="location-container">
            <h3 className="location-name">
              <img src={pin} alt="pin" /> {props.location.toUpperCase()}
            </h3>
            <a
              href={props.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="map-url"
            >
              View on Google Maps
            </a>
          </div>
          <div>
            <h2 className="card-title">{props.title}</h2>
            <h5 className="card-date">
              {props.startDate} - {props.endDate}
            </h5>
            <p className="card-description">{props.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Card;
