import axios from "axios";

export const addWishList = async (id) => {
  const token = localStorage.getItem("Token");
  const wisthList = await axios.post(
    import.meta.env.VITE_API_URL_CREATE_WHISLIST,
    { id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return wisthList.data.message;
};

export const removeWishList = async (id) => {
  const token = localStorage.getItem("Token");
  const wishList = await axios.delete(
    `${import.meta.env.VITE_API_URL_REMOVE_WHISLIST}/${id}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return wishList.data.message
};

export const getWishList = async () => {
  const token = localStorage.getItem("Token");
  const wisthList = await axios.get(
    import.meta.env.VITE_API_URL_GUEST_WISHLIST,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(wisthList.data.data)
  return wisthList.data.data[0].wishlists;
};
