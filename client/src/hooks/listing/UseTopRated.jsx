import { useCallback, useEffect, useState } from "react";
import { topRated } from "../../services/listing";

export default function UseTopRated() {
  const [top, setTop] = useState();

  const fetch = useCallback(async () => {
    try {
      const listing = await topRated();
      setTop(listing);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return { top };
}
