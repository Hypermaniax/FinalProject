import { Heart, Star, MapPin, Tag } from "lucide-react";
import damn from "../assets/spongebob.jpeg";
import UseGetWishlist from "../hooks/whislist/UseGetWhislist";
import Loading from "./Loading";
import { motion, AnimatePresence } from "framer-motion";

export default function Wishlist() {
  const { wishList, handleRemove, isLoading } = UseGetWishlist();

  // Check if wishlist is empty
  const isEmpty = wishList && wishList.length === 0;

  return (
    <div className="sm:mx-0 mx-5 sm:mt-0 mt-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-bold text-2xl sm:text-3xl">My Wishlist</h1>
        {wishList && wishList.length > 0 && (
          <span className="text-sm text-gray-500">
            {wishList.length} item{wishList.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Loading state */}
      {isLoading && <Loading />}

      {/* Empty state */}
      {isEmpty && (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-gray-500">
            Start adding items to your wishlist to see them here!
          </p>
        </div>
      )}

      {/* Wishlist items */}
      <AnimatePresence>
        <div className="sm:grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10 flex-col flex">
          {wishList && wishList.length > 0 &&
            wishList.map((list, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
                key={list._id} // Use unique ID instead of index
                layout
              >
                <div className="bg-white relative rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4">
                  {/* Image container */}
                  <div className="relative mb-4">
                    <img
                      src={`${import.meta.env.VITE_API_URL_LISTING_IMG}${
                        list.listingId.imgUrl[0]
                      }`}
                      alt={list.listingId.title}
                      onError={(e) => {
                        e.target.src = damn; // Fallback image
                      }}
                      className="h-48 w-full rounded-lg object-cover"
                    />
                    {/* Heart button positioned over image */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleRemove(list._id)}
                      className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    </motion.button>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h2 className="font-bold text-lg line-clamp-2 leading-tight">
                      {list.listingId.title}
                    </h2>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span>4.6</span>
                      <span className="text-gray-400">(2,341)</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {list.listingId.location.city}, {list.listingId.location.province}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Tag className="w-4 h-4" />
                      <span className="capitalize">{list.listingId.category}</span>
                    </div>

                    {/* Price */}
                    <div className="pt-2 border-t border-gray-100">
                      <p className="font-bold text-lg text-green-600">
                        Rp {list.listingId.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </AnimatePresence>
    </div>
  );
}