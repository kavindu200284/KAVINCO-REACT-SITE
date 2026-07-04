import axios from "axios";
import { Equipment } from "../types/Equipment";


const API_URL = "https://kavinco-react-backend.onrender.com/api/equipment"

export const getEquipment = async (): Promise<Equipment[]> => {
  const res = await axios.get<Equipment[]>(API_URL);
  return res.data;
};
