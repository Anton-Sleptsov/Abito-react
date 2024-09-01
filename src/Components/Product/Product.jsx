import "./Product.css";

export default function Product({ findProduct }) {
  return (
    <>
      <div className="product__left">
        <h2 className="product__title">{findProduct.title}</h2>
        <img
          className="product__image"
          src={findProduct.imagePath}
          alt="product"
        />
        <p className="product__text">{findProduct.desc}</p>
      </div>
      <div className="product__right">
        <h2 className="product__price">{findProduct.price}</h2>
        <button className="btn btn-prime btn-large">Показать телефон</button>
      </div>
    </>
  );
}
