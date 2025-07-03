import axios from "axios";
import { listingDelete } from "../../services/listing";

export default function UseDeleteListing() {
  const handleDelete = async (id) => {
    try {
      await listingDelete(id);
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return { handleDelete };
}
