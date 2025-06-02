import { CircleUserRound } from "lucide-react";
import ListingCard from "../../ui/ListingCard";
import UseListing from "../../hooks/UseListing";
import NewListing from "../../ui/NewListing";
import useToggle from "../../hooks/UseToggle";

export default function Listings() {
  const newListing = useToggle();
  const { listingDashboard } = UseListing();

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
