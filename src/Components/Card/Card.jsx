import "./Card.css";

import { Link } from "react-router-dom";

export default function Card({ id, title, price, address, date, imagePath }) {
  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card-img">
        <img src={imagePath} alt="card-img" />
      </div>
      <h5 className="card-title">{title}</h5>

      <strong className="card-price">{price}</strong>
      <div className="card-desc-box">
        <span className="card-desc">{address}</span>
        <span className="card-desc">{date}</span>
      </div>
    </Link>
  );
}
