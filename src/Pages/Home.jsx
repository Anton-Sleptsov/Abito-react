import { Header } from "../Components/Header/Header";
import { Card } from "../Components/Card/Card";
import { Service } from "../Components/Service/Service";

import { cardArray } from "../constants";
import { serviceArray } from "../constants";

export const Home = () => {
  return (
    <>
      <Header />

      <main className="main">
        <section className="search">
          <div className="container">
            <div className="search-inner">
              <input type="text" />
              <button className="btn btn-prime search-btn">
                <img
                  className="search-btn__icon"
                  src="/images/search.svg"
                  alt="search"
                />
                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="content-inner">
              <div className="content-main">
                <h2 className="content-main__title">Рекомендации для вас</h2>
                <div className="content-main__list">
                  {cardArray.map((card) => (
                    <Card
                      key={card.id}
                      title={card.title}
                      price={card.price}
                      address={card.address}
                      date={card.date}
                      imagePath={card.imagePath}
                    />
                  ))}
                </div>
              </div>
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
      </main>
    </>
  );
};
