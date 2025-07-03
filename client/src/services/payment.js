import axios from "axios";

export const createPayment = async () => {
  const payment = await axios.post(import.meta.env.VITE_API_URL_PAYMENT_CREATE);
};

export const getPayment = async (status) => {
  const token = localStorage.getItem("Token");

  const payment = await axios.get(
    `${import.meta.env.VITE_API_URL_GUEST_PAYMENT}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      params: { statusFilter: status },
    }
  );

  return payment;
};
