import "./Cards.css";

import Card from "../Card/Card";

export default function Cards({ products }) {
  return (
    <>
      <h2 className="cards__title">Рекомендации для вас</h2>
      <div className="cards__list">
        {products.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            price={card.price}
            address={card.address}
            date={card.date}
            imagePath={card.imagePath}
          />
        ))}
      </div>
    </>
  );
}
