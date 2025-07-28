import { Route, Routes } from "react-router";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Users from "./pages/Users";
import { useNavigate } from "react-router";

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <button style={{margin: 16, padding: 8}} onClick={() => navigate("/users")}>Users CRUD sahifasi</button>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};

export default App;
