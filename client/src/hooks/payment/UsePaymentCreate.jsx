import { useCallback, useContext, useEffect, useState } from "react";
import { createPayment, getPaymentById } from "../../services/payment";
import { toast } from "react-toastify";
import { AuthContext } from "../../store/AuthContext";
import { updateBookingDate } from "../../services/bookings";

export default function UsePaymentCreate(id) {
  const [dataPayment, setDataPayment] = useState();
  const { user } = useContext(AuthContext);
  const [booked, setBooked] = useState();

  const [data, setData] = useState({
    amount: Number,
    duration: Number,
    bookingId: id,
    title: String,
    phone: "081372375649",
    email: String,
    first_name: String,
    price: Number,
    taxAmount: Number,
    feeAmount: Number,
  });

  const [isProcessing, setIsProcessing] = useState(false);
  useEffect(() => {
    if (dataPayment?.totalPrice) {
      setData((prev) => ({
        ...prev,
        amount: dataPayment.totalPrice,
        title: dataPayment.listingId.title,
        email: user.email,
        first_name: user.name,
        duration: dataPayment.duration,
        price: dataPayment.listingId.price,
        taxAmount: dataPayment.taxAmount,
        feeAmount: dataPayment.feeAmount,
        phone: user.phone,
      }));
    }
  }, [dataPayment]);

  const fetch = async () => {
    try {
      if (!id) return;
      const payment = await getPaymentById(id);
      setBooked(payment.bookedData);
      setDataPayment(payment.data[0]);
    } catch (error) {
      toast.error(error);
    }
  };

  const updateBookings = useCallback(async (id, range) => {
    try {
      const req = await updateBookingDate(id, range);
      toast.success(req)
      return fetch()
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleCreate = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    try {
      // console.log(data)
      const req = await createPayment(data);
      toast.success(req.message);
      console.log()
      // return (window.location.href = req.data.redirect_url);
    } catch (error) {
      return toast.error(error.response.data.message);
    } finally {
      setIsProcessing(false);
    }
  };

  // Enhanced date formatting
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

  // Enhanced currency formatting
  const formatCurrency = (amount) => {
    try {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    } catch (error) {
      return `Rp ${amount?.toLocaleString("id-ID") || 0}`;
    }
  };

  const taxAndFee = dataPayment
    ? parseInt(dataPayment.taxAmount || 0) +
      parseInt(dataPayment.feeAmount || 0)
    : 0;

  useEffect(() => {
    fetch();
  }, []);

  return {
    dataPayment,
    setData,
    data,
    handleCreate,
    booked,
    formatDate,
    formatCurrency,
    isProcessing,
    setIsProcessing,
    taxAndFee,
    fetch,
    updateBookings
  };
}
