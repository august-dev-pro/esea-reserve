import { API_URL } from "./api";

export const getImageUrl = (specific: string): string => {
  // Remplace tous les backslashes (\) par des slashes (/)
  const normalizedSpecific = specific.replace(/\\/g, "/");
  return `${API_URL}/uploads/${normalizedSpecific}`;
};
