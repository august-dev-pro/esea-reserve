"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

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
