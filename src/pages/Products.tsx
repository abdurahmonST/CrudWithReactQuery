import { useNavigate } from "react-router";
import { useAllProducts } from "../hooks/useAllProducts";
import type { ProductType } from "../services/fakeStore";

const Products = () => {
  const { data = [], isLoading } = useAllProducts();
  const navigate = useNavigate();

  if (isLoading) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product: ProductType) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-3">{product.description || "No description"}</p>
            <p className="mt-4 text-right text-amber-600 font-bold">${product.price?.toFixed(2) || '0.00'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
