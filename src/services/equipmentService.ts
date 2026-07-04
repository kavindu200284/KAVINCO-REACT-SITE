import axios from "axios";
import { Equipment } from "../types/Equipment";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (window.location.hostname === "localhost" ? "http://localhost:5000" : "https://kavinco-react-backend.onrender.com");
const API_URL = `${BASE_URL}/api/equipment`;

export const getEquipment = async (): Promise<Equipment[]> => {
  const res = await axios.get<Equipment[]>(API_URL);
  return res.data;
};
