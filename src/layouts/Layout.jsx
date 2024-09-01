import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import Header from "../Components/Header/Header";
import Services from "../Components/Services/Services";

import { cardArray } from "../constants";

export default function Layout() {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    setProducts(
      cardArray.filter(
        (p) =>
          p.title.toLowerCase().includes(searchText.toLowerCase()) ||
          p.address.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setProducts(cardArray);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <section className="search">
          <div className="container">
            <div className="search-inner">
              <input
                type="text"
                value={searchText}
                onChange={handleSearchText}
              />
              <Link
                to="/"
                className="btn btn-prime search-btn"
                onClick={handleSearch}
              >
                <img
                  className="search-btn__icon"
                  src="/images/search.svg"
                  alt="search"
                />
                <span className="search-btn__text">Найти</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container">
            <div className="content-inner">
              <Outlet context={{ products }} />
              <div className="content-side">
                <Services />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
