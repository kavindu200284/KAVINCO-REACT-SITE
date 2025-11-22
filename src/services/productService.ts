import axios from "axios";
import { Product } from "../types/Product";

const API_URL = "http://3.236.149.218:5000/api/products";

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get<Product[]>(API_URL);
  return res.data;
};
