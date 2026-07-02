"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function ProductDetails() {
    
  const { id } = useParams(); // Récupère l'ID du produit depuis l'URL
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des détails du produit.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);
  if (!product) {
    return <p>Chargement des détails du produit...</p>;
  }
  return (
    <div
      className="p-6 max-w-lg mx-auto bg-
white shadow rounded"
    >
      <h1
        className="text-2xl font-bold mb-
4"
      >
        {product.title}
      </h1>

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p
        className="text-lg font-semibold

text-gray-700"
      >
        ${product.price}
      </p>

      <p
        className="text-gray-500 mt-
4"
      >
        {product.description}
      </p>
    </div>
  );
}
