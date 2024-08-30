import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="header-logo">
            <img src="/images/logo.svg" alt="logo" />
            <span>Abito</span>
          </Link>
          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-prime">Подать объявление</button>
          </div>
          <div className="header-burger">
            <img src="/images/menu.svg" alt="menu" />
          </div>
        </div>
      </div>
    </header>
  );
};
