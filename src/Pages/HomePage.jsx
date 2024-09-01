import { useOutletContext } from "react-router-dom";

import Cards from "../Components/Cards/Cards";

export default function HomePage() {
  const { products } = useOutletContext();

  return (
    <div className="content-main">
      <Cards products={products} />
    </div>
  );
}
