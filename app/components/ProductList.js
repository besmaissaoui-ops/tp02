import ProductCard from "./ProductCard";

export default function ProductList({ produits }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {produits.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
