import axios from "axios";
import { Product } from "../types/Product";

const API_URL = "/api/products";

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get<Product[]>(API_URL);
  return res.data;
};
