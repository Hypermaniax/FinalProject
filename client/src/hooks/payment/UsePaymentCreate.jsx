import { useEffect, useState } from "react";
import { getPaymentById } from "../../services/payment";
import { data } from "react-router-dom";

export default function UsePaymentCreate(id) {
  const [dataPayment, setDataPayment] = useState();
  const [selectedMethod, setSelectedMethod] = useState();

  const fetch = async () => {
    try {
      if (!id) return;
      const payment = await getPaymentById(id);
      setDataPayment(payment);
      
    } catch (error) {

    }
  };
  
  useEffect(() => {
    fetch();
  }, []);

  return {  setSelectedMethod,dataPayment };
}
