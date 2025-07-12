import axios from "axios";

export const createPayment = async (data) => {
  const token = localStorage.getItem("Token");

  const payment = await axios.post(
    `${import.meta.env.VITE_API_URL_PAYMENT_CREATE}`,
    data,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return payment.data;
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
  return payment.data.data[0].payments;
};

export const getPaymentById = async (id) => {
  const token = localStorage.getItem("Token");
  const payment = await axios.get(
    `${import.meta.env.VITE_API_URL_SELECTED_BOOKING}/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return payment.data;
};
