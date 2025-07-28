import { useParams } from "react-router-dom";
import { useOneProduct } from "../hooks/useAllProducts";
import type { ProductType } from "../services/fakeStore";

const ProductDetail = () => {
  const { id } = useParams();
  const productId = id ? Number(id) : undefined;
  const { data: product, isLoading } = useOneProduct(productId);

  if (isLoading) return <div style={{ padding: 24 }}>Loading...</div>;
  if (!product) return <div style={{ padding: 24 }}>Product not found.</div>;

  const p = product as ProductType;

  return (
    <div style={{ padding: 24, maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>{p.title}</h1>
      <p style={{ marginBottom: 16 }}>{p.description}</p>
      <p style={{ color: "#d97706", fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>${p.price}</p>
      {p.image && (
        <img
          src={p.image}
          alt={p.title}
          style={{ width: "100%", maxHeight: 400, objectFit: "contain", marginTop: 16 }}
        />
      )}
    </div>
  );
};

export default ProductDetail;
