import { useCallback, useEffect, useState } from "react";
import { addWishList } from "../../services/wishList";
import { toast } from "react-toastify";

export default function UseAddWhistlist() {
  const [whistlists, setWhislists] = useState();

  useEffect(() => {
    if (!whistlists) return;
    const fetch = async () => {
      try {
        const wishtList = await addWishList(whistlists);
        console.log(wishtList);
        toast.success(wishtList);
      } catch (error) {}
    };
    fetch();
  }, [whistlists]);

  const handleClick = useCallback((id) => {
    setWhislists(id);
  }, []);

  return { handleClick };
}
