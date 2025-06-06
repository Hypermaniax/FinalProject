import axios from "axios";
import { useEffect, useState } from "react";

export default function UseBookings() {
  const [addBooking, setBookings] = useState();

  useEffect(()=>{
    const fetch = async () => {
      const req = await axios()
    }
  },[addBooking])

}
