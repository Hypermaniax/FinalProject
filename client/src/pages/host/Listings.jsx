import { CircleUserRound } from "lucide-react";
import ListingCard from "../../ui/ListingCard";
import UseListing from "../../hooks/UseListing";
import NewListing from "../../ui/NewListing";
import { useState } from "react";
import DeletePopup from "../../ui/DeletePopup";
import useToggle from "../../hooks/UseToggle";

export default function Listings() {
  // const [newListing, setNewListing] = useState(false);
  const deletePopup = useToggle();
  const newListing = useToggle();

  // const [onDelete, setOnDelete] = useState(false);
  const { listingDashboard } = UseListing();

  return (
    <div className="text-black">
      {deletePopup.state && <DeletePopup handleClose={deletePopup.toggle} />}
      {newListing.state && <NewListing handleClose={newListing.toggle} />}
      <div className="flex font-bold mb-5 justify-between ">
        <h1 className="text-2xl">Manage Listings</h1>
        <CircleUserRound />
      </div>
      <section className="grid gap-6 grid-cols-4">
        <ListingCard show={deletePopup.toggle} data={listingDashboard} />
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
