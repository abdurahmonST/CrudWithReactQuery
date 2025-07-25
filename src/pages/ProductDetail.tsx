import { useParams } from "react-router";
import { useOneProduct } from "../hooks/useAllProducts";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const { data: product, isLoading } = useOneProduct(productId);

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-amber-600 text-xl font-bold mb-2">${product.price}</p>
      {/* Agar image bo‘lsa */}
      {product.image && (
        <img src={product.image} alt={product.title} className="w-full max-h-[400px] object-contain mt-4" />
      )}
    </div>
  );
};

export default ProductDetail;
