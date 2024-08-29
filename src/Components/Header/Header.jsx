import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="/" className="header-logo">
            <img src="/images/logo.svg" alt="logo" />
            <span>Abito</span>
          </a>
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
