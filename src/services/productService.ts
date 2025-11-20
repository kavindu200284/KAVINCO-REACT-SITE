import axios from "axios";
import { Product } from "../types/Product";

const API_URL = "http://127.0.0.1:5000/api/products";

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get<Product[]>(API_URL);
  return res.data;
};
