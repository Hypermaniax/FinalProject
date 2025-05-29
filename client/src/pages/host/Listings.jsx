import { CircleUserRound } from "lucide-react";
import ListingCard from "../../ui/ListingCard";
import UseListing from "../../hooks/UseListing";
import NewListing from "../../ui/NewListing";
import { useState } from "react";
const dummy = [
  {
    title: "Bamboo Villa",
    status: "Deactive",
    address: "Jl. Ubud Raya No.5",
    facilities: ["Pool", "Wifi", "Kitchen"],
    bedrooms: 3,
    image: "bamboo-villa.jpg",
  },
  {
    title: "Sky Apartment",
    status: "Active",
    address: "Jl. Ubud Raya No.5",
    facilities: ["Pool", "Wifi", "Kitchen"],
    bedrooms: 3,
    image: "sky-apartment.jpg",
  },
  {
    title: "Villa Ubud",
    status: "Active",
    address: "Jl. Ubud Raya No.5",
    facilities: ["Pool", "Wifi", "Kitchen"],
    bedrooms: 3,
    image: "villa-ubud.jpg",
  },
  {
    title: "Kuta Loft",
    status: "Active",
    address: "Jl. Ubud Raya No.5",
    facilities: ["Pool", "Wifi", "Kitchen"],
    bedrooms: 3,
    image: "kuta-loft.jpg",
  },
  {
    title: "Jungle Retreat",
    status: "Active",
    address: "Jl. Ubud Raya No.5",
    facilities: ["Pool", "Wifi", "Kitchen"],
    bedrooms: 3,
    image: "jungle-retreat.jpg",
  },
  {
    title: "Beach House",
    status: "Active",
    address: "Jl. Ubud Raya No.5",
    facilities: ["Pool", "Wifi", "Kitchen"],
    bedrooms: 3,
    image: "beach-house.jpg",
  },
];

export default function Listings() {
  const [newListing, setNewListing] = useState(false);

  const { listingDashboard } = UseListing();

  return (
    <div className="text-black">
      {newListing ? (
        <NewListing />
      ) : (
        <>
          <div className="flex font-bold mb-5 justify-between ">
            <h1 className="text-2xl">Manage Listings</h1>
            <CircleUserRound />
          </div>
          <section className="grid gap-6 grid-cols-4">
            <ListingCard dummy={dummy} data={listingDashboard} />
          </section>
          <div className=" text-center my-6 ">
            <button
              onClick={() => setNewListing(!newListing)}
              className="bg-pink px-5 py-0.5 rounded-lg"
            >
              Add New Listing
            </button>
          </div>
        </>
      )}
    </div>
  );
}
