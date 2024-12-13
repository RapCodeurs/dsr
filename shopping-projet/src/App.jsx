import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import CartListPage from "./pages/cartList";
import ProductListPage from "./pages/productList";
import ProductDetailsPage from "./pages/productDetails";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartListPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
