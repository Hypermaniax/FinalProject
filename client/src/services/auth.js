import axios from "axios";

export const login = async (formData) => {
  const response = await axios.post(import.meta.env.VITE_API_URL_LOGIN, formData);  
  return response.data;
};

export const register = async (formData) => {
  const response = await axios.post(import.meta.env.VITE_API_URL_REGISTER, formData);
  return response;
};
