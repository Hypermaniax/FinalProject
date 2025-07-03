import { Heart, Star } from "lucide-react";
import damn from "../assets/spongebob.jpeg";
import UseGetWishlist from "../hooks/whislist/UseGetWhislist";
import Loading from "./Loading";
import { motion } from "framer-motion";

export default function Wishlist() {
  const { wishList, handleRemove } = UseGetWishlist();

  return (
    <>
      <h1 className="font-bold text-2xl">My Wishlist</h1>

      {/* for looping lisitng */}
      <div className="grid gap-5 grid-cols-2 mt-10">
        {!wishList ? (
          <Loading />
        ) : (
          wishList.map((list, index) => (
            <motion.div initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.07 }} key={index}>
              <div className="bg-white relative  rounded-xl flex justify-between p-3 pr-8">
                <div className="text-center w-full">
                  <img
                    src={`${import.meta.env.VITE_API_URL_LISTING_IMG}${
                      list.listingId.imgUrl[0]
                    }`}
                    alt={damn}
                    className="h-48  rounded-lg w-48 mx-auto object-center"
                  />
                </div>
                <div className="w-full space-y-1">
                  <Heart
                    className="absolute text-pink cursor-pointer right-4"
                    onClick={() => handleRemove(list._id)}
                    size={30}
                  />
                  <h1 className="font-bold text-xl ">{list.listingId.title}</h1>
                  <div className="flex text-gray-500 items-center">
                    <Star className="text-pink" /> <p>4.6 (2341)</p>
                  </div>
                  <p className="text-gray-500">
                    {list.listingId.location.city},
                    {list.listingId.location.province}
                  </p>
                  <p>{list.listingId.category}</p>
                  {/* <p>Hosted By Surya</p> */}
                  <p className="font-bold text-end absolute bottom-4 right-4  text-lg">
                    Rp{list.listingId.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
      {/* for looping lisitng */}
    </>
  );
}
