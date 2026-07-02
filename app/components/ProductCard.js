"use client";

import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
const  router = useRouter();
  return (
    <div className="border rounded shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="mt-4 text-lg font-bold">{product.title}</h3>
      <p className="text-primary font-semibold">${product.price}</p>
      <button
        onClick={() => router.push(`/products/${product.id}`)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 mt-4"
      >
        Voir détails
      </button>
    </div>
  );
}
