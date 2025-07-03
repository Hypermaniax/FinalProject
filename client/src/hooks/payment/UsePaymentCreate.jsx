import { useEffect, useState } from "react";

export default function UsePaymentCreate() {
  const [createPayment, setCreatePayment] = useState();
  const [bookingdata, setbookingData] = useState();
  const [selectedMethod, setSelectedMethod] = useState();

  // useEffect(() => {
  //   const fetch = async () => {};
  //   fetch();
  // }, []);

  function calculateDate() {
    const diffTime =
      new Date(bookingdata?.checkOut) - new Date(bookingdata?.checkIn);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return { diffDays };
  }
  const { diffDays } = calculateDate();
  function calculate() {
    const raw = parseInt(bookingdata?.totalPrice);
    const ppn = raw * 0.12;
    const total = raw * diffDays + ppn + 105000;
    const tax = ppn + 105000;
    return {
      ppn: ppn.toLocaleString("id-ID"),
      total: total.toLocaleString("id-ID"),
      tax: tax.toLocaleString("id-ID"),
    };
  }

  const { ppn, total, tax } = calculate();
  const obj = {
    ppn,
    total,
    tax,
    diffDays,
  };
  return { setbookingData, setSelectedMethod, obj };
}
