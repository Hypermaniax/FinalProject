import axios from "axios";

export default function UseDeleteListing() {
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3000/delete-listing", {
        params: { id },
      });
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return { handleDelete };
}
