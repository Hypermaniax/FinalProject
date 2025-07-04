import axios from "axios";

export const listingDetail = async (id) => {
  const listing = await axios.get(
    `${import.meta.env.VITE_API_URL_LISTING_SELECTED}/${id}`
  );
  return listing.data;
};

export const listingAdd = async (listingData) => {
  const formData = new FormData();
  const token = localStorage.getItem("Token");
  formData.append("form", JSON.stringify({ ...listingData }));

  listingData.imgUrl.forEach((file, index) => {
    formData.append("listingImg", file);
  });

  const listing = await axios.post(
    import.meta.env.VITE_API_URL_LISTING_CREATE,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return listing;
};

export const listingHostByid = async (id) => {
  const token = localStorage.getItem("Token");
  const listing = await axios.get(
    `${import.meta.env.VITE_API_URL_LISTING_HOST}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return listing.data.data[0].listings;
};

export const listingPagination = async (currentPage, filter) => {
  const listing = await axios.get(
    `${import.meta.env.VITE_API_URL_PAGINATION}`,
    {
      params: {
        page: currentPage,
        limit: 16,
        city: filter,
      },
    }
  );
  return listing.data.data;
};

export const removeListingGuest = async (id) => {
  const token = localStorage.getItem("Token");

  const listing = await axios.delete(
    `${import.meta.env.VITE_API_URL_SELECTED_BOOKING}/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return listing
};

export const listingDelete = async (id) => {
  const listing = await axios.delete(
    `${import.meta.env.VITE_API_URL_LISTING_DELETE}${id}`
  );
  return listing;
};
