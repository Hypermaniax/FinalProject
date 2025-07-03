import { CircleUserRound } from "lucide-react";
import ListingCard from "../../components/ListingCard";
import useListingHost from "../../hooks/listing/useListingHost";
import NewListing from "../../components/NewListing";
import useToggle from "../../hooks/UseToggle";

export default function Listings() {
  const newListing = useToggle();
  const { listingDashboard } = useListingHost();
  
  return (
    <div className="text-black">
      {newListing.state && <NewListing handleClose={newListing.toggle} />}
      <div className="flex font-bold mb-5 justify-between ">
        <h1 className="text-2xl">Manage Listings</h1>
        <CircleUserRound />
      </div>
      <section className="grid gap-6 grid-cols-4">
        <ListingCard data={listingDashboard} />
      </section>
      <div className=" text-center my-6 ">
        <button
          onClick={newListing.toggle}
          className="bg-pink px-5 py-0.5 rounded-lg"
        >
          Add New Listing
        </button>
      </div>
    </div>
  );
}
