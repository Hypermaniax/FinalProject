import { useEffect, useState } from "react";
import { getWishList, removeWishList } from "../../services/wishList";
import { toast } from "react-toastify";
import { useCallback } from "react";

export default function UseGetWishlist() {
  const [wishList, setWishList] = useState();
  const [loading, setLoading] = useState(false);

  const fetchWishtList = useCallback(async () => {
    try {
      setLoading(true);
      const req = await getWishList();
      setWishList(req.map((item) => item));
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleRemove = useCallback(async (id) => {
    try {
      const req = await removeWishList(id);
      toast.success(req);
      fetchWishtList(); // refresh otomatis
    } catch (error) {
      toast.error(error);
    }
  }, [fetchWishtList]);

  useEffect(() => {
    fetchWishtList();
  }, [fetchWishtList]);



  return { wishList, loading, handleRemove };
}
