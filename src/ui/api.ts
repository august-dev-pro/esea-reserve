// api.js
// api.js
export const API_URL =
  "https://mangodb-ecommerce-app-api-production.up.railway.app/api/v1/product";

// api.js
export const getProducts = async (): Promise<any[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const result = await response.json();
  return result.data || []; // Extrait les produits de la propriété 'data'
};
