"use client";
import { getProducts } from "@/ui/api";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Erreur lors de la récupération des produits");
      }
    };

    fetchProducts();
  }, []);

  console.log("products refrech: ", products);

  return (
    <div className="section">
      {error && <div>{error}</div>}
      {products.length > 0 ? (
        products.map((product: any, index: number) => (
          <div key={index}>{JSON.stringify(product)}</div>
        ))
      ) : (
        <div>Aucun produit disponible.</div>
      )}
    </div>
  );
};

export default Page;
