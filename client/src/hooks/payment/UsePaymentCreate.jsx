import { useContext, useEffect, useState } from "react";
import { createPayment, getPaymentById } from "../../services/payment";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../store/AuthContext";

export default function UsePaymentCreate(id) {
  const [dataPayment, setDataPayment] = useState();
  const { user } = useContext(AuthContext);
  console.log();
  const [data, setData] = useState({
    amount: Number,
    duration: Number,
    bookingId: id,
    title: String,
    phone: "081372375649",
    email: String,
    name: String,
    price: Number,
    taxAmount:Number,
    feeAmount:Number
  });
  // console.log(dataPayment)
  // console.log(data)
  const navigate = useNavigate();
  useEffect(() => {
    if (dataPayment?.totalPrice) {
      setData((prev) => ({
        ...prev,
        amount: dataPayment.totalPrice,
        title: dataPayment.listingId.title,
        email: user.email,
        first_name: user.name,
        duration: dataPayment.duration,
        price : dataPayment.listingId.price,
        taxAmount:dataPayment.taxAmount,
        feeAmount:dataPayment.feeAmount
      }));
    }
  }, [dataPayment]);

  const fetch = async () => {
    try {
      if (!id) return;
      const payment = await getPaymentById(id);
      return setDataPayment(payment);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCreate = async () => {
    try {
      console.log(data);
      const req = await createPayment(data);
      console.log(req);
      toast.success(req.message);
      return window.location.href = req.data.redirect_url;
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { dataPayment, setData, data, handleCreate };
}
