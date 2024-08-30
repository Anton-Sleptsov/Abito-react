import { useParams, useOutletContext } from "react-router-dom";
import { Service } from "../Components/Service/Service";

import { serviceArray } from "../constants";

export const Product = () => {
  const { id } = useParams();
  const {products} = useOutletContext();
  const findProduct = products.find((p) => p.id === id - 0);

  return (
    <section className="content">
      <div className="container">
        <div className="content-inner">
          {findProduct ? (
            <div className="content-product">
              <div className="content-product__left">
                <h2 className="content-product__title">{findProduct.title}</h2>
                <img
                  className="content-product__image"
                  src={findProduct.imagePath}
                  alt="product"
                />
                <p className="content-product__text">{findProduct.desc}</p>
              </div>
              <div className="content-product__right">
                <h2 className="content-product__price">{findProduct.price}</h2>
                <button className="btn btn-prime btn-large">
                  Показать телефон
                </button>
              </div>
            </div>
          ) : (
            <h2>Товар не найден!</h2>
          )}

          <div className="content-side">
            <h3 className="content-side__title">Сервисы и услуги</h3>

            <div className="content-side__box">
              <div className="content-side__list">
                {serviceArray.map((service) => (
                  <Service
                    key={service.id}
                    title={service.title}
                    text={service.text}
                    imagePath={service.imagePath}
                  />
                ))}
              </div>

              <div className="content-side__footer">
                <p className="content-side__footer-item">
                  © ООО «Абито», 2011–2021
                </p>
                <a href="#!" className="content-side__footer-item">
                  Политика конфиденциальности
                </a>
                <a href="#!" className="content-side__footer-item">
                  Обработка данных
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
