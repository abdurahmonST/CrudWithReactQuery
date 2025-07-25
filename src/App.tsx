import { Route, Routes } from "react-router";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default App;
