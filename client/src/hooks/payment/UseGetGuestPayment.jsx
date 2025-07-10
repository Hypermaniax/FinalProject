import { useState,useCallback,useEffect } from "react";
import { getPayment } from "../../services/payment";

export default function UseGetGuestPayment() {
  const [status, setStatus] = useState("pending");
  const [payment, setPayment] = useState();

  useEffect(() => {
    const fetch = async () => {
      const req = await getPayment(status);
      setPayment(req);
    };
    fetch();
  }, [status]);

  const handleSelectStatus = useCallback((currentStatus) => {
    setStatus(currentStatus);
  }, []);

  return { payment,handleSelectStatus,status };
}
