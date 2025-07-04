import { useEffect, useState } from "react";
import { createPayment, getPaymentById } from "../../services/payment";
import { data } from "react-router-dom";
import { toast } from "react-toastify";

export default function UsePaymentCreate(id) {
  const [dataPayment, setDataPayment] = useState();
  const [selectedMethod, setSelectedMethod] = useState();

  const fetch = async () => {
    try {
      if (!id) return;
      const payment = await getPaymentById(id);
      setDataPayment(payment);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleCreate = useCallback(async () => {
    try {
      const req = await createPayment()
    } catch (error) {
      
    }
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return { setSelectedMethod, dataPayment };
}
