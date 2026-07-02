import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
export default async function Products() {
  const res = await fetch('https://fakestoreapi.com');
  
  if (!res.ok) {
    return <p className="text-center text-red-500">Erreur lors du chargement des produits.</p>;
  }
  
  const products = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-center text-3xl font-bold mb-8">Produits</h1>
      {/* Utilisation du composant avec l'argument attendu */}
      <ProductList produits={products} />
    </div>
  );
}