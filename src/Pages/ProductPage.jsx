import { useParams, useOutletContext } from "react-router-dom";

import Product from "../Components/Product/Product";

export default function ProductPage() {
  const { id } = useParams();
  const { products } = useOutletContext();
  const findProduct = products.find((p) => p.id === id - 0);

  return (
    <>
      {findProduct ? (
        <div className="content-product">
          <Product findProduct={findProduct} />
        </div>
      ) : (
        <h2>Товар не найден!</h2>
      )}
    </>
  );
}
