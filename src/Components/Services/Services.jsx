import "./Services.css";

import Service from "../Service/Service";
import SideFooter from "../SideFooter/SideFooter";

import { serviceArray } from "../../constants";

export default function Services() {
  return (
    <>
      <h3 className="services__title">Сервисы и услуги</h3>
      <div className="services__box">
        <div className="services__list">
          {serviceArray.map((service) => (
            <Service
              key={service.id}
              title={service.title}
              text={service.text}
              imagePath={service.imagePath}
            />
          ))}
        </div>
        <SideFooter />
      </div>
    </>
  );
}
