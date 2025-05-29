import { Star } from "lucide-react";
import damn from "../assets/damn.png";
export default function Wishlist() {
  return (
    <>
      <h1 className="font-bold text-2xl">My Wishlist</h1>
      {/* for looping lisitng */}
      <div className="grid gap-5 grid-cols-2 mt-10">
        <div className="bg-white rounded-xl grid grid-cols-2 gap-2 p-5">
          <div className="space-y-5 col-span-1 items-center text-center w-full  mx-auto ">
            <img
              src={damn}
              alt={damn}
              className="h-40 rounded-lg w-40 mx-auto object-center"
            />
            <p className="font-bold text-lg">Rp2000.000</p>
          </div>
          <div className=" text-left  w-full">
            <h1 className="font-bold text-xl ">Rumah Om surya</h1>
            <div className="flex text-gray-500 items-center">
              <Star /> <p>4.6 (2341)</p>
            </div>
            <p className="text-gray-500">Boyolali,Jawa Tengah</p>
            <p>Rent House</p>
            <p>Hosted By Surya</p>
          </div>
        </div>
        {/* for looping lisitng */}

        
      </div>
    </>
  );
}
